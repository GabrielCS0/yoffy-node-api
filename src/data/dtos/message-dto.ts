import { UserDTO } from '@data/dtos'

export type MessageDTO = {
  id: string
  text: string
  createdAt: Date
  userId: string
  user: UserDTO
}
