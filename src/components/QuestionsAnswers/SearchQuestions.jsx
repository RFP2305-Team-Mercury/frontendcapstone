import React from 'react';
import {useState, useEffect} from 'react'
import QAList from './QAList.jsx'
import QASearchList from './QASearchList.jsx'
import {useSelector} from 'react-redux'
import getQA from '../../apis/QA.js'

const SearchQuestions = () => {

  const [data, setData] = useState([])
  const [input,setInput] = useState('')
  const [message, setMessage] = useState('')

  const search = (e) => {
    setInput(e.target.value)
  }

  const handleEvent = (e) => {
    e.preventDefault()
    setMessage(input)
    console.log('successfuly clicked and submitted',input)
  }

  //get request for searching answers will activate when input form has been clicked
  useEffect(() => {
    const fetch = async () => {
     const questions = await getQA()
     setData(questions)
    }

    fetch()
    .catch((err) => {
     console.log('Error', err)
    })
  },[input])

  if(input.length >= 3){
    return(
      <>
     <label>
      {console.log(data)}
      HAVE A QUESTION? SEARCH FOR ANSWERS...
      <input type ='text' onChange = {search}></input>
      <button onClick = {handleEvent}>Search Icon</button>
     </label>
      <QASearchList getData = {data} input = {input}/>
     </>
    )
  } else {
    return(
      <>
      <label>
       HAVE A QUESTION? SEARCH FOR ANSWERS...
       <input type ='text' onChange = {search}></input>
       <button onClick = {handleEvent}>Search Icon</button>
      </label>
     <QAList/>
      </>
    )
  }


}
export default SearchQuestions