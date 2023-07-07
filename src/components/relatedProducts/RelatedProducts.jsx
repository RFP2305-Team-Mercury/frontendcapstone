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

  const sideScroll = (
    element,
    speed,
    distance,
    step
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const contentWrapper = React.useRef(null);

  useEffect(() => {
    api.getList(id)
      .then((RP) => { dispatch(setList(RP)) })
  }, [id])

  return (<>
    <div className='text-lg text-gray-800 m-1 p-1' data-testid='RP List'>Related Products
    </div>
    <div className='relative '>
    <div className=" flex justify-left overflow-hidden"  ref={contentWrapper}>{list.map((itemId) => (<RPCard key={itemId} id={itemId} />))}
    <div className='block  absolute'>
      <button
        onClick={() => {
          sideScroll(contentWrapper.current, 50, 250, -25);
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          sideScroll(contentWrapper.current, 50, 250, 25);
        }}
      >
        Right
      </button>
    </div>
    </div>
    </div>


  </>)

}
export default RelatedProducts