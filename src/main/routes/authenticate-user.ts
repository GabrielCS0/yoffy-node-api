import { Router } from 'express'

import { adaptRoute } from '@main/adapters'
import { makeAuthenticateUserController } from '@main/factories'

export default (router: Router): void => {
  router.post(
    '/user/authenticate',
    adaptRoute(makeAuthenticateUserController())
  )
}
