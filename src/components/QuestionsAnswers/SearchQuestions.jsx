import React from 'react';
import {useState, useEffect} from 'react'
import QAList from './QAList.jsx'
import {useSelector} from 'react-redux'

const SearchQuestions = () => {

  let productId = useSelector(state => state.productId)
  const [input,setInput] = useState('')
  const [message, setMessage] = useState(input)

  const search = (e) => {
    setInput(e.target.value)
  }

  const handleEvent = (e) => {
    e.preventDefault()
    setMessage(input)
    console.log('successfuly clicked',input)
  }


return(
  <>
 <label>
 <h1>Product#:{productId}</h1>
  HAVE A QUESTION? SEARCH FOR ANSWERS...
  <input type ='text' onChange = {search}></input>
  <button onClick = {handleEvent}>Search Icon</button>
 </label>
<QAList/>
 </>
)
}
export default SearchQuestions