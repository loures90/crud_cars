import mongoose from 'mongoose';

const connection =mongoose.connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb',{
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