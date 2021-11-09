import { GithubGetUserDTO } from '@data/dtos'

export interface GithubAuthContract {
  getAccessToken(code: number): Promise<string>
  getUser(code: number): Promise<GithubGetUserDTO>
}
