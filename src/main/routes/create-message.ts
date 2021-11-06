import { Router } from 'express'

import { adaptRoute } from '@main/adapters'
import { makeCreateMessageController } from '@main/factories'
import { ensureAuthenticated } from '@main/middlewares'

export default (router: Router): void => {
  router.post(
    '/messages/create',
    ensureAuthenticated,
    adaptRoute(makeCreateMessageController())
  )
}
