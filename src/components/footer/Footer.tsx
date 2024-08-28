import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="bg-green-600 py-10 pl-[-4rem] place-items-center">
        <div className=" flex gap-4 text-center">
          <div className="w-[48%] ml-5 pl-[4%]">
            <h2 className="text-white text-4xl font-normal mb-6">
              Don't miss out! Subscribe to our newsletter for exclusive content.
            </h2>
          </div>

          <div className="items-center h-[5%] mt-2 ml-5 w-[35%]">
            <div>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="p-3 w-full h-8 rounded-md focus:outline-none"
              />
            </div>
            <div className=" mt-2">
              <button className="w-[100%] h-8 bg-black text-white px-6 py-3 rounded-md flex justify-center items-center">
                Subscribe <span className="ml-2">✈️</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-100">
        <div className="max-w-6xl mx-auto py-9 grid grid-cols-1 md:grid-cols-4 gap-8 px-3 ">
          <div>
            <h3 className="text-xl font-bold text-black mb-2 ">
              EaseMy<span className="text-green-800">Sailing</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <p className="mt-4">
              <a href="#" className="text-green-800 font-semibold">
                Are you a Vendor? Join Us
              </a>
            </p>
          </div>
          <div className="ml-10 mr-2 ">
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
                <Link href="mentoring_details" className="text-gray-600 text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-black mb-2">Help</h4>
            <ul>
              <li>
                <Link href="/privacy_policy" className="text-gray-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-600 text-sm">
                  GDPR & Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/t&c" className="text-gray-600 text-sm">
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
              <li className="text-gray-600 text-sm">📧 example@gmail.com</li>
              <li className="text-gray-600 text-sm">
                🌍 https://www.easemysailing.au/
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-green-600">
                🌐
              </a>
              <a href="#" className="text-green-600">
                🟢
              </a>
              <a href="#" className="text-green-600">
                📸
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
