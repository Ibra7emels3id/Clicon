import axios from "axios";
import { toast } from "sonner";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");




// Handle Delete Items From Server and Database
export const DeleteItems = createAsyncThunk('deleteItems', async ({id}) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/user/delete-items/${id}`)
        toast.info(res.data.message);
        return res.data;
    } catch (error) {
        console.error(error);
    }
})



const DeleteItemsSlice = createSlice({
    name: "deleteItems",
    initialState: {
        items: [],
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteItemsSlice.actions.deleteItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteItemsSlice.actions.deleteItem.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            })
            .addCase(deleteItemsSlice.actions.deleteItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default DeleteItemsSlice.reducer;