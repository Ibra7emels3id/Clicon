import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Get Category Id
export const FetchCategory = createAsyncThunk('FetchCategory', async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/category/details/${id}`)
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
})



// Create Slice
const GetCategoryIdSlice = createSlice({
    name: "GetCategoryId",
    initialState: {
        category: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(FetchCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(FetchCategory.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
})

export default GetCategoryIdSlice.reducer;