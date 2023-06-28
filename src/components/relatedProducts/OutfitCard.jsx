import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOutfitItem, removeOutfitItem, setId } from '../../redux/actions'
import api from '../../apis/RPandOL.js'

const OutfitCard = ({ id }) => {
  const [itemInfo, setItemInfo] = useState({})
  const dispatch = useDispatch()//line 20: dispatch(setId(id)) instead of console.log

  useEffect(() => {
    const fetchCard = async () => {
      let card = await api.getCardInfo(id);
      setItemInfo(card)
    }
    fetchCard()
  }, [])

  const removeItem= ()=>{
    dispatch(removeOutfitItem(id))
  }
  return (
    <>
      <div className='grid-auto-rows' data-testid="Outfit Card">
        <div  onClick={() => { console.log('clicked id:',id) }}>
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
        <button onClick={() => { removeItem() }}>unstar</button>
      </div>
    </>)
}
export default OutfitCard