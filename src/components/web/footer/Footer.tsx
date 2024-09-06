import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Footer from "@/app/Shared/Footer/Footer";

const Footer1 = () => {
  return (
    // <footer className=" md:w-full ">
    <footer className=" lg:mt-5 w-full md:m-0 lg:w-full">
      {/* {/ Newsletter Section /} */}
      <div className="bg-[#00A264] py-10 px-2 md:px-10 lg:flex lg:items-center lg:justify-between lg:px-32 w-full ">
        <div className="lg:w-[661px] lg:h-[118]  mb-6 lg:mb-0 ">
          <h2 className="text-white text-[20px] lg:mb-3 lg:text-4xl md:text-4xl font-[600]">
            Don't miss out! Subscribe to our
          </h2>
          <h2 className="text-white text-[20px] lg:text-4xl md:text-4xl font-[600]">
            newsletter for exclusive content.
          </h2>
        </div>
        <div className="lg:w-[470px]">
          <div className="flex-row sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="p-3 w-full lg:w-[85%] rounded-md lg:h-9 focus:outline-none mb-2"
            />
            <button className="w-full lg:w-[85%]  sm:w-auto bg-black text-white px-6 lg:h-9 py-3 rounded-md flex justify-center items-center">
              Subscribe <span className="ml-2">✈️</span>
            </button>
          </div>
        </div>
      </div>

      {/* {/ Footer Content Section /} */}
      {/* <div className="bg-[#D1EFE4] w-full">
        <div className=" lg:w-full mx-auto  py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-2 px-4 md:px-6 lg:px-8 lg:pl-24">
         
          <div>
            <h3 className="text-xl font-bold text-black mb-2">
              EaseMy<span className="text-[#00A264]">Sailing</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <p className="mt-4">
              <Link href="#" className="text-[#00A264] font-semibold">
                Are you a Vendor? Join Us
              </Link>
            </p>
          </div>

          
          <div className="lg:ml-5">
            <h4 className="font-semibold text-lg text-black mb-2">
              Quick Links
            </h4>
            <ul>
              <li>
                <Link href="/" className="text-gray-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/toprecruiting" className="text-gray-600 text-sm">
                  Recruiter
                </Link>
              </li>
              <li>
                <Link
                  href="/mentoring-details"
                  className="text-gray-600 text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-lg text-black mb-2">Help</h4>
            <ul>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-600 text-sm">
                  GDPR & Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold text-lg text-black mb-2">
              Connect With Us
            </h4>
            <ul>
              <li className="text-gray-600 text-sm">📞 (01) xxx xxx xxxx</li>
              <li className="text-gray-600 text-sm">
                📧 mailto:example@gmail.com
              </li>
              <li className="text-gray-600 text-sm">
                🌍 https://www.easemysailing.au/
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <h5>Follow Us :</h5>
              <Link href="#" className="text-green-600 mt-1">
                
                <Image
                  src={"/fb.png"}
                  priority
                  width={18}
                  height={18}
                  alt="userlock"
                />
              </Link>
              <Link href="#" className="text-green-600 mt-1">
                <Image
                  src={"/insta.png"}
                  priority
                  width={18}
                  height={18}
                  alt="userlock"
                />
              </Link>
              <Link href="#" className="text-green-600 mt-1">
                <Image
                  src={"/xlogo.png"}
                  priority
                  width={18}
                  height={18}
                  alt="userlock"
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className=" border-spacing-1 border-green-400     "></hr>
      <div className="  py-4 flex  items-center ml-24 ">
        <span>Copyright © {new Date().getFullYear()} | All Rights Reserved</span>

       
      </div>
      </div> */}
      {/* <Footer/> */}

     
    </footer>
  );
};

export default Footer1;
