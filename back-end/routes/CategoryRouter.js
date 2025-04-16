
const express = require('express');
const upload = require('../multer/multer');
const { AddCategory, GetCategories, DeleteCategory, GetCategoryId, EditCategory } = require('../controllers/Category');

const AllCategory = express.Router()

AllCategory.post('/category' , upload.single('image') , AddCategory)
AllCategory.get('/category' , GetCategories)
AllCategory.delete('/category/:id' , DeleteCategory)
AllCategory.get('/category/details/:id' , GetCategoryId)
AllCategory.put('/category/edit-category/:id', upload.single('image') , EditCategory)







module.exports = AllCategory;