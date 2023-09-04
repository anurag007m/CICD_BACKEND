const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello there'
    })
})

app.listen(3000)