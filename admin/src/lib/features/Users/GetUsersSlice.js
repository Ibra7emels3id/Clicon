import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// get users
export const FetchUsers = createAsyncThunk('FetchUsers', async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/users`)
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
});

// create Slice
const GetUsersSlice = createSlice({
    name: "GetUsers",
    initialState: {
        users: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchUsers.pending, (state, action) => {
            state.loading = true
            state.error = null;
        });
        builder.addCase(FetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(FetchUsers.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
});

export default GetUsersSlice.reducer