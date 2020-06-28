import { connect } from 'mongoose'
import bodyParser from 'body-parser'
import express from 'express'
// import UserModel from './models/UserModel'
import UserRoutes from './routes/User.Route'
import cors from 'cors'
import { url } from './config/secret'

// new codes Lines

const PORT = 5000

connect(url, { useNewUrlParser: true })

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(UserRoutes)

//Original ROUTES test =>=>=>=>

// app.get('/', (req, res) => {
//   res.send('Just a test')
// })

// app.get('/users', (req, res) => {
//   UserModel.find((err, results) => {
//     res.send(results)
//   })
// })

// app.post('/users', (req, res) => {
//   let user = new UserModel()
//   user.userId = req.body.userId
//   user.email = req.body.email
//   user.firstName = req.body.firstName
//   user.lastName = req.body.lastName
//   user.password = req.body.password

//   user.save((err, newUser) => {
//     if (err) res.send(err)
//     else res.send(newUser)
//   })
// })

//   start server
app.listen(PORT, () => console.log(`App is Running on Port:${PORT}`))
