

var passport = require("passport");
var BearerStrategy = require("passport-http-bearer").Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');
const GoogleTokenStrategy = require("passport-google-token").Strategy;
var TwitterTokenStrategy = require('passport-twitter-token');
var mongoose = require("mongoose");
var config = require("../configs/config");
var Employees = mongoose.model("Employees")
var utils = require("../utils/util");

passport.use(new BearerStrategy(
    async function (token, done) {
        try {
            console.log("-----------token", token);
            var queryObj = {
                token: token,
                tokenExpiry: { $gte: new Date() }
            };
            

            let user = await Employees.getData(queryObj);
            console.log("data",user);
            if (!user) {
                return done(null, false);
            }
            return done(null, user)

            // }) 
        } catch (error) {
            return done(error);
        }


    }
));

exports.isAuthenticated = passport.authenticate('bearer', { session: false });



