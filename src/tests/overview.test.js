import React from "react";
import {render,screen,fireEvent,waitFor,getByTestId} from "@testing-library/react";
import Cart from "../components/overview/Cart.jsx";
import store from "../redux/store.js";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { exampleDetails, exampleStyles } from "./overviewTestData.js";
import axios from "axios";
import Details from "../components/overview/Details.jsx";
import Styles from "../components/overview/Styles.jsx";
import Slogan from "../components/overview/Slogan.jsx";
import Gallery from "../components/overview/Gallery.jsx";
import config from "../apis/apiConfig.js";
import { addCart } from "../apis/cart.js";

jest.mock("axios");

describe("Cart component meets business requirements", () => {
  test("loads size select and displays default", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const sizeSelect = screen.getByTestId("size-test");
    expect(sizeSelect).toBeInTheDocument();
    expect(sizeSelect).toContainElement(screen.getByText("--Select Size--"));
  });
  test("loads quantity select and displays default", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const quantitySelect = screen.getByTestId("quantity-test");
    expect(quantitySelect).toBeInTheDocument();
    expect(quantitySelect).toContainElement(screen.getByText("-"));
  });
  test("Button displays Select Size if no size selected", async () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const selectSizeButton = screen.getByTestId("select-size");
    expect(selectSizeButton).toBeInTheDocument();
  });
  test("Page updates once size is selected", () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const sizeSelect = screen.getByTestId("size-test");
    fireEvent.change(sizeSelect, { target: { value: "S" } });

    const addCartButton = screen.getByTestId("add-cart");
    expect(addCartButton).toBeInTheDocument();

    const quantitySelect = screen.getByTestId("quantity-test");
    expect(quantitySelect).toContainElement(screen.getByText("1"));
  });

  test("should make a POST request to add to cart", async () => {
    const sku_id = "12345";
    const quantity = 2;
    const expectedPayload = { sku_id: sku_id, quantity: quantity };
    const config2 = config;

    axios.post.mockResolvedValueOnce();

    await addCart(sku_id, quantity);

    expect(axios.post).toHaveBeenCalledWith("/cart", expectedPayload, config2);
  });

  test("should handle errors when adding to cart", async () => {
    const sku_id = "12345";
    const quantity = 2;

    const errorMessage = "Request failed";
    axios.post.mockRejectedValueOnce(new Error(errorMessage));

    const consoleErrorSpy = jest.spyOn(console, "error");
    consoleErrorSpy.mockImplementation(() => {});

    await addCart(sku_id, quantity);

    expect(console.error).toHaveBeenCalledWith(
      "addCart: ",
      new Error(errorMessage)
    );

    consoleErrorSpy.mockRestore();
  });
});

describe("Details component meets business requirements", () => {
  test("Renders necessary details of each product", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleDetails });
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("name-test").textContent).toEqual(
        "Slacker's Slacks"
      );
      expect(screen.getByTestId("category-test").textContent).toEqual("Pants");
    });
  });
  test("Renders necessary details of each product", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleDetails });
    render(
      <Provider store={store}>
        <Slogan />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("slogan-test").textContent).toEqual(
        "Comfortable for everything, or nothing"
      );
      expect(screen.getByTestId("description-test").textContent).toEqual(
        "I'll tell you how great they are after I nap for a bit."
      );
    });
  });
});

describe("Styles component meets business requirements", () => {
  test("Updates style when clicking on another image", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleStyles });
    render(
      <Provider store={store}>
        <Styles />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getAllByTestId("style-selected")[0]).toBeInTheDocument();
      expect(screen.getAllByTestId("style-image")[0]).toBeInTheDocument();
    });
  });

  test("dfas", async () => {
    render(
      <Provider store={store}>
        <Styles />
      </Provider>
    );

    const styleImage = screen.getAllByTestId("style-image")[0];
    fireEvent.click(styleImage);

    const selectedStyle = store.getState().selected;
    expect(selectedStyle.style_id).toBe(240517);
    expect(selectedStyle.name).toBe("Olive Green");
  });
});

describe("Gallery component meets business requirements", () => {
  test("Renders gallery image", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleStyles });
    render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("normal-img")).toBeInTheDocument();
    });
  });
  test("Renders expanded image", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleStyles });
    render(
      <Provider store={store}>
        <Gallery isExpanded={true} setIsExpanded={jest.fn()} />
      </Provider>
    );

    const expandButton = screen.getByTestId("expand");
    fireEvent.click(expandButton);

    await screen.findByTestId("expanded-img");

    expect(screen.getByTestId("expanded-img")).toBeInTheDocument();
  });
  test("Navigates to the next and previous images", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleStyles });
    render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    await waitFor(() => {
      const currentImage = screen.getByTestId("normal-img");
      expect(currentImage).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      );

      const rightArrowButton = screen.getByTestId("rightArrow");
      fireEvent.click(rightArrowButton);
      expect(currentImage).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      );

      const leftArrowButton = screen.getByTestId("leftArrow");
      fireEvent.click(leftArrowButton);
      expect(currentImage).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      );
    });
  });

  test("Clicking up and down chevrons on thumbnail changes current image when more than 7 thumbnails", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleStyles });
    render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    await waitFor(() => {
      const currentImage = screen.getByTestId("normal-img");
      expect(currentImage).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      );

      const downChevronButton = screen.getByTestId("downChevron");
      fireEvent.click(downChevronButton);
      expect(currentImage).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      );

      const upChevronButton = screen.getByTestId("upChevron");
      fireEvent.click(upChevronButton);
      expect(currentImage).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      );
    });
  });
  test("Displays Thumbnail Div", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: exampleStyles });
    render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("thumbnail-div")).toBeInTheDocument();
      expect(screen.getAllByTestId("thumbnail-img")[0]).toBeInTheDocument();
    });
  });
});
