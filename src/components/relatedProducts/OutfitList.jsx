import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import { useSelector } from 'react-redux';


const OutfitList = () => {
  const [outfit, setOutfit] = useState(JSON.parse(localStorage.getItem('outfit')));
  const [buttonClicked, setButtonClicked] = useState(false);
  if (outfit === null) {setOutfit([])}
  const clickButton = ()=>{
    setButtonClicked(!buttonClicked);
  }
  useEffect(()=>{
    setOutfit(JSON.parse(localStorage.getItem('outfit')))
  },[buttonClicked])

  return (<><div className='text-lg text-gray-800 m-1 p-1'>Your Outfit</div><div className="flex justify-left overflow-x-scroll "><OutfitCard />{outfit.map((itemId) => (<OutfitCard clickButton={clickButton} key={itemId} id={itemId} />))}</div></>)

}
export default OutfitList