// this is base model for all entities
export interface BaseModel {

    id : number | string

}
export interface User extends BaseModel {

    name : string 
    email : string

}

export interface Course extends BaseModel {

    title : string 
    description  : string

}
export interface Booking extends BaseModel {

  userId: number
  courseId: number
  date: string

}


export interface interface_repo<T> {

  getAll(): Promise<T[]>
  getById(id: number): Promise<T | undefined>
  create(item: T): Promise<T>
  update(id: number, item: Partial<T>): Promise<T | undefined>
  delete(id: number): Promise<boolean>
  filter(query: Partial<T>): Promise<T[]>

}








