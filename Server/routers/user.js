const express = require("express");
const UserController = require("../controllers/user");

const api = express.Router();

api.route("/signup")
.post(UserController.signUp);

api.route("/signin")
.post(UserController.signIn);

module.exports = api;