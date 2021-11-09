import { AuthenticateUserUseCase } from '@domain/useCases'
import {
  EncrypterContract,
  GithubAuthContract,
  UsersRepositoryContract
} from '@data/contracts'

export class AuthenticateUserService implements AuthenticateUserUseCase {
  constructor(
    private readonly githubAuth: GithubAuthContract,
    private readonly usersRepository: UsersRepositoryContract,
    private readonly encrypter: EncrypterContract
  ) {}

  async execute({
    code
  }: AuthenticateUserUseCase.Params): Promise<AuthenticateUserUseCase.Result> {
    const githubUser = await this.githubAuth.getUser(code)

    let user = await this.usersRepository.findOneByGithubId(githubUser.githubId)

    if (!user) user = await this.usersRepository.create(githubUser)

    const accessToken = this.encrypter.encrypt({
      userId: user.id,
      userName: user.name
    })

    return { ...user, accessToken }
  }
}
