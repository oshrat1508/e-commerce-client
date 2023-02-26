import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { allStores } from "../../api/userApi";
import { useNavigate, useParams } from "react-router-dom";
import StoreComp from "./StoreComp";
import HeaderStore from ".//HeaderStore";
import { getDepartment } from "../../api/Departments";
import CartStore from "../Cart/CartStore";
const StoreListPage = () => {
  let { depId } = useParams();
  let { depName } = useParams();
  let [image,setImage] = useState("")
  // const navigate = useNavigate();
  const [stores, setStores] = useState();
  const [department, setdepartment] = useState();
  const storesFu = async () => {
    const deps = await getDepartment(depId);
    setdepartment([deps.data]);
    const { data } = await allStores();
    const result = data.filter((store) => store.department === depName);
    setStores(result);
  };

  const findImage = async () => {
    const deps = await getDepartment(depId);
   console.log(deps);
  };

  useEffect(() => {
    storesFu();
    findImage()
  
    console.log(depName);
  }, [depId]);


  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full">
        <HeaderStore name={depName}  />
      </div>
      <div className="md:w-3/4 w-full flex md:flex-row flex-col justify-between ">
        <div className="md:w-1/3 w-full">
          <CartStore />
        </div>
        <div className="md:w-2/3 w-full md:pl-10 ">
          {stores?.map((store, i) => (
            <StoreComp
              name={store.name}
              desc={store.description}
              location={store.location}
              image={store.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default StoreListPage;
