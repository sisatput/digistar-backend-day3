const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRouter");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Rute untuk endpoint utama
app.get("/", (req, res) => {
  res.send("Welcome to the Users API!");
});

// Menggunakan userRouter untuk rute pengguna
app.use("/users", userRouter);

// Mulai server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
