import { AuthenticateUserEntity } from '@domain/entities'

export interface AuthenticateUserUseCase {
  execute(
    authenticateParams: AuthenticateUserUseCase.Params
  ): Promise<AuthenticateUserUseCase.Result>
}

export namespace AuthenticateUserUseCase {
  export type Params = {
    code: number
  }

  export type Result = AuthenticateUserEntity
}
