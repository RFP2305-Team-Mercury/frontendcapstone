import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/index.js';
import StarRatings from 'react-star-ratings';
import api from '../../apis/reviews.js';
import FormCharacteristics from './FormCharacteristics.jsx';

export default function NewReviewModal({ onClose }) {
  const dispatch = useDispatch();
  let productId = useSelector(state=>state.productId);

  const [rating, setRating] = useState(0);
  const [recommended, setRecommended] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photoKey, setPhotoKey] = useState(0);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [characteristics, setCharacteristics] = useState([]);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);

  const handleRateCharacter = (character, score) => {
    switch (character) {
      case 'size':
        setSize(score);
        break;
      case 'width':
        setWidth(score);
        break;
      case 'comfort':
        setComfort(score);
        break;
      case 'quality':
        setQuality(score);
        break;
      case 'length':
        setLength(score);
        break;
      case 'fit':
        setFit(score);
        break;
    }
  };

  const getStarRatingText = (rating) => {
    switch (rating) {
      case 1:
        return '1 Star - "Poor"';
      case 2:
        return '2 Stars - "Fair"';
      case 3:
        return '3 Stars - "Average"';
      case 4:
        return '4 Stars - "Good"';
      case 5:
        return '5 Stars - "Great"';
    }
  };

  const handleAddPhoto = () => {
    let url = prompt("Please add a URL:");
    if (url) {
      let photo = {photoKey, url}
      setPhotos([...photos, photo]);
      setPhotoKey(photoKey + 1);
    }
  };

  useEffect(() => {
    async function fetchMeta() {
      try {
        let metaParams = {
          product_id: productId
        }
        let metaResult = await api.getMetaData(metaParams);
        setCharacteristics(Object.keys(metaResult.characteristics));
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeta();
  }, []);

  return ReactDom.createPortal(
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto min-w-[60vw] max-w-[90vw]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Write Your Review</h3>
              <button
                className="p-1 ml-4 bg-transparent border-0 text-black opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none align-center"
                onClick={() => dispatch(closeModal())}>
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
              </button>
            </div>
            {/*body*/}
            {/* <h2 className="px-6 py-2 text-xl">for product {productId}</h2> */}
            <div className="relative p-6 flex justify-between space-x-12 divide-x divide-solid">
              <div className="w-2/4 pl-12">
                <div className="flex flex-col mb-2">
                  <label className="underline">Overall Rating:</label>
                  <div className="flex flex-row">
                    <StarRatings
                      rating={rating}
                      starRatedColor="blue"
                      changeRating={setRating}
                      numberOfStars={5}
                      name='rating'
                      starDimension="24px"
                      starSpacing="5px"
                      starRatedColor="green"
                      starEmptyColor="lightgray"
                      starHoverColor="green"
                    />
                    {rating > 0 ? <div className="pl-4">{getStarRatingText(rating)}</div> : ''}
                  </div>
                </div>
                <div className="my-2">
                  <div className="underline">Do You Recommend?</div>
                  <input
                    onClick={() => { setRecommended(true) }}
                    className="ml-6 mr-2"
                    type='radio'
                    name='recommend'
                    value='yes'
                    id='rec_yes'
                  />
                  <label htmlFor='rec_yes'>Yes</label>
                  <input
                    onClick={() => { setRecommended(false) }}
                    className="ml-6 mr-2"
                    type='radio'
                    name='recommend'
                    value='no'
                    id='rec_no'
                  />
                  <label htmlFor='rec_no'>No</label>
                </div>
                <div className="my-2">
                  <label className="underline">Summary</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 my-2"
                    type='text'
                    placeholder="Example: Best purchase ever!"
                    maxLength="60"
                    onChange={(event) => { setSummary(event.target.value) }}
                  />
                </div>
                <div className="my-2">
                  <label className="underline">Body</label>
                  <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 my-2"
                    placeholder="Why did you like the product or not?"
                    maxLength="1000"
                    onChange={(event) => { setBody(event.target.value) }}
                  ></textarea>
                  <div className="text-sm font-light pl-2">{body.length < 50 ? `Minimum required characters left: ${50 - body.length}` : 'Minimum Reached!'}</div>
                </div>
                <div className="my-2 flex flex-col">
                  <label className="underline pb-2">Photos</label>
                  {photos.length < 5 ? <button
                    className="text-xs font-light text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-2 py-1 w-24"
                    onClick={handleAddPhoto}
                  >Choose File</button> : ''}
                  <div className="pl-2 text-xs font-light">
                    {photos.length > 0 ? photos.map((photo) => {
                      return <img className="shadow-md object-cover h-32 w-24 inline m-2" key={photo.photoKey} src={photo.url} />
                    }) : "No Photos Added"}
                  </div>
                </div>
                <div className="my-2">
                  <label className="underline">Nickname</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 my-2"
                    type='text'
                    placeholder="Example: jackson11!"
                    maxLength="60"
                    onChange={(event) => { setNickname(event.target.value) }}
                  />
                  <div className="text-sm font-light pl-2">For privacy reasons, do not use your full name or email address</div>
                </div>
                <div className="my-2">
                  <label className="underline">email</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 my-2"
                    type='text'
                    placeholder="Example: jackson11@email.com"
                    maxLength="60"
                    onChange={(event) => { setEmail(event.target.value) }}
                  />
                  <div className="text-sm font-light pl-2">For privacy reasons, do not use your full name or email address</div>
                </div>
              </div>
              <div className="w-2/4 px-12">
                <div className="mb-2 divide-y divide-dashed">
                  {characteristics.map((each) => { return <FormCharacteristics characteristic={each} handleRateCharacter={handleRateCharacter} key={each} />})}
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispatch(closeModal())}
              >Submit</button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispatch(closeModal())}
              >Discard</button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>, document.getElementById('portal')
  )
}