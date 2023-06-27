import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../components/overview/Cart.jsx";
import "@testing-library/jest-dom";

describe("Cart component meets business requirements", () => {
  test("loads size select and displays default", () => {
    render(<Cart />);
    const sizeSelect = screen.getByTestId("size-test");
    expect(sizeSelect).toBeInTheDocument();
    expect(sizeSelect).toContainElement(screen.getByText("--Select Size--"));
  });
  test("loads quantity select and displays default", () => {
    render(<Cart />);
    const quantitySelect = screen.getByTestId("quantity-test");
    expect(quantitySelect).toBeInTheDocument();
    expect(quantitySelect).toContainElement(screen.getByText("-"));
  });
  test("Button displays Select Size if no size selected", async () => {
    render(<Cart />);
    const selectSizeButton = screen.getByTestId("select-size");
    expect(selectSizeButton).toBeInTheDocument();
  });
});

describe("Details component meets business requirements", () => {
  test("test example", () => {
    //add test logic
  });
});

describe("Styles component meets business requirements", () => {

})

describe("Gallery component meets business requirements", () => {

});
