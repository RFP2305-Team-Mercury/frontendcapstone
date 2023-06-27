import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { format, parseISO } from 'date-fns';
import getQA from '../../apis/QA.js'

const QAList = ({input}) => {

  const [data, setData] = useState([])
  const [search,setSearch] = useState(input)
  const [ACount, setACount] = useState(2)
  const [QCount, setQCount] = useState(4)
  const [Qhelpfulness, setQHelpfulness] = useState(1)
  const [Ahelpfulness, setAHelpfulness] = useState(1)
  const [photo,setPhoto] = useState('')


 useEffect(() => {
   const fetch = async () => {
    const questions = await getQA()
    setData(questions)
   }

   fetch()
   .catch((err) => {
    console.log('Error', err)
   })
 },[ACount,search])

  const mapQA = data.map((el,index) => {

  let key = Object.keys(el.answers)

  const helpfulQClick = () => {
    if(!el.helpClick || el.helpClick === 0){
    el.helpClick = 1
    setQHelpfulness(el.question_helpfulness += 1);
    } else {
    setQHelpfulness(el.question_helpfulness -= el.helpClick);
    el.helpClick = 0
   }
  }

  const userAnswers = key.map((a,index) => {

  let date = format(parseISO(el.answers[key[index]].date),'MMMM dd, yyyy')

   const helpfulAClick = () => {
    if(!el.answers[a].click || el.answers[a].click === 0){
    el.answers[a].click = 1
    setAHelpfulness(el.answers[a].helpfulness += 1);
    } else {
    setAHelpfulness(el.answers[a].helpfulness -= el.answers[a].click);
    el.answers[a].click = 0
    }
   }

    while(index < ACount){
          return(
           <>
           <h3>A:</h3>
           <p className = 'UserAnswers'>{el.answers[a].body}</p>
           <p className = 'Photos'>{photo}</p>
           <aside>by {el.answers[a].answerer_name},  {date}</aside>
           <label className ='helpful'>
             Helpful?<button onClick = {helpfulAClick}>Yes ({el.answers[a].helpfulness})</button>
           </label>
           <label className ='report'>
           <button>Report</button>
           </label>
           </>
          )
    }

  })

  while(index < QCount){
    return(
      <>
      <div key = {el} className ='QA' >
      <h3 key = {el.question_id} >Q: {el.question_body}</h3>
      <label className ='helpful'>
        Helpful? <button key = {index} onClick = {helpfulQClick}> Yes ({el.question_helpfulness})</button>
      </label>
      <label className ='Add Answer'>
      <button>Add Answer</button>
      </label>
      {userAnswers}
      </div>

      <div className = 'More'>
      <label>
        <button className = 'MoreAnswers' onClick = {function(){setACount(key.length)}}>LOAD MORE ANSWERS</button>
      </label>
      <label>
        <button className = 'MoreQuestions' onClick = {function(){setQCount(data.length)}}>MORE ANSWERED QUESTIONS</button>
      </label>
      <label>
        <button className = 'AddQuestion'>ADD A QUESTION + </button>
      </label>
     </div>
      </>
    )
  }

  })


if(data.length === 0){
  return(
    <div>Loading...</div>
  )
}

return(
  <>
  {mapQA}
  </>
)


}


export default QAList