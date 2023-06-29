const mongoose = require('mongoose')

const dbconnect  = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected successfully");
    } catch(error){
        console.log("DB connection failed",error.message);
    }
}

dbconnect()