import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OutfitList from "../components/relatedProducts/OutfitList.jsx";
import store from '../redux/store.js'
import {Provider} from 'react-redux'
import RelatedProducts from "../components/relatedProducts/RelatedProducts.jsx";
import "@testing-library/jest-dom";

describe("Related Products cards to exist", () => {
  test("Renders a list of item cards from an array of Ids", () => {
    render(
      <Provider store={store}>
        <RelatedProducts />
      </Provider>
    );
    const card = screen.getByTestId("RP Card");
    expect(card).toBeInTheDocument();
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
