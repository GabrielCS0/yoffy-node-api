import { AuthenticateUserUseCase } from '@domain/useCases'
import {
  HttpResponse,
  ControllerContract,
  serverError,
  success
} from '@presentation/contracts'

export class AuthenticateUserController implements ControllerContract {
  constructor(private readonly authenticateUser: AuthenticateUserUseCase) {}

  async handle({
    code
  }: AuthenticateUserController.Request): Promise<HttpResponse> {
    try {
      const user = await this.authenticateUser.execute({ code })

      return success(user)
    } catch (error) {
      return serverError(error)
    }
  }
}

namespace AuthenticateUserController {
  export type Request = {
    code: number
  }
}
