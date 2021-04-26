const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')

const port = 3000
const app  = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port)
console.log(`app is running at port ${port}`)
