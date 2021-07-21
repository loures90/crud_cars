import mongoose from 'mongoose';

const connection =mongoose.connect('mongodb:localhost:27017/cars',{
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

export default connection