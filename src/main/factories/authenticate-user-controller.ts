import { AuthenticateUserService } from '@data/services/'
import { UsersRepository } from '@infra/repositories/'
import { JwtAdapter } from '@infra/utils'
import { ControllerContract } from '@presentation/contracts/'
import { AuthenticateUserController } from '@presentation/controllers/'

export const makeAuthenticateUserController = (): ControllerContract => {
  const repo = new UsersRepository()
  const jwtAdapter = new JwtAdapter()
  const service = new AuthenticateUserService(repo, jwtAdapter)
  return new AuthenticateUserController(service)
}
