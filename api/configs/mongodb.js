/**
 * Project          : Eval
 * Module           : Mongodb config
 * Source filename  : mongodb.js
 * Description      : Mongodb related configuration
 * Author           : Prajwal Kiran Amin 
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */
"use strict";
var mongoose = require("mongoose");
var config = require("./config");



config.mongo.options.useNewUrlParser = true;
config.mongo.options.useUnifiedTopology = true;
config.mongo.options.autoIndex= true;
mongoose.connect(config.mongo.dbURL, config.mongo.options, function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Database connection to MongoDB opened.")
    }


});


module.exports = mongoose;