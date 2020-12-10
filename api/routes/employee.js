/**
 * Project          : Eval
 * Module           : Employee
 * Source filename  : employee.js
 * Description      : Api routes for the employee.
 * Author           : Prajwal Kiran Amin <prajwal.amin@robosoftin.com>
 * Copyright        : Copyright © 2020, Eval
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

const express = require("express");
const { generateBearerToken } = require("../utils/util");
module.exports = function (app, mongoose, utils, config, constants, logger, upload) {
    var employeeCtrl = require("../controllers/employee")(mongoose, utils, config, constants, logger);

    var authenticateToken = require("../auth/bearer").isAuthenticated;

    var employeeRouter = express.Router();
    /**
* @apiDefine AuthorizationHeader
*
* @apiHeader {String} employeeName employeeName of the employee
*
* @apiHeader {String} password password of the employee
*
* @apiHeaderExample {json} Header-Example:
*     {
*       "employeeName": "PE0iww",
*       "password": "praj"
*     }
*/
    /**
   * @apiDefine AuthorizationHeaderForEmployee
   *
   * @apiHeader {String} Authorization bearer token obtained while login of super admin
   *
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Authorization": "bearer 4212c40e-c611-4048-856e-f1ac5c9de119"
   *     }
   */

    

    //api to add employee data
    employeeRouter.get("/getCount", employeeCtrl.getEmployeesCount);
    //employeeRouter.post("/", upload.single('image'), employeeCtrl.createEmployee);
    employeeRouter.post("/", employeeCtrl.createEmployee);

    employeeRouter.post("/login", employeeCtrl.loginEmployee);
    /**
* @api {post} /employees/login Employee can login
* @apiName loginEmployee
* @apiGroup Employees
* @apiDescription API to login for a employee
* @apiUse AuthorizationHeader
* @apiExample {curl} Example usage:
*     curl -i http://localhost:4000/api/v1/employees/login
* @apiSampleRequest http://localhost:4000/api/v1/employees/login
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T02:04:32.832Z"
    },
    "pagination": {},
    "data": {
        "employeeType": "superAdmin",
        "_id": "5fcd826202e48312ed972a16",
        "name": "prajwal1",
        "email": "prajwalamin540@gmail.com",
        "employeeCode": "RT01234",
        "phone": "9901919999",
        "gender": "male",
        "employeename": "PE0iww",
        "createdAt": "2020-12-07T01:16:18.426Z",
        "updatedAt": "2020-12-10T02:04:32.743Z",
        "passwordToken": "8fb6cfed-8c2e-4202-91a1-266aa9abd0e6",
        "token": "d0e86e35-110d-41fb-8242-db74c6ce8bd3",
        "tokenExpiry": "Thu Dec 10 2020 08:34:32 GMT+0530 (India Standard Time)"
    }
}
*
 
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
    "meta": {
        "code": 400,
        "message": "Employee does not exist",
        "timestamp": "2020-12-10T02:05:43.529Z"
    }
}
*/


    employeeRouter.post("/logout",authenticateToken,employeeCtrl.logOutEmployee);
    /**
* @api {post} /employees/logout Employee can logout
* @apiName logOutEmployee
* @apiGroup Employees
* @apiDescription API to logout for a employee
* @apiUse AuthorizationHeaderForEmployee
* @apiExample {curl} Example usage:
*     curl -i http://localhost:4000/api/v1/employees/logout
* @apiSampleRequest http://localhost:4000/api/v1/employees/logout
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T02:13:23.097Z"
    },
    "pagination": {},
    "data": {
        "employeeType": "superAdmin",
        "_id": "5fcd826202e48312ed972a16",
        "name": "prajwal1",
        "email": "prajwalamin540@gmail.com",
        "employeeCode": "RT01234",
        "phone": "9901919999",
        "gender": "male",
        "employeename": "PE0iww",
        "createdAt": "2020-12-07T01:16:18.426Z",
        "updatedAt": "2020-12-10T02:13:23.084Z",
        "passwordToken": "8fb6cfed-8c2e-4202-91a1-266aa9abd0e6",
        "token": " ",
        "tokenExpiry": " "
    }
}
*
 
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
    "meta": {
        "code": 400,
        "message": "Employee does not exist",
        "timestamp": "2020-12-10T02:05:43.529Z"
    }
}
*/

    employeeRouter.put("/:employeeId", authenticateToken, employeeCtrl.updateEmployee);
    /**
      * @api {put} /employees/:employeeId Super Admin updates employees 
      * @apiName updateEmployee
      * @apiGroup Employees
      * @apiUse AuthorizationHeaderForEmployee
      * @apiParam {String} employee Employees unique ID.
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/api/v1/employees/5fcdc733db14493110cafbf0
      * @apiSampleRequest http://localhost:4000/api/v1/employees/5fcdc733db14493110cafbf0
      * @apiParamExample {json} Request-Example:
      *     {
      *        "employee":"5fcdc733db14493110cafbf0"
      *     }
      *
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
        "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-12-10T02:20:38.263Z"
        },
        "pagination": {},
        "data": {
            "employeeType": "employee",
            "_id": "5fcdc733db14493110cafbf0",
            "phone": "9901919923",
            "name": "Pajju11",
            "email": "prajwalamin549@gmail.com",
            "gender": "male",
            "employeename": "z5EeZC",
            "employeeCode": "RT0111211",
            "createdAt": "2020-12-07T06:09:55.999Z",
            "updatedAt": "2020-12-10T02:20:38.260Z"
        }
    }
      *
      
      *
      * @apiErrorExample Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     Unauthorized
      */

    //api to edit employee data
    //employeeRouter.put("/:employeeId", employeeCtrl.updateEmployee);

    //api to list employee data
    employeeRouter.get("/", employeeCtrl.getEmployees);


    //api to get details of employee data
    employeeRouter.get("/:employeeId", employeeCtrl.getEmployee);


    //api to delete details of employee data
    employeeRouter.delete("/:employeeId", authenticateToken, employeeCtrl.deleteEmployee);

    /**
        * @api {delete} /employees/:employeeId Delete Employees
        * @apiName DeleteEmployee
        * @apiGroup Employees
        * @apiUse AuthorizationHeaderForEmployee
         * @apiParam {String} employee Employees unique ID.
          * @apiParamExample {json} Request-Example:
          *     {
          *        "employee":"5fcdc733db14493110cafbf0"
          *     }
          *
       
       * @apiExample {curl} Example usage:
        *     curl -i http://localhost:4000/api/v1/employees/5fd1765f93729e3538dc0850
        * @apiSampleRequest http://localhost:4000/api/v1/employees/5fd1765f93729e3538dc0850
        * @apiSuccessExample Success-Response:
        *     HTTP/1.1 200 OK
        *    {
        "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-12-10T02:38:02.054Z"
        },
        "pagination": {},
        "data": {
            "employeeType": "employee",
            "_id": "5fd1765f93729e3538dc0850",
            "phone": "9901919923",
            "name": "prajwal",
            "email": "prajwalamin549@gmail.com",
            "gender": "male",
            "employeename": "G#60mK",
            "createdAt": "2020-12-10T01:14:07.459Z",
            "updatedAt": "2020-12-10T01:14:07.459Z"
        }
    }
        *
         * @apiErrorExample Error-Response:
        *     HTTP/1.1 400 Bad Request
        *     Unauthorized
       
        */




    employeeRouter.post("/addAdminOrSuperAdmin", authenticateToken, employeeCtrl.addEmployeeTypes);
    /**
* @api {post} /employees/addAdminOrSuperAdmin Super Admin can add Admins or Super Admins
* @apiName addEmployeeTypes
* @apiGroup Employees
* @apiDescription API to add Admin or Super Admin
* @apiUse AuthorizationHeaderForEmployee
* @apiExample {curl} Example usage:
*     curl -i http://localhost:4000/api/v1/employees/addAdminOrSuperAdmin
* @apiSampleRequest http://localhost:4000/api/v1/employees/addAdminOrSuperAdmin
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T02:53:12.219Z"
    },
    "pagination": {},
    "data": {
        "employeeType": "admin",
        "_id": "5fd18d982fda254a5feb1bba",
        "name": "prajwal1111",
        "email": "prajwalamin549@gmail.com",
        "employeeCode": "RT0111",
        "phone": "9901919999",
        "gender": "male",
        "employeename": "oAMKhW",
        "password": "c5587235a5ec1198c45cb69b3c039cabbfe3b5b2",
        "createdAt": "2020-12-10T02:53:12.205Z",
        "updatedAt": "2020-12-10T02:53:12.205Z",
        "__v": 0
    }
}
*
 
*
* @apiErrorExample Error-Response:
        *     HTTP/1.1 400 Bad Request
        *     Unauthorized
*/
    employeeRouter.post("/forgotPassword", employeeCtrl.forgotPassword);
    /**
* @api {post} /employees/forgotPassword sends set password page link and password token
* @apiName forgotPassword
* @apiGroup Employees
* @apiDescription API to send forgot passsword along with password token
* @apiExample {curl} Example usage:
*     curl -i http://localhost:4000/api/v1/employees/forgotPassword
* @apiSampleRequest http://localhost:4000/api/v1/employees/forgotPassword
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T03:15:48.552Z"
    },
    "pagination": {},
    "data": {
        "employeeType": "superAdmin",
        "_id": "5fcd826202e48312ed972a16",
        "name": "prajwal1",
        "email": "prajwalamin549@gmail.com",
        "employeeCode": "RT01234",
        "phone": "9901919999",
        "gender": "male",
        "employeename": "PE0iww",
        "createdAt": "2020-12-07T01:16:18.426Z",
        "updatedAt": "2020-12-10T03:15:48.495Z",
        "passwordToken": "22471d95-faab-493a-bb00-fcf18598e15d",
        "token": "4212c40e-c611-4048-856e-f1ac5c9de119",
        "tokenExpiry": "Thu Dec 10 2020 08:49:31 GMT+0530 (India Standard Time)"
    }
}
*
 
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
    employeeRouter.post("/setPassword", employeeCtrl.setPassword);
    /**
* @api {post} /employees/setPassword employee can set password after clicking forgot password
* @apiName setPassword
* @apiGroup Employees
* @apiDescription API to update password at beginning
* @apiExample {curl} Example usage:
*     curl -i http://localhost:4000/api/v1/employees/setPassword
* @apiSampleRequest http://localhost:4000/api/v1/employees/setPassword
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T03:25:50.589Z"
    },
    "pagination": {},
    "data": {
        "employeeType": "superAdmin",
        "_id": "5fcd826202e48312ed972a16",
        "name": "prajwal1",
        "email": "prajwalamin549@gmail.com",
        "employeeCode": "RT01234",
        "phone": "9901919999",
        "gender": "male",
        "employeename": "PE0iww",
        "createdAt": "2020-12-07T01:16:18.426Z",
        "updatedAt": "2020-12-10T03:25:50.533Z",
        "passwordToken": "166ef318-7952-44de-b850-e05aea88c22c",
        "token": "4212c40e-c611-4048-856e-f1ac5c9de119",
        "tokenExpiry": "Thu Dec 10 2020 08:49:31 GMT+0530 (India Standard Time)"
    }
}
*
 
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
    "meta": {
        "code": 400,
        "message": "Data does not exist",
        "timestamp": "2020-12-10T03:28:27.125Z"
    }
}
*/


    employeeRouter.post("/changePassword", authenticateToken, employeeCtrl.changePassword);

/**
* @api {post} /employees/changePassword employee can change password
* @apiName changePassword
* @apiGroup Employees
* @apiDescription API to change password after login
* @apiUse AuthorizationHeader
* @apiExample {curl} Example usage:
*     curl -i http://localhost:4000/api/v1/employees/changePassword
* @apiSampleRequest http://localhost:4000/api/v1/employees/changepassword
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-12-10T03:33:40.266Z"
    },
    "pagination": {},
    "data": {
        "employeeType": "employee",
        "_id": "5fcdc733db14493110cafbf0",
        "phone": "9901919923",
        "name": "Pajju11",
        "email": "prajwalamin549@gmail.com",
        "gender": "male",
        "employeename": "z5EeZC",
        "employeeCode": "RT0111211",
        "createdAt": "2020-12-07T06:09:55.999Z",
        "updatedAt": "2020-12-10T03:33:40.264Z",
        "token": "ce0afba4-91a7-4e87-8962-8fa7d46cd2f7",
        "tokenExpiry": "Thu Dec 10 2020 10:02:59 GMT+0530 (India Standard Time)"
    }
}
*
 
*
* @apiErrorExample Error-Response:
        *     HTTP/1.1 400 Bad Request
        *     Unauthorized
*/


    app.use("/api/v1/employees", employeeRouter);
};

