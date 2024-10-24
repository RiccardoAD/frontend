//import React from 'react'

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
//import { doctors } from "../assets/assets"
function TopDoctors() {


  const navigate = useNavigate();
  const {doctors}=useContext(AppContext);

  return (
    <div className="flex flex-col gap-4 items-center my-16 text-gray-900 md:ma-10">
      <h1 className="text-3xl font-medium">Top Doctor to book</h1>
      <p className="sm:w-1\3 text-center text-sm">Simply browser to doctor</p>
      <div className="w-full grid grid-cols-auto pt-5 gap-y-6 px-3 sm:px-0 gap-4">
        {doctors.slice(0, 10).map((item, index) => (
          
          
          <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500 ">
          
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
             <div className="flex items-center gap-2 text-sm text-center text-green-500">
             <p className="bg-green-500 w-2 h-2 rounded-full"></p><p>Available</p>
            </div>
            <p className="text-grey-900 text-lg font-medium">{item.name}</p>
            <p className="text-grey-500 text-sm">{item.speciality}</p>
          </div>
          
        </div>

      ))}

      </div>
         <button onClick={() => {navigate('/doctors'); scrollTo(0, 0)}} className=' bg-blu-50 text-grey-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors
