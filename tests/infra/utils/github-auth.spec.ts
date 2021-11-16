import axios from 'axios'

import { GithubAuth } from '@infra/utils'

jest.mock('axios', () => ({
  async post() {
    return {
      data: { access_token: 'any-access-token' }
    }
  },

  async get() {
    return {
      data: {
        id: 123,
        name: 'any-name',
        login: 'any-login',
        avatar_url: 'any-url'
      }
    }
  }
}))

const makeSut = (): GithubAuth => {
  return new GithubAuth()
}

describe('Github Auth', () => {
  describe('Get Access Token', () => {
    test('Should call getAccessToken with correct values', async () => {
      const sut = makeSut()
      const axiosSpy = jest.spyOn(axios, 'post')
      await sut.getAccessToken(123)
      expect(axiosSpy).toHaveBeenCalledWith(
        'https://github.com/login/oauth/access_token',
        null,
        {
          params: {
            client_id: undefined,
            client_secret: undefined,
            code: 123
          },
          headers: {
            Accept: 'application/json'
          }
        }
      )
    })

    test('Should return a github access token on getAccessToken', async () => {
      const sut = makeSut()
      const githubAccessToken = await sut.getAccessToken(123)
      expect(githubAccessToken).toBe('any-access-token')
    })
  })

  describe('Get User', () => {
    test('Should call getUser with correct values', async () => {
      const sut = makeSut()
      const axiosSpy = jest.spyOn(axios, 'get')
      await sut.getUser(123)
      expect(axiosSpy).toHaveBeenCalledWith('https://api.github.com/user', {
        headers: {
          authorization: 'Bearer any-access-token'
        }
      })
    })

    test('Should return a github user on getUser', async () => {
      const sut = makeSut()
      const githubUser = await sut.getUser(123)
      expect(githubUser).toStrictEqual({
        githubId: 123,
        name: 'any-name',
        login: 'any-login',
        avatarUrl: 'any-url'
      })
    })
  })
})
