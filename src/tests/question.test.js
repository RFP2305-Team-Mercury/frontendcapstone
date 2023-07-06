import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {Provider} from 'react-redux';
import store from '../redux/store.js'
import QuestionsAndAnswers from "../components/QuestionsAnswers/QuestionsAnswers.jsx";
import SearchQuestions from "../components/QuestionsAnswers/SearchQuestions.jsx";
import QAList from "../components/QuestionsAnswers/QAList.jsx";
import AnswerModal from '../components/QuestionsAnswers/AnswerModal.jsx'
import InputModal from '../components/QuestionsAnswers/InputModal.jsx'
import "@testing-library/jest-dom";

describe("QuestionsAnswers component should render a list of questions and answers", () => {
  test("Renders up to four questions and two answers on load up", () => {
    render(
    <Provider store={store}>
    <QuestionsAndAnswers/>
    </Provider>

    )
    const questionAnswer = screen.getByTestId("QAList");
    expect(questionAnswer).toBeInTheDocument();
  })
})

describe("SearchQuestions component", () => {
  test("should render a search input form", () => {
    render(
    <Provider store={store}>
    <SearchQuestions />
    </Provider>

    )
    const searchInput = screen.getByTestId("Search");
    expect(searchInput).toBeInTheDocument();
  });

  test('Should render change state values', () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'portal');
    document.body.appendChild(container);
    render(
      <Provider store={store}>
      <AnswerModal />
      </Provider>

      )
      const inputElement = screen.getByTestId('Search');
      fireEvent.change(inputElement, { target: { value: 'example' } });

      expect(inputElement.value).toBe('example');

      fireEvent.change(inputElement, { target: { value: 'ex' } });
      expect(inputElement.value).toBe('');

  })

});


describe("QAList component", () => {
  test("should render 'Add Question' button when there are no questions", () => {
    render(
    <Provider store={store}>
    <QAList />
    </Provider>

    )
    const QButton = screen.getByTestId('QButton');
    expect(QButton).toBeInTheDocument();
  });

  test("should render 'helpful' button", () => {
    render(
    <Provider store={store}>
    <QAList />
    </Provider>

    )

    const helpful = screen.getByTestId('helpful');
    expect(helpful).toBeInTheDocument();
  });

});

describe("AnswerModal component", () => {
  test("should render an answer modal", () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'portal');
    document.body.appendChild(container);
    render(
    <Provider store={store}>
    <AnswerModal />
    </Provider>

    )
    const answer = screen.getByTestId("AnswerModal");
    expect(answer).toBeInTheDocument();
  });

  test('Should render intial state values', () => {
    render(
      <Provider store={store}>
      <AnswerModal />
      </Provider>

      )
    fireEvent.change(screen.getByTestId('name'), { target: { value: "Mercury" } })
    fireEvent.change(screen.getByTestId('email'), { target: { value: "Mercury" } })
    fireEvent.change(screen.getByTestId('body'), { target: { value: "Mercury" } })

    expect(screen.getByTestId('name')).toHaveValue("Mercury");
    expect(screen.getByTestId('email')).toHaveValue("Mercury");
    expect(screen.getByTestId('body')).toHaveValue("Mercury");

  })

});


describe("QuestionModal component", () => {
  test("should render a question modal", () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'portal');
    document.body.appendChild(container);
    render(
    <Provider store={store}>
    <InputModal />
    </Provider>

    )
    const answer = screen.getByTestId("InputModal");
    expect(answer).toBeInTheDocument();
  });

});
