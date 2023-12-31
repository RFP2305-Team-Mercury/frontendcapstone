import React from 'react'
import InputModal from './QuestionsAnswers/InputModal.jsx'
import AnswerModal from './QuestionsAnswers/AnswerModal.jsx'
import ComparisonModal from './relatedProducts/ComparisonModal.jsx'
import NewReviewModal from './ratingsAndReviews/NewReviewModal.jsx'
import {useSelector} from 'react-redux'

export default function Modal({ type, onClose, id }) {
  if (!useSelector(state => state.open)) return null;
  switch (type) {
    case 'InputModal':
      return <InputModal onClose={onClose} />
    case 'ComparisonModal':
      return <ComparisonModal onClose={onClose} />
    case 'AnswerModal':
      return <AnswerModal id={id} onClose={onClose} />
    case 'NewReviewModal':
      return <NewReviewModal onClose={onClose} />
  }

}
