import { CreateMessageUseCase } from '@domain/useCases'
import {
  HttpResponse,
  ControllerContract,
  serverError,
  success
} from '@presentation/contracts'

export class CreateMessageController implements ControllerContract {
  constructor(private readonly createMessage: CreateMessageUseCase) {}

  async handle({
    text,
    userId
  }: CreateMessageController.Request): Promise<HttpResponse> {
    try {
      const message = await this.createMessage.execute({ text, userId })

      return success(message)
    } catch (error) {
      return serverError(error)
    }
  }
}

namespace CreateMessageController {
  export type Request = {
    text: string
    userId: string
  }
}
