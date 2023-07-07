import React from 'react'
import ReactDom from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import {closeModal,question,answer} from '../../redux/actions/index.js'
import {useState, useEffect} from 'react'
import api from '../../apis/QA.js'
import axios from 'axios'


export default function InputModal({onClose}) {
  const dispatch = useDispatch();
  let productId = useSelector(state=>state.productId)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleBody = (e) => {
    setBody(e.target.value)
  }

  useEffect(() => {
    const postQuest = async () => {
      const posting = await api.postQ(productId,body,name,email)
     }
     postQuest()
  },[submit])

  const handleSubmit = async () => {
    try {
      await dispatch(question({'name':name, 'email':email,'body':body, 'product_id': productId}))
      setTimeout(() => {
        dispatch(closeModal())
      },100)
      setSubmit(true)
    } catch(error) {
      console.log('error:',error)
    }
  }



return ReactDom.createPortal(
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-600 dark:text-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t dark:bg-gray-600 dark:text-white" data-testid="InputModal">
                  <h3 className="text-3xl font-semibold">
                  Ask Your Question
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto dark:bg-gray-600 dark:text-white">
                  <label>
                    <p className ='underline'>Name:</p>
                  <input className="border border-gray rounded-md w-full my-4 text-slate-500 text-xs leading-relaxed dark:bg-gray-600 dark:text-white" onChange = {handleName} type = 'text' placeholder = 'Example: jackson11!'></input>
                  <aside className = 'text-xs'>For privacy reasons, do not use your full name or email address</aside>
                  <br></br>
                    <p className ='underline'>Email:</p>

                  <input className="border border-gray rounded-md  w-full my-4 text-slate-500 text-xs leading-relaxed dark:bg-gray-600 dark:text-white" onChange = {handleEmail} type = 'text' placeholder='Example: jack@email.com'></input>
                  <aside className = 'text-xs'>For authentication reasons, you will not be emailed</aside>

                    <p className ='underline'>Body:</p>
                  <input className=" border border-gray rounded-md py-10  w-full my-4 text-slate-500 text-xs leading-relaxed dark:bg-gray-600 dark:text-white" onChange = {handleBody} type = 'text' placeholder = 'Why did you like the product or not?'></input>
                  </label>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}>
                    Submit
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dispatch(closeModal())}
                  >
                    Discard
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>, document.getElementById('portal')
)
}