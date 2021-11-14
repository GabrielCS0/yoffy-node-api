import { AuthenticateUserService } from '@data/services'
import { mockAuthenticateUserUseCaseParams } from '@tests/domain/mocks'
import {
  GithubAuthSpy,
  UsersRepositorySpy,
  EncrypterSpy
} from '@tests/data/mocks'

type SutTypes = {
  sut: AuthenticateUserService
  githubAuthSpy: GithubAuthSpy
  usersRepositorySpy: UsersRepositorySpy
  encrypterSpy: EncrypterSpy
}

const makeSut = (): SutTypes => {
  const githubAuthSpy = new GithubAuthSpy()
  const usersRepositorySpy = new UsersRepositorySpy()
  const encrypterSpy = new EncrypterSpy()
  const sut = new AuthenticateUserService(
    githubAuthSpy,
    usersRepositorySpy,
    encrypterSpy
  )

  return {
    sut,
    githubAuthSpy,
    usersRepositorySpy,
    encrypterSpy
  }
}

describe('Authenticate User', () => {
  test('Should call GithubAuth with correct code', async () => {
    const { sut, githubAuthSpy } = makeSut()
    const authenticateUserParams = mockAuthenticateUserUseCaseParams()
    await sut.execute(authenticateUserParams)
    expect(githubAuthSpy.code).toBe(authenticateUserParams.code)
  })

  test('Should call findOneByGithubId with correct githubId', async () => {
    const { sut, usersRepositorySpy, githubAuthSpy } = makeSut()
    await sut.execute(mockAuthenticateUserUseCaseParams())
    expect(usersRepositorySpy.githubId).toBe(githubAuthSpy.githubUser.githubId)
  })

  test('Should call encrypter with correct id and userName', async () => {
    const { sut, usersRepositorySpy, encrypterSpy } = makeSut()
    await sut.execute(mockAuthenticateUserUseCaseParams())
    expect(encrypterSpy.data).toStrictEqual({
      userId: usersRepositorySpy.user.id,
      userName: usersRepositorySpy.user.name
    })
  })

  test('Should call create with correct values', async () => {
    const { sut, usersRepositorySpy, githubAuthSpy } = makeSut()
    usersRepositorySpy.user = null
    await sut.execute(mockAuthenticateUserUseCaseParams())
    expect(usersRepositorySpy.data).toBe(githubAuthSpy.githubUser)
  })

  test('Should return the correct authenticated user data', async () => {
    const { sut, usersRepositorySpy, encrypterSpy } = makeSut()
    const authenticatedUser = await sut.execute(
      mockAuthenticateUserUseCaseParams()
    )

    const user = usersRepositorySpy.user
    const accessToken = encrypterSpy.accessToken
    expect(authenticatedUser).toStrictEqual({ ...user, accessToken })
  })
})
