import { container } from 'tsyringe'

import { AdminsRepository } from '@modules/Admins/repositories/Admin/AdminsRepository'
import { IAdminsRepository } from '@modules/Admins/repositories/Admin/IAdminsRepository.types'
import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'
import { UsersRepository } from '@modules/Users/repositories/User/UserRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IAdminsRepository>(
  'AdminsRepository',
  AdminsRepository
)
