import { CreateMessageUseCase, Io } from '@domain/useCases'
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
    userId,
    io
  }: CreateMessageController.Request): Promise<HttpResponse> {
    try {
      const message = await this.createMessage.execute({ text, userId, io })

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
    io: Io
  }
}
