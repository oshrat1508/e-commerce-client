import React from "react";
import { AiFillShop } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const FilterProducts = ({setInputSearch,prodactLength}) => {
  return (
    <div>
      <div className="flex  flex-row-reverse items-center">
        <div className="flex justify-center w-full">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            type="text"
            placeholder="Search by name"
            className="border-4 w-8/12 p-4 rounded-md placeholder:text-center outline-none my-10 text-center  placeholder:text-pink-300"
          />
        </div>
      </div>
      <div className=" flex flex-row-reverse justify-center items-center my-10 text-gray-400 font-medium text-2xl">
        {/* <AiFillShop className="text-2xl mx-4 text-pink-300" /> */}
        <h1 >results</h1>
        <h1 className="mx-2">{prodactLength}</h1>
        <h1 >Found</h1>
      </div>
    </div>
  );
};

export default FilterProducts;
