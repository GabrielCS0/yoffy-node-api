import { CreateMessageDTO, MessageDTO } from '@data/dtos'

export interface MessagesRepositoryContract {
  create(data: CreateMessageDTO): Promise<MessageDTO>
}
