import { prismaClient } from '@infra/db'
import { MessagesRepositoryContract } from '@data/contracts'
import {
  MessageDTO,
  CreateMessageDTO,
  GetTheLast3MessagesDTO
} from '@data/dtos'

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

  async getTheLast3Messages(): Promise<GetTheLast3MessagesDTO> {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: true
      }
    })

    return messages
  }
}
