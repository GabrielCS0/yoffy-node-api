import jwt from 'jsonwebtoken'

import { JwtAdapter } from '@infra/utils'

jest.mock('jsonwebtoken', () => ({
  sign(): string {
    return 'any-token'
  }
}))

const makeSut = (): JwtAdapter => {
  return new JwtAdapter()
}

describe('Jwt Adapter', () => {
  test('Should call sign with correct values', () => {
    const sut = makeSut()
    const signSpy = jest.spyOn(jwt, 'sign')
    sut.encrypt({
      userId: 'any-id',
      userName: 'any-name'
    })
    expect(signSpy).toHaveBeenCalledWith(
      {
        user: { name: 'any-name' }
      },
      undefined,
      { expiresIn: '1d', subject: 'any-id' }
    )
  })

  test('Should return an access token on sign', () => {
    const sut = makeSut()
    const accessToken = sut.encrypt({
      userId: 'any-id',
      userName: 'any-name'
    })
    expect(accessToken).toBe('any-token')
  })
})
