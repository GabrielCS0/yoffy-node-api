import faker from 'faker'

import { UsersRepositoryContract } from '@data/contracts'
import { CreateUserDTO, UserDTO } from '@data/dtos'

export class UsersRepositorySpy implements UsersRepositoryContract {
  githubId: number
  user: UserDTO
  data: CreateUserDTO
  userId: string

  async findOneByGithubId(githubId: number): Promise<UserDTO> {
    this.githubId = githubId
    if (this.user !== null) {
      this.user = {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        githubId: faker.datatype.number(),
        avatarUrl: faker.image.imageUrl(),
        login: faker.internet.userName()
      }
    }

    return this.user
  }

  async create(data: CreateUserDTO): Promise<UserDTO> {
    this.data = data
    return {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      githubId: faker.datatype.number(),
      avatarUrl: faker.image.imageUrl(),
      login: faker.internet.userName()
    }
  }

  async findOneById(userId: string): Promise<UserDTO> {
    this.userId = userId
    return {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      githubId: faker.datatype.number(),
      avatarUrl: faker.image.imageUrl(),
      login: faker.internet.userName()
    }
  }
}
