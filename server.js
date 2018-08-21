const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const request = require("request");
var bodyParser = require("body-parser");
 require('dotenv').config();

 // Use body parser with our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Send every request to the React app
// Define any API routes before this runs
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});