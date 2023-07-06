import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ExpandIcon,
  LeftArrow,
  RightArrow,
  UpChevron,
  DownChevron,
  SquareSelected,
  SquareNotSelected
} from "../../utils/icons.jsx";
import ZoomedImage from "./ZoomedImage.jsx";

export default function Gallery({ isExpanded, setIsExpanded }) {
  const selected = useSelector((state) => state.selected);
  const productId = useSelector((state) => state.productId);
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
  }, [productId, selected]);

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
            <ZoomedImage image={current} handleExpand={handleExpand} handleZoom={handleZoom} />
          </>
        ) : (
          <div
            className="relative h-[90vh] mt-2 flex justify-center items-center content-center overflow-x-visible z-1 bg-gray-300"
            data-testid="expanded-img"
          >
            <img
              className="w-[85vw] h-[90vh] object-cover cursor-crosshair custom-cursor border-black border-2 z-1 transition ease-in"
              src={current}
              onClick={handleZoom}
              alt="Expanded Product Image"
            />
            <ExpandIcon onClick={handleExpand} />
            {index !== 0 && <UpChevron onClick={scrollUp}/>}
            <div
              className="absolute top-1/2 left-10 transform -translate-y-1/2 z-8"
              data-testid="thumbnail-div"
             style={{ height: "150px", overflow: "auto", width: "50px" }}
            >
            {photos.map((photo, position) => {
                  return (
                    <img
                      data-testid="thumbnail-img"
                      key={photo["thumbnail_url"]}
                      alt="Thumbnail Product Image"
                      src={index === position
                        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/1024px-Solid_black.svg.png?20110227150705"
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png?20220303184432"
                      }
                      className=
                      {index === position
                        ? "h-4 w-4 mb-2 top-1/2 rounded-full"
                        : "h-4 w-4 mb-2 top-1/2 rounded-full border-2"
                      }
                      onClick={() => handleThumbnail(position, photo["url"])}
                    />
                  );
                })}
            </div>
            {index !== photos.length - 1 && <DownChevron onClick={scrollDown}/>}
            {index !== 0 && <LeftArrow onClick={handleLeft} />}
            {index !== photos.length - 1 && (
              <RightArrow onClick={handleRight} />
            )}
          </div>
        )
      ) : (
        <div className="relative flex-2 w-2/3 h-[600px] mt-2 flex justify-end">
            <img
              data-testid="normal-img"
              className="w-full h-[600px] object-cover m-auto cursor-zoom-in custom-cursor border-black border-2"
              src={current}
              onClick={handleExpand}
              alt="Product Main Image"
            />
            <ExpandIcon onClick={handleExpand} />
            <div
              className="absolute top-1/2 left-10 transform -translate-y-1/2"
              data-testid="thumbnail-div"
             style={{ height: "450px", overflow: "auto" }}
            >
              {photos.map((photo, position) => {
                  return (
                    <img
                      data-testid="thumbnail-img"
                      key={photo["thumbnail_url"]}
                      className={
                        index === position
                          ? "border-2 border-black w-16 h-16 mb-2 object-cover"
                          : "border-2 w-16 h-16 mb-2 object-cover"
                      }
                      alt="Thumbnail Product Image"
                      src={photo["thumbnail_url"]}
                      onClick={() => handleThumbnail(position, photo["url"])}
                    />
                  );
                })}
            </div>
            {index !== 0 && <LeftArrow onClick={handleLeft} />}
            {index !== photos.length - 1 && (
              <RightArrow onClick={handleRight} />
            )}
          </div>
      )}
    </>
  );
}
