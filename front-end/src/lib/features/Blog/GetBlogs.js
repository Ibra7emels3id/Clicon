import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Fetch all blogs from the server
export const FetchBlogs = createAsyncThunk('FetchBlogs', async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/blogs`)
        return res.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
})


const GetBlogSlice = createSlice({
    name: "GetBlog",
    initialState: {
        blogs: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(FetchBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload.blogs;
            })
            .addCase(FetchBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            });
    },
});
export default GetBlogSlice.reducer;