import axios from "axios";
import { toast } from "sonner";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// Handle Add To Cart
export const AddToCart = createAsyncThunk('AddToCart', async ({ id, item }) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/user/cart/${id}`, { item })
        toast.success(res.data.message);
        return res.data;
    } catch (error) {
        console.error(error);
    }
})

const AddToCartSlice = createSlice({
    name: "addToCart",
    initialState: {
        cart: [],
        totalPrice: 0,
        totalQuantity: 0,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AddToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(AddToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(AddToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default AddToCartSlice.reducer;