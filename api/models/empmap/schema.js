/**
 * Project          : Eval
 * Module           : Empmap model File
 * Source filename  : schema.js
 * Description      : This file is to set the schema for the user collection.
 * Author           : Prajwal Kiran Amin
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

/**
 * Module dependencies.
 * https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
 */
/*Mongoose is a JavaScript library that allows you to define schemas with strongly typed data. Once a schema is defined, Mongoose lets you create a Model based on a specific schema. A Mongoose Model is then mapped to a MongoDB Document via the Model's schema definition.

Once you have defined your schemas and models, Mongoose contains many different functions that allow you to validate, save, delete, and query your data using common MongoDB functions.*/
module.exports = function (mongoose) {
    var Schema = mongoose.Schema;


    /*
     * Empmap Schema
     */
    var EmpmapSchema = new Schema({
        questId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Questionnaires'
        },

        

        empId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employees'
        },
        status: {
            type: String,
            default: false,  //shortlisted , rejected,
            enum: [true, false]
        },
        reminderCount: {
            type: Number,
            default: 0,
        },
        

        __v: {
            type: Number,
            select: false
        }
    }, { timestamps: true });
    EmpmapSchema = require('../../utils/db_queries')(EmpmapSchema);

    return mongoose.model('Empmaps', EmpmapSchema);
};
