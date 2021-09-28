const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/User");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("authentication");
});

app.use("/api/v1.0/auth", userRoute);

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});
