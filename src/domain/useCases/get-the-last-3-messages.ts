import { GetTheLast3MessagesEntity } from '@domain/entities'

export interface GetTheLast3MessagesUseCase {
  execute(): Promise<GetTheLast3MessagesUseCase.Result>
}

export namespace GetTheLast3MessagesUseCase {
  export type Result = GetTheLast3MessagesEntity
}
