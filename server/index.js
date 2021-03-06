const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./Routes/userRoutes");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
