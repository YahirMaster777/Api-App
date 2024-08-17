import express from 'express'
import morgan from 'morgan'
import router from './routes/students.routes.js'
import motorcycles from './routes/motorcycle.routes.js'

const app = express()

//Configuraciones

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(router)
app.use(motorcycles)

export default app