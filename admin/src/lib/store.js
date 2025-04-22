import { configureStore } from '@reduxjs/toolkit'
import Categories from './features/Category/GetCategoriesSlice'
import ProductSlice from './features/Product/GetProductsSlice'
import GetDetailsProductSlice from './features/Product/GetProductSlice'
import GetAllOrdersSlice from './features/Order/GetAllOrdersSlice'
import GetOrderDetails from './features/Order/OrderDetails'
import GetCategoryId from './features/Category/GetCategoryId'
import GetUsersSlice from './features/Users/GetUsersSlice'
import GetBlogsSlice from './features/Blog/GetBlogs'
import GetBlogIdSlice from './features/Blog/GetBlog'



export const store = configureStore({
    reducer: {
        // Define your slice reducers here
        categories: Categories,
        category: GetCategoryId,


        // products
        products: ProductSlice,
        product: GetDetailsProductSlice,


        // Orders
        orders: GetAllOrdersSlice,
        order: GetOrderDetails,


        // Users
        users: GetUsersSlice,



        // blogs
        blogs: GetBlogsSlice,
        blog: GetBlogIdSlice,




    }
})