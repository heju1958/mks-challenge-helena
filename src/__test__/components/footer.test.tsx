/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import Footer from "../../components/Footer/footer";

describe("Footer Render", () => {
  test("Show footer in screen", () => {
    render(<Footer />);
    const { baseElement } = render(<p />);
    expect(baseElement).toBe(document.body);
    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeTruthy();
  });
});

describe("Div render in footer", () => {
  test("to be a div", () => {
    const { baseElement } = render(<div />);
    expect(baseElement).toBe(document.body);
  });
});