import axios from "axios";
import { toast } from "sonner";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Handel Edit User
export const EditUser = createAsyncThunk('EditUser', async ({ id, user }) => {
    console.log(id, user);
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/user/${id}`, user, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        toast.success(res.data.message)
        return res.data
    } catch (error) {
        console.error(error);
    }
})





const EditUserSlice = createSlice({
    name: 'EditUser',
    initialState: {
        user: {},
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(EditUserSlice.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(EditUserSlice.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.error = null
            })
            .addCase(EditUserSlice.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
});

export default EditUserSlice.reducer;