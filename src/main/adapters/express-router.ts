import { Request, Response } from 'express'

import { ControllerContract } from '@presentation/contracts'

export const adaptRoute = (controller: ControllerContract) => {
  return async (req: Request, res: Response): Promise<void> => {
    const request = {
      ...(req.body || {}),
      userId: req.user && req.user.id
    }

    const httpResponse = await controller.handle(request)
    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
