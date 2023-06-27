import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QA from "../components/QuestionsAnswers/QuestionsAnswers.jsx";
import "@testing-library/jest-dom";

describe("QuestionsAnswers component should render a list of questions and answers", () => {
  test("Renders up to four questions and two answers for each question", () => {
    render(<QA/>)
    const
  })
})