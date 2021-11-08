import { CreateUserDTO, UserDTO } from '@data/dtos'

export interface UsersRepositoryContract {
  findOneByGithubId(githubId: number): Promise<UserDTO>
  create(data: CreateUserDTO): Promise<UserDTO>
  findOneById(userId: string): Promise<UserDTO>
}
