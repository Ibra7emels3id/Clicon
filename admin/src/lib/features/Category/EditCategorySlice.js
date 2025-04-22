import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Edit Category From Server
export const EditCategory = createAsyncThunk('EditCategory', async ({id , formData}) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/category/edit-category/${id}`,formData , {
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
const EditCategorySlice = createSlice({
    name: "EditCategory",
    initialState: {
        category: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EditCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(EditCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(EditCategory.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
});

export default EditCategorySlice.reducer