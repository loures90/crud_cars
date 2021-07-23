const app = require('./app')
const carsRoutes = require('./routes/carsRoutes')
const mongoose = require('mongoose')

app.use('/cars', carsRoutes)

mongoose.connect('mongodb://localhost:27017/cars',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}, function(err){
    if(err){
        console.log(err)
    }
    else{ 
        console.log("MongoDB connected")
    }
})
