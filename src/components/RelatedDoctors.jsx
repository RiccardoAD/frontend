import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


const RelatedDoctors = ({speciality,docId}) => {

const {doctors}=useContext(AppContext);
const navigate=useNavigate();
const[relDoc,setRelDoc]=useState([]);

useEffect(()=>{
    if(doctors.length > 0 && speciality) {
    const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
    setRelDoc(doctorsData);
}
    
    
},[doctors,speciality,docId]);

  return (
    <div className="flex flex-col gap-4 items-center my-16 text-gray-900 md:ma-10">
      <h1 className="text-3xl font-medium">Top Doctor to book</h1>
      <p className="sm:w-1\3 text-center text-sm">Simply browser to doctor</p>
      <div className="w-full grid grid-cols-auto pt-5 gap-y-6 px-3 sm:px-0 gap-4">
        {relDoc.slice(0,5).map((item, index) => (
          
          
          <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500 ">
          
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
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

export default RelatedDoctors
