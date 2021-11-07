import {
  CreateMessageDTO,
  GetTheLast3MessagesDTO,
  MessageDTO
} from '@data/dtos'

export interface MessagesRepositoryContract {
  create(data: CreateMessageDTO): Promise<MessageDTO>
  getTheLast3Messages(): Promise<GetTheLast3MessagesDTO>
}
