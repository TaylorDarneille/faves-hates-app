const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
// control center
app.use('/faves', require('./controllers/faves'))
app.use('/hates', require('./controllers/hates'))

app.get('/', (req, res)=>{
    res.render('home')
})

// app.get('/animals', function(req, res) {
//     res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
// })

// app.get('/foods', function(req, res) {
//     res.render('animals', {title: 'Favorite Foods', animals: ['sushi', 'kale']})
// })

app.listen(8000)