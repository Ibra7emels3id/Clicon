import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Edit Blog 
export const EditBlog = createAsyncThunk('EditBlog', async ({ formData, id }) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/blog/${id}`, formData, {
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
const EditBlogSlice = createSlice({
    name: "AddBlog",
    initialState: {
        blog: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddBlog.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(AddBlog.fulfilled, (state, action) => {
            state.error = null;
            state.blog = action.payload;
            state.loading = false;
        });
        builder.addCase(AddBlog.rejected, (state, action) => {
            state.error = action.error.message;
            state.blog = null;
            state.loading = false;
        });
    }
});

export default EditBlogSlice.reducer;