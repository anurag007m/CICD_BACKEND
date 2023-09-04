const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Anurag'
    })
})

app.listen(3000)