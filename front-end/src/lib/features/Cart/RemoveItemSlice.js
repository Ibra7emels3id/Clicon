import axios from "axios";
import { toast } from "sonner";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");




// Handle Remove Item
export const RemoveItem = createAsyncThunk('RemoveItem', async ({ id, itemId }) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/user/cart/remove-item/${id}`, { itemId })
        toast.info(res.data.message)
        return res.data;
    } catch (error) {
        console.error(error);
    }
})


const RemoveItemSlice = createSlice({
    name: "removeItem",
    initialState: {
        items: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase("removeItem/pending", (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase("removeItem/fulfilled", (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload.itemId);
            })
            .addCase("removeItem/rejected", (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default RemoveItemSlice.reducer;