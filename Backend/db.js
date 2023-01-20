const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017";

mongoose.set("strictQuery", false);

const connecttoMongo = async () => {
    try {
        await mongoose.connect(mongoURL)
        console.log('Connected to mongodb database successfully!')       
    } 
    catch (error) {
        console.log(error)
    }
}

module.exports = connecttoMongo;