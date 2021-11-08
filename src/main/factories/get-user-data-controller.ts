import { GetUserDataService } from '@data/services/'
import { UsersRepository } from '@infra/repositories/'
import { ControllerContract } from '@presentation/contracts/'
import { GetUserDataController } from '@presentation/controllers/'

export const makeGetUserDataController = (): ControllerContract => {
  const repo = new UsersRepository()
  const service = new GetUserDataService(repo)
  return new GetUserDataController(service)
}
