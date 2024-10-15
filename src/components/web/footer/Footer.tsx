"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AddSubscribe } from "@/app/(web)/Services/homeService";
import { toast } from "react-toastify";

const Footer1 = () => {
  const [email,setEmail]= useState('')

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
    }
    else if (!email) {
      toast.error('Email is required')
    }else if(email && emailRegex.test(email)){
      let data ={
        email:email
      }
      AddSubscribe(data,(res:any)=>{
        toast.success('Thanks for subscribing!')
        setEmail('')
      })
    }
    
  }
  return (
    <footer className="w-full bg-white border-t-[0.5px] border-[#00A264]">
      {/* Newsletter Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
        <div className="flex flex-col items-center lg:ml-6 justify-center lg:w-[65%] lg:items-start lg:justify-start lg:px-5">
          <div className="lg:mb-6 py-8 text-center lg:text-left">
            <h2 className="text-black text-[24px] md:text-4xl lg:text-5xl xl:text-4xl font-extrabold mb-2">
              Don't miss out! Subscribe to our
            </h2>
            <h2 className="text-black text-[24px] md:text-4xl lg:text-5xl xl:text-4xl font-extrabold">
              newsletter for exclusive content.
            </h2>
          </div>
          <div className="flex flex-col lg:px-0 px-3 gap-3 lg:flex-row lg:mt-12 lg:gap-3 lg:w-auto w-full">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 w-full border-2 border-[#00A264] rounded-3xl focus:outline-none"
              value={email}
              id="email"
              onChange={(e) => {
                let value = e.target.value.replace(/\s+/g, ''); // Removes all spaces
                setEmail(value?.trim());
              }}
              onBlur={(e) => {
                // Basic email validation
                if (!e.target.validity.valid) {
                  toast.error("Please enter a valid email address.");
                }
              }}
            />
            <button type="submit" className="w-full lg:w-44 text-sm bg-[#00A264] text-white px-6 py-2 rounded-3xl flex justify-center items-center" onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        </div>
        <div className="lg:h-[420px] h-[280px] mb-3 lg:mb-0 lg:mt-0 mt-3 w-full lg:w-[45%] xl:w-[48%] flex justify-center md:justify-end">
          <Image
            priority
            src="/ship3.png"
            alt="Ship Image"
            width={470}
            height={380}
            className="lg:h-full lg:w-full pl-3 lg:pl-0 rounded-l-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer1;