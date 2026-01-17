import express from 'express'
const port = 3000
const app = express()
import roomRouter from './src/router/roomRouter.js'



app.use(express.json()) 

app.use('/rooms',roomRouter)



app.listen(port,()=>{
    console.log(`server ini berjalan di port: ${port}`)
})