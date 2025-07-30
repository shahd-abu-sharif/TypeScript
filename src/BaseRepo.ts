import { BaseModel , interface_repo} from './BaseModel'

// this is the base repository class
export class BaseRepository<T extends BaseModel> implements interface_repo<T> {
    protected items: T[]
    constructor(initialItems: T[] = []) {
    this.items = initialItems
  }

    // retrieve all entities
    async getAll(): Promise<T[]> {
    return this.items
  }

    // retreieve entity by id
    async getById(id: number): Promise<T | undefined> {
    return this.items.find(item => item.id === id)
  }

    
    // create new entity
    async create(item: T): Promise<T> {
    this.items.push(item)
    return item
  }


    // update entiyt based on the id number
    async update(id: number, item: Partial<T>): Promise<T | undefined> {
    const existing = this.items.find(item => item.id === id)
    if (!existing) return undefined
      
    const updatedItem = { ...existing, ...item, id }
    this.items = this.items.map(item => item.id === id ? updatedItem : item)

  return updatedItem

    
  }


    // delete entity based on id number
    async delete(id: number): Promise<boolean> {
      const lengthBefore = this.items.length;
     this.items = this.items.filter(item => item.id !== id);
      return this.items.length < lengthBefore;
  }



    async filter(query: Partial<T>): Promise<T[]> {
    return this.items.filter(item =>
      Object.entries(query).every(([key, value]) =>
        item[key as keyof T] === value
      )
    )
  }
}



