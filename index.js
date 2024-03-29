const express = require("express");
const AdminRouters = require("./src/routers/AdminRouters.js");
const dbConnect = require("./src/config/config.js");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.REACT_APP_PORT || 8080;

app.listen(port, async () => {
  await dbConnect();

  console.log("backend server running on port no : ", port);
});
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to backend server in localhost",
    port: port,
    status: true,
  });
});

app.use("/auth", AdminRouters);

// app.use("/api/users", userRouter);
module.exports = app;
