const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')

const port = 3000
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
    console.log('test')
})


app.listen(port)
console.log(`app is running at port ${port}`)
