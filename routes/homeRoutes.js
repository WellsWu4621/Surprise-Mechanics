const router = require('express').Router()
const { User, Bet, Witness, Participant } = require('../models')
const passport = require('passport')
const sequelize = require('../db')

// login
router.get('/login', (req, res) => {
  res.render('login')
})

// register
router.get('/register', (req, res) => {
  res.render('register')
})

// // open post
// router.get('/blog/:id', (req, res) => {
//   res.render('blog', { blogid: req.params.id })
// })

// // edit post
// router.get('/update/:id', (req, res) => {
//   res.render('update', { editid: req.params.id })
// })

// dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

// new post
router.get('/newbets', (req, res) => {
  res.render('newbets')
})

// default get coins page
router.get('/coins', (req, res) => {
  res.render('coins')
})

// default home
router.get('/*', (req, res) => {
  res.render('home')
})


module.exports = router