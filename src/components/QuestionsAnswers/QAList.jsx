import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Provider, useSelector, useDispatch } from 'react-redux';
import {question, answer,openModal, closeModal} from '../../redux/actions/index.js'
import { format, parseISO } from 'date-fns';
import getQA from '../../apis/QA.js'
import Modal from '../Modal.jsx'

const QAList = ({message}) => {

let isOpen = useSelector(state => state.open)

  const dispatch = useDispatch();

  const handleQClick = (() => {
    dispatch(question())
    dispatch(openModal())
  })

  const handleAClick = (() => {
    dispatch(answer())
    dispatch(openModal())
  })

let productId = useSelector(state=>state.productId)

//States
  const [data, setData] = useState([])
  const [search,setSearch] = useState(message)
  const [sellerA, setSellerA] = useState(0)
  const [report, setReport] = useState(false)
  const [ACount, setACount] = useState(2)
  const [QCount, setQCount] = useState(4)
  const [Qhelpfulness, setQHelpfulness] = useState(1)
  const [Ahelpfulness, setAHelpfulness] = useState(1)

//Get Request for Questions with specific product id
 useEffect(() => {
   const fetch = async () => {
    const questions = await getQA(productId)
    setData(questions)
   }

   fetch()
   .catch((err) => {
    console.log('Error', err)
   })
 },[ACount,search,productId])

  //mapQuestions will either be a filtered data set or the entire data set from the get request
  const mapQuestions = data.filter((q) => q.question_body.includes(message))


  //Apply map method to mapQuestions whether it is the entire data set or filtered data set
  const mapSearch = mapQuestions.map((el,index) => {

  if(!el.loadAnswers){
   el.loadAnswers = 'Load More Answers'
 }


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

  key = key.sort((users,usr) => {
    return el.answers[usr].helpfulness - el.answers[users].helpfulness
  })

  key = key.sort((userA, userB) => {

    const answerA = el.answers[userA]
    const answerB = el.answers[userB]

    // Check if answerA is from Seller or seller
    const isAnswerASeller = answerA.answerer_name.toLowerCase() === 'seller'
    const isAnswerBSeller = answerB.answerer_name.toLowerCase() === 'seller'

    if (isAnswerASeller && isAnswerBSeller) {
        return answerB.helpfulness - answerA.helpfulness
    } else if (isAnswerASeller) {
      return -1
    } else if (isAnswerBSeller) {
      return 1
    } else {
      return 0
    }
  });

  //For each question, we have to access answers by applying a nested map method to our key variable
  const userAnswers = key.map((a,index) => {

  //Create a func to convert date to MMMM dd yyyy
  let date = format(parseISO(el.answers[key[index]].date),'MMMM dd, yyyy')

  if(!el.answers[a].report){
    el.answers[a].report = 'Report'
  }


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

   const reportClick = () => {
    if(el.answers[a].report === 'Report'){
      setReport(true)
      el.answers[a].report = 'Reported'
    } else {
      setReport(false)
      el.answers[a].report = 'Report'
    }
   }

   const photos = el.answers[a].photos.map((pic) => {
    return(
      <>
      <img className = 'flex item-center p-0 w-20 h-20 border border-black font-bold' src = {pic} alt ="answer"/>
      </>
    )
   })

   //Create a while loop which will run while the index of our nested ANSWER map array is less than the state ACount which will be 2 initially per Business Requirements
    while(index < ACount){
      return(
        <>
        <div className = 'flex item-center'>
          <h3 className = 'font-bold p-2'>A:</h3>
           <p className = 'UserAnswers p-2'>{el.answers[a].body}</p>
        </div>

           <p className = 'flex item-center'>{photos}</p>

         <div className = 'flex item-center p-2'>
           <aside>by {(el.answers[a].answerer_name === 'Seller' || el.answers[a].answerer_name === 'seller') ? <strong>{el.answers[a].answerer_name}</strong> : el.answers[a].answerer_name},  {date}</aside>
          </div>
          <div className = 'p-2'>
           <label className ='helpful'>
             Helpful? <button onClick = {helpfulAClick}>Yes ({el.answers[a].helpfulness}) </button>
           </label>
           <label className ='p-2'>
           <button onClick = {reportClick}>{el.answers[a].report}</button>
           </label>
           </div>
        </>
      )
    }

  })

  const loadA = () => {
    el.loadAnswers = ''
    setACount(key.length)
  }



   //Create a while loop which will run while the index of our QUESTION map array is less than the state QCount which will be 4 initially per Business Requirements
  while(index < QCount){
    return(
      <>
      <div key = {el} className ='QA' >
      <div className = 'flex items-center'>
      <h3 key = {el.question_id} className = 'font-bold p-2'>Q: {el.question_body}</h3>
      <label className ='helpful'>
        Helpful? <button key = {index} onClick = {helpfulQClick}> Yes ({el.question_helpfulness})</button>
      </label>
      <label className ='Add Answer p-2'>
      <button onClick = {() => handleAClick()}>Add Answer</button>
      </label>
      </div>


      {userAnswers}



      </div>
      <div className = 'p-2'>
      <label>
        {(key.length > 2) ? <button className = 'p-2 font-bold' onClick = {loadA}>{el.loadAnswers}</button> : ''}
      </label>
      <label>
        <button className = 'p-2 font-bold' onClick = {function(){setQCount(data.length)}}>{el.length > 2 ? 'Load More Questions' : ''}</button>
      </label>
      <br></br>
      <label className = 'p-2'>
      <button className = ' w-60 h-10 border border-gray-300 font-bold'onClick = {() => handleQClick()}>Add Question +</button>
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