import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "./slices/productsSlice";
import { productsApi } from "./services/productsApi";
import cartReducer from "./slices/cartSlice";
import openCartReducer from "./slices/openCartSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    products: productsReducer,
    openCart: openCartReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
