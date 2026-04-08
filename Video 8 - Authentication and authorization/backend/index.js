const express = require("express");
const { connectDB } = require("./config/db");
const User = require("./models/UserModel");
const userRoute = require("./routes/userRoute");
require('dotenv').config();
const port = process.env.PORT; 

const app = express();
app.use(express.json());
connectDB();

User.sync();
app.use("/auth", userRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})