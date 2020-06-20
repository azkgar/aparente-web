const fs = require("fs");
const path = require("path");
const Category = require("../models/category");

function addCategory(req, res) {
    const {tag, active, avatar, order} = req.body;
    const category = new Category();
    category.tag = tag;
    category.active = active;
    category.avatar = avatar;
    category.order = order;

    category.save((err, createdCategory) => {
        if(err) {
            res.status(500).send({message: "Error del servidor"});
        } else {
            if(!createdCategory) {
                res.status(404).send({message: "Error al crear la categoría"});
            } else {
                res.status(200).send({message: "Categoría creada"});
            }
        }
    });
}

function getCategories(req, res) {
    Category.find().sort({order: "asc"}).exec((err, categoriesStored) => {
        if(err) {
            res.status(500).send({message: "Error del servidor"});
        } else {
            if(!categoriesStored) {
                res.status(404).send({message: "No se encontró ningúna categoría"});
            } else {
                res.status(200).send({category: categoriesStored});
            }
        }
    });
}

function updateCategory(req, res) {
    let categoryData = req.body;
    const params = req.params;

    Category.findByIdAndUpdate(params.id, categoryData, (err, categoryUpdate) => {
        if(err) {
            res.status(500).send({message: "Error del servidor"});
        } else {
            if(!categoryUpdate) {
                res.status(404).send({message: "No se encontró la categoría"});
            } else {
                res.status(200).send({message: "Categoría actualizada"});
            }
        }
    });
}

function activateCategory(req,res) {
    const {id} = req.params;
    const {active} = req.body;

    Category.findByIdAndUpdate(id, {active}, (err, categoryUpdate) => {
        if(err) {
            res.status(500).send({message: "Error del servidor"});
        } else {
            if(!categoryUpdate) {
                res.status(404).send({message: "No se encontró la categoría"});
            } else {
                if(active === true) {
                    res.status(200).send({message: "Categoría activada"});
                } else {
                    res.status(200).send({message: "Categoría desactivada"});
                }
            }
        }
    });
}

function deleteCategory(req,res) {
    const {id} = req.params;

    Category.findByIdAndRemove(id, (err, categoryDeleted) => {
        if(err) {
            res.status(500).send({message: "Error del servidor"});
        } else {
            if(!categoryDeleted) {
                res.status(404).send({message: "Categoría no encontrada"});
            } else {
                res.status(200).send({message: "Categoría eliminada"});
            }
        }
    })
}

function uploadCover(req,res) {
    const params = req.params;
    
    Category.findById({_id:params.id}, (err, categoryData) => {
        if(err){
            res.status(500).send({message: "Error del servidor"});
        } else {
            if(!categoryData){
                res.status(404).send({message: "Categoría no encontrada"});
            } else {
                let category = categoryData;
                
                if(req.files) {
                    let filePath = req.files.avatar.path;
                    let fileSplit = filePath.split("/");
                    let fileName = fileSplit[2];

                    let extSplit = fileName.split(".");
                    let fileExt = extSplit[1];

                    if(fileExt !== "png" && fileExt !== "jpg"){
                        res.status(400).send({message: "La extensión no es válida. Usa .png o .jpg"});
                    } else {
                        category.avatar = fileName;
                        Category.findByIdAndUpdate({_id: params.id}, category, (err, categoryResult) => {
                            if(err) {
                                res.status(500).send({message: "Error del servidor"});
                            } else {
                                if(!categoryResult) {
                                    res.status(404).send({message: "Categoría no encontrada"});
                                } else {
                                    res.status(200).send({avatarName: fileName });
                                }
                            }
                        });
                    }

                }
            }
        }
    });
}

function getCover(req,res) {
    const coverName = req.params.avatarName;
    const filePath = "./uploads/categories/" + coverName;

    fs.exists(filePath, exists => {
        if(!exists) {
            res.status(404).send({message: "El cover de categoría no existe"});
        } else {
            res.sendFile(path.resolve(filePath));
        }
    });
}

function getCategory(req, res) {
    const {tag} = req.params;

    Category.find({ "tag" : tag}).exec((err, result) => {
        if(err) {
            res.status(500).send({message: "Error del servidor"});
        } else {
            if(!result) {
                res.status(404).send({message: "No se encontró ningún menú"});
            } else {
                res.status(200).send({category: result});
            }
        }
    });
}

module.exports = {
    addCategory,
    getCategories,
    updateCategory,
    activateCategory,
    deleteCategory,
    uploadCover,
    getCover,
    getCategory
}