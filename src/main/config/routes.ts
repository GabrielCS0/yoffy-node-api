import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { resolve } from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  readdirSync(resolve(__dirname, '..', 'routes')).map(async fileName => {
    // eslint-disable-next-line prettier/prettier
    (await import(`../routes/${fileName}`)).default(router)
  })
}
