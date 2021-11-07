import { GetTheLast3MessagesService } from '@data/services/'
import { MessagesRepository } from '@infra/repositories/'
import { ControllerContract } from '@presentation/contracts'
import { GetTheLast3MessagesController } from '@presentation/controllers/'

export const makeGetTheLast3MessagesController = (): ControllerContract => {
  const repo = new MessagesRepository()
  const service = new GetTheLast3MessagesService(repo)
  return new GetTheLast3MessagesController(service)
}
