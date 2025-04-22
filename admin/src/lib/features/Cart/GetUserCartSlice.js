import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");




// Fetch User Data
export const FetchUser = createAsyncThunk('FetchUser', async ({id}) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/user/${id}`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
})



const GetUserCart = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(FetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(FetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default GetUserCart.reducer;