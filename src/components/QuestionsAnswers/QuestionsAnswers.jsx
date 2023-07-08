import React from 'react'
import {useState, useEffect} from 'react'
import SearchQuestions from './SearchQuestions.jsx'
import {useSelector, useDispatch} from 'react-redux'
import {loadingNext} from '../../redux/actions'

const QuestionsAndAnswers = () => {
  let dispatch = useDispatch()
  useEffect(()=>{dispatch(loadingNext())},[])
  return useSelector(state=>state.loadingOrder)===2? '' : (
    <>
      <div data-testid= 'QAList' className="w-10/12 m-4 p-4 m-auto dark:bg-gray-600 dark:text-white border-b border-gray-200 dark:border-gray-400">
        <h3 className="text-lg">QUESTIONS & ANSWERS</h3>
        <br></br>
        <SearchQuestions/>
      </div>
    </>
  )
}

export default QuestionsAndAnswers;
