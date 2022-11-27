/**
 * @jest-environment jsdom
 */

import productsSlice from "../../slices/productsSlice";
import { productsFetch } from "../../slices/productsSlice";
import { describe, expect, test } from "@jest/globals";

const initialState = {
  items: [],
  status: null,
  error: null,
};

describe("ProductSlice", () => {
  test("should change status witch pending action", () => {
    const state = productsSlice(initialState, productsFetch.pending(""));
    expect(state.status).toBe("pending");
    expect(state.error).toBeNull();
  });
});

describe("ProductSlice", () => {
  test("should change status witch fulfilled action", () => {
    const items: any = {
      id: 1,
      name: "Iphone 11 128 GB",
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
      price: "5000.00",
    };
    const state = productsSlice(
      initialState,
      productsFetch.fulfilled("", items)
    );
    expect(state.status).toBe("success");
    expect(state.error).toBeNull();
  });
});

describe("ProductSlice", () => {
  test("should change status witch rejected action", () => {
    const items: any = {
      id: 1,
      name: "Iphone 11 128 GB",
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
      price: "5000.00",
    };
    const state = productsSlice(
      initialState,
      productsFetch.rejected(null, items)
    );
    expect(state.status).toBe("rejected");
  });
});
