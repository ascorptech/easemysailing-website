import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    // <footer className=" md:w-full ">
    <footer className=" lg:mt-5 w-full md:m-0 lg:w-full">
      {/* {/ Newsletter Section /} */}
      <div className="bg-[#00A264] py-10 px-2 md:px-10 lg:flex lg:items-center lg:justify-between lg:px-32 w-full">
      
        <div className="lg:w-1/2 mb-6 lg:mb-0 ">
          <h2 className="text-white text-2xl md:text-4xl font-normal">
            Don't miss out! Subscribe to our newsletter for exclusive content.
          </h2>
        </div>
        <div className="lg:w-2/5">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="p-3 w-full rounded-md focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md flex justify-center items-center">
              Subscribe <span className="ml-2">✈️</span>
            </button>
          </div>
        </div>
      </div>

      {/* {/ Footer Content Section /} */}
      <div className="bg-[#D1EFE4] w-full">
        <div className="max-w-6xl mx-auto py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6 lg:px-8">
          {/* {/ Company Info /} */}
          <div>
            <h3 className="text-xl font-bold text-black mb-2">
              EaseMy<span className="text-[#00A264]">Sailing</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <p className="mt-4">
              <a href="#" className="text-[#00A264] font-semibold">
                Are you a Vendor? Join Us
              </a>
            </p>
          </div>

          {/* {/ Quick Links /} */}
          <div>
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
                  href="/mentoring_details"
                  className="text-gray-600 text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* {/ Help Section /} */}
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

          {/* {/ Contact Section /} */}
          <div>
            <h4 className="font-semibold text-lg text-black mb-2">
              Connect With Us
            </h4>
            <ul>
              <li className="text-gray-600 text-sm">📞 (01) xxx xxx xxxx</li>
              <li className="text-gray-600 text-sm">📧 mailto:example@gmail.com</li>
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
