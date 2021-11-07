import { Router } from 'express'

import { adaptRoute } from '@main/adapters'
import { makeGetTheLast3MessagesController } from '@main/factories'

export default (router: Router): void => {
  router.get('/messages/last3', adaptRoute(makeGetTheLast3MessagesController()))
}
