import React from 'react'
import RelatedProducts from './RelatedProducts.jsx'
import OutfitList from './OutfitList.jsx'

const RPandOL = () => {
  return (
    <div className='w-10/12 m-4 p-4 m-auto dark:bg-gray-600 dark:text-white border-b border-gray-200 dark:border-gray-400'>
      <div className='h-2/5 block'>
        {<RelatedProducts />}
      </div>
      <div className='h-2/5 block'>{<OutfitList />}
      </div>
    </div>
  )
}

export default RPandOL