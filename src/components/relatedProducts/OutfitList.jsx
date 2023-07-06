import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import { useSelector } from 'react-redux';

import { setList } from '../../redux/actions'

const OutfitList = () => {
  const [outfit, setOutfit] = useState([]);


  useEffect(()=>{
    console.log('outfit in storage is ',outfit)
    setOutfit(JSON.parse(localStorage.getItem('outfit')))
    if (outfit === null) {setOutfit([])}
  },[])

  return (<><div className='text-lg text-gray-800 m-1 p-1'>Your Outfit</div><div className="flex justify-left overflow-x-scroll "><OutfitCard />{outfit.map((itemId) => (<OutfitCard key={itemId} id={itemId} />))}</div></>)

}
export default OutfitList