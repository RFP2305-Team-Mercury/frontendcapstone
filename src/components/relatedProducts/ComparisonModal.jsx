import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import {closeModal} from '../../redux/actions/index.js'
import api from '../../apis/RPandOL.js'

export default function ComparisonModal({onClose, id}) {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.productId);
  const comparisonId = useSelector(state=>state.comparisonId);
  const [baseDetails, setBaseDetails] = useState({});
  const [comparedDetails, setComparedDetails] = useState({});
  let features = new Set([]);

  const fetchData = async () => {
    try {
      const data = await api.getCardInfo(productId);
      const compared = await api.getCardInfo(comparisonId)
      setBaseDetails(data);
      setComparedDetails(compared);
      console.log('basedetails are ', baseDetails)
      // baseDetails.features.forEach((featureObj)=> {features.push(featureObj.feature)});
  // comparedDetails.features.forEach((featureObj)=> {features.push(featureObj.feature)})
  console.log('all features are: ',features)

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
                          <img className='px-6 py-3 w-1/3 text-center' src={baseDetails.thumbnail} />
                          <div className='px-6 py-3 w-1/3'></div>
                          <img className='px-6 py-3 w-1/3 text-center' src={comparedDetails.thumbnail}/>
                        </tr>
                      </thead>
                      <tbody>
                      <tr className='flex block justify-between w-full'>
                          <th className='text-lg px-6 py-3 w-1/3 justify-center'>{baseDetails.name}</th>
                          <th className='text-lg px-6 py-3 w-1/3'>Product</th>
                          <th className='text-lg px-6 py-3 w-1/3'>{comparedDetails.name}</th>
                        </tr>
                        <tr className='flex block justify-between'>
                          <th className='text-md px-6 py-3 text-center'>{baseDetails.price}</th>
                          <th className='text-md px-6 py-3'>Price</th>
                          <th className='text-md px-6 py-3 text-center'>{comparedDetails.price}</th>
                        </tr>
                        {/* {features.map((feature)=>{

                        })} */}
                        <tr className='flex block justify-between'>
                          <th className='text-lg px-6 py-3'></th>
                          <th className='text-lg px-6 py-3'></th>
                        </tr>
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dispatch(closeModal())}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>, document.getElementById('portal')
)
}