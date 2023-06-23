import React from 'react'
import {useState, useEffect} from 'react'

const Questions = () => {
  const [input,setInput] = useState('')
  const [message, setMessage] = useState(input)

  const search = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  const handleEvent = (e) => {
    e.preventDefault()
    setMessage(input)
    console.log('successfuly clicked',message)
  }


return(
 <label>
  Have a Question? Search for Answers
  <input type ='text' onChange = {search}></input>
  <button onClick = {handleEvent}>Search Icon</button>
 </label>
)
}

export default Questions;
