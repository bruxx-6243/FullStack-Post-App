const express = require("express");
const app = express();

// dotenv
require("dotenv").config({ path: "./.env" });

// cors
const cors = require("cors");

const corsOptions = {
  origin: [process.env.HOST_NAME],
  credentials: true,
  allowdHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  method: "GET, HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));


// db connection
require("./config/db");

// jason parsing
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const postRoutes = require("./routes/post.routes");
app.use("/", postRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
