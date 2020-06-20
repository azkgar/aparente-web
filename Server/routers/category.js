const express = require("express");
const multiparty = require("connect-multiparty");
const CategoryController = require("../controllers/category");

const md_upload_cover = multiparty({uploadDir: "./uploads/categories"});
const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/add-category", [md_auth.ensureAuth], CategoryController.addCategory);

api.get("/get-categories", CategoryController.getCategories);

api.put("/update-category/:id", [md_auth.ensureAuth], CategoryController.updateCategory);

api.put("/activate-category/:id", [md_auth.ensureAuth], CategoryController.activateCategory);

api.delete("/delete-category/:id", [md_auth.ensureAuth], CategoryController.deleteCategory);

api.route("/upload-category-cover/:id")
.put([md_auth.ensureAuth, md_upload_cover], CategoryController.uploadCover);

api.route("/get-category-cover/:avatarName")
.get(CategoryController.getCover);

api.route("/get-category/:tag")
.get(CategoryController.getCategory);

module.exports = api;