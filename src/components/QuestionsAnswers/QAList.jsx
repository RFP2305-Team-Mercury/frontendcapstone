import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { format, parseISO } from 'date-fns';
import getQA from '../../apis/QA.js'

const QAList = ({message}) => {

//States
  const [data, setData] = useState([])
  const [search,setSearch] = useState(message)
  const [ACount, setACount] = useState(2)
  const [QCount, setQCount] = useState(4)
  const [Qhelpfulness, setQHelpfulness] = useState(1)
  const [Ahelpfulness, setAHelpfulness] = useState(1)
  const [photo,setPhoto] = useState('')

//Get Request for Questions with specific product id
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

  //mapQuestions will either be a filtered data set or the entire data set from the get request
    const mapQuestions = data.filter((q) => q.question_body.includes(message))


  //Apply map method to mapQuestions whether it is the entire data set or filtered data set
  const mapSearch = mapQuestions.map((el,index) => {

  //Helpful Question Click counter will ensure user can only increment helpfulness by 1 and keep the state to no less than initial render [0 means user hasn't clicked, 1 means clicked]
  const helpfulQClick = () => {
    //If new property doesn't exist, create a new property within each questions property to 0 or check to see if property is equal to 0
    if(!el.helpClick || el.helpClick === 0){
     //Reassign the value to 1 which means user has clicked on helpfulness button
     el.helpClick = 1
     //set initial state to new value
      setQHelpfulness(el.question_helpfulness += 1);
    } else {
      //if property exists and it doesn't equal 0, we know user has clicked on button and clicked on the same helpfulness button. If so, this means they want to remove their incrementation
      //set state to new value
      setQHelpfulness(el.question_helpfulness -= el.helpClick);
       //Reassign the property to 0
        el.helpClick = 0
   }
  }
  //Convert the property 'answer ids' into an array
  let key = Object.keys(el.answers)

  //For each question, we have to access answers by applying a nested map method to our key variable
  const userAnswers = key.map((a,index) => {

  //Create a func to convert date to MMMM dd yyyy
  let date = format(parseISO(el.answers[key[index]].date),'MMMM dd, yyyy')
    //Helpful Question Click counter will ensure user can only increment helpfulness by 1 and keep the state to no less than initial render [0 means user hasn't clicked, 1 means clicked]
    const helpfulAClick = () => {
      //If new property doesn't exist, create a new property within each questions property to 0 or check to see if property is equal to 0
     if(!el.answers[a].click || el.answers[a].click === 0){
      //Reassign the value to 1 which means user has clicked on helpfulness button
      el.answers[a].click = 1
      //set initial state to new value
       setAHelpfulness(el.answers[a].helpfulness += 1);
    } else {
      //if property exists and it doesn't equal 0, we know user has clicked on button and clicked on the same helpfulness button. If so, this means they want to remove their incrementation
      //set state to new value
      setAHelpfulness(el.answers[a].helpfulness -= el.answers[a].click);
        //Reassign the property to 0
        el.answers[a].click = 0
    }
   }

   //Create a while loop which will run while the index of our nested ANSWER map array is less than the state ACount which will be 2 initially per Business Requirements
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

   //Create a while loop which will run while the index of our QUESTION map array is less than the state QCount which will be 4 initially per Business Requirements
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



return (
  <>
    {mapSearch}
  </>
)



}


export default QAList