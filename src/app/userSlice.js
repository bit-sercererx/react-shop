import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const res = await axiosClient.get("/users");
        return res.data;
    }
);

export const registerUser = createAsyncThunk(
    "users/registerUser",
    async (user) => {
        const res = await axiosClient.post("/users", user);
        return res.data;
    }
);

export const loginUser = createAsyncThunk(
    "users/loginUser",
    async (user) => {
        const res = await axiosClient.post("/auth/login", user);
        return res.data;
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            localStorage.setItem("access_token", action.payload.access_token);
            localStorage.setItem("refresh_token", action.payload.refresh_token);

        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
