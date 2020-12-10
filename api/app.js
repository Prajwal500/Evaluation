
/**
 * Project          : EvalApp
 * Source filename  : app.js
 * Description      : App Entry point , which loads all modules.
 * Author           : Prajwal Kiran Amin
 * Copyright        : Copyright © 2019, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 *                    
 */

"use strict"; //The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.
//To include a module, use the require() function with the name of the module:
//Dotenv is a module that loads environment variables from a .env file into process.env.
require("dotenv").config();

//The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().
var env = process.env.NODE_ENV || "development"; // Node.js exposes the current process’s environment variables to the script as an object called process.env.
var config = require("./configs/config"); //loading config 

// Load  modules
var express = require("express"); //nodejs framework which is used to expose the APIS
var app = express(); //First we invoke the require() function, specifying the name of the module as a string ('express'), and calling the returned object to create an Express application. We can then access the properties and functions of the application object.
//The body-parser package that we’ll use to parse the body of incoming requests.
const bodyParser = require("body-parser");
var passport = require('passport');
var cron = require('node-cron');
app.use(passport.initialize());
const mongoose = require("./configs/mongodb"); //mongodb connection
const constants = require("./configs/constants"); //loading constants
var utils = require("./utils/util"); //loading util file
console.log("Entering environment \"" + env + "\"");


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//loading all routes and models
app.use("/images", express.static(__dirname + "/uploads"));
app.use("/docs", express.static(__dirname + "/apidoc"));
var logger = require('logger').createLogger('development.log');
require("./configs/loader")(app, mongoose, utils, config, constants, logger);

// require('./app/routes/note.routes.js')(app);
//server listening to port
//The app.listen() function is used to bind and listen the connections on the specified host and port.
app.listen(config.port, function () {
    console.log("Server Listening to port :", config.port);
});
var empMapCtrl = require('./controllers/empmap.js')(mongoose, utils, config, constants);
cron.schedule('0 9 * * *', function () {
    empMapCtrl.setReminder();

});

module.exports = app;