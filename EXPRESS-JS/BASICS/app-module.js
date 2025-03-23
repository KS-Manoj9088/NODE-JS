const express = require("express")

const app = express()

// application level settings
app.set('view engine', 'ejs')

// routing and its common methods

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.post('/api/data', (req,res)=>{
    res.json({
        name: 'John Doe',
        data : req.body
    })
})

app.use( (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Internal server error");
})