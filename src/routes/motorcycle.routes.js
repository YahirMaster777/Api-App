import { Router } from 'express'
import { getAll, insertOne, getOne } from '../controllers/motorcycle.controller.js'

const motorcycles = Router()

motorcycles.post('/insertOneM', insertOne)
motorcycles.get('/getOnem/:id' , getOne)
motorcycles.get('/getAllM', getAll)

export default motorcycles