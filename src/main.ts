import { UserRepository , CourseRepository , BookingRepository} from './all_Repos'

async function main() {
  const userRepo = new UserRepository()
  const courseRepo = new CourseRepository()
  const bookingRepo = new BookingRepository()

  // Users
  console.log(await userRepo.getAll())
  console.log(await userRepo.getById(1))
  console.log(await userRepo.create({ id: 2, name: 'Shahd', email: 'eng.shahd.abusharif@email.com' }))
  console.log(await userRepo.update(2, { name: 'Mohammed' }))
  console.log(await userRepo.delete(1))
  console.log(await userRepo.filter({ name: 'Alaa' }))

  // Courses
  console.log(await courseRepo.getAll())
  console.log(await courseRepo.getById(2))

  // Bookings
  console.log(await bookingRepo.getAll())
  console.log(await bookingRepo.filter({ userId: 2 }))
}

main()
