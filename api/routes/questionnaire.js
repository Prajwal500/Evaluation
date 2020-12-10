/**
 * Project          : Eval
 * Module           : Questionnaire
 * Source filename  : questionnaire.js
 * Description      : Api routes for the questionnaire.
 * Author           : Prajwal Kiran Amin <prajwal.amin@robosoftin.com>
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

const express = require("express");
module.exports = function (app, mongoose, utils, config, constants, logger, upload) {
    var questionnaireCtrl = require("../controllers/questionnaire")(mongoose, utils, config, constants, logger);
    //var authenticate = require("./../auth/authMiddleware");
    var authenticateToken = require("../auth/bearer").isAuthenticated;
    //var faceBookAuthenticate = require("./../auth/bearer").faceBookAuthenticate;
    // var googleAuthenticate = require("../auth/bearer").googleAuthenticate;
    // var twitterAuthenticate = require("../auth/bearer").twitterAuthenticate;
    var questionnaireRouter = express.Router();
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

    //api to add questionnaire data
    questionnaireRouter.get("/getCount", questionnaireCtrl.getQuestionnairesCount);
    //questionnaireRouter.post("/", upload.single('image'), questionnaireCtrl.createQuestionnaire);



    //api to edit questionnaire data
    questionnaireRouter.put("/:questionnaireId", upload.single('image'), questionnaireCtrl.updateQuestionnaire);
    /**
      * @api {put} /questionnaires/:questionnaireId Save or Publish Questionnaire 
      * @apiName updateQuestionnaire
      * @apiGroup Questionnaires
      * @apiParam {String} questionnaire Questionnaires unique ID.
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/api/v1/questionnaires/null
      * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/null
      * @apiParamExample {json} Request-Example:
      *     {
      *        "questionnaire":"null"
      *     }
      *
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T03:43:47.551Z"
    },
    "pagination": {},
    "data": {
        "_id": "5fd19973cd628d50e0018948",
        "title": "safeguarding code",
        "description": "safeguards code",
        "buttonTitle": "aaaa",
        "buttonText": "bbbbb",
        "checkBoxText": "ccccc",
        "startDate": "2020-05-11T18:30:00.000Z",
        "endDate": "2020-09-11T18:30:00.000Z",
        "remindDays": 2,
        "mailBody": "hello",
        "admin": "5fcb1a2a6a717f25d17de4bc",
        "participantList": "participant.xls",
        "createdAt": "2020-12-10T03:43:47.527Z",
        "updatedAt": "2020-12-10T03:43:47.527Z",
        "__v": 0
    }
}
      *
      
      *
      * @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
    "meta": {
        "code": 500,
        "message": {
            "stringValue": "\"55555\"",
            "kind": "ObjectId",
            "value": "55555",
            "path": "_id",
            "reason": {},
            "message": "Cast to ObjectId failed for value \"55555\" at path \"_id\" for model \"Questionnaires\"",
            "name": "CastError"
        },
        "timestamp": "2020-12-10T03:50:18.452Z"
    }
}
      */

    //api to list questionnaire data
    questionnaireRouter.get("/", authenticateToken, questionnaireCtrl.getQuestionnaires);
    //questionnaireRouter.get("/generateReport", authenticateToken, questionnaireCtrl.generateReport);
    /**
          * @api {get} /questionnaires Only super Admins can access Questionnaires
          * @apiName getQuestionnaires
          * @apiGroup Questionnaires
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires
          * @apiUse Authenticate

          * @apiSuccessExample Success-Response:
          *     HTTP/1.1 200 OK
          *     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T04:05:58.898Z"
    },
    "pagination": {
        "totalCount": 1
    },
    "data": [
        {
            "_id": "5fd19973cd628d50e0018948",
            "title": "safeguarding code",
            "description": "safeguards code",
            "buttonTitle": "aaaa",
            "buttonText": "bbbbb",
            "checkBoxText": "ccccc",
            "startDate": "2020-05-11T18:30:00.000Z",
            "endDate": "2020-09-11T18:30:00.000Z",
            "remindDays": 2,
            "mailBody": "hello",
            "admin": "5fcb1a2a6a717f25d17de4bc",
            "participantList": "participant.xls",
            "createdAt": "2020-12-10T03:43:47.527Z",
            "updatedAt": "2020-12-10T03:43:47.527Z"
        }
    ]
}
          *
          
              * @apiErrorExample Error-Response:
        *     HTTP/1.1 400 Bad Request
        *     Unauthorized
          */


    //api to get details of questionnaire data
    questionnaireRouter.get("/:questionnaireId", questionnaireCtrl.getQuestionnaire);

    /**
          * @api {get} /questionnaires/:questionnaireId getting Questionnaire 
          * @apiName getQuestionnaire
          * @apiGroup Questionnaires
          * @apiParam {String} questionnaire Questionnaires unique ID.
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/5fd19973cd628d50e0018948
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/5fd19973cd628d50e0018948
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
            "timestamp": "2020-12-10T03:56:17.482Z"
        },
        "pagination": {},
        "data": {
            "_id": "5fd19973cd628d50e0018948",
            "title": "safeguarding code",
            "description": "safeguards code",
            "buttonTitle": "aaaa",
            "buttonText": "bbbbb",
            "checkBoxText": "ccccc",
            "startDate": "2020-05-11T18:30:00.000Z",
            "endDate": "2020-09-11T18:30:00.000Z",
            "remindDays": 2,
            "mailBody": "hello",
            "admin": "5fcb1a2a6a717f25d17de4bc",
            "participantList": "participant.xls",
            "createdAt": "2020-12-10T03:43:47.527Z",
            "updatedAt": "2020-12-10T03:43:47.527Z"
        }
    }
          *
          
              * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
        "meta": {
            "code": 400,
            "message": "Data does not exist",
            "timestamp": "2020-12-10T03:19:13.349Z"
        }
    }
          */

    //api to delete details of questionnaire data
    questionnaireRouter.delete("/:questionnaireId", questionnaireCtrl.deleteQuestionnaire);




    questionnaireRouter.post('/upload', upload.single('upload'), function (req, res, next) {
        var fileName = req.file ? req.file.originalname : '';
        res.send({ image: fileName });
        // console.log("file----------------------", req.file)
        // res.send({fileName:})
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
    })

    app.use("/api/v1/questionnaires", questionnaireRouter);
};
