const express = require('express')
path = require('path')

const app = express(),
  port = process.env.PORT || 3000

app.get('/', (_request, response) => {
  response.send({ hello: 'World' })
})

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
