import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, setId } from '../../redux/actions'
import api from '../../apis/RPandOL.js'

const RPCard = ({ id }) => {
  const [itemInfo, setItemInfo] = useState ({})
  useEffect(()=>{
    const fetchCard = async()=>{
      let card = await api.getCardInfo(id);
      console.log(card)
      setItemInfo(card)
      console.log(itemInfo)
    }
    fetchCard()
  },[])

  return (
    <>
      <li>
        <img src={itemInfo.thumbnail} />
        <div>{itemInfo.category}</div>
        <label>{itemInfo.name}</label>
        <div>{itemInfo.price}</div>
      </li>
    </>)
}
export default RPCard