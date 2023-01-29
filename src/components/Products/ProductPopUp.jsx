import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AddProduct } from "../../Redux/action/cartActions";

export default function ProductPopUp({ product, onClose, visible }) {
  const dispatch = useDispatch();
  const handleOnClose = (e) => {
    if (e.target.id === "product") onClose();
  };

  if (!visible) return null;

  const addItem = (product) => {
    dispatch(AddProduct(product, product.qty));
  };

  return (
    <div
      key={product._id}
      id="product"
      onClick={handleOnClose}
      className={
        "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      }
    >
      <div className="bg-white flex flex-col items-center justify-center md:w-2/3 md:h-fit h-screen py-10 px-10 md:rounded-lg p-4">
        <button value={false} className="text-gray-400 hover:text-pink-300 hover:duration-500 p-4 mb-10 font-bold text-3xl" onClick={onClose}>
          x
        </button>
        <div className="w-full flex md:flex-row flex-col justify-center capitalize">
          <img
            className="w-[1000px] h-[450px] mx-auto bg-white"
            src={product.image}
            alt={product.name}
          />
          <div className="flex flex-col w-full justify-between ">
            <div className="flex justify-between border-b-2 p-4">
              <p>price</p>
              <p>{product.price}$</p>
            </div>
            <div className="flex justify-between border-b-2 p-4">
              <p>product number</p>
              <p>49320750</p>
            </div>
            <div className="flex justify-between border-b-2 p-4">
              <p>brand</p>
              <p>{product.brand}</p>
            </div>
            <div className="flex justify-between p-4 ">
              <p className="">description</p>
              <p>{product.description}</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="w-fit flex p-4">
                <p className="text-end font-bold text-gray-400  text-2xl">
                  {product.price} $
                </p>
              </div>
              <div className="w-fit flex">
                <button
                  onClick={() => addItem(product)}
                  className="capitalize rounded-lg font-bold bg-gray-400 hover:bg-pink-300 hover:duration-500 text-white p-4"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
