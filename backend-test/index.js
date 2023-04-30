import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import fileUpload from "express-fileupload"

const PORT = 5005;
const DB_URL = 'mongodb+srv://teemon0803:000001@cluster0.simqvx0.mongodb.net/?retryWrites=true&w=majority';

const app = express()

app.use(express.json())
app.use(express.static('pic'))
app.use(fileUpload())
app.use('/api', router)

async function startApp () {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER WORKING ON PORT ' + PORT))
    }catch (e){
        console.log(e)
    }
}

startApp();
