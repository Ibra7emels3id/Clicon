import axios from "axios";
import { toast } from "sonner";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// Handle Add To Cart
export const RemoveCartQuantity = createAsyncThunk('RemoveCartQuantity', async ({ id, itemId }) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/user/cart/remove-cart-quantity/${id}`, { itemId })
        toast.info(res.data.message);
        return res.data;
    } catch (error) {
        console.error(error);
    }
})

const RemoveCartQuantitySlice = createSlice({
    name: "RemoveCartQuantity",
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
            .addCase(RemoveCartQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(RemoveCartQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(RemoveCartQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default RemoveCartQuantitySlice.reducer;