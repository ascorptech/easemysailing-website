"use client";

import { useState } from "react";
import Link from "next/link";
import { TfiReload } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextArea] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!error) {
    //   console.log("Form submitted successfully");
    // }
  };

  return (
    <div className="contact mt-14">
      {/* <div className="flex justify-center items-center h-[6rem]  bg-green-100">
        <h1 className="text-3xl text-green-600 font-bold">Get in touch</h1>
      </div> */}
      <div className="flex  justify-center items-center h-[8rem]  bg-green-100 bg-[url('/images/Rectangle1.png')] ">
        <h1 className="text-[46px] leading-[69px] text-[#00A264] font-bold">
          Get in touch
        </h1>
      </div>
      <div className="grid lg:grid-cols-2  lg:gap-24 md:mx-24 mx-8 my-10">
        <div className="bg-gray-200  p-8 rounded-xl ">
          <h1 className="text-center mb-2">
            For questions and assistance, reach out to us.
          </h1>
          <form onSubmit={handleSubmit} className="   ">
            <div className="mb-[7px]">
              <div className="relative flex items-center ">
                <input
                  id="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder=" Name"
                  required
                />
              </div>
            </div>

            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <input
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <textarea
                  value={textarea}
                  onChange={(e) => setTextArea(e.target.value)}
                  className="border rounded-lg w-full h-20 py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Message"
                  required
                />
              </div>
            </div>

            <div className="mb-[7px] flex">
              <div className="flex w-[65%]">
                <input
                  id="Captcha"
                  type="text"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Captcha Code"
                  required
                />
              </div>
              <div className="flex items-center gap-2 ">
                <div className="ml-4 ">
                  <img
                    src="./images/captcha.png"
                    className="h-10 rounded-md"
                  ></img>
                </div>
                <span className="text-white p-2 bg-[#00A264] text-2xl font-extrabold rounded-md">
                  <TfiReload />
                </span>
              </div>
            </div>

            <div>
              {/* {/ {error && <p style={{ color: "red" }}>{error}</p>} /} */}

              <button
                type="submit"
                className="w-full bg-[#00A264] hover:bg-[#00A264] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        <div>
          <div className="flex items-center bg-white shadow-lg border  p-3 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl">
              <GrLocation />
            </div>
            <div className="ml-6">
              <h2 className="font-bold text-lg">Address</h2>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>

          <div className="  items-center bg-white shadow-lg border flex py-3 px-1 lg:px-3 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl">
              <FiPhoneCall />
            </div>
            <div className="ml-3 lg:ml-6">
              <h2 className="font-bold text-lg">Call us on</h2>
              <p className="text-sm">+1(XXX) XXX-XXX</p>
            </div>
          </div>

          <div className=" items-center bg-white shadow-lg border flex lg:p-3 px-2 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl font-extrabold">
              <FiMail />
            </div>
            <div className="ml-3">
              <h2 className="font-bold text-lg">Mail Us</h2>
              <p className="text-sm">example@gmail.com</p>
            </div>
          </div>

          <div className=" items-center bg-white shadow-lg border flex p-3 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-red-600 text-3xl">
              <FiMail />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-lg text-red-600">
                For Distress, Fraud & Grievance
              </h2>
              <p className="text-sm">sos@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
