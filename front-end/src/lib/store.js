import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './features/Product/GetProductsSlice'
import Categories from './features/Category/GetCategoriesSlice'
import AddToCartSlice from './features/Cart/AddToCartSlice'
import GetUserCart from './features/Cart/GetUserCartSlice'
import GetOrderSlice from './features/Order/GetOrder'
import SearchOrder from './features/Order/SearchOrder'
import GetOrderDetails from './features/Order/OrderDetails'
import GetProductSLice from './features/Product/GetProductSlice'
import GetBlogSlice from './features/Blog/GetBlogs'
import GetBlogIdSlice from './features/Blog/GetBlog'


export const store = configureStore({
    reducer: {
        // Define your slice reducers here
        products: ProductSlice,
        categories: Categories,
        cart: AddToCartSlice,
        user: GetUserCart,
        order: GetOrderSlice,
        orderId: SearchOrder,
        orderDetails: GetOrderDetails,
        product: GetProductSLice,
        blogs: GetBlogSlice,
        blog: GetBlogIdSlice
    }
})