const express = require('express')
const router = express.Router()

const User = require('../models/UserModel')

//get routes starts here
router.get('/', (req, res) => {
  User.find({})
    .then((users) => {
      res.render('index', { users: users })
    })
    .catch((err) => {
      req.flash('error_msg', 'ERROR: ' + err)
      res.redirect('/')
    })
})

router.get('/user/new', (req, res) => {
  res.render('new User')
})

router.get('/user/search', (req, res) => {
  res.render('search', { user: '' })
})

router.get('/user', (req, res) => {
  let searchQuery = { name: req.query.name }

  User.findOne(searchQuery)
    .then((user) => {
      res.render('search', { user: user })
    })
    .catch((err) => {
      req.flash('error_msg', 'ERROR: ' + err)
      res.redirect('/')
    })
})

router.get('/edit/:id', (req, res) => {
  let searchQuery = { _id: req.params.id }
  User.findOne(searchQuery)
    .then((user) => {
      res.render('edit', { user: user })
    })
    .catch((err) => {
      req.flash('error_msg', 'ERROR: ' + err)
      res.redirect('/')
    })
})

//get routes ends here

//post routes starts here
router.post('/users/new', (req, res) => {
  let newUser = {
    name: req.body.name,
    userId: req.body.userId,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  }

  User.create(newUser)
    .then((user) => {
      req.flash('success_msg', 'User data added to database successfully.')
      res.redirect('/')
    })
    .catch((err) => {
      req.flash('error_msg', 'ERROR: ' + err)
      res.redirect('/')
    })
})

//post routes end here

//put routes starts here

router.put('/edit/:id', (req, res) => {
  let searchQuery = { _id: req.params.id }

  User.updateOne(searchQuery, {
    $set: {
      name: req.body.name,
      userId: req.body.userId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    },
  })
    .then((user) => {
      req.flash('success_msg', 'User data updated successfully.')
      res.redirect('/')
    })
    .catch((err) => {
      req.flash('error_msg', 'ERROR: ' + err)
      res.redirect('/')
    })
})

//put routes ends here

//delete routes starts here
router.delete('/delete/:id', (req, res) => {
  let searchQuery = { _id: req.params.id }

  User.deleteOne(searchQuery)
    .then((user) => {
      req.flash('success_msg', 'User deleted successfully.')
      res.redirect('/')
    })
    .catch((err) => {
      req.flash('error_msg', 'ERROR: ' + err)
      res.redirect('/')
    })
})

//delete routes ends here
module.exports = router
