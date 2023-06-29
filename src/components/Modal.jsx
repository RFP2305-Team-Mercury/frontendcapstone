import React from 'react'
import InputModal from './QuestionsAnswers/InputModal.jsx'
import AnswerModal from './QuestionsAnswers/AnswerModal.jsx'

export default function Modal({type, onClose, isOpen}){
 if (!isOpen) return null

switch(type){
  case 'InputModal':
    return <InputModal onClose={onClose}/>
  case 'AnswerModal':
    return <AnswerModal onClose={onClose}/>
}

}