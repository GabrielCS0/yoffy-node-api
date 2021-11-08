import { EncrypterDTO } from '@data/dtos'

export interface EncrypterContract {
  encrypt(data: EncrypterDTO): string
}
