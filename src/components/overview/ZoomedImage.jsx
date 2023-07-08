import React, { useRef } from "react";
import {ExpandIcon} from "../../utils/icons.jsx";

const ZoomedImage = ({ image, handleExpand, handleZoom }) => {
  const lensRef = useRef(null);
  const imgRef = useRef(null);
  const ratio = 2.5;

  const moveLens = (e) => {
    e.preventDefault();
    const position = getCursor(e);

    let positionLeft = position.x - lensRef.current.offsetWidth / 2;
    let positionTop = position.y - lensRef.current.offsetHeight / 2;

    const imgWidth = imgRef.current.offsetWidth;
    const imgHeight = imgRef.current.offsetHeight;

    const maxPositionLeft = imgWidth - lensRef.current.offsetWidth;
    const maxPositionTop = imgHeight - lensRef.current.offsetHeight;

    positionLeft = Math.max(0, Math.min(positionLeft, maxPositionLeft));
    positionTop = Math.max(0, Math.min(positionTop, maxPositionTop));

    lensRef.current.style.left = positionLeft + "px";
    lensRef.current.style.top = positionTop + "px";

    const bgPositionX = -((positionLeft / maxPositionLeft) * (imgRef.current.naturalWidth - (lensRef.current.offsetWidth / 2) * ratio));
    const bgPositionY = -((positionTop / maxPositionTop) * (imgRef.current.naturalHeight - (lensRef.current.offsetHeight / 2) * ratio));

    lensRef.current.style.backgroundPosition = `${bgPositionX}px ${bgPositionY}px`;
  };

  const getCursor = (e) => {
    const imgBounds = imgRef.current.getBoundingClientRect();
    const x = e.clientX - imgBounds.left + window.pageXOffset;
    const y = e.clientY - imgBounds.top + window.pageYOffset;
    return { x, y };
  };

  return (
    <div className="w-full h-[90vh] relative mt-2" data-testid="zoomed">
      <div
        ref={lensRef}
        className="absolute w-[200px] h-[200px] bg-center bg-no-repeat z-2 border-2 cursor-custom cursor-zoom-out bg-repeat-none"
        style={{ backgroundImage: `url(${image})` }}
        onMouseMove={moveLens}
        onClick={handleZoom}
      ></div>
      <img
        ref={imgRef}
        src={image}
        alt="Zoomed Product Image"
        className="w-full h-[90vh] object-cover m-auto cursor-zoom-in custom-cursor border-black border-2 z-1"
        onClick={handleZoom}
        aria-label="Zoomed Image"
      />
      <ExpandIcon onClick={handleExpand} />
    </div>
  );
};

export default ZoomedImage;

