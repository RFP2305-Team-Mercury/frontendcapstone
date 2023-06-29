import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOutfitItem, setId, openModal, comparisonModal, setComparisonId } from '../../redux/actions'
import api from '../../apis/RPandOL.js'

const RPCard = ({ id }) => {
  const [itemInfo, setItemInfo] = useState({})
  const dispatch = useDispatch()
  const fetchCard = async () => {
    let card = await api.getCardInfo(id);
    setItemInfo(card)
  }

  useEffect(() => {
    fetchCard()
  }, [])

  const star = () => {
    //set comparison to id
    dispatch(setComparisonId(id))
    //open comparison modal
    dispatch(comparisonModal())
    dispatch(openModal())
  }
  return (
    <>
      <div className='grid-auto-rows' data-testid="RP Card">
        <div onClick={() => { dispatch(setId(id)) }}>
          <div className='max-w-sm max-h-md'>
            <img src={itemInfo.thumbnail} />
          </div>
          <div>
            <div className='italic text-m'>{itemInfo.category}</div>
            <div className='font-medium text-lg'>{itemInfo.name}</div>
            <div>{itemInfo.slogan}</div>
            <div className='italic text-sm'>{itemInfo.price}</div>
          </div>
        </div>
        <button onClick={() => { star() }}>star</button>
      </div>
    </>)
}
export default RPCard