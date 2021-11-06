import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'

import { setupRoutes } from '@main/config/routes'

const app = express()
const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: '*'
  }
})

app.use(express.json())
app.use(cors())
setupRoutes(app)

export { serverHttp, io }
