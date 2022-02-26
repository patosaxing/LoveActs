const io = require("socket.io")(8900, {
    cors:{
        origin: "http://localhost:4000",
    }
});

io.on("connection", socket => {
    console.log("Someone Connected")
    socket.on("join-room", ({ roomId, userName }) =>
    {
        console.log("User joined room")
        console.log(roomId);
        console.log(userName);
        socket.join(roomId);
        socket.to(roomId).emit("user is connected". userName);
    })
})