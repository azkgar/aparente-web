const express = require("express");
const UserController = require("../controllers/user");

const api = express.Router();

api.route("/signup")
.post(UserController.signUp);

module.exports = api;