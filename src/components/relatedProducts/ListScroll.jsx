import React, { useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import RPCard from './RPCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
// import { setList, addItem, removeItem } from '../../redux/actions/RPandOLActions'
import api from '../../apis/RPandOL.js'
import {setList, addItem, removeItem} from '../../redux/actions'

const ListScroll = ({ type }) => {
  let listScroll;
  let list = useSelector(state => state.relatedList);
  const dispatch = useDispatch();
  let id = useSelector(state => state.productId)

  useEffect(() => {
    api.getList(id)
       .then((newList) => { dispatch(setList(newList)) })
  }, [])
  switch (type) {
    case 'outfit':
      listScroll = (<><div className="overflow-x-scroll">Related Products<div className='w-8/12 px-4'>{list.map((itemId) => (<OutfitCard id={itemId} />) )}</div></div></>)
      break;
    case 'related':
      listScroll = (<div className="overflow-x-scroll">{list.map((itemId) => (<RPCard key={itemId} id={itemId} />) )}</div>)
      break;
  }
  return listScroll;
}
export default ListScroll