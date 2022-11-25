/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import Footer from "../../components/Footer/footer";

describe("Footer Render", () => {
  test("Show footer in screen", () => {
    render(<Footer />);
    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeTruthy();
  });
});
