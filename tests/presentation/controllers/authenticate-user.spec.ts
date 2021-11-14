import faker from 'faker'

import { AuthenticateUserController } from '@presentation/controllers'
import { AuthenticateUserSpy } from '@tests/presentation/mocks'
import { throwError } from '@tests/domain/mocks'
import { serverError, success } from '@presentation/contracts'

const mockRequest = (): AuthenticateUserController.Request => {
  return {
    code: faker.datatype.number()
  }
}

type SutTypes = {
  sut: AuthenticateUserController
  authenticateUserSpy: AuthenticateUserSpy
}

const makeSut = (): SutTypes => {
  const authenticateUserSpy = new AuthenticateUserSpy()
  const sut = new AuthenticateUserController(authenticateUserSpy)
  return {
    sut,
    authenticateUserSpy
  }
}

describe('Authenticate User', () => {
  test('Should call authenticateUser with correct code', async () => {
    const { sut, authenticateUserSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(authenticateUserSpy.params).toEqual({
      code: request.code
    })
  })

  test('Should return 500 if authenticateUser throws', async () => {
    const { sut, authenticateUserSpy } = makeSut()
    jest
      .spyOn(authenticateUserSpy, 'execute')
      .mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 if valid data is provided', async () => {
    const { sut, authenticateUserSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(success(authenticateUserSpy.result))
  })
})
