import 'dotenv/config'

// Importa o client do Neon
import { neon } from '@neondatabase/serverless'

// Cria a conexão com o banco de dados utilizando a variável de ambiente DATABASE_URL
export const sql = neon(process.env.DATABASE_URL)