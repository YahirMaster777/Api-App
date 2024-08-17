import app from './app.js'
import './database.js'

const port = 3000

app.get('/', (req, res) => {
    res.json({mesage: "Get request to the homepage"})
})

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})