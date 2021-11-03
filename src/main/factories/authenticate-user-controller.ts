import { AuthenticateUserService } from '@data/services/'
import { UsersRepository } from '@infra/repositories/users'
import { ControllerContract } from '@presentation/contracts'
import { AuthenticateUserController } from '@presentation/controllers/'

export const makeAuthenticateUserController = (): ControllerContract => {
  const repo = new UsersRepository()
  const service = new AuthenticateUserService(repo)
  return new AuthenticateUserController(service)
}
