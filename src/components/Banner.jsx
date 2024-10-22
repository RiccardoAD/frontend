import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets"


const Banner = () => {
    const navigate= useNavigate();
  return (
    <div className=" my-20 flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 md:mx-10">
        {/* left */}
 <div className="flex-1 py-8 sm:py-0 md:py-16 lg:py-24 lg:pl-5"> 
    <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        <p>Book Appointment 
        </p>
        <p className="mt-4"> With 100+ Trusted Doctors</p>
    </div>
    <button onClick={() => {navigate("/login"); scrollTo(0, 0)}} className="bg-white text-sm sm:text-base text-gray-600 py-3 px-8 rounded-full mt-6 hover:scale-105 transition-all duration-300 ">create account</button>
 </div>
        {/* Right */}
 <div className="hidden md:block md:w-1/2 lg-w-[370px] relative">
    <img className=" w-full absolute bottom-0 right-0 max-w-md" src={assets.appointment_img} alt="" />
 </div>
  </div>
  )
}

export default Banner
