import { GetUserDataEntity } from '@domain/entities'

export interface GetUserDataUseCase {
  execute(
    getUserDataParams: GetUserDataUseCase.Params
  ): Promise<GetUserDataUseCase.Result>
}

export namespace GetUserDataUseCase {
  export type Params = {
    userId: string
  }

  export type Result = GetUserDataEntity
}
