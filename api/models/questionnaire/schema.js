/**
 * Project          : Eval
 * Module           : Questionnaire model File
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
     * Questionnaire Schema
     */
    var QuestionnaireSchema = new Schema({
        title: {
            type: String,
            
        },
        description: {
            type: String,
            
        },
        buttonTitle: {
            type: String
        },
        buttonText: {
            type: String
        },
        checkBoxText: {
            type: String,
            
        },
        startDate: {
            type: Date     
        },
        endDate: {
            type: Date
        },
        remindDays: {
            type: Number
        },
        pptUpload: {
            type: String
        },
        participantList: {
            type: String,
            
        },
        mailBody: {
            type: String
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employees'
        },
        


        __v: {
            type: Number,
            select: false
        }
    }, { timestamps: true });
    QuestionnaireSchema = require('../../utils/db_queries')(QuestionnaireSchema);

    return mongoose.model('Questionnaires', QuestionnaireSchema);
};
