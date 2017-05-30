const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()
const http = require('http').Server(app)

global.io = require('socket.io')(http)

app.set('env', config.env)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const staticPath = path.join(__dirname, 'public')
app.use('/static', express.static(staticPath))

// 记录请求日志
app.use(require('./middlewares/request-logger'))

// 添加响应相关的helper方法
app.use(require('./middlewares/response-helpers'))

// 通用路由分发器
app.use(require('./middlewares/common-route-dispatcher'))

// 处理未被使用（未命中）的路由
app.use(require('./middlewares/unused-route-handler'))

// 服务器内部异常错误处理
app.use(require('./middlewares/internal-server-error-handler'))

// Webscoket支持
io.on( "connection", function( socket ){
    socket.on("join", function (user_name){
        this.join(user_name)
    })
})
io.sendMsgTo = function (user_name, msg){
    this.sockets.to( user_name ).emit("message", msg)
}

module.exports = http