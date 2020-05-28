const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const PostSchema = Schema({
    title: String,
    url: {
        type: String,
        unique: true
    },
    description: String,
    date: Date,
    category: String
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Post", PostSchema);