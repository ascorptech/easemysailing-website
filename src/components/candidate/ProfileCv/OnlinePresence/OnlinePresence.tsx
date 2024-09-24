"use client";
import { AddProfileData } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/ProfileCVService";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

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

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault(); // Prevent default form submission
  };

 

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="  "> */}
        <div className="my-5 ">
          <h1 className="mb-2 text-center font-bold">Messengers in Use</h1>
          <div className="flex justify-between ">
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
          {/* </div> */}
          {/* </div> */}

          {/* Current Position/Rank */}
          {/* <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Current Position/Rank
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={currentPosition}
              onChange={(e) => setCurrentPosition(e.target.value)}
            >
              <option value="" disabled>
                Current Position/Rank
              </option>
              <option value="Captain">Captain</option>
              <option value="Captain2">Captain2</option>
              <option value="Training3">Training3</option>
            </select>
          </div> */}

          {/* Alternate Position/Rank */}
          {/* <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Alternate Position/Rank
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={alternatePosition}
              onChange={(e) => setAlternatePosition(e.target.value)}
            >
              <option value="" disabled>
                Alternate Position/Rank
              </option>
              <option value="Chemical Tanker1">Chemical Tanker1</option>
              <option value="Chemical Tanker2">Chemical Tanker2</option>
              <option value="Chemical Tanker3">Chemical Tanker3</option>
            </select>
          </div> */}

          {/* Preferred Vessel Type */}
          {/* <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Preferred Vessel Type
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={preferredVesselType}
              onChange={(e) => setPreferredVesselType(e.target.value)}
            >
              <option value="" disabled>
                Preferred Vessel Type
              </option>
              <option value="Training1">Training1</option>
              <option value="Training2">Training2</option>
              <option value="Training3">Training3</option>
            </select>
          </div> */}

          {/* Alternate Vessel Type */}
          {/* <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Alternate Vessel Type
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={alternateVesselType}
              onChange={(e) => setAlternateVesselType(e.target.value)}
            >
              <option value="" disabled>
                Alternate Vessel Type
              </option>
              <option value="Training1">Training1</option>
              <option value="Training2">Training2</option>
              <option value="Training3">Training3</option>
            </select>
          </div> */}

          {/* Availability Date */}
          {/* <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Availability Date
            </label>
            <input
              type="date"
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={availabilityDate}
              onChange={(e) => setAvailabilityDate(e.target.value)}
            />
          </div> */}

          {/* Available */}
          {/* <div>
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
              Not Available
            </label>
            <select
              className="bg-white w-full h-9 text-[14px] leading-[19.07px] font-[openSans] text-[#333333] border border-[#00A264] focus:outline-none rounded-md"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            >
              <option value="" disabled>
                Not Available
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div> */}
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
            className="bg-white text-[14px] leading-[19.07px] font-[openSans] text-[#333333] px-2  h-9 w-full border border-[#00A264] focus:outline-none rounded-lg"
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
