const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const PostSchema = Schema({
    title: String,
    url: {
        type: String,
        unique: true
    },
    content: String,
    date: Date,
    categories: String,
    username: String
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Post", PostSchema);