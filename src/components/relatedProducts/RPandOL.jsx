import React from 'react'
import RelatedProducts from './RelatedProducts.jsx'
import OutfitList from './OutfitList.jsx'
import {useSelector} from 'react-redux'

const RPandOL = () => {

  return useSelector(state=>state.loadingOrder)===1? '' : (
    <div className='border-solid border-2 w-10/12 m-4 p-4 m-auto dark:bg-gray-600 dark:text-white'>
      <div className='h-2/5 block'>
        {<RelatedProducts />}
      </div>
      <div className='h-2/5 block'>{<OutfitList />}
      </div>
    </div>
  )
}

export default RPandOL