import express from "express";
import { addBlog, getAllBlogs, getBlogById, deleteBlogById, togglePublish } from "../controllers/blogController.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";


const blogRouter = express.Router();

blogRouter.post("/add", auth, addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);

blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComments);


export default blogRouter;