import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// Fetch Date Api 
export const  FetchCategory = createAsyncThunk('FetchCategory', async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/category`)
        return response.data;
    } catch (error) {
        throw error;
    }
})

const Categories = createSlice({
    name: 'getCategories',
    initialState: {
        category: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetching categories request
            .addCase(FetchCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Fetching categories success
            .addCase(FetchCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
            })
            // Fetching categories failure
            .addCase(FetchCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default Categories.reducer