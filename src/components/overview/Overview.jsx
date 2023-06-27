import React from 'react';
import Details from './Details.jsx';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';

export default function Overview() {
  return (
    <>
    <Header />
    <div className='w-10/12 flex flex-wrap m-auto'>
    <Gallery />
    <Details />
    </div>
    </>
  )
}