const express = require('express')
const router = express.Router()

router.get('/animals', (req, res)=>{
    res.render('hates/animals', {title: 'Hated Animals', animals: ['ants', 'loud birds']})
})

router.get('/foods', (req, res)=>{
    res.render('hates/foods', {title: 'Hated Foods', foods: ['uni', 'bitter melon']})
})

module.exports = router