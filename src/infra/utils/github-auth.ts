import axios from 'axios'

import { GithubAuthContract } from '@data/contracts'
import { GithubGetUserDTO } from '@data/dtos'

type GithubAccessTokenResponse = {
  access_token: string
}

type GithubUserResponse = {
  id: number
  name: string
  login: string
  avatar_url: string
}

export class GithubAuth implements GithubAuthContract {
  async getAccessToken(code: number): Promise<string> {
    const url = 'https://github.com/login/oauth/access_token'

    const {
      data: { access_token: githubAccessToken }
    } = await axios.post<GithubAccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      },
      headers: {
        Accept: 'application/json'
      }
    })

    return githubAccessToken
  }

  async getUser(code: number): Promise<GithubGetUserDTO> {
    const githubAccessToken = await this.getAccessToken(code)

    const {
      data: { id: githubId, name, login, avatar_url: avatarUrl }
    } = await axios.get<GithubUserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${githubAccessToken}`
      }
    })

    return { githubId, name, login, avatarUrl }
  }
}
