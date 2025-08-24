import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subTitle: {type: String},
    description: {type: String},
    category: {type: String, required: true},
    external_link: {type: String},
    isPublished: {type: Boolean, required: true},
},{timestamps: true});

const Blog = mongoose.model('blog', blogSchema);

export default Blog;