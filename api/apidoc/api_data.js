define({ "api": [
  {
    "type": "delete",
    "url": "/employees/:employeeId",
    "title": "Delete Employees",
    "name": "DeleteEmployee",
    "group": "Employees",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employee",
            "description": "<p>Employees unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"employee\":\"5fcdc733db14493110cafbf0\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/5fd1765f93729e3538dc0850",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/5fd1765f93729e3538dc0850"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"meta\": {\n         \"code\": 200,\n         \"message\": \"Success\",\n         \"timestamp\": \"2020-12-10T02:38:02.054Z\"\n     },\n     \"pagination\": {},\n     \"data\": {\n         \"employeeType\": \"employee\",\n         \"_id\": \"5fd1765f93729e3538dc0850\",\n         \"phone\": \"9901919923\",\n         \"name\": \"prajwal\",\n         \"email\": \"prajwalamin549@gmail.com\",\n         \"gender\": \"male\",\n         \"employeename\": \"G#60mK\",\n         \"createdAt\": \"2020-12-10T01:14:07.459Z\",\n         \"updatedAt\": \"2020-12-10T01:14:07.459Z\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nUnauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>bearer token obtained while login of super admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"bearer 4212c40e-c611-4048-856e-f1ac5c9de119\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/employees/addAdminOrSuperAdmin",
    "title": "Super Admin can add Admins or Super Admins",
    "name": "addEmployeeTypes",
    "group": "Employees",
    "description": "<p>API to add Admin or Super Admin</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/addAdminOrSuperAdmin",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/addAdminOrSuperAdmin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T02:53:12.219Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"employeeType\": \"admin\",\n        \"_id\": \"5fd18d982fda254a5feb1bba\",\n        \"name\": \"prajwal1111\",\n        \"email\": \"prajwalamin549@gmail.com\",\n        \"employeeCode\": \"RT0111\",\n        \"phone\": \"9901919999\",\n        \"gender\": \"male\",\n        \"employeename\": \"oAMKhW\",\n        \"password\": \"c5587235a5ec1198c45cb69b3c039cabbfe3b5b2\",\n        \"createdAt\": \"2020-12-10T02:53:12.205Z\",\n        \"updatedAt\": \"2020-12-10T02:53:12.205Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nUnauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>bearer token obtained while login of super admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"bearer 4212c40e-c611-4048-856e-f1ac5c9de119\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/employees/changePassword",
    "title": "employee can change password",
    "name": "changePassword",
    "group": "Employees",
    "description": "<p>API to change password after login</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/changePassword",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/changepassword"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T03:33:40.266Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"employeeType\": \"employee\",\n        \"_id\": \"5fcdc733db14493110cafbf0\",\n        \"phone\": \"9901919923\",\n        \"name\": \"Pajju11\",\n        \"email\": \"prajwalamin549@gmail.com\",\n        \"gender\": \"male\",\n        \"employeename\": \"z5EeZC\",\n        \"employeeCode\": \"RT0111211\",\n        \"createdAt\": \"2020-12-07T06:09:55.999Z\",\n        \"updatedAt\": \"2020-12-10T03:33:40.264Z\",\n        \"token\": \"ce0afba4-91a7-4e87-8962-8fa7d46cd2f7\",\n        \"tokenExpiry\": \"Thu Dec 10 2020 10:02:59 GMT+0530 (India Standard Time)\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nUnauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>employeeName of the employee</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"employeeName\": \"PE0iww\",\n  \"password\": \"praj\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/employees/forgotPassword",
    "title": "sends set password page link and password token",
    "name": "forgotPassword",
    "group": "Employees",
    "description": "<p>API to send forgot passsword along with password token</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/forgotPassword",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/forgotPassword"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T03:15:48.552Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"employeeType\": \"superAdmin\",\n        \"_id\": \"5fcd826202e48312ed972a16\",\n        \"name\": \"prajwal1\",\n        \"email\": \"prajwalamin549@gmail.com\",\n        \"employeeCode\": \"RT01234\",\n        \"phone\": \"9901919999\",\n        \"gender\": \"male\",\n        \"employeename\": \"PE0iww\",\n        \"createdAt\": \"2020-12-07T01:16:18.426Z\",\n        \"updatedAt\": \"2020-12-10T03:15:48.495Z\",\n        \"passwordToken\": \"22471d95-faab-493a-bb00-fcf18598e15d\",\n        \"token\": \"4212c40e-c611-4048-856e-f1ac5c9de119\",\n        \"tokenExpiry\": \"Thu Dec 10 2020 08:49:31 GMT+0530 (India Standard Time)\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"meta\": {\n        \"code\": 400,\n        \"message\": \"Data does not exist\",\n        \"timestamp\": \"2020-12-10T03:19:13.349Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees"
  },
  {
    "type": "post",
    "url": "/employees/logout",
    "title": "Employee can logout",
    "name": "logOutEmployee",
    "group": "Employees",
    "description": "<p>API to logout for a employee</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/logout",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/logout"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T02:13:23.097Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"employeeType\": \"superAdmin\",\n        \"_id\": \"5fcd826202e48312ed972a16\",\n        \"name\": \"prajwal1\",\n        \"email\": \"prajwalamin540@gmail.com\",\n        \"employeeCode\": \"RT01234\",\n        \"phone\": \"9901919999\",\n        \"gender\": \"male\",\n        \"employeename\": \"PE0iww\",\n        \"createdAt\": \"2020-12-07T01:16:18.426Z\",\n        \"updatedAt\": \"2020-12-10T02:13:23.084Z\",\n        \"passwordToken\": \"8fb6cfed-8c2e-4202-91a1-266aa9abd0e6\",\n        \"token\": \" \",\n        \"tokenExpiry\": \" \"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"meta\": {\n        \"code\": 400,\n        \"message\": \"Employee does not exist\",\n        \"timestamp\": \"2020-12-10T02:05:43.529Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>bearer token obtained while login of super admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"bearer 4212c40e-c611-4048-856e-f1ac5c9de119\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/employees/login",
    "title": "Employee can login",
    "name": "loginEmployee",
    "group": "Employees",
    "description": "<p>API to login for a employee</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/login",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/login"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T02:04:32.832Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"employeeType\": \"superAdmin\",\n        \"_id\": \"5fcd826202e48312ed972a16\",\n        \"name\": \"prajwal1\",\n        \"email\": \"prajwalamin540@gmail.com\",\n        \"employeeCode\": \"RT01234\",\n        \"phone\": \"9901919999\",\n        \"gender\": \"male\",\n        \"employeename\": \"PE0iww\",\n        \"createdAt\": \"2020-12-07T01:16:18.426Z\",\n        \"updatedAt\": \"2020-12-10T02:04:32.743Z\",\n        \"passwordToken\": \"8fb6cfed-8c2e-4202-91a1-266aa9abd0e6\",\n        \"token\": \"d0e86e35-110d-41fb-8242-db74c6ce8bd3\",\n        \"tokenExpiry\": \"Thu Dec 10 2020 08:34:32 GMT+0530 (India Standard Time)\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"meta\": {\n        \"code\": 400,\n        \"message\": \"Employee does not exist\",\n        \"timestamp\": \"2020-12-10T02:05:43.529Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>employeeName of the employee</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"employeeName\": \"PE0iww\",\n  \"password\": \"praj\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/employees/setPassword",
    "title": "employee can set password after clicking forgot password",
    "name": "setPassword",
    "group": "Employees",
    "description": "<p>API to update password at beginning</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/setPassword",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/setPassword"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T03:25:50.589Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"employeeType\": \"superAdmin\",\n        \"_id\": \"5fcd826202e48312ed972a16\",\n        \"name\": \"prajwal1\",\n        \"email\": \"prajwalamin549@gmail.com\",\n        \"employeeCode\": \"RT01234\",\n        \"phone\": \"9901919999\",\n        \"gender\": \"male\",\n        \"employeename\": \"PE0iww\",\n        \"createdAt\": \"2020-12-07T01:16:18.426Z\",\n        \"updatedAt\": \"2020-12-10T03:25:50.533Z\",\n        \"passwordToken\": \"166ef318-7952-44de-b850-e05aea88c22c\",\n        \"token\": \"4212c40e-c611-4048-856e-f1ac5c9de119\",\n        \"tokenExpiry\": \"Thu Dec 10 2020 08:49:31 GMT+0530 (India Standard Time)\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"meta\": {\n        \"code\": 400,\n        \"message\": \"Data does not exist\",\n        \"timestamp\": \"2020-12-10T03:28:27.125Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees"
  },
  {
    "type": "put",
    "url": "/employees/:employeeId",
    "title": "Super Admin updates employees",
    "name": "updateEmployee",
    "group": "Employees",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employee",
            "description": "<p>Employees unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"employee\":\"5fcdc733db14493110cafbf0\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/employees/5fcdc733db14493110cafbf0",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/employees/5fcdc733db14493110cafbf0"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T02:20:38.263Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"employeeType\": \"employee\",\n        \"_id\": \"5fcdc733db14493110cafbf0\",\n        \"phone\": \"9901919923\",\n        \"name\": \"Pajju11\",\n        \"email\": \"prajwalamin549@gmail.com\",\n        \"gender\": \"male\",\n        \"employeename\": \"z5EeZC\",\n        \"employeeCode\": \"RT0111211\",\n        \"createdAt\": \"2020-12-07T06:09:55.999Z\",\n        \"updatedAt\": \"2020-12-10T02:20:38.260Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nUnauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/employee.js",
    "groupTitle": "Employees",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>bearer token obtained while login of super admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"bearer 4212c40e-c611-4048-856e-f1ac5c9de119\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/empmaps/:questionnaireId",
    "title": "Downloading into excel",
    "name": "getEmpmaps",
    "group": "Empmaps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaires unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"questionnaire\":\"5fd1bfe16f94cc0d1980511b\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/empmaps/5fd1bfe16f94cc0d1980511b",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/empmaps/5fd1bfe16f94cc0d1980511b"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/empmap.js",
    "groupTitle": "Empmaps"
  },
  {
    "type": "put",
    "url": "/empmaps/policyStatus/:questionnaireId",
    "title": "Accepting terms",
    "name": "updateEmpmap",
    "group": "Empmaps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaires unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"questionnaire\":\"5fd19973cd628d50e0018948\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/empmaps/policyStatus/5fcdc733db14493110cafbf0",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/empmaps/policyStatus/5fcdc733db14493110cafbf0"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T04:35:03.214Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"status\": \"true\",\n        \"reminderCount\": 0,\n        \"_id\": \"5fd19973cd628d50e001894a\",\n        \"empId\": \"5fd19973cd628d50e0018949\",\n        \"questId\": \"5fd19973cd628d50e0018948\",\n        \"createdAt\": \"2020-12-10T03:43:47.584Z\",\n        \"updatedAt\": \"2020-12-10T04:35:03.212Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nUnauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/empmap.js",
    "groupTitle": "Empmaps",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>bearer token obtained while login of super admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"bearer 4212c40e-c611-4048-856e-f1ac5c9de119\"\n}",
          "type": "json"
        },
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"bearer f436d14e-d3dd-4678-b5e6-7f5a95a5f3ef\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/questionnaires/:questionnaireId",
    "title": "getting Questionnaire",
    "name": "getQuestionnaire",
    "group": "Questionnaires",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaires unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"questionnaire\":\"5fd19973cd628d50e0018948\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/5fd19973cd628d50e0018948",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/5fd19973cd628d50e0018948"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T03:56:17.482Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"_id\": \"5fd19973cd628d50e0018948\",\n        \"title\": \"safeguarding code\",\n        \"description\": \"safeguards code\",\n        \"buttonTitle\": \"aaaa\",\n        \"buttonText\": \"bbbbb\",\n        \"checkBoxText\": \"ccccc\",\n        \"startDate\": \"2020-05-11T18:30:00.000Z\",\n        \"endDate\": \"2020-09-11T18:30:00.000Z\",\n        \"remindDays\": 2,\n        \"mailBody\": \"hello\",\n        \"admin\": \"5fcb1a2a6a717f25d17de4bc\",\n        \"participantList\": \"participant.xls\",\n        \"createdAt\": \"2020-12-10T03:43:47.527Z\",\n        \"updatedAt\": \"2020-12-10T03:43:47.527Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"meta\": {\n        \"code\": 400,\n        \"message\": \"Data does not exist\",\n        \"timestamp\": \"2020-12-10T03:19:13.349Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaires"
  },
  {
    "type": "get",
    "url": "/questionnaires",
    "title": "Only super Admins can access Questionnaires",
    "name": "getQuestionnaires",
    "group": "Questionnaires",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T04:05:58.898Z\"\n    },\n    \"pagination\": {\n        \"totalCount\": 1\n    },\n    \"data\": [\n        {\n            \"_id\": \"5fd19973cd628d50e0018948\",\n            \"title\": \"safeguarding code\",\n            \"description\": \"safeguards code\",\n            \"buttonTitle\": \"aaaa\",\n            \"buttonText\": \"bbbbb\",\n            \"checkBoxText\": \"ccccc\",\n            \"startDate\": \"2020-05-11T18:30:00.000Z\",\n            \"endDate\": \"2020-09-11T18:30:00.000Z\",\n            \"remindDays\": 2,\n            \"mailBody\": \"hello\",\n            \"admin\": \"5fcb1a2a6a717f25d17de4bc\",\n            \"participantList\": \"participant.xls\",\n            \"createdAt\": \"2020-12-10T03:43:47.527Z\",\n            \"updatedAt\": \"2020-12-10T03:43:47.527Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nUnauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaires",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>bearer token obtained from login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"bearer f436d14e-d3dd-4678-b5e6-7f5a95a5f3ef\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/questionnaires/:questionnaireId",
    "title": "Save or Publish Questionnaire",
    "name": "updateQuestionnaire",
    "group": "Questionnaires",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionnaire",
            "description": "<p>Questionnaires unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"questionnaire\":\"null\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/null",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/null"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-12-10T03:43:47.551Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"_id\": \"5fd19973cd628d50e0018948\",\n        \"title\": \"safeguarding code\",\n        \"description\": \"safeguards code\",\n        \"buttonTitle\": \"aaaa\",\n        \"buttonText\": \"bbbbb\",\n        \"checkBoxText\": \"ccccc\",\n        \"startDate\": \"2020-05-11T18:30:00.000Z\",\n        \"endDate\": \"2020-09-11T18:30:00.000Z\",\n        \"remindDays\": 2,\n        \"mailBody\": \"hello\",\n        \"admin\": \"5fcb1a2a6a717f25d17de4bc\",\n        \"participantList\": \"participant.xls\",\n        \"createdAt\": \"2020-12-10T03:43:47.527Z\",\n        \"updatedAt\": \"2020-12-10T03:43:47.527Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n    \"meta\": {\n        \"code\": 500,\n        \"message\": {\n            \"stringValue\": \"\\\"55555\\\"\",\n            \"kind\": \"ObjectId\",\n            \"value\": \"55555\",\n            \"path\": \"_id\",\n            \"reason\": {},\n            \"message\": \"Cast to ObjectId failed for value \\\"55555\\\" at path \\\"_id\\\" for model \\\"Questionnaires\\\"\",\n            \"name\": \"CastError\"\n        },\n        \"timestamp\": \"2020-12-10T03:50:18.452Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaires"
  }
] });
