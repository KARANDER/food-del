import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://derkaran359:gI7TQDL7QlS9pq5k@cluster0.m0bei.mongodb.net/').then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.