import React from 'react';

export default function Gallery() {
//receive style from props
//handleClick = if thumbnail is clicked, use conditional rendering to change big img to selected photo
return (
  <div className="gallery">
    <p> gallery placeholder </p>
    {/*
    default true = big image
    photos array -> loop through and display each thumbnail
    style_id.photos.map((image) => {
      <img src={image.thumbnail_url} onClick={handleClick}/
    })
    */}
  </div>
)
};