import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../components/overview/Cart.jsx";
import "@testing-library/jest-dom";

describe("Cart components meets business requirements", () => {
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



    // const sizeSelect = screen.getByTestId("size-test");
    // fireEvent.change(sizeSelect, { target: { value: 'M' } });

    // const cartButton = await screen.getByTestId("add-cart");
    // expect(cartButton).toBeInTheDocument();


// describe("tests cart component functionality", () => {
//   test("does not allow adding to cart if size not selected", () => {

//   });

//   test("updates to Out of Stock if no quantity", () => {

//   });

//   test("display maximum quantity of 15", () => {

//   });

//   test("size dropdown displays --Select Size-- by default", () => {

//   });
//   test("when size dropdown collapsed, displays size", () => {

//   });
//   test("quantity dropdown displays -- by default", () => {

//   });
//   test("quantity dropdown updates to 1 once size selected", () => {

//   });

//   test("adds sku and quantity to cart after adding to cart", () => {

//   });
// });

// describe("styles selection", () => {
//   test("fetches style skus from API", () => {
//   });
//   test("displays maximum of 4 thumnails in a row", () => {
//   });
//   test("only one style can be selected at a time", () => {
//   });
//   test("default style should be first in style list", () => {
//   });
// });
