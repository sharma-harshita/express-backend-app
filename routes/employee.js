const express = require("express");
const employeeController = require("../controllers/employee")
const employeeRouter = express.Router();

employeeRouter.route("/details/:id")
    .get(employeeController.employeeGet)



// when you have url params in your api
employeeRouter.route("/details/:id")
.get(employeeController.employeeGet)


module.exports = employeeRouter