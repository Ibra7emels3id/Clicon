import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// Fetch Date Api 
export const  FetchCategories = createAsyncThunk('FetchCategories', async () => {
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
        categories: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetching categories request
            .addCase(FetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Fetching categories success
            .addCase(FetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            // Fetching categories failure
            .addCase(FetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default Categories.reducer