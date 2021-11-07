import { GetTheLast3MessagesUseCase } from '@domain/useCases'
import { MessagesRepositoryContract } from '@data/contracts/messages-repository'

export class GetTheLast3MessagesService implements GetTheLast3MessagesUseCase {
  constructor(
    private readonly messagesRepository: MessagesRepositoryContract
  ) {}

  async execute(): Promise<GetTheLast3MessagesUseCase.Result> {
    const messages = await this.messagesRepository.getTheLast3Messages()
    return messages
  }
}
