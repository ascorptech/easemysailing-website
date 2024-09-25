"use client";
import React from "react";
import { useState } from "react";

const AboutMe = () => {
    const [personality, setPersonality] = useState("");
    const [additional, setAdditional] = useState("");
    const [myFuture, setMyFuture] = useState("");
  
    const [criminal, setCriminal] = useState("");
    const [nationality, setNationality] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault(); 
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* next of About me */}

        <div>
            <div className="flex flex-col mt-4 ">
              <h1 className="text-center font-semibold mb-2">ABOUT ME</h1>

              <div className="">
                <div className=" ">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                    htmlFor="personality"
                  >
                    My Personality and professional Attitude
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="personality"
                      type="text"
                      value={personality}
                      onChange={(e) => setPersonality(e.target.value)}
                      className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                    htmlFor="additional"
                  >
                    Additional Information about my past Sea Service
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="additional"
                      type="text"
                      value={additional}
                      onChange={(e) => setAdditional(e.target.value)}
                      className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className=" ">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                    htmlFor="future"
                  >
                    My Future Aims and Expectations
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="future"
                      type="text"
                      value={myFuture}
                      onChange={(e) => setMyFuture(e.target.value)}
                      className="border rounded-md w-full py-[7px] px-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div className=" ">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[openSans] text-[#333333] mb-1"
                    htmlFor="action"
                  >
                    Criminal action.
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="action"
                      type="text"
                      value={criminal}
                      onChange={(e) => setCriminal(e.target.value)}
                      className="border rounded-lg w-full py-[7px] px-3 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-none focus:shadow-outline border-[#00A264]"
                      placeholder="Yes/No"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <button
            type="submit"
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AboutMe;
