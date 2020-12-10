/**
 * Project          : Eval
 * Module           : Empmap
 * Source filename  : empmap.js
 * Description      : Api routes for the empmap.
 * Author           : Prajwal Kiran Amin <prajwal.amin@robosoftin.com>
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

const express = require("express");
module.exports = function (app, mongoose, utils, config, constants, logger, upload) {
    var empmapCtrl = require("../controllers/empmap")(mongoose, utils, config, constants, logger);
    //var authenticate = require("./../auth/authMiddleware");
    var authenticateToken = require("../auth/bearer").isAuthenticated;
    
    var empmapRouter = express.Router();
    /**
    * @apiDefine Authenticate
    *
    * @apiHeader {String} Authorization bearer token obtained from login
    *
    * @apiHeaderExample {json} Header-Example:
    *     {
    *       "Authorization": "bearer f436d14e-d3dd-4678-b5e6-7f5a95a5f3ef"
    *     }
    */
    //api to add empmap data
    
    
    


    //api to edit empmap data
    empmapRouter.put("/policyStatus/:questionnaireId", authenticateToken, empmapCtrl.updateEmpmap);
    /**
      * @api {put} /empmaps/policyStatus/:questionnaireId Accepting terms 
      * @apiName updateEmpmap
      * @apiGroup Empmaps
      * @apiUse AuthorizationHeaderForEmployee
      * @apiParam {String} questionnaire Questionnaires unique ID.
      * @apiUse Authenticate
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/api/v1/empmaps/policyStatus/5fcdc733db14493110cafbf0
      * @apiSampleRequest http://localhost:4000/api/v1/empmaps/policyStatus/5fcdc733db14493110cafbf0
      * @apiParamExample {json} Request-Example:
      *     {
      *        "questionnaire":"5fd19973cd628d50e0018948"
      *     }
      *
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T04:35:03.214Z"
    },
    "pagination": {},
    "data": {
        "status": "true",
        "reminderCount": 0,
        "_id": "5fd19973cd628d50e001894a",
        "empId": "5fd19973cd628d50e0018949",
        "questId": "5fd19973cd628d50e0018948",
        "createdAt": "2020-12-10T03:43:47.584Z",
        "updatedAt": "2020-12-10T04:35:03.212Z"
    }
}
      *
      
      *
      * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     Unauthorized
      */

    //api to list empmap data
    empmapRouter.get("/:questionnaireId", empmapCtrl.getEmpmaps);
/**
      * @api {put} /empmaps/:questionnaireId Downloading into excel 
      * @apiName getEmpmaps
      * @apiGroup Empmaps
      * @apiParam {String} questionnaire Questionnaires unique ID.
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/api/v1/empmaps/5fd1bfe16f94cc0d1980511b
      * @apiSampleRequest http://localhost:4000/api/v1/empmaps/5fd1bfe16f94cc0d1980511b
      * @apiParamExample {json} Request-Example:
      *     {
      *        "questionnaire":"5fd1bfe16f94cc0d1980511b"
      *     }
      *
      
      */

    //api to get details of empmap data
    empmapRouter.get("/:empmapId", empmapCtrl.getEmpmap);


    //api to delete details of empmap data
    
    

    app.use("/api/v1/empmaps", empmapRouter);
};
