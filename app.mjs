//bc 
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

// a comment. 

app.listen(80)
