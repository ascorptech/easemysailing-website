"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const VettingServices = () => {
  // State for form fields

  const [whatsApp, setWhatsApp] = useState(false);
  const [weChat, setWeChat] = useState(false);
  const [facebookMess, setFacebookMess] = useState(false);
  const [telegram, setTelegram] = useState(false);
  const [skypeId, setSkypeId] = useState("");
  const [linkedIn, setLinkedIn] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [other, setOther] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission
  };

 

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="  "> */}
        <div className="my-5 ">
          <h1 className="mb-2 text-center ">Assessment of Completeness and Validity of Certificates legally required by Rank</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

        
          </div>
         

         
        </div>
        <div className="my-5 ">
          <h1 className="mb-2 text-center ">Verification of COC and GMDSS (if applicable)</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

            
           
          </div>
        

        
        </div>


        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of medical certificates and/or medical centers</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

           
          </div>
        
        </div>

        <div className="my-5 ">
          <h1 className="mb-2  ">Identity check via video call</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>
          </div>

        </div>

        <div className="my-5 ">
          <h1 className="mb-2 ">English level assessment via video call</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

          </div>
        
        </div>
        <div className="my-5 ">
          <h1 className="mb-2  ">Plausibility check of Seagoing Experience</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

          </div>
        
        </div>

        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of STCW Training Certificates</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={telegram}
                onChange={() =>
                  setTelegram(!telegram)
                }
                className="ml-4"
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Optional
              </label>
            </div>
          </div>
        
        </div>
        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of Additional Trainings</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={telegram}
                onChange={() =>
                  setTelegram(!telegram)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
            </div>
          </div>
        
        </div>
        <div className="my-5 ">
          <h1 className="mb-2 ">Verification of Flag State Certificates</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={telegram}
                onChange={() =>
                  setTelegram(!telegram)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
            </div>
          </div>
        
        </div>

        <div className="my-5 ">
          <h1 className="mb-2  ">Verification of ECDIS type specific trainings (if applicable)</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={telegram}
                onChange={() =>
                  setTelegram(!telegram)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
            </div>
          </div>
        
        </div>

       
        

        

        <div className="my-5">
          <h1 className="mb-2 ">
          Verification of Engine specific trainings (if applicable)
          </h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                In Progress
              </label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                checked={weChat}
                onChange={() =>
                  setWeChat(!weChat)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            Done
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Not Applicable
              </label>
            </div>

            
            <div>
              <input
                type="checkbox"
                checked={telegram}
                onChange={() =>
                  setTelegram(!telegram)
                }
                className="ml-4"
              />
              <label className="font-bold p-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Optional
              </label>
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

export default VettingServices;
