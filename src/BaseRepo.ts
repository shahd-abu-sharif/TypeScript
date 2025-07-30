import { BaseModel , interface_repo} from './BaseModel'

// this is the base repository class
export class BaseRepository<T extends BaseModel> implements interface_repo<T> {
    protected items: T[]
    constructor(initialItems: T[] = []) {
    this.items = initialItems
  }

    async getAll(): Promise<T[]> {
    return this.items
  }

    async getById(id: number): Promise<T | undefined> {
    return this.items.find(item => item.id === id)
  }


    async create(item: T): Promise<T> {
    this.items.push(item)
    return item
  }


    async update(id: number, item: Partial<T>): Promise<T | undefined> {
    const index = this.items.findIndex(i => i.id === id)
    if (index === -1) return undefined
    this.items[index] = { ...this.items[index], ...item }
    return this.items[index]
  }


    async delete(id: number): Promise<boolean> {
    const index = this.items.findIndex(i => i.id === id)
    if (index === -1) return false
    this.items.splice(index, 1)
    return true
  }


    async filter(query: Partial<T>): Promise<T[]> {
    return this.items.filter(item =>
      Object.entries(query).every(([key, value]) =>
        item[key as keyof T] === value
      )
    )
  }
}



