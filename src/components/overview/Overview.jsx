import React, { useState, useEffect } from 'react';
import Details from './Details.jsx';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Slogan from './Slogan.jsx';
import {useDispatch} from 'react-redux'
import {loadingNext} from '../../redux/actions'

export default function Overview({ rendering }) {
  const [isExpanded, setIsExpanded] = useState(false);
  let dispatch = useDispatch()
  const setExpanded = (value) => setIsExpanded(value);

  useEffect(()=>{
    dispatch(loadingNext())
  },[])
  return (
    <>
      <Header />
      <div className='w-10/12 flex flex-wrap justify-center m-auto dark:bg-gray-600'>
        <Gallery isExpanded={isExpanded} setIsExpanded={setExpanded} />
        {isExpanded ? "" : <Details />}
        <Slogan />
      </div>
    </>
  )
}