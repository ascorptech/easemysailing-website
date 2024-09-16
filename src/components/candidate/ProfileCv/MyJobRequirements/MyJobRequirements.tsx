import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";




 const  MyJobRequirements = () => {
  return (
   
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
    
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-between border border-[#00A264] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Current Position/Rank*
          </p>{" "}
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border border-[#00A264] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Alternate Position/Rank*
          </p>
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border p-2 border-[#00A264]">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Preferred Vessel Type*
          </p>{" "}
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border border-[#00A264] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Alternate Vessel Type*
          </p>
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border border-[#00A264] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Availability Date*{" "}
          </p>
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border border-[#00A264] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Available*
          </p>{" "}
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-[16px] leading-[24px] font-semibold">
          Rotation Expectation
        </h1>
        <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
          For seafarers working in Offshore: Please consider as well the section
          “Offshore Requirements” below to enter your expectations and skills as
          per segment requirement.
        </p>
      </div>

      {/* Third section */}

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Min. Time on Board(months)
          </p>{" "}
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border border-[#00A264] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Max. Time on Board(months){" "}
          </p>
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border p-2 border-[#00A264]">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Min. Time on Home(months)
          </p>{" "}
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="flex items-center justify-between border p-2 border-[#00A264]">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Max. Time on Board(months)
          </p>
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        </div>

        <div className=" my-5">
          <h1 className="mb-2">Preferred Contract Type</h1>
          <input type="checkbox"  />
          <label className=" p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">Voyage</label>
          <input type="checkbox" className="ml-4 " />
          <label className=" p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">Voyage</label>
        </div>

      <h1 className="mb-2 font-semibold text-[16px] leading-[24px]">Salary Expectation</h1>
      
      <div className="grid  grid-cols-2 gap-4 ">

        <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2 ">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Voyage (per month)
          </p>{" "}
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2">
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Currency
            </p>{" "}
            <Link href="#">
              <RiArrowDownSLine className="text-2xl " />
            </Link>
          </div>
          {/* <div> */}
            <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2">
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Negotiable
              </p>{" "}
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
            {/* </div> */}
          </div>
        </div>

        <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2">
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            Permanent (per Month)
          </p>{" "}
          <Link href="#">
            <RiArrowDownSLine className="text-2xl " />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2">
            <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
             currency
            </p>{" "}
            <Link href="#">
              <RiArrowDownSLine className="text-2xl " />
            </Link>
          </div>
         
            <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2">
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                negotiable
              </p>{" "}
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
            </div>
          
        </div>

        <div className="grid col-span-2 mb-6">
            <div className="flex items-center justify-between border border-[rgb(0,162,100)] p-2">
              <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Trading Area Exclusions
              </p>{" "}
              <Link href="#">
                <RiArrowDownSLine className="text-2xl " />
              </Link>
            </div>
          </div>
        </div>
        </div>
     
   
    
  
  );
}
export default MyJobRequirements;
