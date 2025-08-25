import express from "express";
import { addBlog } from "../controllers/blogController.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";


const blogRouter = express.Router();

blogRouter.post("/add", auth, addBlog);



export default blogRouter;