import { AuthenticateUserService } from '@data/services/'
import { UsersRepository } from '@infra/repositories/'
import { GithubAuth, JwtAdapter } from '@infra/utils/'
import { ControllerContract } from '@presentation/contracts/'
import { AuthenticateUserController } from '@presentation/controllers/'

export const makeAuthenticateUserController = (): ControllerContract => {
  const githubAuth = new GithubAuth()
  const repo = new UsersRepository()
  const jwtAdapter = new JwtAdapter()
  const service = new AuthenticateUserService(githubAuth, repo, jwtAdapter)
  return new AuthenticateUserController(service)
}
