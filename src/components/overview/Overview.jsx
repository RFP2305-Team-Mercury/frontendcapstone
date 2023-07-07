import React, {useState} from 'react';
import Details from './Details.jsx';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Slogan from './Slogan.jsx';

export default function Overview() {
const [isExpanded, setIsExpanded] = useState(false);

const setExpanded = (value) => setIsExpanded(value);

  return (
    <>
    <Header />
    <div className='w-10/12 flex flex-wrap justify-center m-auto dark:bg-gray-600'>
    <Gallery isExpanded={isExpanded}  setIsExpanded={setExpanded}/>
    {isExpanded ? "" : <Details />}
    <Slogan />
    </div>
    </>
  )
}