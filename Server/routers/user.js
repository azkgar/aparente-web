const express = require("express");
const UserController = require("../controllers/user");
const multiparty = require("connect-multiparty");

const md_auth = require("../middleware/authenticated");
const md_upload_avatar = multiparty({uploadDir: "./uploads/avatar"});

const api = express.Router();

api.route("/signup")
.post(UserController.signUp);

api.route("/signin")
.post(UserController.signIn);

api.route("/users")
.get([md_auth.ensureAuth], UserController.getUsers);

api.route("/users-active")
.get([md_auth.ensureAuth], UserController.getUsersActive);

api.route("/upload-avatar/:id")
.put([md_auth.ensureAuth, md_upload_avatar], UserController.uploadAvatar);

api.route("/get-avatar/:avatarName")
.get(UserController.getAvatar);

api.route("/update-user/:id")
.put([md_auth.ensureAuth], UserController.updateUser);

api.route("/activate-user/:id")
.put([md_auth.ensureAuth], UserController.activateUser);

api.route("/delete-user/:id")
.delete([md_auth.ensureAuth], UserController.deleteUser);

api.route("/signup-admin")
.post([md_auth.ensureAuth], UserController.signUpAdmin);

module.exports = api;