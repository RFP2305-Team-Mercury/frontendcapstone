import React from 'react'
import {useState, useEffect} from 'react'
import SearchQuestions from './SearchQuestions.jsx'

const QuestionsAndAnswers = () => {

  return(
    <>
    <div className="border-solid border-2 w-10/12 m-4 p-4 m-auto">
    <h3 className="font-bold">Questions & Answers</h3>
    <br></br>
    <SearchQuestions/>
    </div>
    </>
  )
}

export default QuestionsAndAnswers;
