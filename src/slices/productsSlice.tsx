/* eslint-disable */

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IState } from "../interfaces/interfaces";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=ASC"
    );
    return response?.data;
  }
);

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
