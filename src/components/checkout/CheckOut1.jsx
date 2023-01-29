import React from "react";
import { useState } from "react";
import { MdPlace } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

export default function CheckOut1({ setOrder, order }) {
  const [dropDwon, setDropDwon] = useState(false);
  const inputs = [
    { value: "City", valueEnglish: "city" },
    { value: "Street", valueEnglish: "street" },
    { value: "Number", valueEnglish: "number" },
    { value: "Postal Code", valueEnglish: "postalCode" },
    { value: "Shipping Company Name", valueEnglish: "shippingCompanyName" },
  ];
  const handleInput = (e) => {
    setOrder({
      ...order,
      addres: { ...order.addres, [e.target.name]: e.target.value },
    });
  };

  return (
    <>
      {dropDwon ? (
        <div className="w-full p-5 flex flex-col items-start justify-between bg-white my-1 border-b-4">
          <div className="w-full flex items-start justify-between bg-white my-1">
            <BsChevronDown
              className="md:text-3xl text-2xl"
              onClick={() => setDropDwon(!dropDwon)}
            />
            <div className="flex items-center">
              <h1 className="font-medium text-2xl">Add Shipping Address</h1>
              <span>
                <MdPlace className="text-pink-300 text-4xl ml-4" />
              </span>
            </div>
          </div>
          <div className="md:mr-12 mr-10">
          Delivery Details:
            <span> {order.addres.city} </span>
            <span> {order.addres.street} </span>
            <span> {order.addres.number} </span>
            <span> {order.addres.postalCode} </span>, Client/Company name:
            <span> {order.addres.shippingCompanyName} </span>
          </div>
        </div>
      ) : (
        <div className="w-full  min-h-screen p-10 flex flex-col items-start justify-evenly bg-white my-1">
          <div className="flex">
            <h1 className="font-medium text-2xl">Delivery Details</h1>
            <span>
              <MdPlace className="text-pink-300 text-5xl ml-4" />
            </span>
          </div>
          <form className="w-full flex flex-col" action="">
            <div className="w-full flex flex-col">
              {inputs.map((v, i) => {
                return (
                  <div key={i} className=" w-full flex flex-col my-2">
                    <h3 className="text-left">{v.value}</h3>
                    <input
                      onChange={(e) => handleInput(e)}
                      type="text"
                      name={v.valueEnglish}
                      placeholder="Write your answer"
                      className="text-left border-b placeholder:text-left py-2"
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full  flex justify-between items-center mt-12">
              <div>
                <button className="border-b-2 border-black font-medium">
                Delete An Address
                </button>
              </div>
              <button
                onClick={() => {
                  if (
                    order.addres.city &&
                    order.addres.street &&
                    order.addres.number &&
                    order.addres.postalCode &&
                    order.addres.shippingCompanyName
                  ) {
                    setDropDwon(!dropDwon);
                    setOrder({
                      ...order,
                      addres: { ...order.addres, allData: true },
                    });
                  } else {
                    alert("Fill in all the fields");
                  }
                }}
                className="bg-pink-100 rounded-md text-gray-400 px-10 py-3"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
