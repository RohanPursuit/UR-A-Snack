// DEPENDENCIES

const express = require("express");
const cors = require('cors')
const snackController = require("./controllers/snackController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/snacks", snackController);


// ROUTES
app.get("/", (request,response) => {
    console.log("GET request to /");
    response.send("Grab One or be be One");
  });

  app.get("*", (request, response) => {
    response.status(404).json({ error: "Page not found" });
  });
// EXPORT
module.exports = app;
