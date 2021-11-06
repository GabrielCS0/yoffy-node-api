import { prismaClient } from '@infra/db'
import { MessagesRepositoryContract } from '@data/contracts'
import { MessageDTO, CreateMessageDTO } from '@data/dtos'

export class MessagesRepository implements MessagesRepositoryContract {
  async create(data: CreateMessageDTO): Promise<MessageDTO> {
    const message = await prismaClient.message.create({
      data,
      include: {
        user: true
      }
    })

    return message
  }
}
