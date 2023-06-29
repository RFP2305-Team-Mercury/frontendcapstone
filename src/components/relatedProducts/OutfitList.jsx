import React, { useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import { useSelector } from 'react-redux';

import { setList } from '../../redux/actions'

const OutfitList = () => {
  let outfits = useSelector(state => state.outfits);

  return (<div className='min-h-96'><div className='text-lg font-semibold'>Your Outfit</div><div className="flex justify-between overflow-x-scroll "><OutfitCard />{outfits.map((itemId) => (<OutfitCard key={itemId} id={itemId} />))}</div></div>)

}
export default OutfitList