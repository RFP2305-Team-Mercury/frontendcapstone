import React from "react";
import { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  question,
  answer,
  openModal,
  closeModal,
} from "../redux/actions/index.js";
import Modal from "./Modal.jsx";

// import components
import Overview from "./overview/Overview.jsx";
import RPandOL from "./relatedProducts/RPandOL.jsx";
import QuestionsAndAnswers from "./QuestionsAnswers/QuestionsAnswers.jsx";
import RatingsAndReviews from "./ratingsAndReviews/RatingsAndReviews.jsx";

export default function App() {
  const dispatch = useDispatch();

  const handleClick = (() => {
    dispatch(question())
    dispatch(answer())
    dispatch(openModal())
  })
  let id = useSelector(state => state.modalType.id)

  return (
    <div className="dark:bg-gray-600">
      <Overview />
      <RPandOL />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
      <Modal id={useSelector(state => state.modalType.id)} type={useSelector(state => state.modalType.type)} onClose={() => dispatch(closeModal())} />

    </div>
  )
}

