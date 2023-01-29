import React, { useState } from "react";

export default function ChoseDate({ setOrder, order, callback }) {
  const [date, setDate] = useState([
    {
      value: "Sunday 01/12",
      boolean: false,
    },
    {
      value: "Monday 02/12",
      boolean: false,
    },
    {
      value: "Tuesday 03/12",
      boolean: false,
    },
    {
      value: "Wednesday 04/12",
      boolean: false,
    },
    {
      value: "Thursday 05/12",
      boolean: false,
    },
  ]);
  const updateOrder = (e, v, i) => {
    setOrder({
      ...order,
      shipping: {
        ...order.shipping,
        [e.target.name]: e.target.value,
      },
    });
    date[0].boolean = false;
    date[1].boolean = false;
    date[2].boolean = false;
    date[3].boolean = false;
    date[4].boolean = false;
    v.boolean = !v.boolean;
  };

  return (
    <div className="flex w-full flex-wrap md:w-full justify-end md:justify-between ">
      {date.map((v, i) => {
        return (
          <div key={i} className="md:m-0 m-2">
            {v.boolean ? (
              <input
                className="rounded-md bg-gray-400 text-white md:w-24 w-20 h-16"
                key={i}
                onClick={(e) => {
                  updateOrder(e, v);
                }}
                type="button"
                name="date"
                value={v.value}
              />
            ) : (
              <input
                className="rounded-md bg-pink-100 text-gray-400 md:w-24 w-20 h-16 border-2  hover:border-gray-400 hover:duration-500"
                key={i}
                onClick={(e) => {
                  updateOrder(e, v);
                }}
                type="button"
                name="date"
                value={v.value}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
