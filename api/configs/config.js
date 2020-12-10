/**
 * Project          : Eval
 * Module           : Configuration
 * Source filename  : config.js
 * Description      : Environment related configuration variables
 * Author           : Prajwal Kiran Amin 
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";
//Lodash has several built-in utility functions that make coding in JavaScript easier and cleaner.
var _ = require("lodash");

var config = {
    //environments
    //local
    //development
    //staging
    //uat
    //production  
    local: {
        mongo: {
            dbURL: process.env.MONGO_URL,
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."), //getting the root path of the project folder
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        tokenExpiry: 60,
        refreshTokenExpiry: 300,
        otpExpiry: 5,
        email: {

            'user': 'prajwalamin10@yahoo.com',
            'pass': 'ylrdnbffxbrqalxo'


        },


    },

    development: {
        mongo: {
            dbURL: "mongodb://10.10.41.7:27017/JobPortal",
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        tokenExpiry: 60,
        refreshTokenExpiry: 300,
        otpExpiry: 5,
        email: {
            'user': 'prajwalamin10@yahoo.com',
            'pass': 'ylrdnbffxbrqalxo'
        },

    },

    staging: {
        mongo: {
            dbURL: "mongodb://localhost:27017/JobPortal",
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        tokenExpiry: 60,
        refreshTokenExpiry: 300,
        otpExpiry: 5,
        email: {
            'user': 'prajwalamin10@yahoo.com',
            'pass': 'ylrdnbffxbrqalxo'
        },

    },
    uat: {
        mongo: {
            dbURL: "mongodb://localhost:27017/JobPortal",
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        tokenExpiry: 60,
        refreshTokenExpiry: 300,
        otpExpiry: 5,
        email: {
            'user': 'prajwalamin10@yahoo.com',
            'pass': 'ylrdnbffxbrqalxo'
        },

    },
    production: {
        mongo: {
            dbURL: process.env.MONGO_URL,
            options: {
                db: {
                    native_parser: true  //native_parser {Boolean, default:false}, use c++ bson parser.
                },
                user: process.env.MONGODBAuthUser, //get username from .env
                pass: process.env.MONGODBAuthPass, //get password from .env
                auth: {   //authenticate db
                    authdb: "admin"
                }
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        tokenExpiry: 60,
        refreshTokenExpiry: 300,
        otpExpiry: 5,
        email: {
            'user': 'prajwalamin10@yahoo.com',
            'pass': 'ylrdnbffxbrqalxo'


        },
        
    }
};

module.exports = (function () {
    var env = process.env.NODE_ENV || "development";

    return _.merge(config[env]);
})();
