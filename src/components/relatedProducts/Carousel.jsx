import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import RPCard from './RPCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { RPandOLActions } from '../../redux/actions/RPandOLActions'

const Carousel = ({ type })=>{
  let list, carousel;

  const dispatch = useDispatch();

  switch (type) {
    case 'outfit':
      list = useSelector(state => state[type]);
      carousel = list.map((itemId)=>{<OutfitCard />});
      break;
    case 'related':
      list = useSelector(state => state[type]);
      carousel = list.map((itemId)=>{<RelatedCard />});
      break;
  }

  return carousel;
}
export default Carousel