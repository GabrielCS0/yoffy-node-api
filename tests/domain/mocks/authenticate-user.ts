import faker from 'faker'

import { AuthenticateUserEntity } from '@domain/entities'
import { AuthenticateUserUseCase } from '@domain/useCases'

export const mockAuthenticateUserEntity = (): AuthenticateUserEntity => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  githubId: faker.datatype.number(),
  avatarUrl: faker.image.imageUrl(),
  login: faker.internet.userName(),
  accessToken: faker.datatype.uuid()
})

export const mockAuthenticateUserUseCaseParams =
  (): AuthenticateUserUseCase.Params => ({
    code: faker.datatype.number()
  })
