import faker from 'faker'

import { GithubAuthContract } from '@data/contracts'
import { GithubGetUserDTO } from '@data/dtos'

export class GithubAuthSpy implements GithubAuthContract {
  code: number
  githubAccessToken = faker.datatype.uuid()
  githubUser: GithubGetUserDTO

  async getAccessToken(code: number): Promise<string> {
    this.code = code
    return this.githubAccessToken
  }

  async getUser(code: number): Promise<GithubGetUserDTO> {
    await this.getAccessToken(code)
    this.githubUser = {
      githubId: faker.datatype.number(),
      name: faker.name.findName(),
      login: faker.internet.userName(),
      avatarUrl: faker.image.imageUrl()
    }
    return this.githubUser
  }
}
