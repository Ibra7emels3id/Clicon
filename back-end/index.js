const express = require('express')
const app = express()
const port = 9000 || process.env.PORT
const path = require('path')
const helmet = require('helmet');
const cors = require('cors');
const ConnectCloudinary = require('./config/ConnectCloudinary');
const ConnectDB = require('./db/ConnectDB');
const ProductRouter = require('./routes/ProductRouter');
const AllCategory = require('./routes/CategoryRouter');
const AllCartRouter = require('./routes/CartRouter');
const ALlWishlist = require('./routes/wishlistRouter');
const AllUserRouter = require('./routes/UsersRouter');
const AllOrderRouter = require('./routes/OrderRouter');
const AllBlogRouter = require('./routes/BlogRouter');
require("dotenv").config();



// Cors 
app.use(cors())

// Connect Cloudinary Server
ConnectCloudinary()

// Connect MongoDB Server
ConnectDB()

// Serve static files from the 'public' directory
app.use(express.static('public'))

// Express Json()
app.use(express.json())


// Set Helmet
app.use(helmet());


// Serve static files
app.use('/static', express.static(path.join(__dirname, 'public')))


// Middleware for parsing JSON request bodies
app.use('/api', ProductRouter)
app.use('/api', AllCategory)
app.use('/api', AllCartRouter)
app.use('/api', ALlWishlist)
app.use('/api', AllUserRouter)
app.use('/api', AllOrderRouter)
app.use('/api', AllBlogRouter)




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})