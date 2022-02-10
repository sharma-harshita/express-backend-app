const express = require("express");
const employeeController = require("../controllers/employee")
const employeeRouter = express.Router();

employeeRouter.route("/details")
    .get(employeeController.employeeGet)


module.exports = employeeRouter