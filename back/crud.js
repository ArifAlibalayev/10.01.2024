import express from 'express'
import 'dotenv/config'
import mongoose, { Model, Schema } from 'mongoose'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors()) 

const port = process.env.ENV_PORT


mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err.message))

const serviceSchema = new Schema({

  serviceIcon: String,
  serviceTitle: String,
  serviceDescription: String,

});

const serviceModel = mongoose.model("services", serviceSchema)


app.get('/', async (req, res) => {
  try {
    const { serviceIcon, serviceTitle, serviceDescription } = req.body
    const service = await serviceModel.find({})
    res.send(service)
  } catch (error) {
    res.send('failed to get')
  }
})


app.get('/:id', async (req, res) => {
  const { id } = req.params
  const service = await serviceModel.findById(id)
  res.send(service)
})

app.post('/', async (req, res) => {
  try {
    const { serviceIcon, serviceTitle, serviceDescription } = req.body
    const newService = new serviceModel({ serviceIcon, serviceTitle, serviceDescription })
    await newService.save()
    res.send('successfully created')
  } catch (error) {
    res.send('failed to post')
  }
})


app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
  const service = await serviceModel.findByIdAndDelete(id)
  res.send(service)
  } catch (error) {
    res.send('failed to delete')
  }
})


app.listen(port, () => {
  console.log(`running on ${port} port`)
})
