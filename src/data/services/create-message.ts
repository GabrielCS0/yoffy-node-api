import { CreateMessageUseCase } from '@domain/useCases'
import { MessagesRepositoryContract } from '@data/contracts/messages-repository'

export class CreateMessageService implements CreateMessageUseCase {
  constructor(
    private readonly messagesRepository: MessagesRepositoryContract
  ) {}

  async execute({
    text,
    userId,
    io
  }: CreateMessageUseCase.Params): Promise<CreateMessageUseCase.Result> {
    const message = await this.messagesRepository.create({ text, userId })

    const infoWS = {
      text: message.text,
      userId: message.userId,
      createdAt: message.createdAt,
      user: {
        name: message.user.name,
        avatarUrl: message.user.avatarUrl
      }
    }

    io.emit('new_message', infoWS)

    return message
  }
}
