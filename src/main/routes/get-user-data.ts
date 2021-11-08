import { Router } from 'express'

import { adaptRoute } from '@main/adapters'
import { makeGetUserDataController } from '@main/factories'
import { ensureAuthenticated } from '@main/middlewares'

export default (router: Router): void => {
  router.get(
    '/user/data',
    ensureAuthenticated,
    adaptRoute(makeGetUserDataController())
  )
}
