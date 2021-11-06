import { CreateMessageService } from '@data/services/'
import { MessagesRepository } from '@infra/repositories/'
import { ControllerContract } from '@presentation/contracts'
import { CreateMessageController } from '@presentation/controllers/'

export const makeCreateMessageController = (): ControllerContract => {
  const repo = new MessagesRepository()
  const service = new CreateMessageService(repo)
  return new CreateMessageController(service)
}
