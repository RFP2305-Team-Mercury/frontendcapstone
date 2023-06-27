import React from 'react';

export default function Gallery() {
//receive style from props
//handleClick = if thumbnail is clicked, use conditional rendering to change big img to selected photo
return (
  <div className='col-span-1 row-span-1 flex justify-center'>
    <img className='w-full h-full object-cover mx-4' src='https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'/>
  </div>
)
};