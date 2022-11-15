import { Pool } from 'pg'

const pool = new Pool({
  host: 'garra-database',
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT)
})

const query = async <T>(text: string) => pool.query<T>(text)

export { query, pool }
