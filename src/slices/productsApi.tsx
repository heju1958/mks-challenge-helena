import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mks-frontend-challenge-api.herokuapp.com/api/v1/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products?page=1&rows=10&sortBy=id&orderBy=DESC`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;