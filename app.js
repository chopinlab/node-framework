const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log("Hi!"))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

console.log(process.env.NODE_ENV) // 환경 변수 불러오는 방법