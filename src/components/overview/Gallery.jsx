import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ExpandIcon,
  LeftArrow,
  RightArrow,
  UpChevron,
  DownChevron,
} from "../../utils/icons.jsx";
import ZoomedImage from "./ZoomedImage.jsx";

export default function Gallery({ isExpanded, setIsExpanded }) {
  const selected = useSelector((state) => state.selected);
  const photos = selected["photos"];
  let count = 0;
  const [current, setCurrent] = useState(selected["photos"][0]["url"]);
  const [index, setIndex] = useState(0);
  const maxThumbnails = 7;
  const [isZoomed, setIsZoomed] = useState(false);

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
    setIsZoomed(false);
  };

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const scrollUp = () => {
    setCurrent(photos[index - 1]["url"]);
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const scrollDown = () => {
    setCurrent(photos[index + 1]["url"]);
    if (index !== photos.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      {isExpanded ? (
        isZoomed ? (
          <>
          <ZoomedImage image={current} handleExpand={handleExpand} />
          </>
      ) : (
        <div className="relative h-[800px] mt-2 flex justify-center items-center content-center overflow-x-visible z-1 bg-gray-300" data-testid="expanded-img">
          <img
            className="w-[85vw] h-[800px] object-cover cursor-crosshair custom-cursor border-black border-2 z-1 transition ease-in"
            src={current}
            onClick={handleZoom}
          />
          <ExpandIcon onClick={handleExpand} />
          {index !== 0 && <LeftArrow onClick={handleLeft} />}
          {index !== photos.length - 1 && <RightArrow onClick={handleRight} />}
        </div>
      )) : (
        <>
          <div className="relative flex-2 w-2/3 h-[600px] mt-2 flex justify-end" >
            <img
            data-testid="normal-img"
              className="w-full h-[600px] object-cover m-auto cursor-zoom-in custom-cursor border-black border-2"
              src={current}
              onClick={handleExpand}
            />
            <ExpandIcon onClick={handleExpand} />
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2" data-testid="thumbnail-div">
              {photos.length > maxThumbnails ? <UpChevron onClick={scrollUp}/> : ""}
              {photos.map((photo, position) => {
                if(photos.length < maxThumbnails){
                  return (
                    <img
                    data-testid="thumbnail-img"
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
                } else {
                  if(position < maxThumbnails){
                  return (
                    <img
                      data-testid="thumbnail-img"
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
              }
              })}
              {photos.length > maxThumbnails ? <DownChevron onClick={scrollDown}/> : ""}
            </div>
            {index !== 0 && <LeftArrow onClick={handleLeft} />}
            {index !== photos.length - 1 && (
              <RightArrow onClick={handleRight} />
            )}
          </div>
        </>
      )}
    </>
  );
}
