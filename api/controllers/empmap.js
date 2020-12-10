/**
 * Project          : Eval
 * Module           : Empmap Controller File
 * Source filename  : Empmap.js
 * Description      : This file defines all the operation for Empmap module.
 * Author           : Prajwal Kiran Amin  
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

const { decode } = require("jwt-simple");
const util = require("../utils/util");
var json2xls = require('json2xls');
var fs = require("fs");
const path = require("path");

module.exports = function (mongoose, utils, config, constants, logger) {

    var Empmaps = mongoose.model('Empmaps');
    var Questionnaires = mongoose.model('Questionnaires');

    var empmapCtrl = {}



    empmapCtrl.getEmpmap = async function (req, res) {
        try {
            let data = await Empmaps.getDataById(req.params.empmapId);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            } else {
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }


    }

    empmapCtrl.getEmpmaps = async function (req, res) {

        try {
            var queryObj = {};
            queryObj.query = {};

            queryObj.query.questId = req.params.questionnaireId;

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
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaa--------", queryObj.query.questId);
            queryObj.populate = [{ path: 'empId' }, { path: 'questId' }];
            console.log(queryObj)
            let data = await Empmaps.getLists(queryObj);
            console.log("data----------------", data);
            let count = await Empmaps.getCount(queryObj.query);
            var xlsData = [];
            console.log("xls data at first ---------------", xlsData);
            if (data.length > 0) {
                data.forEach(async element => {
                    xlsData.push({ "employeeCode": element.empId.employeeCode, "employeeName": element.empId.name, "employeeEmail": element.empId.email, "questionnaireTitle": element.questId.title, "status": element.status });
                    console.log("xls data ---------------", xlsData);
                });
            }
            console.log("xls data at last ---------------", xlsData);
            try {
                var xls = json2xls(xlsData);
                fs.writeFile(path.join(__dirname, "..", "public") + '/reports' + '/report.xlsx', xls, 'binary', function (err) {
                    res.download(path.join(__dirname, "..", "public") + '/reports/' + 'report.xlsx', function (err) {
                        if (err) {
                            console.log("Error");
                            console.log(err);
                        } else {
                            console.log("Success");
                            fs.unlink(path.join(__dirname, "..", "public") + '/reports/' + 'report.xlsx', function (err) {
                                if (err) {
                                    console.error(err);
                                }
                                console.log('Temp File Delete');
                            });
                        }
                    });
                }
                )
            } catch (err) {
                console.error(err);
            }


        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }



    }
    empmapCtrl.setReminder = async function (req, res) {

        try {
            var queryObj = {};
            queryObj.query = {};

            queryObj.query.status = false;

            console.log(queryObj)




            queryObj.populate = [{ path: 'empId' }, { path: 'questId' }];
            console.log(queryObj)
            let data = await Empmaps.getLists(queryObj);
            console.log("data----------------", data);
            

            if (data.length > 0) {
                data.forEach(async element => {
                    var query = {
                        _id: element.questionnaireid,
                        startDate: { $gte: newDate() },
                        endDate: { $lte: newDate() }

                    }
                    let qstn = Questionnaires.getData(query);
                    if (qstn) {
                        if (element.status === false) {
                            await utils.send(element.empId.name, element.empId.email);
                            var empObj = {
                                $inc: { reminderCount: 1 }
                            };
                            let emp = await Empmaps.updateDataById(element._id, empObj);
                            return utils.sendResponse(req, res, emp, "SUCCESS", "SUCCESS");

                        }
                    }
                    else {
                        return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")

                    }

                });
            }


        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }



    }
    empmapCtrl.updateEmpmap = async function (req, res) {
        try {
            var empmapObj = {};
            var query = {};
            query.empId = req.user._id;

            var updateQuery = {
                questId: req.params.questionnaireId,
                empId: req.user._id,
                status: true
            };
            let data = await Empmaps.updateData(query, updateQuery);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
            } else {
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }





    return empmapCtrl;
}