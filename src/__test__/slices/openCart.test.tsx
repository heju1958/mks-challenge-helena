/**
 * @jest-environment jsdom
 */

import openCartSlice, { closeCart, openCart } from "../../slices/openCartSlice";
import { describe, expect, test } from "@jest/globals";

const initialState = {
  isOpen: false,
};

describe("OpenCartSlice", () => {
  test("should action openCart", () => {
    const state = openCartSlice(initialState, openCart);
    expect(state.isOpen).toBe(true);
  });
});

describe("CloseCartSlice", () => {
  test("should action closeCart", () => {
    const state = openCartSlice(initialState, closeCart);
    expect(state.isOpen).toBe(false);
  });
});
