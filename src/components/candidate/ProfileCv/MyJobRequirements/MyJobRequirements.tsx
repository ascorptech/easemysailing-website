"use client";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const MyJobRequirements = () => {

  const [availabilitydate, setAvailabilityDate] = useState("");

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <div className="grid grid-cols-2 gap-4">
      <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="">
          Current Position/Rank*
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Current Position/Rank*
            </option>
            <option value="">Captain</option>
            <option value="">Captain2</option>
            <option value="">Training3</option>
          </select>
        </div>
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Alternate Position/Rank*
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Alternate Position/Rank*
            </option>
            <option value="">Chemical Tanker1</option>
            <option value="">Chemical Tanker2</option>
            <option value="">Chemical Tanker3</option>
          </select>
        </div>
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="">
          Alternate Position/Rank
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Alternate Position/Rank
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] font-normal " htmlFor="">
          Alternate Vessel Type*
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Alternate Vessel Type*
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="issue">
          Availability Date*
          </label>
          <input
            id="issue"
            type="date"
            className="border text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            placeholder="Availability Date*"
            value={availabilitydate}
            onChange={(e) => setAvailabilityDate(e.target.value)}
          />
        </div>
       
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Available*
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Available*
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
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
       

         <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Min. Time on Board(months)
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Min. Time on Board(months)
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
     

        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Max. Time on Board(months)
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Max. Time on Board(months)
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
       
      
          <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Min. Time on Home(months)
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
            Min. Time on Home(months)
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>


        
        <div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Max. Time on Board(months)
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            Max. Time on Board(months)
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
      </div>

      <div className=" my-5">
        <h1 className="mb-2">Preferred Contract Type</h1>
        <input type="checkbox" />
        <label className=" p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
          Voyage
        </label>
        <input type="checkbox" className="ml-4 " />
        <label className=" p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
          Voyage
        </label>
      </div>

      <h1 className="mb-2 font-semibold text-[16px] leading-[24px]">
        Salary Expectation
      </h1>

      <div className="grid  grid-cols-2 gap-4 ">
      
         <div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Voyage (per month)
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            Voyage (per month)
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
         
             <div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Currency
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            Currency
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
         
      
            <div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Negotiable
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            Negotiable
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        </div>

          <div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Permanent (per Month)
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            Permanent (per Month)
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
        

<div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          currency
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            currency
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
       
          <div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          negotiable
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            negotiable
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        </div>

        <div className="grid col-span-2 mb-3">
         
           <div className="px-2">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
          Trading Area Exclusions
          </label>
          <select
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264] "
            name="options"
          >
            <option value="" disabled selected>
            Trading Area Exclusions
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Link
          href="#"
          className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
        >
          Save
        </Link>
        <Link
          href="#"
          className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};
export default MyJobRequirements;
