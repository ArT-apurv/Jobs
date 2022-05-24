const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const connectDB = require("./Database/Connect");

const authRouter = require("./Routes/authRoutes");
const jobsRouter = require("./Routes/jobsRoutes");

const notFoundMiddleware = require("./Middleware/not-found");
const errorHandlerMiddleware = require("./Middleware/error-handler");

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
