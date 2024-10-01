"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "../CircularProgress";

const OnlinePresence = () => {
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

  const totalFields = 9;
  const filledFields = [
    whatsApp,
    weChat,
    facebookMess,
    telegram,
    skypeId,
    linkedIn,
    facebook,
    instagram,
    other
    
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  if (percentage <= 30) {
    color = "red";
  } else if (percentage <= 70) {
    color = "orange";
  } else {
    color = "green";
  }


  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission
  };

 

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
            <CircularProgress percentage={Math.round(percentage)} color={color} />

      <form onSubmit={handleSubmit}>
        {/* <div className="  "> */}
        <div className="my-5 ">
          <h1 className="mb-2 text-center font-bold">Messengers in Use</h1>
          <div className="flex justify-between items-center ">
            <div>
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Whats App
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
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                WeChat
              </label>
            </div>

            <div>
              {" "}
              <input
                type="checkbox"
                checked={facebookMess}
                onChange={() => setFacebookMess(!facebookMess)}
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Facebook Messenger
              </label>
            </div>

            {/* <div className="my-5"> */}
            {/* <h1 className="mb-2">Preferred Contract Type</h1> */}
            <div>
              <input
                type="checkbox"
                checked={telegram}
                onChange={() =>
                  setTelegram(!telegram)
                }
                className="ml-4"
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Telegram
              </label>
            </div>
          </div>
         
        </div>
        <div>
          <label
            className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]"
            htmlFor="skypeId"
          >
            Skype ID
          </label>
          <input
            id="skypeId"
            type="text"
            value={skypeId}
            onChange={(e) => setSkypeId(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            required
          />
        </div>

        <div className="my-5">
          <h1 className="mb-2 text-center font-bold">
            Social Media Channels in Use
          </h1>
          <div className="flex justify-between">
            <div>
              <input
                type="checkbox"
                checked={linkedIn}
                onChange={() => setLinkedIn(!linkedIn)}
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                LinkedIn
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={facebook}
                onChange={() =>
                  setFacebook(!facebook)
                }
                className="ml-4"
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Facebook
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={instagram}
                onChange={() =>
                  setInstagram(!instagram)
                }
                className="ml-4"
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Instagram
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={other}
                onChange={() =>
                  setOther(!other)
                }
                className="ml-4"
              />
              <label className="p-2 text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
                Other
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

export default OnlinePresence;
