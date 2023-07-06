import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setId, openModal, comparisonModal, setComparisonId } from '../../redux/actions';
import api from '../../apis/RPandOL.js'
import StarRatings from 'react-star-ratings'

const OutfitCard = ({ id, clickButton }) => {
  const [itemInfo, setItemInfo] = useState({});
  const [stars, setStars] = useState(5);
  let starClicked = false;
  const dispatch = useDispatch();
  let prodId = useSelector(state => state.productId);
  let outfit = JSON.parse(localStorage.getItem('outfit'));
  const fetchCard = async () => {
    let card = await api.getCardInfo(id);
    setItemInfo(card);
  };

  const addCard = () => {
    clickButton();
    if (!outfit.includes(prodId)) {
      outfit = [...outfit, prodId]
      localStorage.setItem('outfit', JSON.stringify(outfit));
    }
  }

  useEffect(() => {
    fetchCard();
  }, [])

  const star = () => {
    starClicked = true
    //remove item from local storage
  }
  const changeCard = () => {
    setTimeout(() => {
      if (starClicked === false) {
        dispatch(setId(id));
      }
    }, 5);
  }
  if (id === undefined) {
    return (<>
      <div className='shrink-0 m-2 p-1 border-solid border-2 w-2/8 h-[250px]' data-testid="Add to Outfit Card" onClick={() => { addCard() }}>
        <div className='justify-center'>
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
          <div className='font-medium text-xl'>Click to add to </div>
          <div className='font-medium text-xl'>Your Outfit</div>
        </div>
      </div>
    </>)
  }

  return (
    <>
      <div className='shrink-0 m-2 p-1 border-solid border-2 w-[200px]' data-testid="Outfit Card">
        <div onClick={() => { changeCard() }}>
          <div className='relative max-w-full bg-gray-300 '>
            <img className="shadow-md object-cover h-32 w-24 inline m-2" src={itemInfo.thumbnail} />
            <button onClick={() => { star() }}><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="absolute top-[1rem] right-[5%] w-10 h-10"
            >
              <path
                fillRule="evenodd"
                fill="gold"
                d=" M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
            l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
                clipRule="evenodd"
                stroke='black'
              /></svg></button>
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