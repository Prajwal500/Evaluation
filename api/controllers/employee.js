/**
 * Project          : Eval
 * Module           : Employee Controller File
 * Source filename  : Employee.js
 * Description      : This file defines all the operation for Employee module.
 * Author           : Prajwal Kiran Amin  
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

const { decode } = require("jwt-simple");
const util = require("../utils/util");
// The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
module.exports = function (mongoose, utils, config, constants, logger) {

    var Employees = mongoose.model('Employees');
    var employeeCtrl = {}
    employeeCtrl.createEmployee = async function (req, res) {
        try {
            var employeeObj = {};
                if (req.body.name) {
                    employeeObj.name = req.body.name;
                }
                if (req.body.email) {
                    employeeObj.email = req.body.email;
                }
                if (req.body.employeeCode) {
                    employeeObj.employeeCode = req.body.employeeCode;
                }
                
                if (req.body.phone) {
                    employeeObj.phone = req.body.phone;
                }
                if (req.body.gender) {
                    employeeObj.gender = req.body.gender;
                }
                if (req.body.employeeType) {
                    employeeObj.employeeType = req.body.employeeType;
                }

                
                let otp = utils.generateOtp();
                employeeObj.employeename = otp;
                employeeObj.password = await utils.encryptPassword(otp);
                console.log("password", employeeObj.password);
                console.log("employeeType", employeeObj.employeeType);
                await utils.sendMail(employeeObj.name, employeeObj.email, employeeObj.password, employeeObj.employeeType, employeeObj.employeename);


                let data = await Employees.addData(employeeObj);
                console.log("________________data", data);
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");

        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }



    }
    
    employeeCtrl.loginEmployee = async function (req, res) {
        try {

            var query = {};
            
            query.employeename = req.headers['employeename']
            query.password = req.headers['password']
            console.log("--------queryPassword", query.password);
            let data = await Employees.getData(query);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            } else {
                
                data.token = await utils.generateBearerToken();
                
                data.tokenExpiry = await utils.generateExpiryTime();

                data = await Employees.updateDataById(data._id, { token: data.token, tokenExpiry: data.tokenExpiry });
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
    employeeCtrl.logOutEmployee = async function (req, res) {
        try {

            let data = await Employees.getData(req.user._id);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            } else {
                data.token = " ";
                data.tokenExpiry = " ";

                data = await Employees.updateDataById(data._id, { token: data.token, tokenExpiry: data.tokenExpiry });
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
    employeeCtrl.addEmployeeTypes = async function (req, res) {
        try {
            if (req.employee && req.employee.employeeType === 'superAdmin') {
                var employeeObj = {};
                if (req.body.name) {
                    employeeObj.name = req.body.name;
                }
                if (req.body.email) {
                    employeeObj.email = req.body.email;
                }
                if (req.body.employeeCode) {
                    employeeObj.employeeCode = req.body.employeeCode;
                }
                if (req.body.phone) {
                    employeeObj.phone = req.body.phone;
                }
                if (req.body.gender) {
                    employeeObj.gender = req.body.gender;
                }
                if (req.body.employeeType) {
                    employeeObj.employeeType = req.body.employeeType;
                }

                let otp = utils.generateOtp();
                employeeObj.employeename = otp;
                employeeObj.password = await utils.encryptPassword(otp);
                console.log("password", employeeObj.password);
                console.log("employeeType", employeeObj.employeeType);
                await utils.sendMail(employeeObj.name, employeeObj.email, employeeObj.password, employeeObj.employeeType, employeeObj.employeename);

                let data = await Employees.addData(employeeObj);
                console.log("________________data", data);
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }
            else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }


        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }



    }
    employeeCtrl.forgotPassword = async function (req, res) {
        try {
            var query = {};
            query.email = req.body.email;
            let data = await Employees.getData(query);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
            }
            else {
                var token = await utils.generateBearerToken();
                var tokenExpiry = await utils.generateExpiryTime();
                var updateObj = {
                    passwordToken: token,
                    passwordTokenExpiry: tokenExpiry
                }
                let employee = await Employees.updateDataById(data._id, updateObj);
                await utils.sendMaill(employee.name, employee.email, employee.passwordToken);
                return utils.sendResponse(req, res, employee, "SUCCESS", "SUCCESS");
            }





        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }


    }
    employeeCtrl.setPassword = async function (req, res) {
        try {
            var employeeObj = {};
            var pass = req.body.passwordToken;
            if (req.body.password) {
                employeeObj.password = req.body.password;
            }
            var queryObj = {
                passwordToken: pass,
                passwordTokenExpiry: { $gte: new Date() }
            };
            let employee = await Employees.getData(queryObj);
            if (!employee) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
            }

            let data = await Employees.updateDataById(employee._id, employeeObj);
            return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }


    }
    employeeCtrl.changePassword = async function (req, res) {
        try {
            
            var employeeObj = {};
            if (req.body.password) {
                employeeObj.password = req.body.password;
            }
            let data = await Employees.updateDataById(req.user._id, employeeObj);
            return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }


    }



    

    employeeCtrl.getEmployee = async function (req, res) {
        try {
            let data = await Employees.getDataById(req.params.employeeId);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            } else {
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }


    }

    employeeCtrl.getEmployees = async function (req, res) {

        try {
            var queryObj = {};
            queryObj.query = {};
            if (req.query.name) {
                queryObj.query.name = req.query.name;
            }
            console.log(queryObj)
            queryObj.options = {

            };
            if (req.query.limit) {
                queryObj.options.limit = JSON.parse(req.query.limit)
            }
            if (req.query.skip) {
                queryObj.options.skip = JSON.parse(req.query.skip);
            }
            if (req.query.sortField && req.query.sortOrder) {
                console.log("------------------sortField", req.query.sortField, req.query.sortOrder);
                var sortField = req.query.sortField;
                var sortOrder = req.query.sortOrder;
                queryObj.options.sort = { [`${sortField}`]: JSON.parse(sortOrder) };
            };
            // }
            if (req.query.searchText) {
                queryObj.query.name = { $regex: req.query.searchText, $options: 'i' }
            };
            console.log(queryObj)
            let data = await Employees.getLists(queryObj);
            let count = await Employees.getCount(queryObj.query);
            return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS", count);


        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }



    }
    employeeCtrl.updateEmployee = async function (req, res) {
        try {

            if (req.employee && req.employee.employeeType === 'superAdmin') {

                var employeeObj = {};

                if (req.body.name) {
                    employeeObj.name = req.body.name;
                }
                if (req.body.email) {
                    employeeObj.email = req.body.email;
                }
                if (req.body.employeeCode) {
                    employeeObj.employeeCode = req.body.employeeCode;
                }
                if (req.body.phone) {
                    employeeObj.phone = req.body.phone;
                }
                if (req.body.gender) {
                    employeeObj.gender = req.body.gender;
                }
                if (req.body.employeeType) {
                    employeeObj.employeeType = req.body.employeeType;
                }
                let data = await Employees.getDataById(req.params.employeeId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                }
                else {
                    let data = await Employees.updateDataById(req.params.employeeId, employeeObj);
                    if (!data) {
                        return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                    } else {
                        return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                    }
                }

            }
            else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");

            }




        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

    employeeCtrl.deleteEmployee = async function (req, res) {
        try {
            if (req.employee && req.employee.employeeType === 'superAdmin') {
                let data = await Employees.removeDataById(req.params.employeeId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            }
            else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");

            }


        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
    employeeCtrl.getEmployeesCount = async function (req, res) {
        // logger.info("*********")s
        try {
            let data = await Employees.aggregate([
                {
                    $group: {
                        _id: null,
                        count: { $sum: 1 }
                    }
                }


            ]);
            // console.log("---data", data)
            logger.info("----data", data)
            return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");

        } catch (error) {
            console.log("------err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    
    

    return employeeCtrl;
}