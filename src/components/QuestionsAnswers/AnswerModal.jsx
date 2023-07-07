import React from 'react'
import ReactDom from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import {closeModal,question,answer, setQuestionId} from '../../redux/actions/index.js'
import {useState, useEffect} from 'react'
import api from '../../apis/QA.js'
import axios from 'axios'




export default function AnswerModal({onClose, id}) {


  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState('')
  const [submit, setSubmit] = useState(false)
  const [qId, setqId] = useState(id)


  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleBody = (e) => {
    setBody(e.target.value)
  }
  const handlePhoto = (e) => {
    setBody(e.target.value)
  }

  useEffect(() => {
    const postAnswer = async () => {
      const posting = await api.postA(body,name,email,photos,qId)
     }
     postAnswer()
  },[submit])

  const handleSubmit = async () => {
    try {
      await dispatch(answer({'name':name, 'email':email,'body':body, 'photos': [photos]}))
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t" data-testid="AnswerModal">
                  <h3 className="text-3xl font-semibold">
                    Answer a Question!
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
                <div className="relative p-6 flex-auto">
                  <label>
                    Name:
                  <input data-testid="name" className="my-4 text-slate-500 text-lg leading-relaxed" onChange = {handleName} type = 'text' value = 'Enter'></input>
                  <br></br>
                    Email:
                  <input data-testid="email" className="my-4 text-slate-500 text-lg leading-relaxed" onChange = {handleEmail} type = 'text'></input>
                  <br></br>
                    Body:
                  <input  data-testid="body"className="my-4 text-slate-500 text-lg leading-relaxed" onChange = {handleBody} type = 'text'></input>
                  <br></br>
                    Photos:
                  <input  data-testid="photo"className="my-4 text-slate-500 text-lg leading-relaxed" onChange = {handlePhoto} type = 'text'></input>
                  </label>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
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