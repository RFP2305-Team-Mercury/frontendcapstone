import React from 'react';
import {useState, useEffect} from 'react'

const QAList = () => {

  const [questions,setQuestions] = useState('Who what which where why whether how?')
  const [answers,setAnswers] = useState('Blah blah blah blah blah')
  const [QCount, setQCount] = useState(0)
  const [ACount, setACount] = useState(0)
  const [photo, setPhoto] = useState('')


  return(
    <>
    <div className ='QA'>

    <h3 className = 'UserQuestions'>Q: {questions}</h3>

    <label className ='helpful'>
        Helpful?<button>Yes ({QCount})</button>
      </label>

    <label className ='Add Answer'>
        <button>Add Answer</button>
      </label>

    <h3>A:</h3>
    <p className = 'UserAnswers'>{answers}</p>
    <p className = 'Photos'>{photo}</p>
    <aside>User1337, January 1, 2019</aside>

      <label className ='helpful'>
        Helpful?<button>Yes ({ACount})</button>
      </label>
      <label className ='report'>
        <button>Report</button>
      </label>
    </div>

    <br></br>

    <div className = 'More'>
      <label>
        <button className = 'MoreAnswers'>LOAD MORE ANSWERS</button>
      </label>
      <br></br>
      <label>
        <button className = 'MoreQuestions'>MORE ANSWERED QUESTIONS</button>
      </label>
      <label>
        <button className = 'AddQuestion'>ADD A QUESTION + </button>
      </label>
    </div>
    </>
  )
}


export default QAList