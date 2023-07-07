import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Provider, useSelector, useDispatch } from 'react-redux';
import {question, answer, openModal, closeModal, setQuestionId} from '../../redux/actions/index.js'
import { format, parseISO } from 'date-fns';
import api from '../../apis/QA.js'
import Modal from '../Modal.jsx'

const QAList = ({message}) => {

let isOpen = useSelector(state => state.open)


  const dispatch = useDispatch();

  const handleQClick = (() => {
    dispatch(openModal())
    dispatch(question())
  })
  const handleAClick = ((id) => {
    dispatch(openModal(id))
    dispatch(answer(id))
  })


let productId = useSelector(state=>state.productId)

//States
  const [data, setData] = useState([])
  const [search,setSearch] = useState(message)
  const [sellerA, setSellerA] = useState(0)
  const [report, setReport] = useState(false)
  const [ACount, setACount] = useState(2)
  const [QCount, setQCount] = useState(4)
  const [AnsweredQ ,setAnsweredQ] = useState(data.length)
  const [helpClick, sethelpClick] = useState(false)
  const [Qhelpfulness, setQHelpfulness] = useState(0)
  const [qID,setqID] = useState(0)
  const [aID,setaID] = useState(0)
  const [Ahelpfulness, setAHelpfulness] = useState(0)

  const addTwoQ = () => {
    let add2 = QCount+5
     setQCount(add2)
    }

//Get Request for Questions with specific product id
 useEffect(() => {
   const fetch = async () => {
    const questions = await api.getQA(productId)
    setData(questions)
   }

   fetch()
   .catch((err) => {
    console.log('Error', err)
   })
 },[search,productId])


 useEffect(() => {
  const helpfulQ = async () => {
    const clickHelp = await api.putQ(qID, {question_helpfulness: Qhelpfulness})
  }
  helpfulQ()
},[Qhelpfulness])

useEffect(() => {
 const helpfulA = async () => {
   const clickHelp = await api.putA(aID, {helpfulness: Ahelpfulness})
 }
 helpfulA()
},[Ahelpfulness])

useEffect(() => {
 const reportA = async () => {
   const clickReport = await api.reportA(aID, {reported: report})
 }
 reportA()
},[report])

  //mapQuestions will either be a filtered data set or the entire data set from the get request
  const mapQuestions = data.filter((q) => q.question_body.includes(message))


  //Apply map method to mapQuestions whether it is the entire data set or filtered data set
  const mapSearch = mapQuestions.map((el,index) => {


  if(!el.loadAnswers){
   el.loadAnswers = 'LOAD MORE ANSWERS'
 }

  //Helpful Question Click counter will ensure user can only increment helpfulness by 1 and keep the state to no less than initial render [0 means user hasn't clicked, 1 means clicked]
  const helpfulQClick = () => {

    //If new property doesn't exist, create a new property within each questions property to 0 or check to see if property is equal to 0
    if(!el.helpClick || el.helpClick === 0){
     //Reassign the value to 1 which means user has clicked on helpfulness button
     el.helpClick = 1
     //set initial state to new value
      setqID(el.question_id)
      setQHelpfulness(el.question_helpfulness+=1);

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
      setaID(el.answers[a].id)
      //If new property doesn't exist, create a new property within each questions property to 0 or check to see if property is equal to 0
     if(!el.answers[a].click || el.answers[a].click === 0){
      //Reassign the value to 1 which means user has clicked on helpfulness button
      el.answers[a].click = 1
      //set initial state to new value
      let total = el.answers[a].helpfulness + 1
       setAHelpfulness(total)
       el.answers[a].helpfulness += 1;
      }

   }

   const reportClick = () => {
    setaID(el.answers[a].id)
    if(el.answers[a].report === 'Report'){
      setReport(true)
      el.answers[a].report = 'Reported'
    }
   }

   const photos = el.answers[a].photos.map((pic) => {
    return(
      <>
      <div className = 'p-2'>
      <img className = 'flex item-center p-0 w-25 h-20 border border-black font-bold' src = {pic} alt ="answer"/>
      </div>
      </>
    )
   })

   //Create a while loop which will run while the index of our nested ANSWER map array is less than the state ACount which will be 2 initially per Business Requirements

     while(index < ACount){
       return(
         <>
         <div className = 'text-lg flex items-center'>
           <h3 className = 'font-bold py-2'>A:</h3>
            <p className = 'UserAnswers pl-2 text-base'>{el.answers[a].body}</p>
         </div>
         <div>
            <span className = 'flex items-center px-5'>{photos}</span>
         </div>
          <div className = 'flex items-center text-xs px-5'>
            <aside className = 'p-2'>by {(el.answers[a].answerer_name === 'Seller' || el.answers[a].answerer_name === 'seller') ? <strong>{el.answers[a].answerer_name}</strong> : el.answers[a].answerer_name},  {date}</aside>
            <div className = 'border-l border-gray-400 h-4'></div>
           <div className = 'text-xs'>
            <label className ='helpful p-2 '>
              Helpful? <button className = 'underline' onClick = {helpfulAClick}>Yes</button> ({el.answers[a].helpfulness})
            </label>
            <label className ='border-l border-gray-400 h-4'>
            <button className ='underline p-2' onClick = {reportClick}>{el.answers[a].report}</button>
            </label>
            </div>
            </div>
         </>
       )
     }


  })

  const loadA = () => {
    el.loadAnswers = 'COLLAPSE ANSWERS'
    setACount(key.length)
  }
  const collapseA = () => {
    el.loadAnswers = 'LOAD MORE ANSWERS'
    setACount(2)
  }


   //Create a while loop which will run while the index of our QUESTION map array is less than the state QCount which will be 4 initially per Business Requirements
  while(index < QCount && key.length >= 1){

    return(
      <>
      <div key = {el} className ='QA' data-testid="Questions">
      <div className = 'flex justify-between'>
      <h3 key = {el.question_id} className = 'text-lg font-bold'>Q:</h3>
      <h3 className = 'text-lg font-bold px-2'>{el.question_body}</h3>
      <div className = 'ml-auto'>
      <label className ='helpful px-2 text-xs'>
        Helpful? <button  data-testid="helpful"className = 'underline' key = {index} onClick = {helpfulQClick}> Yes </button> ({el.question_helpfulness})
      </label>
      </div>
      <div className = 'flex items-center'>
      <div className = 'border-l border-gray-400 h-4 p-1'></div>
      </div>
      <label className ='Add Answer'>
      <button data-testid="AButton" className ='underline text-xs' onClick = {() => handleAClick(el.question_id)}>Add Answer</button>
      </label>
      </div>

      {ACount > 2 ? <div className = 'overflow-y-auto h-32 ...'> {userAnswers} </div> : userAnswers}
      </div>
      <div className = 'p-2'>
      <label>
        {key.length > 2 ? (el.loadAnswers === "LOAD MORE ANSWERS") ? <button className = 'p-2 font-bold text-sm' onClick = {loadA}>{el.loadAnswers}</button> : <button className = 'p-2 font-bold text-sm' onClick = {collapseA}>{el.loadAnswers}</button> : ''}
      </label>
      <br></br>
     </div>
      </>
    )
  }

})

if(data.length === 0){
  return(
        <>
        <label className = 'p-2'>
        <button data-testid="QButton" className="w-60 h-10 border border-gray-300 font-bold flex items-center justify-center" onClick={() => handleQClick()}>
        <span className="mr-2">ADD QUESTION</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        </button>
        </label>
        <div className = 'flex space-x-2'>
      <label>
        <button className = "w-56 h-14 border border-black font-bold flex items-center justify-center text-base p-4" onClick = {addTwoQ}>{QCount < data.length ? 'MORE ANSWERED QUESTIONS' : ''}</button>
      </label>
      <label >
      <button data-testid="QButton" className="w-56 h-14 border border-black font-bold flex items-center justify-center text-base p-4" onClick={() => handleQClick()}>
      <span className="mr-2">ADD QUESTION</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
      </button>
      </label>
      </div>
        </>
  )
} else {

  return (
    <>
    <div data-testid="scroll" role="region" className = 'overflow-y-auto h-128 ...'>
      {mapSearch}
      <div className = 'flex space-x-2'>
      <label>
        <button className = "w-56 h-14 border border-black font-bold flex items-center justify-center text-base p-4" onClick = {() => addTwoQ()}>{QCount < data.length ? 'MORE ANSWERED QUESTIONS' : ''}</button>
      </label>
      <label >
      <button data-testid="QButton" className="w-56 h-14 border border-black font-bold flex items-center justify-center text-base p-4" onClick={() => handleQClick()}>
      <span className="mr-2">ADD QUESTION</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
      </button>
      </label>
      </div>
      </div>
    </>
  )
}




}


export default QAList