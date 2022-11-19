import 'dotenv/config'
import 'reflect-metadata'
import { replaceTscAliasPaths } from 'tsc-alias'

import './shared/containers/index'
import { app } from './shared/routes/index'

replaceTscAliasPaths()

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Running at ${port}`))
