const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const pool = require('./db')
const cors = require('cors')
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(express.json())

//get data
app.get('/:email', async (req, res) => {
  const {email} = req.params
  try {
    const query = await pool.query('SELECT * FROM todos WHERE email = $1', [email])
    res.json(query.rows)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server Internal Error')
  }
})

//add data
app.post('/', async (req, res) => {
  const task = req.body
  const id = uuid.v4()
  try {
    await pool.query('INSERT INTO todos(id, email, title, progress) VALUES($1, $2, $3, $4)', [id, task.email, task.title, task.progress])
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server Internal Error')
  }
})

//delete data

app.delete('/:id', async (req, res) => {
  const id = req.params.id

  try {
    await pool.query('DELETE FROM todos WHERE id = $1', [id])
  } catch (error) {
    console.log(error.message)
  }
})

//update data

app.put('/:id', async (req, res) => {
  const id = req.params.id
  const task = req.body

  

  try {
    await pool.query('UPDATE todos SET title = $1, progress = $2  WHERE id = $3', [task.title, task.progress, id]) 
  } catch (error) {
    console.log(error.message)
  }
})

//signUp 
app.post('/signup', async(req, res) => {
  const {email, password} = req.body

  const salt = bcrypt.genSaltSync(10)
  const hashed_password = bcrypt.hashSync(password, salt)

  const token = jwt.sign({email}, 'secret', {expiresIn: '1h'})

  console.log(token)
  
  try {
    await pool.query('INSERT INTO users(email, hashed_password) VALUES ($1, $2)', [email, hashed_password])
    res.json({email, token})
  } catch (error) {
    console.log(error.message)
    res.json(error.detail)
  }
})

//login
app.post('/login', async (req, res) => {
  const {email, password} = req.body

  
  try {
    const query = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    console.log(query.rows[0])
    if(query.rows[0].length === 0) {
      res.json({detail: "user doesn't exist"})
      return
    }

    const success = bcrypt.compareSync(password, query.rows[0].hashed_password)
    
    if(success) {
      const token = jwt.sign({email}, 'secret', {expiresIn: '1h'})
      res.json({email, token})
    } else {
      res.json({detail : "invalid password"})
    }

  } catch (error) {
    res.json(error.detail)
  }
})

app.listen(port, () => console.log(`server is read on ${port}`))