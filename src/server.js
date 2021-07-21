import app from './app.js'
import {carsRoutes} from './routes/carsRoutes.js'

app.use('/cars', carsRoutes)