const { AddBlog, GetAllBlog, EditBlogId, GetBlogId, DeleteBlogId } = require('../controllers/Blog');
const upload = require('../multer/multer');
const AllBlogRouter = require('express').Router();


AllBlogRouter.post('/blog', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'image_parson', maxCount: 1 },]), AddBlog)

AllBlogRouter.put('/blog/:id', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'image_parson', maxCount: 1 },]), EditBlogId)
    
AllBlogRouter.get('/blogs', GetAllBlog)
AllBlogRouter.get('/blog/:id', GetBlogId)
AllBlogRouter.delete('/blog/:id', DeleteBlogId)





// Export the router
module.exports = AllBlogRouter;