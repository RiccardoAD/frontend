import { useContext } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";


function Appointments() {
  const{docID}=useParams();
  const{doctors}=useContext(AppContext);

  const fetchDocInfo = async () => {
    const docInfo = await doctors.find((doc) => doc.id === docID);
    console.log(doc);
  };


  return (
    <div>
      
    </div>
  )
}

export default Appointments
