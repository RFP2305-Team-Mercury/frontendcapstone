import React from "react";
import ReactDOM from 'react-dom'
import { render, screen, fireEvent, queryByTestId } from "@testing-library/react";
import store from '../redux/store.js'
import {Provider} from 'react-redux'
import OutfitList from "../components/relatedProducts/OutfitList.jsx";
import RelatedProducts from "../components/relatedProducts/RelatedProducts.jsx";
import OutfitCard from "../components/relatedProducts/OutfitCard.jsx";
import RPCard from '../components/relatedProducts/RPCard.jsx'
import ComparisonModal from "../components/relatedProducts/ComparisonModal.jsx";
import RPandOL from "../components/relatedProducts/RPandOL.jsx";
import "@testing-library/jest-dom";

describe("Related Products div to exist", () => {
  test("Renders a list of item cards from an array of Ids", () => {
    render(
      <Provider store={store}>
        <RelatedProducts />
      </Provider>
    );
    const card = screen.getByTestId("RP List");
    expect(card).toBeInTheDocument();
  });
});

describe("Outfit List div to exist", () => {
  test("Renders a list of item cards from local storage", () => {
    const localStorageMock = (function () {
      let store = {};

      return {
        getItem(key) {
          return store[key];
        },

        setItem(key, value) {
          store[key] = value;
        },

        clear() {
          store = {};
        },

        removeItem(key) {
          delete store[key];
        },

        getAll() {
          return store;
        },
      };
    })();

    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    const setLocalStorage = (id, data) => {
      window.localStorage.setItem(id, JSON.stringify(data))
    };
    setLocalStorage('outfit', [40347])

    render(
      <Provider store={store}>
        <OutfitList />
      </Provider>
    );
    const card = screen.getByTestId("Outfit Card");
    expect(card).toBeInTheDocument();
  });
});
describe("Outfit card to render", () => {
  test("Outfit card to exist with no id Passed (Add to Outfit Card)", () => {
    render(
      <Provider store={store}>
        <OutfitCard />
      </Provider>
    );
    const card = screen.getByTestId("Add to Outfit Card");
    expect(card).toBeInTheDocument();
  });
  test("Outfit card to exist with id Passed (Outfit Item Card)", () => {
    render(
      <Provider store={store}>
        <OutfitCard id='40347' />
      </Provider>
    );
    const card = screen.getByTestId("Outfit Card");
    expect(card).toBeInTheDocument();
  });
});

describe("RP card to render", () => {
  test("RP card to exist with id Passed", () => {
    render(
      <Provider store={store}>
        <RPCard id='40347' />
      </Provider>
    );
    const card = screen.getByTestId("RP Card");
    expect(card).toBeInTheDocument();
  });
});

describe("Comparison Modal to render", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  test("Comparison Modal renders prices when passed id", () => {
    render(
      <Provider store={store}>
        <ComparisonModal id={40350}/>
      </Provider>
    );
    const price = screen.getByTestId("prices");
    expect(price).toBeInTheDocument();
  });
  test("Comparison Modal closes when button is clicked", () => {
    render(
      <Provider store={store}>
        <ComparisonModal id='40347' />
      </Provider>
    );
    const closeButton = screen.getByTestId("closeButton");
    fireEvent.click(closeButton);
    expect(queryByTestId(document, 'prices')).toBeNull();
  });
});

describe("Styles component meets business requirements", () => {

})

describe("Gallery component meets business requirements", () => {

});
