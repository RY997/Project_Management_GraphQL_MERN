const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    //.cyan.underline.bold use color package
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;