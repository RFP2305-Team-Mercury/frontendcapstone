import React from 'react'
import {useState, useEffect} from 'react'
import SearchQuestions from './SearchQuestions.jsx'

const QuestionsAndAnswers = () => {

  return(
    <>
    <div data-testid= 'QAList' className="border-solid w-10/12 m-4 p-4 m-auto dark:bg-gray-600 dark:text-white">
    <h3 className="text-lg">QUESTIONS & ANSWERS</h3>
    <br></br>
    <SearchQuestions/>
    </div>
    </>
  )
}

export default QuestionsAndAnswers;
