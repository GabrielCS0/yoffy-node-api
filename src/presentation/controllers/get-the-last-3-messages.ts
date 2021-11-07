import { GetTheLast3MessagesUseCase } from '@domain/useCases'
import {
  HttpResponse,
  ControllerContract,
  serverError,
  success
} from '@presentation/contracts'

export class GetTheLast3MessagesController implements ControllerContract {
  constructor(
    private readonly getTheLast3Messages: GetTheLast3MessagesUseCase
  ) {}

  async handle(): Promise<HttpResponse> {
    try {
      const messages = await this.getTheLast3Messages.execute()

      return success(messages)
    } catch (error) {
      return serverError(error)
    }
  }
}
