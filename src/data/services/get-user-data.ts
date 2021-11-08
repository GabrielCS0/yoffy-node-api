import { GetUserDataUseCase } from '@domain/useCases'
import { UsersRepositoryContract } from '@data/contracts'

export class GetUserDataService implements GetUserDataUseCase {
  constructor(private readonly usersRepository: UsersRepositoryContract) {}

  async execute({
    userId
  }: GetUserDataUseCase.Params): Promise<GetUserDataUseCase.Result> {
    const user = await this.usersRepository.findOneById(userId)
    return user
  }
}
