import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setId, openModal, comparisonModal, setComparisonId } from '../../redux/actions';
import api from '../../apis/RPandOL.js'
import StarRatings from 'react-star-ratings'

const OutfitCard = ({ id, clickButton }) => {
  const [itemInfo, setItemInfo] = useState({});
  const [stars, setStars] = useState(5);
  let xClicked = false;
  const dispatch = useDispatch();
  let prodId = useSelector(state => state.productId);

  const addCard = () => {
    let outfit = JSON.parse(localStorage.getItem('outfit'));
    if (outfit === null) outfit = [];
    clickButton();
    if (outfit === null) outfit = [];
    if (!outfit.includes(prodId)) {
      outfit = [...outfit, prodId]
      localStorage.setItem('outfit', JSON.stringify(outfit));
    }
  }

  if (id === undefined) {
    return (<>
      <div className='shrink-0 m-2 p-1 border-solid border-2 h-full' data-testid="Add to Outfit Card" onClick={() => { addCard() }}>
        <div className='hover:bg-grey-300 active:bg-grey-700 '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus">
            <g data-name="Layer 2">
              <g data-name="plus-square">
                <rect width="24" height="24" opacity="0">
                </rect>
                <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z">
                </path>
                <path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z">
                </path>
              </g>
            </g>
          </svg>
        </div>
        <div className='max-w-sm max-h-md'>
          <div className='font-medium text-xl text-center'>Click to add to </div>
          <div className='font-medium text-xl text-center'>Your Outfit</div>
        </div>
      </div>
    </>)
  }


  const fetchCard = async () => {
    let card = await api.getCardInfo(id);
    setItemInfo(card);
  };

  useEffect(() => {
    fetchCard();
  }, [])

  const x = () => {
    xClicked = true
    //remove item from local storage
    let outfit = JSON.parse(localStorage.getItem('outfit'));
    outfit.splice(outfit.indexOf(id), 1)
    localStorage.setItem('outfit', JSON.stringify(outfit));
    clickButton()
  }
  const changeCard = () => {
    setTimeout(() => {
      if (xClicked === false) {
        dispatch(setId(id));
      }
    }, 5);
  }


  return (
    <>
      <div className='inline-block shrink-0 m-2 p-1 border-solid border-2 w-2/6' data-testid="Outfit Card">
        <div onClick={() => { changeCard() }}>
          <div className='relative h-[250px] bg-gray-300 items-center'>
            <img className="shadow-md object-cover h-full w-full " src={itemInfo.thumbnail} />
            <button onClick={() => { x() }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-[1rem] right-[5%] w-8 h-8' width="30" height="30" fill="currentColor"  viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button>
          </div>
          <div>
            <div className='italic text-m'>{itemInfo.category}</div>
            <div className='font-medium text-lg'>{itemInfo.name}</div>
            <div>{itemInfo.slogan}</div>
            <div className='italic text-sm'>{itemInfo.price}</div>
            <div className="" >
              {<StarRatings
                rating={Number(stars)}
                numberOfStars={5}
                starDimension="15px"
                starSpacing="2px"
              />}
            </div>
          </div>
        </div>
      </div>
    </>)


}
export default OutfitCard