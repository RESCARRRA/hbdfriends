// Dependincies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var router = require("./controllers/burgers_controller.js");

var path = require("path");

// Below is how we set up the express app
var app = express();


var PORT = process.env.PORT || 3000;

// var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var router = require("./controllers/burgers_controller.js");
var routes = router;

app.use("/", routes);

app.listen(PORT);

console.log("Listening on: " + PORT )
