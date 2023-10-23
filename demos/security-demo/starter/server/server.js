const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getMessages,
    createMessage
} = require('./messageController')

app.post(`/api/messages`, createMessage)

app.post(`/api/messages`, (req,res) => {
    console.log(`post at ${req.originalUrl}`)
})



app.listen(4004, () => console.log(`running on 4004`))