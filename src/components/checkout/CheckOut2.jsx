import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsTextLeft } from "react-icons/bs";
import ChoseDate from "./ChoseDate";
import ChoseTime from "./ChoseTime";
import { useSelector, useDispatch } from "react-redux";

export default function CheckOut2({ setOrder, order }) {
  const selctorOrder = useSelector((state) => state.orderReducer.state);
  const [dropDwon, setDropDwon] = useState(false);
  const dispatch = useDispatch();

  const expressShipping = () => {
    setOrder({
      ...order,
      shipping: {
        ...order.shipping,
        time: `${new Date().getHours()}:00-${new Date().getHours() + 1}:00`,
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}`,
        shippingType: "משלוח אקספרס",
        allData: true,
      },
    });
  };
useEffect(()=>{
   dispatch({ type: "UPDATEORDER", payload: order });
},[order])

  return (
    <>
      {dropDwon ? (
        <div className="w-full p-5 flex flex-col items-start justify-between bg-white my-1 border-b-4">
          <div className="w-full flex items-start justify-between bg-white my-1">
            <BsChevronDown
              className="md:text-3xl text-2xl"
              onClick={() => {
                setDropDwon(!dropDwon);
                setOrder({
                  ...order,
                  shipping: {
                    ...order.shipping,
                    time: "",
                    date: "",
                    allData: false,
                  },
                });
              }}
            />
            <div className="flex items-center">
              <h1 className="font-medium text-2xl">Delivery Time</h1>
              <span>
                <BsFillClockFill className="text-pink-300 text-4xl ml-4 p-1" />
              </span>
            </div>
          </div>
          <div className="md:mr-12 mr-10">
            <span> {order.shipping.shippingType} </span>
            Will arrive on
            <span> {order.shipping.date} </span>
            between the hours
            <span> {order.shipping.time}</span>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen p-5 flex flex-col items-start justify-between bg-white my-1">
          <div className="flex items-center">
            <h1 className="text-2xl font-medium items-center">delivery Time</h1>
            <BsFillClockFill className="text-pink-300 text-3xl ml-4" />
          </div>
          <p>Select A Shipping Address</p>
          <button
            onClick={() => {
              if (order.addres.allData) {
                expressShipping();
                setDropDwon(!dropDwon);
                console.log(selctorOrder);
              } else {
                alert("Fill in all the fields");
              }
            }}
            // name=""
            className="w-fit flex items-center rounded-lg hover:border-pintext-pink-300 border-2 p-1"
          >
            <p className="mx-3">Express Delivery - will arrive at your home within an hour</p>
            <BsFillClockFill className="text-gray-500 " />
            <BsTextLeft className="text-gray-500 " />
          </button>
          <div className="flex w-full justify-between">
            <ChoseDate
              order={order}
              setOrder={setOrder}
              callback={(dropDwon) => setDropDwon(dropDwon)}
            />
          </div>
          <ChoseTime
            order={order}
            setOrder={setOrder}
            callback={(dropDwon) => setDropDwon(dropDwon)}
          />
        </div>
      )}
    </>
  );
}
