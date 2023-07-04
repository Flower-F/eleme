const jsonServer = require('json-server')
const path = require('path')
const router = require('./router')
const db = require('./db')()

const server = jsonServer.create()

const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '../public')
})

server.use(middlewares)
// 请求体
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  const json = res.json.bind(res)
  res.success = (data) => {
    return json({
      code: 0,
      msg: '请求成功',
      data
    })
  }
  res.fail = (msg, code = -1, data) => {
    return json({
      code,
      msg,
      data
    })
  }
  next()
})

router(server)

const jsonRouter = jsonServer.router(db)
server.use((req, res, next) => {
  setTimeout(next, 1000)
})
server.use('/api', jsonRouter)

const PORT = 8000
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
