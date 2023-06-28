import React from 'react';
import {useState, useEffect} from 'react'
import QAList from './QAList.jsx'
import {useSelector} from 'react-redux'
import getQA from '../../apis/QA.js'

const SearchQuestions = () => {

  const [input,setInput] = useState('')

  const search = (e) => {
    setInput(e.target.value)
  }

  return(
    <>
      <label>
       Have a Questions? Search for Answers...
       <input type ='text' onChange = {search} defaultValue = 'search' data-testid="Search"></input>
      </label>
      <QAList message = {input} data-testid="QAList"/>
   </>
  )



}
export default SearchQuestions