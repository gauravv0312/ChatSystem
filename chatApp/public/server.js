const express  = require('express')
const res = require('express/lib/response')
const { Socket } = require('socket.io')
const app = new express()
 const http = require('http'). createServer(app)
 const PORT = process.env.PORT || 3000
  http.listen(PORT,()=>{
     console.log(`Listening on port ${PORT}`)
  })

//   creating the rout for the app

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

// -------------------------------------------------------------------------------

const io = require('socket.io')(http)

io.on('connection',(Socket)=>{
  console.log('connected........')
  Socket.on('message',(msg)=>{
       Socket.broadcast.emit('message',msg)
  })
})