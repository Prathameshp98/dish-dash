const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_DATABASE_USER}:${process.env.MONGO_DATABASE_PASSWORD}@${process.env.MONGO_DATABASE_CLUSTER}/${process.env.MONGO_DATABASE_NAME}`

const connectDB = async() => {
    const conn = await mongoose.connect(MONGODB_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}` .cyan.underline.bold);
}

module.exports = connectDB