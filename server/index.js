const express = require("express");
const app = express();
const PORT = 4000;

//New imports
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const users = [];

//Add this before the app.get() block
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  users.push(socket.id);
  socket.emit("getActiveSessions", { users: users });
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
    users.splice(users.indexOf(socket.id), 1);
  });
});
socketIO.emit("getActiveSessions", { users: users });

console.log("users", users);
