import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );
    return response?.data;
  }
);

interface IState {
  items: never[] | undefined;
  status: string | null;
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state: IState, action) => {
      state.status = "pending";
    }),
      builder.addCase(productsFetch.fulfilled, (state: IState, action) => {
        state.items = action.payload;
        state.status = "success";
      });
    builder.addCase(productsFetch.rejected, (state: IState, action) => {
      state.status = "rejected";
    });
  },
});

export default productsSlice.reducer;
