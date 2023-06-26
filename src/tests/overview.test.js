import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import Cart from '../components/overview/Cart.jsx';
import {getAll} from '../apis/product.js';

beforeAll(() => {
  getAll();
});


describe("cart component", () => {
  test("loads and displays select options", async () => {
    render(<Cart />);
    await waitFor(() => {
      expect(screen.getByRole("select", { name: "size" })).toBeInTheDocument();
    });
  });
})

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

