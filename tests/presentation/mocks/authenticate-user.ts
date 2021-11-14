import { AuthenticateUserUseCase } from '@domain/useCases'
import { mockAuthenticateUserEntity } from '@tests/domain/mocks'

export class AuthenticateUserSpy implements AuthenticateUserUseCase {
  params: AuthenticateUserUseCase.Params
  result = mockAuthenticateUserEntity()

  async execute(
    params: AuthenticateUserUseCase.Params
  ): Promise<AuthenticateUserUseCase.Result> {
    this.params = params
    return this.result
  }
}
