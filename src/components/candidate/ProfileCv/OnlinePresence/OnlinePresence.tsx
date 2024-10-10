"use client";
import {
  AddOnlinePresenceData,
  AddProfileData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "../CircularProgress";
import { countryCodeDrop } from "@/constants/constants";
type OnlinePresenceComplete = {
  percentage: number;
  color: string;
};
type Props = {
  onlinePresenceComplete: OnlinePresenceComplete; // mjrComplete is an object with percentage and color
  setOnlinePresenceComplete: React.Dispatch<
    React.SetStateAction<OnlinePresenceComplete>
  >; // setMjrComplete is a function to update mjrComplete
  userDetail: any;
};

const OnlinePresence = ({
  onlinePresenceComplete,
  setOnlinePresenceComplete,
  userDetail,
}: Props) => {
  // State for form fields

  const [mCountrycode, setMCountrycode] = useState("+91");
  const [wCountrycode, setWCountrycode] = useState("+91");

  const [tCountrycode, setTCountrycode] = useState("+91");

  const [vCountrycode, setVCountrycode] = useState("+91");

  // const [mCountrycode, setMCountrycode] = useState("+91");

  // const [countryCodeDrop, setCountryCodeDrop] = useState<any>([]);
  const [countryDrop, setCountryDrop] = useState<any>([]);

  const [whatsApp, setWhatsApp] = useState(false);
  const [whatsAppId, setWhatsAppId] = useState("");
  const [weChat, setWeChat] = useState(false);
  const [weChatId, setWeChatId] = useState("");
  const [facebookMess, setFacebookMess] = useState(false);
  const [facebookMessId, setFacebookMessId] = useState("");
  const [telegram, setTelegram] = useState(false);
  const [telegramId, setTelegramId] = useState("");

  const [viber, setViber] = useState(false);

  const [viberId, setViberId] = useState("");

  const [skypeIdChecked, setSkypeIdChecked] = useState(false);

  const [skypeId, setSkypeId] = useState("");
  const [linkedIn, setLinkedIn] = useState(false);
  const [linkedInId, setLinkedInId] = useState("");
  const [twitter, setTwitter] = useState(false);
  const [twitterId, setTwitterId] = useState("");
  const [instagram, setInstagram] = useState(false);
  const [instagramId, setInstagramId] = useState("");
  const [other, setOther] = useState(false);
  const [otherId, setOtherId] = useState("");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    // GetDropdownDetails("countryCode", (res: any) => {
    //   // console.log('County',res?.data)
    //   setCountryCodeDrop(res?.data?.values);
    // });
  }, []);

  const totalFields = 10;

  const filledFields = [
    whatsApp && whatsAppId,
    weChat && weChatId,
    facebookMess && facebookMessId,
    telegram && telegramId,
    viber && viberId,
    skypeId && skypeIdChecked,
    linkedIn && linkedInId,
    twitter && twitterId,
    instagram && instagramId,
    other && otherId,
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setOnlinePresenceComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setOnlinePresenceComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setOnlinePresenceComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    let data = {
      id: userDetail?.userId,
      whatsapp: whatsApp,
      weChat: weChat,
      facebookMessenger: facebookMess,
      telegram: telegram,
      viber: viber,
      whatsappNumber: whatsAppId,
      weChatNumber: weChatId,
      facebookMessengerId: facebookMessId,
      telegramNumber: telegramId,
      viberNumber: viberId,
      skypeId: skypeId,
      linkedIn: linkedIn,
      facebook: twitter,
      instagram: instagram,
      other: other,
      linkedInProfileUrl: linkedIn,
      facebookProfileUrl: twitterId,
      instagramProfileUrl: instagramId,
      otherSocialMediaName: otherId,
      otherSocialMediaContact: "",
    };

    AddOnlinePresenceData(data, AddOnlinePresenceDataCB);
  };

  const AddOnlinePresenceDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      console.log(result);
      toast.success("Online Presence submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      console.log(result);
      toast.error("Online Presence not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="  "> */}
        <div className="my-5 ">
          <h1 className="mb-2  font-bold">Social Media & Messanger in use</h1>
          <div className="grid grid-cols-2  gap-2 ">
            {/* <div className="w-full"> */}

            <div className=" w-full">
              <input
                type="checkbox"
                checked={whatsApp}
                onChange={() => setWhatsApp(!whatsApp)}
                disabled={disabled}
              />
              <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                WhatsApp
              </label>

              {/* Conditionally render WhatsApp input box */}
              {whatsApp && (
                <div className="mt-4 flex gap-2 ">
                  {/* <label
                className="p-2 text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="whatsAppId"
              >
                WhatsApp Number
              </label> */}
                  <div className="w-[30%] ">
                    <select
                      className="border rounded-md w-full   h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={mCountrycode}
                      onChange={(e) => setMCountrycode(e.target.value)}
                      disabled={disabled}
                    >
                      {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code?.phoneCode}>{code?.flag + ' ' + code?.phoneCode?.toUpperCase()}</option>
                    ))}
                    </select>
                  </div>
                  {/* <div className=""> */}
                  <input
                    id="whatsAppId"
                    type="text"
                    className="border rounded-md  h-9 px-2 w-[90%] text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter WhatsApp Number"
                    value={whatsAppId}
                    onChange={(e) => setWhatsAppId(e.target.value)}
                    disabled={disabled}
                  />
                  {/* </div> */}
                </div>
              )}
            </div>
            {/* </div> */}

            <div className="w-full">
              <div>
                {" "}
                <input
                  type="checkbox"
                  checked={weChat}
                  onChange={() => setWeChat(!weChat)}
                  className=""
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  WeChat
                </label>
              </div>
              {weChat && (
                <div className="mt-4 flex  gap-2">
                  {/* <label
                className="p-2 text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="whatsAppId"
              >
                WeChat Number
              </label> */}

                  <div className="w-[30%] ">
                    <select
                      className="border rounded-md w-full   h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={wCountrycode}
                      onChange={(e) => setWCountrycode(e.target.value)}
                      disabled={disabled}
                    >
                      {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code?.phoneCode}>{code?.flag + ' ' + code?.phoneCode?.toUpperCase()}</option>
                    ))}
                    </select>
                  </div>
                  <input
                    id="whatsAppId"
                    type="text"
                    className="border rounded-md  h-9 px-2 w-[90%] text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter WeChat Number"
                    disabled={disabled}
                  />
                </div>
              )}
            </div>

            <div className="w-full">
              <div>
                {" "}
                <input
                  type="checkbox"
                  checked={facebookMess}
                  onChange={() => setFacebookMess(!facebookMess)}
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  Facebook
                </label>
              </div>
              {facebookMess && (
                <div className="mt-4 flex  ">
                  <input
                    id="whatsAppId"
                    type="text"
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Facebook Id"
                    value={facebookMessId}
                    onChange={(e) => setFacebookMessId(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              )}
            </div>

            {/* <div className="my-5"> */}
            {/* <h1 className="mb-2">Preferred Contract Type</h1> */}
            <div className="w-full">
              <div>
                <input
                  type="checkbox"
                  checked={telegram}
                  onChange={() => setTelegram(!telegram)}
                  className=""
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  Telegram
                </label>
              </div>

              {telegram && (
                <div className="mt-4 flex gap-2 ">
                  <div className="w-[30%] ">
                    <select
                      className="border rounded-md w-full   h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={tCountrycode}
                      onChange={(e) => setTCountrycode(e.target.value)}
                      disabled={disabled}
                    >
                      {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code?.phoneCode}>{code?.flag + ' ' + code?.phoneCode?.toUpperCase()}</option>
                    ))}
                    </select>
                  </div>
                  <input
                    id="whatsAppId"
                    type="text"
                    className="border rounded-md  h-9 px-2 w-[80%] text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Telegram Number."
                    value={telegramId}
                    onChange={(e) => setTelegramId(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              )}
            </div>

            <div className="w-full">
              <div>
                <input
                  type="checkbox"
                  checked={viber}
                  onChange={() => setViber(!viber)}
                  className=""
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  Viber
                </label>
              </div>

              {viber && (
                <div className="mt-4 flex gap-2 ">
                  <div className="w-[30%] ">
                    <select
                      className="border rounded-md w-full   h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={vCountrycode}
                      onChange={(e) => setVCountrycode(e.target.value)}
                      disabled={disabled}
                    >
                      {countryCodeDrop && countryCodeDrop?.map((code: any, index: number) => (
                      <option key={index} value={code?.phoneCode}>{code?.flag + ' ' + code?.phoneCode?.toUpperCase()}</option>
                    ))}
                    </select>
                  </div>
                  <input
                    id="viberId"
                    type="text"
                    className="border rounded-md  h-9 px-2 w-[90%] text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter viber Number"
                    value={viberId}
                    onChange={(e) => setViberId(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              )}
            </div>

            <div>
              <div className="w-full">
                <input
                  type="checkbox"
                  checked={skypeIdChecked}
                  onChange={() => setSkypeIdChecked(!skypeIdChecked)}
                  className=""
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  Skype ID
                </label>
              </div>
              {skypeIdChecked && (
                <div className="mt-4 flex flex-col ">
                  <input
                    id="skypeId"
                    type="text"
                    value={skypeId}
                    onChange={(e) => setSkypeId(e.target.value)}
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Skype Id"
                    disabled={disabled}
                  />
                </div>
              )}
            </div>

            {/* Channels in Use */}

            {/* <div className="flex gap-2"> */}
            <div className="w-full">
              <div>
                <input
                  type="checkbox"
                  checked={linkedIn}
                  onChange={() => setLinkedIn(!linkedIn)}
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  LinkedIn
                </label>
              </div>
              {linkedIn && (
                <div className="mt-4 flex flex-col ">
                  <input
                    type="text"
                    className="border rounded-md  h-9 px-2 text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Linkdin Id "
                    value={linkedInId}
                    onChange={(e) => setLinkedInId(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              )}
            </div>
            <div className="w-full">
              <div>
                <input
                  type="checkbox"
                  checked={twitter}
                  onChange={() => setTwitter(!twitter)}
                  className=""
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  Twitter
                </label>
              </div>
              {twitter && (
                <div className="mt-4 flex flex-col ">
                  <input
                    type="text"
                    className="border rounded-md  h-9 px-2 text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Twitter Id"
                    value={twitterId}
                    onChange={(e) => setTwitterId(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              )}
            </div>
            <div className="w-full">
              <div>
                <input
                  type="checkbox"
                  checked={instagram}
                  onChange={() => setInstagram(!instagram)}
                  className=""
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  Instagram
                </label>
              </div>
              {instagram && (
                <div className="mt-4 flex flex-col ">
                  <input
                    id="whatsAppId"
                    type="text"
                    className="border rounded-md  h-9 px-2 text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Instagram Id"
                    value={instagramId}
                    onChange={(e) => setInstagramId(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              )}
            </div>
            {/* <div className="w-full">
              <div>
                <input
                  type="checkbox"
                  checked={other}
                  onChange={() => setOther(!other)}
                  className=""
                  disabled={disabled}
                />
                <label className="p-2 text-[14px] leading-[19.07px]  text-[#333333]">
                  Other
                </label>
              </div>
              {other && (
                <div className="mt-4 flex flex-col ">
                  <input
                    id=""
                    type="text"
                    className="border rounded-md  h-9 px-2 text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder=""
                    value={otherId}
                    onChange={(e) => setOtherId(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              )}
            </div> */}
          </div>
        </div>

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <Link
            href={"#"}
            onClick={handleEdit}
            className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
          >
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OnlinePresence;
