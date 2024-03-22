import express from 'express'
import userRoute from './routes/user.js'
const app = express()
const port = 3000

//routes
app.use('/user', userRoute)

//server
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
