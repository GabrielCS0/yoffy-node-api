import { GetUserDataUseCase } from '@domain/useCases'
import {
  HttpResponse,
  ControllerContract,
  serverError,
  success
} from '@presentation/contracts'

export class GetUserDataController implements ControllerContract {
  constructor(private readonly getUserData: GetUserDataUseCase) {}

  async handle({
    userId
  }: GetUserDataController.Request): Promise<HttpResponse> {
    try {
      const user = await this.getUserData.execute({ userId })

      return success(user)
    } catch (error) {
      return serverError(error)
    }
  }
}

namespace GetUserDataController {
  export type Request = {
    userId: string
  }
}
