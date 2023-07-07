import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import { useSelector } from 'react-redux';
import sideScroll from '../../utils/sideScroll'
import {LeftArrow, RightArrow} from '../../utils/icons.jsx'

const OutfitList = () => {
  const [outfit, setOutfit] = useState([]);
  const [button, setButton] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false)
  const [showLeftArrow, setShowLeftArrow] = useState(false)

  useEffect(()=>{
    let result = JSON.parse(localStorage.getItem('outfit'))
    if (result !== null) {setOutfit(result)}
  },[button])


  let clickButton = ()=>{
    setButton(!button)
  }
  const contentWrapper = React.useRef(null);

  return (<><div className='relative'>
  <div className='text-lg text-gray-800 m-1 p-1 dark:bg-gray-600 dark:text-white' data-testid='Outfit List'>Your Outfit
  </div>
  <div className='z-10 absolute h-[250px] w-full pointer-events-none'>
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

  <div ref={contentWrapper} className="flex justify-left overflow-hidden dark:bg-gray-600 dark:text-white"><OutfitCard clickButton={clickButton} />{outfit.map((itemId) => (<OutfitCard clickButton={clickButton} key={itemId} id={itemId} />))}</div>
</div>
</>
)
}
export default OutfitList