import React from 'react';
import Details from './Details.jsx';
import Gallery from './Gallery.jsx';


export default function Overview() {
  return (
    <div className='grid grid-cols-3 gap-4'>
    <Gallery />
    <Details />
    </div>
  )
}