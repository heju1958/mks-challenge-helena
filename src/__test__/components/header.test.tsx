/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import Header from "../../components/Header/header";

describe("Button Render", () => {
  test("Button counter must start with text value 0", () => {
    render(<Header />);
    expect(screen.getByText("0")).toBeTruthy();
  });
});
