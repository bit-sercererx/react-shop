import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api";
import { createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await axiosClient.get("/products");
        return res.data;
    }
);
export const fetchProductsById = createAsyncThunk(
    "products/fetchProductsById",
    async (id) => {
        const res = await axiosClient.get(`/products/?categoryId=${id}`);
        return res.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(fetchProductsById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProductsById.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProductsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});
export default productsSlice.reducer;
