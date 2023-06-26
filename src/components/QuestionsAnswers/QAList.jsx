import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import sample from './sampleQA.js'
import getQA from '../../apis/QA.js'

const QAList = ({input}) => {

  const [data, setData] = useState()
  const [ACount, setACount] = useState(2)
  const [increment, setIncrement] = useState(1)
  const [photo,setPhoto] = useState('')


 const formatDate = (date) => {

  const months = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];

  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return `${months[month]} ${day}, ${year}`

 }

 const handleClick = () => {

 }

 useEffect(() => {
   const fetch = async () => {
    const questions = await getQA()
    setData(questions)
    return questions
   }

   fetch()
   .catch((err) => {
    console.log('Error', err)
   })
 },[ACount])

console.log(data)
  const mapQA = sample.results.map((el) => {

  let key = Object.keys(el.answers)

  const userAnswers = key.map((a,index) => {

  let date = new Date(el.answers[key[index]].date)

   date = formatDate(date)

    while(index < ACount){
      return(
        <>
      <h3>A:</h3>
      <p className = 'UserAnswers'>{el.answers[a].body}</p>
      <p className = 'Photos'>{photo}</p>
      <aside>by {el.answers[a].answerer_name},  {date}</aside>
      <label className ='helpful'>
        Helpful?<button>Yes ({el.answers[a].helpfulness})</button>
      </label>
      <label className ='report'>
      <button>Report</button>
      </label>
        </>
      )
    }

  })

    return(
      <>
      <div key = {el} className ='QA' >
      <h3 key = {el.question_id} >Q: {el.question_body}</h3>
      <label className ='helpful'>
        Helpful? <button key = {el.question_id} onClick = {handleClick}> Yes ({el.question_helpfulness})</button>
      </label>
      <label className ='Add Answer'>
      <button>Add Answer</button>
      </label>
      {userAnswers}
      </div>

      <div className = 'More'>
      <label>
        <button className = 'MoreAnswers'>LOAD MORE ANSWERS</button>
      </label>
      <label>
        <button className = 'MoreQuestions'>MORE ANSWERED QUESTIONS</button>
      </label>
      <label>
        <button className = 'AddQuestion'>ADD A QUESTION + </button>
      </label>
     </div>
      </>
    )

  })
if(data){
  console.log('hello')
  return(
    <>
    {mapQA}
    </>
  )
}
  // return(
  //   <>
  //   {mapQA}
  //   </>
  // )


}


export default QAList