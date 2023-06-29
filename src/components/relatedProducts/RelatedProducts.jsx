import React, { useEffect } from 'react';
import RPCard from './RPCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../apis/RPandOL.js'
import { setList } from '../../redux/actions'

const RelatedProducts = () => {
  let listScroll;
  let list = useSelector(state => state.relatedList);
  const dispatch = useDispatch();
  let id = useSelector(state => state.productId)


  useEffect(() => {
    api.getList(id)
      .then((RP) => { dispatch(setList(RP)) })
  }, [id])

  return (<div><div className='text-lg font-semibold'>Related Products</div><div className="flex justify-between overflow-x-scroll ">{list.map((itemId) => (<RPCard key={itemId} id={itemId} />))}</div></div>)

}
export default RelatedProducts