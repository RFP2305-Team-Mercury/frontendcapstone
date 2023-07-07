import React, { useEffect, useState } from 'react';
import RPCard from './RPCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../apis/RPandOL.js'
import { setList } from '../../redux/actions'
import sideScroll from '../../utils/sideScroll'
import {LeftArrow, RightArrow} from '../../utils/icons.jsx'


const RelatedProducts = () => {
  // const [showRightArrow, setShowRightArrow] = useState(false)
  // const [showLeftArrow, setShowLeftArrow] = useState(false)

  let list = useSelector(state => state.relatedList);
  const dispatch = useDispatch();
  let id = useSelector(state => state.productId)



  const contentWrapper = React.useRef(null);

  useEffect(() => {
    api.getList(id)
      .then((RP) => { dispatch(setList(RP)) })
  }, [id])

  return (<div className='relative'>
    <div className='text-lg text-gray-800 m-1 p-1 dark:bg-gray-600 dark:text-white' data-testid='RP List'>Related Products
    </div>
    <div className='z-10 absolute h-[300px] w-full pointer-events-none'>
      <div className='z-10 absolute top-[50%] left-[2%] pointer-events-auto'>
        <LeftArrow onClick={() => {
              sideScroll(contentWrapper.current, 10, 800, -10);
            }}/>
      </div>



      <div className='z-10 absolute top-[50%] right-[2%] pointer-events-auto'>
        <RightArrow onClick={() => {
              sideScroll(contentWrapper.current, 10, 800, 10);
            }}/>
      </div>
      </div>

      <div className=" flex justify-left overflow-hidden dark:bg-gray-600 dark:text-white z-0" ref={contentWrapper}>{list.map((itemId) => (<RPCard key={itemId} id={itemId} />))}
      </div>




  </div>)

}
export default RelatedProducts