import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/index.js'
import api from '../../apis/RPandOL.js'
import StarRatings from 'react-star-ratings'
import salePrice from '../../utils/salePrice.jsx'

export default function ComparisonModal({ onClose, id }) {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.productId);
  const comparisonId = useSelector(state => state.comparisonId);
  const [baseDetails, setBaseDetails] = useState({});
  const [comparedDetails, setComparedDetails] = useState({});
  const [baseStars, setBaseStars] = useState(0);
  const [comparedStars, setComparedStars] = useState(0);
  const [features, setFeatures] = useState([])
  const [baseFeatures, setBaseFeatures] = useState([])
  const [compFeatures, setCompFeatures] = useState([])

  let featuresSet = new Set([]);

  const fetchData = async () => {
    try {
      let bFeatures, cFeatures;
      const data = await api.getCardInfo(productId);
      const compared = await api.getCardInfo(comparisonId)
      setBaseDetails(data);
      setComparedDetails(compared);
      setBaseStars(data.stars);
      setComparedStars(compared.stars);
      data.features.forEach((featureObj) => {
        featuresSet.add(featureObj.feature)
        let feat = {};
        feat[featureObj.feature] = featureObj.value
        console.log(feat)
        bFeatures = { ...bFeatures, ...feat }
      });
      compared.features.forEach((featureObj) => {
        featuresSet.add(featureObj.feature)
        let feat = {};
        feat[featureObj.feature] = featureObj.value
        cFeatures = { ...cFeatures, ...feat }
      });
      const fset = [...featuresSet]
      console.log('features:', set, 'baseFeatures:', bFeatures, 'comparedFeat:', cFeatures)
      setFeatures(fset)
      setBaseFeatures(bFeatures)
      setCompFeatures(cFeatures)

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return ReactDom.createPortal(
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Comparison of {baseDetails.name} and {comparedDetails.name}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => dispatch(closeModal())}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative w-full flex flex-col shadow-large">
              <div className='bg-transparent m-4 p-4'>
                <table className='w-auto'>
                  <thead >

                    <tr className='flex block justify-between'>
                      <img className='px-6 py-3 w-1/3 object-contain' src={baseDetails.thumbnail} />
                      <div className='px-6 py-3 w-1/3'></div>
                      <img className='px-6 py-3 w-1/3 object-contain' src={comparedDetails.thumbnail} />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='flex block justify-between w-full'>
                      <th className='text-xl px-6 py-3 w-1/3 justify-center'>{baseDetails.name}</th>
                      <th className='text-lg px-6 py-3 w-1/3'>Product</th>
                      <th className='text-xl px-6 py-3 w-1/3'>{comparedDetails.name}</th>
                    </tr>
                    <tr className='flex block justify-between w-full'>
                      <th className='text-lg px-6 py-3 w-1/3 justify-center'>{<StarRatings
                        rating={Number(baseStars)}
                        numberOfStars={5}
                        starDimension="15px"
                        starSpacing="2px"
                      />}</th>
                      <th className='text-lg px-6 py-3 w-1/3'>Rating</th>
                      <th className='text-lg px-6 py-3 w-1/3'>{<StarRatings
                        rating={Number(comparedStars)}
                        numberOfStars={5}
                        starDimension="15px"
                        starSpacing="2px"
                      />}</th>
                    </tr>
                    <tr className='flex block w-full justify-between'>
                      {baseDetails.sales_price ? (
                        <th className='text-md px-6 py-3 w-1/3'>
                          {baseDetails.sales_price}
                          {salePrice(baseDetails.original_price)}
                        </th>
                      ) : (
                        <th className='text-md px-6 py-3 w-1/3'>
                          {baseDetails.original_price}
                        </th>
                      )}
                      <th className='text- px-6 py-3 w-1/3'>Price</th>
                      {comparedDetails.sales_price ? (
                        <th className='text-md px-6 py-3 w-1/3'>
                          {comparedDetails.sales_price}
                          {salePrice(comparedDetails.original_price)}
                        </th>
                      ) : (
                        <th className='text-md px-6 py-3 w-1/3'>
                          {comparedDetails.original_price}
                        </th>
                      )}
                    </tr>
                    {features.map((feature) => {
                      return (
                        <tr className='flex block justify-between'>
                          <th className='text-md px-6 py-3 w-1/3'>{baseFeatures[feature] ? baseFeatures[feature] : ''}</th>
                          <th className='text-lg px-6 py-3 w-1/3'>{feature}</th>
                          <th className='text-md px-6 py-3 w-1/3'>{compFeatures[feature] ? compFeatures[feature] : ''}</th>
                        </tr>
                      )
                    })}

                  </tbody>
                </table>
              </div>
              <div className="table"></div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispatch(closeModal())}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>, document.getElementById('portal')
  )
}