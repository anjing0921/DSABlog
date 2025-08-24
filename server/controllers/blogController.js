

export const addBlog = async (req, res)=>{
    try {
        const {title, subTitle, description, category, external_link, isPublished} = JSON.parse(req.body.blog);
        // const imageFile = req.file;

        // Check if all fields are present
        if(!title || !category){
            return res.json({success: false, message: "Missing required fields" })
        }


        await Blog.create({title, subTitle, description, category, external_link, isPublished})

        res.json({success: true, message: "Blog added successfully"})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}