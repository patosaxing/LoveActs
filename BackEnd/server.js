//Import Statements
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./Routes/userRoutes");
const path = require("path");
const helmet = require("helmet");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware")

/* Not sure about this import, might be what i need for video
   streaming, chat and recording or maybe not...
*/
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");


/* Not sure about this block of code, might be what i need for video
   streaming, chat and recording or maybe not...
*/
// io.on("connection", socket => {
//     console.log("Someone Connected")
//     socket.on("join-room", ({ roomId, userName }) =>
//     {
//         console.log("User joined room")
//         console.log(roomId);
//         console.log(userName);
//         socket.join(roomId);
//         socket.to(roomId).emit("user is connected". userName);
//     })
// })

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

//Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

//Database Import Statement
const connectDB = require("./Models/db");
const { Socket } = require("socket.io");

//Database Connection
dotenv.config();
connectDB();

//Port Setup
const port = 4000;


app.get('/', (req, res) => {
    res.send('App is running at ROOT');
})

//User Routes or endpoints
app.use("/users", userRoutes)

server.listen(port, () => 
{
    console.log(`Application listening at http://localhost:${port}`);
})