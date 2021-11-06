import { CreateMessageEntity } from '@domain/entities'

export interface CreateMessageUseCase {
  execute(
    CreateMessageParams: CreateMessageUseCase.Params
  ): Promise<CreateMessageUseCase.Result>
}

export namespace CreateMessageUseCase {
  export type Params = {
    text: string
    userId: string
  }

  export type Result = CreateMessageEntity
}
