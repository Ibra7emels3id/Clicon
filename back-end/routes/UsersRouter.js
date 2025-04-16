const { GetAllUsers, EditUser } = require('../controllers/Users')
const AllUserRouter = require('express').Router()
const upload = require('../multer/multer');



AllUserRouter.get('/users', GetAllUsers)
AllUserRouter.put('/user/:id', upload.single('image'), EditUser)


module.exports = AllUserRouter;

