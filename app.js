const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')

require('dotenv').config()
const port = process.env.PORT
const app  = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', {title: "About us!"})
})

app.get('/contact', (req, res) => {
    res.render('contact')
})



app.post('/contact/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: process.env.USER,
        to: process.env.SUPPORT_MAIL,
        text: `You have message from Name: ${req.body.name}, EMAIL: ${req.body.email}, message: ${req.body.message}`
        
    }

    transporter.sendMail(mailOptions, (err, info) => {
        console.log(err || `MSG INFO ${info.response}`)
        res.redirect('/')
    })
})


app.listen(port)
console.log(`app is running at port ${port}`)
