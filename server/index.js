require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const URI = process.env.MONGODB || "mongodb://localhost:27017/todo";
const port = process.env.PORT || 5000;

const app = express();

(async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");

    app.use(express.json());

    const taskRouter = require("./Routes/TaskRouter");
    app.use("/task", taskRouter);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error.message);
  }
})();
