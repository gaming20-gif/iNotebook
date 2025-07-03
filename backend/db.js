
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/in';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } 
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Optional: exit the app if connection fails
    }
};

module.exports = connectToMongo;
