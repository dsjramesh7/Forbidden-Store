require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
// console.log(USERNAME, PASSWORD);

// Creating a Database Server
mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@shopdatabase.kjgv8vf.mongodb.net/`
  )
  .then(() => console.log("Database is connected successfully"))
  .catch((e) => console.log(e));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
