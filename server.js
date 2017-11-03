// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var reservation = [
  {
    name: "Yoda",
    phone: 1234567891,
    email: abc@123.com,
    unique: 2000
  },
  {
    name: "Hoda",
    phone: 2234567891,
    email: bbc@123.com,
    unique: 1000
  },
  {
    name: "moda",
    phone: 3234567891,
    email: ccc@123.com,
    unique: 3000
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("We only have 5 tables! Book your seat before they all are gone!")
  res.sendFile(path.join(__dirname, "index.html"));
});

// Get all reservation
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/makeRes", function(req, res) {
  res.sendFile(path.join(__dirname, "makeRes.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
