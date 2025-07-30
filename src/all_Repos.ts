import { User , Course , Booking } from './BaseModel'
import { BaseRepository } from './BaseRepo'

// this file contains the implementation of repos ( user , course , booking)
export class UserRepository extends BaseRepository<User> {

  constructor() {

    super([
      { id: 1, name: 'Shahd', email: 'shahd@email.com' },
      { id: 2, name: 'Mariam', email: 'mariam@email.com' }
    ])

  }

}


export class CourseRepository extends BaseRepository<Course> {
  constructor() {

    super([
      { id: 1, title: 'Atomic habits', description: 'Build small habits for lasting change' },
      { id: 2, title: 'The power of habits', description: 'Explains how habits form and how to change them' }
    ])
  }

}



export class BookingRepository extends BaseRepository<Booking> {
  constructor() {

    super([
      { id: 1, userId: 1, courseId: 1, date: '2025-01-01' },
      { id: 2, userId: 2, courseId: 2, date: '2025-02-01' }
    ])
  }

}
