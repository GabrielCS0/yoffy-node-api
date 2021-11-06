import { CreateMessageEntity } from '@domain/entities'

export interface CreateMessageUseCase {
  execute(
    CreateMessageParams: CreateMessageUseCase.Params
  ): Promise<CreateMessageUseCase.Result>
}

export interface Io {
  emit(event: string, data: unknown): boolean
}

export namespace CreateMessageUseCase {
  export type Params = {
    text: string
    userId: string
    io: Io
  }

  export type Result = CreateMessageEntity
}
