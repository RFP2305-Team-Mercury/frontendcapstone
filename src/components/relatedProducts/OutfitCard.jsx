import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOutfitItem, setId, openModal, comparisonModal, setComparisonId } from '../../redux/actions';
import api from '../../apis/RPandOL.js'
import StarRatings from 'react-star-ratings'

const OutfitCard = ({ id }) => {
  const [itemInfo, setItemInfo] = useState({});
  const [stars, setStars] = useState(5);
  let starClicked = false;
  const dispatch = useDispatch();
  let prodId = useSelector(state=>state.productId);
  let outfit = JSON.parse(localStorage.getItem('outfit'));
  const fetchCard = async () => {
    let card = await api.getCardInfo(id);
    setItemInfo(card);
  };

  const addCard = ()=>{
    if (!outfit.includes(prodId)) {
    outfit = [...outfit, prodId]
    localStorage.setItem('outfit', JSON.stringify(outfit));
    }
  }

  useEffect(() => {
    fetchCard();
  }, [])

  const star = () => {
    starClicked =true
    dispatch(setComparisonId(id));
    dispatch(comparisonModal());
    dispatch(openModal());
    setTimeout(()=>starClicked =false, 10)
  }
  const changeCard = () => {
    setTimeout(()=>{
      if (starClicked === false) {
        dispatch(setId(id));
      }
    }, 5);
  }
  if (id === undefined) {
    return (<>
      <div className='shrink-0 m-2 p-1 border-solid border-2 w-2/8 h-[250px]' data-testid="Outfit Card" onClick={() => { addCard() }}>
          <div className='max-w-sm max-h-md'>
            <div className='font-medium text-lg'>Click to add to Your Outfit</div>
          </div>
        </div>
    </>)
  }

return (
    <>
      <div className='shrink-0 m-2 p-1 border-solid border-2 w-[200px]' data-testid="Outfit Card">
        <div onClick={() => { changeCard() }}>
          <div className='relative max-w-full bg-gray-300 '>
            <img className="w-full h-[150px] object-contain justify-center items-center" src={itemInfo.thumbnail} />
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