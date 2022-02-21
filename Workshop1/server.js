console.log('eiei')

const express   = require('express')
const app       = express()
const routes    = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api',routes)

const port      = 5000
app.listen(port, () => console.log(`server up and running at port -> ${port}`))

