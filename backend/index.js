const dotenv = require('dotenv'),
  { Client } = require('pg')

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI
})

client.connect()

const express = require('express'),
  path = require('path')

const app = express(),
  port = process.env.PORT || 3000

app.get('/api/fetch', async (req, res) => {
  if (req.query.amount == "all") {
    res.send(await client.query(
      "SELECT * FROM cars"
    ))
  }
})

app.get('/api/user', async (req, res) => {
  const result = await client.query(
    "SELECT * FROM users WHERE USERNAME = $1",
    [req.query.username]
  )
  res.send(result.rows[0])
})

app.get('/api/register', (req, res) => {
  console.log(req)
})



app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
