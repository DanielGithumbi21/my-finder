const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  documentName: {
    type: String,
    required: true,
  },

  location:{
    type:String,
    required:true
  },
  documentType: {
    type: String,
    required: true,
  },
  
});

const post = mongoose.model("posts", postSchema);
module.exports = post;
