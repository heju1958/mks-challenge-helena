/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from "@jest/globals";
import cartSlice, { addToCart, removeFromCart } from "../../slices/cartSlice";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

describe("Inicial Empty Cart", () => {
  test("should inicial empty cart", () => {
    const state = cartSlice(initialState, addToCart);
    expect(state.cartTotalQuantity).toBe(0);
    expect(state.cartTotalAmount).toBe(0);
  });
});

const addItem = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  cartTotalQuantity: 1,
  cartTotalAmount: 1,
};

describe("Add to cart", () => {
  test("should action add to cart", () => {
    const state = cartSlice(addItem, addToCart);
    expect(state.cartTotalQuantity).toBe(1);
    expect(state.cartTotalAmount).toBe(1);
  });
});

const removeItem = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

describe("Remove to cart", () => {
  test("should action remove to cart", () => {
    const state = cartSlice(removeItem, removeFromCart);
    expect(state.cartTotalQuantity).toBe(0);
    expect(state.cartTotalAmount).toBe(0);
  });
});
