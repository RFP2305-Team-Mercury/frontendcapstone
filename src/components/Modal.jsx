import React from 'react'
import InputModal from './QuestionsAnswers/InputModal.jsx'

export default function Modal({type, onClose, isOpen}){
 if (!isOpen) return null
console.log('Modal??? Reading???')
switch(type){
  case 'InputModal':
  return <InputModal onClose={onClose}/>
}

}