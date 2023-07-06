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

  return (<><div className='text-lg text-gray-800 m-1 p-1' data-testid='RP List'>Related Products</div><div className="flex justify-left overflow-x-scroll ">{list.map((itemId) => (<RPCard key={itemId} id={itemId} />))}</div></>)

}
export default RelatedProducts