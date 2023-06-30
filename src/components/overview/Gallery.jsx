import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ExpandIcon, LeftArrow, RightArrow } from "../../utils/icons.jsx";

export default function Gallery( {isExpanded, setIsExpanded}) {
  const selected = useSelector((state) => state.selected);
  const photos = selected["photos"];
  let count = 0;
  const [current, setCurrent] = useState(selected["photos"][0]["url"]);
  const [index, setIndex] = useState(0);


  const handleThumbnail = (index, url) => {
    setCurrent(url);
    setIndex(index);
  };

  const handleLeft = () => {
    setCurrent(photos[index - 1]["url"]);
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const handleRight = () => {
    setCurrent(photos[index + 1]["url"]);
    if (index !== photos.length - 1) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    setCurrent(selected["photos"][0]["url"]);
  }, [selected]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded ? (
         <div className="relative h-[600px] mt-2 flex justify-center  items-center content-center overflow-x-visible z-1">
          <img
            className="w-full h-[600px] overflow-x-visible object-fill cursor-zoom-out custom-cursor border-black border-2 z-1"
            src={current}
            onClick={handleExpand}
          />
          <ExpandIcon onClick={handleExpand} />
          {index !== 0 && <LeftArrow onClick={handleLeft} />}
          {index !== photos.length - 1 && <RightArrow onClick={handleRight} />}
        </div>
      ) : (
        <>
        <div className="relative flex-2 w-2/3 h-[600px] bg-gray-300  mt-2 flex justify-end">
          <img
            className="w-full h-[600px] object-contain m-auto cursor-zoom-in custom-cursor border-black border-2"
            src={current}
            onClick={handleExpand}
          />
          <ExpandIcon onClick={handleExpand} />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            {photos.map((photo, position) => {
              count++;
              if (count <= 7) {
                return (
                  <img
                    key={photo["thumbnail_url"]}
                    className={
                      index === position
                        ? "border-b-8 border-2 border-black w-16 h-16 mb-2 object-cover"
                        : "border-2 w-16 h-16 mb-2 object-cover"
                    }
                    src={photo["thumbnail_url"]}
                    onClick={() => handleThumbnail(position, photo["url"])}
                  />
                );
              }
            })}
          </div>
          {index !== 0 && <LeftArrow onClick={handleLeft} />}
          {index !== photos.length - 1 && <RightArrow onClick={handleRight} />}
          </div>
        </>
      )}
    </>
  );
}
