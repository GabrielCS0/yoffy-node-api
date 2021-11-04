import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

type Payload = {
  sub: string
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      statusCode: 401,
      data: {
        error: 'No token provided.'
      }
    })
  }

  const parts = authHeader.split(' ')

  if (parts.length !== 2) {
    return res.status(401).json({
      statusCode: 401,
      data: {
        error: 'Token error.'
      }
    })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      statusCode: 401,
      data: {
        error: 'Malformatted token.'
      }
    })
  }

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload
    req.user = { id: sub }

    return next()
  } catch (err) {
    return res.status(401).json({
      statusCode: 401,
      data: {
        error: 'Token invalid.'
      }
    })
  }
}
