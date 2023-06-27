import React from 'react';
import Details from './Details.jsx';
import Gallery from './Gallery.jsx';


export default function Overview() {
  return (
    <div className='w-10/12 flex justify-between m-auto'>
    <Gallery />
    <Details />
    </div>
  )
}