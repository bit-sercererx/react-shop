import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api";

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const res = await axiosClient.get("/categories");
        return res.data;
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});
export default categoriesSlice.reducer;
