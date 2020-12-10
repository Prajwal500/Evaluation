/**
 * Project          : Eval
 * Module           : User model File
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
     * User Schema
     */
    var EmployeeSchema = new Schema({
        name: {
            type: String,
            required: [true, 'Please enter your name'],
            
        },
        email: {
            type: String,
            
        },
        employeeCode: {
            type: String,
        },
        
        password: {
            type: String,
            select: false,
            
        },
        username: {
            type: String
            
        },

        userType: {
            type: String,     
            default: 'user',  

            enum: ['superAdmin', 'admin', 'user']
        },
        gender: {
            type: String
        },
        
        phone: {
            type: String,
            
        },
        passwordToken: {
            type: String
        },
        passwordTokenExpiry: {
            type: Date,
            select: false
        },
        token: {
             type: String
         },
        tokenExpiry: {
            type: String
        },
        


        __v: {
            type: Number,
            select: false
        }
    }, { timestamps: true });
    EmployeeSchema = require('../../utils/db_queries')(EmployeeSchema);

    return mongoose.model('Employees', EmployeeSchema);
};
