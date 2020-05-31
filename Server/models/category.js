const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = Schema ({
    
    tag: {
        type: String,
        unique: true
    },
    active: Boolean,
    avatar: String,
    order: Number
});

module.exports = mongoose.model("Category", CategorySchema);