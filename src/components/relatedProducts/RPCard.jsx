import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOutfitItem, setId, openModal, comparisonModal, setComparisonId } from '../../redux/actions';
import api from '../../apis/RPandOL.js';
import StarRatings from 'react-star-ratings'

const RPCard = ({ id }) => {
  const [itemInfo, setItemInfo] = useState({});
  const [stars, setStars] = useState(5);
  let starClicked = false;
  const dispatch = useDispatch();
  const fetchCard = async () => {
    let card = await api.getCardInfo(id);
    setItemInfo(card);
    setStars(card.stars)
  }

  useEffect(() => {
    fetchCard();
  }, []);

  const star = () => {
    starClicked = true
    dispatch(setComparisonId(id));
    dispatch(comparisonModal());
    dispatch(openModal());
    setTimeout(() => starClicked = false, 10)
  }
  const changeCard = () => {
    setTimeout(() => {
      if (starClicked === false) {
        dispatch(setId(id));
      }
    }, 5);
  }

  return (
    <>
      <div className='hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-600 dark:text-white shrink-0 m-2 p-1 border-solid border-2 w-2/6' data-testid="RP Card">
        <div onClick={() => { changeCard() }}>
          <div className='relative  h-[250px] bg-gray-300 items-center'>
            <img className="shadow-md object-cover h-full w-full" src={itemInfo.thumbnail} alt="Product Card"/>
            <button
            alt="Open Comparison Pop Up"
            aria-label="Open Comparison Pop Up"
            onClick={() => { star() }}><svg
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
          <div className='flex flex-col'>
            <div className='italic text-m'>{itemInfo.category}</div>
            <div className='font-medium text-lg'>{itemInfo.name}</div>
            <div>{itemInfo.slogan}</div>
            <div className='italic text-sm'>{itemInfo.price}</div>
            <div className="justify-bot" >
              {<StarRatings
                rating={Number(stars)}
                starRatedColor='gold'
                starEmptyColor='darkGrey'
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
export default RPCard;