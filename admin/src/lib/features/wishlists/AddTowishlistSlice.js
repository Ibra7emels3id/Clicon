import axios from "axios";
import { toast } from "sonner";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// Handle Add to wishlist item
export const AddToWishlist = createAsyncThunk('AddToWishlist' , async({id , item})=>{
    console.log(id , item);
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/user/wishlist/${id}` , {item})
        toast.success(res.data.message);
        return res.data;
    } catch (error) {
        console.error(error);
    }
})




const AddToWishlistSlice = createSlice({
    name: "addToWishlist",
    initialState: {
        items: [],
        error: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToWishlist.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export default AddToWishlistSlice.reducer;