import React from 'react';
import {useState, useEffect} from 'react'
import QAList from './QAList.jsx'
import {useSelector} from 'react-redux'
import getQA from '../../apis/QA.js'
import { IconName } from '@heroicons/react/outline';

const SearchQuestions = () => {

  const [input,setInput] = useState('')

  const search = (e) => {
    if(e.target.value.length > 3){
      setInput(e.target.value)
    } else {
      setInput('')
    }
  }

  return(
    <>
      <form>
        <label>
          <div className = 'relative w-2/4'>
            <input  type ='text' className="block w-full p-4 pl-4 font-bold text-black placeholder-gray-600 border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-600 dark:text-white dark:placeholder-white dark:border-gray-400" onChange = {search}  data-testid= 'Search' placeholder = 'HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>
            <div className = "absolute inset-y-0 right-10 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </label>
      </form>
      <br></br>
      <QAList message = {input} data-testid="QAList"/>
    </>
  )



}
export default SearchQuestions