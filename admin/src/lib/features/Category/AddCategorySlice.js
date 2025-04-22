import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Add Category
export const AddCategory = createAsyncThunk('AddCategory', async ({ formData }) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/category`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
})



// Create Slice
const AddCategorySlice = createSlice({
    name: "AddCategory",
    initialState: {
        category: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(AddCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(AddCategory.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
})

export default AddCategorySlice.reducers;