import { sign } from 'jsonwebtoken'

import { EncrypterContract } from '@data/contracts'
import { EncrypterDTO } from '@data/dtos'

export class JwtAdapter implements EncrypterContract {
  encrypt({ userId, userName }: EncrypterDTO): string {
    const accessToken = sign(
      {
        user: {
          name: userName
        }
      },
      process.env.JWT_SECRET,
      {
        subject: userId,
        expiresIn: '1d'
      }
    )

    return accessToken
  }
}
