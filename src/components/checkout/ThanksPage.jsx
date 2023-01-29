import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'

export default function ThanksPage({ setOrder, order }) {
  const navigetor = useNavigate()
  return (
    <div className=" w-full p-10 flex flex-col items-center justify-center bg-white my-1">
      <div className="md:w-2/3 w-full text-center h-screen flex flex-col items-center justify-center">
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly">
          <BsCheck2Circle className="text-gray-400 text-5xl" />
          <h1 className="text-4xl">Thank you for ordering through us!</h1>
          <p className="text-2xl">The shipment is on its way to you</p>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center justify-evenly border-t-2">
          <p>Order Number :{order?._id} </p>
          <button
          onClick={()=>{
            navigetor("/")
          }}
          className="bg-pink-100 rounded-md text-gray-400 font-bold py-4 px-8  m-1 md:w-1/3 w-full">
           Continue to the site
          </button>
        </div>
      </div>
    </div>
  );
}
