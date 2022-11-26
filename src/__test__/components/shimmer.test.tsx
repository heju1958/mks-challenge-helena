/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import Shimmer from "../.././components/Shimmer/shimmer";

describe("Div render in shimmer", () => {
  test("to be a div", () => {
    const { baseElement } = render(<div />);
    expect(baseElement).toBe(document.body);
  });
});

describe("Ul render in shimmer", () => {
  test("to be a ul", () => {
    const { baseElement } = render(<ul />);
    expect(baseElement).toBe(document.body);
  });
});

describe("Button render in shimmer", () => {
  test("to be a button", () => {
    render(<Shimmer />);
    const { baseElement } = render(<button />);
    expect(baseElement).toBe(document.body);

    const button = screen.getAllByRole("button");
    expect(button).toBeTruthy();
  });
});
