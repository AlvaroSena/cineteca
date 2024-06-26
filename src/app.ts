import cors from 'cors'
import express from 'express'
import { routes } from './infra/http/routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  return res.json({ message: 'hello' })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
