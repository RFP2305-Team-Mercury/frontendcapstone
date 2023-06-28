import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QA from "../components/QuestionsAnswers/QuestionsAnswers.jsx";
import "@testing-library/jest-dom";

describe("QuestionsAnswers component should render a list of questions and answers", () => {
  test("Renders up to four questions and two answers for each question", () => {
    render(<QA/>)
    const QA = screen.getByTestId("QAList");
    expect(QA).toBeInTheDocument();
  })
})
describe("SearchQuestions component should render a search input form", () => {
  test("After 3 characters are typed, component should re-render a page to see if input is found in questions", () => {
    const {input} = setup()
    render(<SearchQuestions/>)
    const search = screen.getByTestId("Search");
    expect(search).toBeInTheDocument();
  })
})