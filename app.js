const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Anurag Here'
    })
})

app.listen(3000)