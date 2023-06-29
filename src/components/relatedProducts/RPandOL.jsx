import React from 'react'
import RelatedProducts from './RelatedProducts.jsx'
import OutfitList from './OutfitList.jsx'

const RPandOL = () => {
  return (
  <div class='border-solid border-2 w-10/12 m-4 p-4 m-auto'>
    {<RelatedProducts />}
    {<OutfitList />}
  </div>
  )
}

export default RPandOL