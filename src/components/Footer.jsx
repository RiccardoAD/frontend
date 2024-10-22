import { assets } from "../assets/assets"


function Footer() {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            {/* left */}
            <div>
            <img className="w-40 mb-5" src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-500 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* center  */}
            <div>
                <p className="text-xl font-medium mb-5">Company</p>
                <ul className="flex flex-col gap-2 text-gray-500">
                    <li>home</li>
                    <li>about us </li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right */}
            <div>
              <p className="text-xl font-medium mb-5" >GET IN TOUCH</p> 
              <ul className="flex flex-col gap-2 text-gray-500" >
                <li>+1-212-456-7890</li>
                <li>greatstackdev@gmail.com</li>
                </ul> 
            </div>

        </div>
      <div>
        <hr />
        <p className="text-center">Copyright © 20XX. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
