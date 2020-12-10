/**
 * Project          : Eval
 * Module           : Utilities
 * Source filename  : utility.js
 * Description      : Utility functions for multiple modules.
 * Author           : Prajwal Kiran Amin 
 * Copyright        : Copyright © 2020, Eval
 *                     Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";
var _ = require("lodash");
var jwt = require("jwt-simple");
const { v4: uuidv4 } = require('uuid');
var otpGenerator = require('otp-generator')
var CryptoJS = require("crypto-js");
var constants = require("./../configs/constants.js");
var config = require("./../configs/config.js");
var fs = require("fs");
const CODE = constants.code;
const MSG = constants.text;
var servicePath = config.root + "/services/";
var services = {};
fs.readdirSync(servicePath).forEach(function (file) {
    services[file] = require(servicePath + file);
});
module.exports = {


    //generic format function for sending error response
    notifyError: function (req, res, httpStatus, code, message, extraMsg) {
        console.log("-----httpStatus", httpStatus, '----code', code, '----message', message.errors, '---extraMsg', extraMsg)
        //setting http status code for response      
        httpStatus = (typeof httpStatus === "undefined") ? 400 : CODE[httpStatus];

        if (!code) {
            code = "ERR";
        }

        if (!message) {
            message = "ERR";
        }
        var errorMsg = MSG[message];
        if (extraMsg) {
            errorMsg = extraMsg + " : " + errorMsg;
        }
        
        if (message.errors) {
            message = message.message
        }
        res.status(httpStatus)
            .json({
                meta: {
                    code: CODE[code],
                    message: message,
                    timestamp: new Date().toISOString()
                }
            });
    },

    sendCustomError: function (req, res, code, message) {
        

        res.status(CODE[code])
            .json({
                meta: {
                    code: CODE[code],
                    message: MSG[message],
                    timestamp: new Date().toISOString()
                }
            });
    },


    sendAuthError: function (req, res, code, message) {
        

        res.status(CODE[code])
            .json({
                meta: {
                    code: CODE[code],
                    message: MSG[message],
                    timestamp: new Date().toISOString()
                }
            });
    },
    //generic format function for sending Success response
    sendResponse: function (req, res, data, code, message, count) {
        
        var skip;
        var limit;
        res.status(CODE[code]).json({
            meta: {
                code: CODE[code],
                message: MSG[message],
                timestamp: new Date().toISOString()
            },
            pagination: {
                skip: skip,
                limit: limit,
                totalCount: count
            },
            data: data
        });
    },


    sendDBError: function (req, res, err) {
        // console.log("-----err code--------", err.code, err.errmsg)

        if (err && err.code === 11000) {
            return module.exports.sendCustomError(req, res, "CONFLICT", "DB_DUPLICATE", "DB_DUPLICATE");
        } else {
            return module.exports.notifyError(req, res, "HTTP_ERR", "DB_ERR", err);
        }
    },

    sendDBCallbackErrs: function (req, res, err, data) {
        if (err) {
            return module.exports.sendDBError(req, res, err);
        } else {

            if (!data) {
                data = {};
            }
            return module.exports.sendResponse(req, res, "SUCCESS", data, "NO_RECORDS", "NO_RECORDS");
        }
    },


    dbCallbackHandler: function (req, res, data, err) {
        if (!err && data) {
            return module.exports.sendResponse(req, res, "SUCCESS", data);
        } else {
            return module.exports.sendDBCallbackErrs(req, res, err, data);
        }
    },
    encryptPassword: function (password) {
        var ciphertext = CryptoJS.HmacSHA1(password, config.passwordSecret).toString();
        return ciphertext;

    },
    generateToken: function (payload) {
        var token = jwt.encode(payload, config.jwtTokenSecret);
        return token;
    },
    generateRefreshToken: function (payload) {
        payload.isRefresh = true;
        var token = jwt.encode(payload, config.jwtTokenSecret);
        return token;
    },
    generateExpiryTime: function () {
        var currentDate = new Date();
        
        var tokenExpiry = new Date(currentDate.setMinutes(currentDate.getMinutes() + config.tokenExpiry));
        
        return tokenExpiry;

    },
    generateRefreshTokenExpiry: function () {
        var currentDate = new Date();
        
        var tokenExpiry = new Date(currentDate.setMinutes(currentDate.getMinutes() + config.refreshTokenExpiry));
        
        return tokenExpiry;
    },
    verifyToken: function (token, cb) {
        var payload;
        
        try {
            payload = jwt.decode(token, config.jwtTokenSecret);
            cb(null, payload)
        } catch (err) {
            return cb(err, null)
        }
    },
    verifyToken: function (token) {
        var payload;
        
        try {
            payload = jwt.decode(token, config.jwtTokenSecret);
            return payload;
            
        } catch (err) {
            return err;
        }
    },
    generateBearerToken: function () {
        return uuidv4();
    },
    generateOtp: function () {
        var otp = otpGenerator.generate(6, { upperCase: true, specialChars: true, alphabets: true });
        return otp;
    },
    generateOtpExpiryTime: function () {
        var currentDate = new Date();
        var otpExpiry = new Date(currentDate.setMinutes(currentDate.getMinutes() + config.otpExpiry));
        return otpExpiry;
    },

    sendMail: function (name, email, password, userType, username) {
        let intro = `Your role has been added as ${userType} and this your username ${username} and password ${password}`;
        console.log("*************")
        services.email.sendMail(name, email, intro, function (err, data) {
            console.log("err", err, "data", data)
        })
    },
    send: function (name, email) {
        let intro = `reminder to accept the questionnaire`;
        console.log("*************")
        services.email.sendMail(name, email, intro, function (err, data) {
            console.log("err", err, "data", data)
        })
    },
    
    sendMaill: function (name, email, token) {
        let intro = ` This is link to set password https:// policy.robosoftin.com/setpassword?token=${token}`;
        console.log("*************")
        services.email.sendMail(name, email, intro, function (err, data) {
            console.log("err", err, "data", data)
        })
    },
    sendMails: function (name, email, password, userType, mailbody) {
        let intro = `${mailbody} Your role has been added as ${userType} and this your password ${password}`;
        console.log("*************")
        services.email.sendMail(name, email, intro, function (err, data) {
            console.log("err", err, "data", data)
        })
    },
    excelToJson: function () {
        try {
            Exceltojson({}, function (err, result) {
                return result
            })
        } catch {
            return err;
        }
    }


};
