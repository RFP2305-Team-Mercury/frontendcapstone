import React, { useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import RPCard from './RPCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setList, addItem, removeItem } from '../../redux/actions/RPandOLActions'
import api from '../../apis/RPandOL.js'
// import {} from '../../redux/actions'

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
      listScroll = list.map((itemId) => { <OutfitCard id={itemId} /> });
      break;
    case 'related':
      listScroll = list.map((itemId) => { <RPCard id={itemId} /> });
      break;
  }
  return listScroll;
}
export default ListScroll