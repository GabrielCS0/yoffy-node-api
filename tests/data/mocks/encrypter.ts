import faker from 'faker'

import { EncrypterContract } from '@data/contracts'
import { EncrypterDTO } from '@data/dtos'

export class EncrypterSpy implements EncrypterContract {
  accessToken = faker.datatype.uuid()
  data: EncrypterDTO

  encrypt(data: EncrypterDTO): string {
    this.data = data
    return this.accessToken
  }
}
