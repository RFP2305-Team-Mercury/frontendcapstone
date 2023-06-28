import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Gallery() {
  const selected = useSelector((state) => state.selected);
  const photos = selected['photos'];
  const [current, setCurrent] = useState(selected['photos'][0]['url']);
  const [index, setIndex] = useState(0);

  const handleThumbnail = (index, url) => {
    setCurrent(url);
    setIndex(index);
  };

  const handleLeft = (
  ) => {
    setCurrent(photos[index-1]["url"])
    if(index !== 0){
      setIndex(index-1);
    }
  };

  const handleRight = () => {
    setCurrent(photos[index+1]["url"])
    if(index !== photos.length-1){
      setIndex(index+1);
    }
  };

  useEffect(() => {
    setCurrent(selected['photos'][0]['url']);
  }, [selected])

  const handleExpand = () => {};

  return (
    <div className="flex-2 w-2/3 h-[600px] justify-center bg-gray-300 border-black border-2 mt-2">
      <img className="w-full h-full object-cover m-auto" src={current} />
      <button onClick={() => handleExpand()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute top-[5rem] right-[37%] w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="absolute top-[23rem] left-[10vw] transform -translate-y-1/2">
        {photos.map((photo, index) => {
          return (
            <img
              key={photo["thumbnail_url"]}
              className={`border-2 w-16 h-16 mb-2 object-cover`}
              src={photo["thumbnail_url"]}
              onClick={() => handleThumbnail(index, photo["url"])}
            />
          );
        })}
      </div>
      {index === 0 ? '' : <button
        onClick={() => {
          handleLeft();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="absolute top-[20rem] left-[17vw] transform -translate-y-1/2 w-6 h-6 bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>}
      {index === photos.length-1 ? '' :
      <button
        onClick={() => {
          handleRight();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="black"
          className="absolute top-[20rem] right-[38vw] transform -translate-y-1/2 w-6 h-6 bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>}
    </div>
  );
}
