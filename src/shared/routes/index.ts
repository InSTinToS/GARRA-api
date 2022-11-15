import cors from 'cors'
import express from 'express'
import 'express-async-errors'

import { authRoutes } from './auth.routes'
import { usersRoutes } from './users.routes'

import { ThrowAppErrorController } from '@modules/Error/useCases/throwError/ThrowAppErrorController'

const app = express()

const errorHandler = new ThrowAppErrorController().handle

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'Garra API' })
})

app.use(usersRoutes)

app.use('/auth', authRoutes)

app.use(errorHandler)

export { app }
