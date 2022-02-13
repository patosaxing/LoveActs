//Import Statements
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./Routes/userRoutes")

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Database Import Statement
const connectDB = require("./Models/db");

//Database Connection
dotenv.config();
connectDB();

//Port Setup
const port = 4000;


app.get('/', (req, res) => {
    res.send('App is running at ROOT');
})

//User Routes
app.use("/users", userRoutes)

app.listen(port, () => 
{
    console.log(`Application listening at http://localhost:${port}`);
})