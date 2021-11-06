import { CreateMessageUseCase } from '@domain/useCases'
import { MessagesRepositoryContract } from '@data/contracts/messages-repository'

export class CreateMessageService implements CreateMessageUseCase {
  constructor(
    private readonly messagesRepository: MessagesRepositoryContract
  ) {}

  async execute({
    text,
    userId
  }: CreateMessageUseCase.Params): Promise<CreateMessageUseCase.Result> {
    const message = await this.messagesRepository.create({ text, userId })
    return message
  }
}
