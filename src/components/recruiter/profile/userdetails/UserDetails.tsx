"use client";
import {
  AddStcwData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { countryCodeDrop } from "@/constants/constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React from "react";

type UserComplete = {
  percentage: number;
  color: string;
};

type Props = {
  UserComplete: UserComplete; // mjrComplete is an object with percentage and color
  setUserComplete: React.Dispatch<React.SetStateAction<UserComplete>>;
  userDetail: any;
  sTCWDetail: any;
  criminal: any;
};

const UserDetails = ({
  UserComplete,
  setUserComplete,
  userDetail,
  criminal,
  sTCWDetail,
}: Props) => {
  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [rCountrycode2, setRCountrycode2] = useState("+91");
  const [rCountrycode, setRCountrycode] = useState("+91");
  const [cNumber, setCnumber] = useState("");
  const [mNumber, setmNumber] = useState("");
  const [totaluser, setTotaluser] = useState("");
  const [regUser, setRegUser] = useState("");
  const [remUser, setRemUser] = useState("");
  const [mLevel, setmLevel] = useState("");
  const [slevel, setSlevel] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    GetDropdownDetails("STCHTraining", (res: any) => {
      //   setSTCHTrainOption(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      //   setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 7;
  const filledFields = [
    fname,
    lname,
    mail,
    rCountrycode,
    rCountrycode2,
    cNumber,
    mNumber,
  ].filter(Boolean).length;

  const percentage = (filledFields / (totalFields * UserDetails.length)) * 100;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setUserComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setUserComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setUserComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      //   let formData = new FormData();
      //   UserDetails.forEach((element: any) => {
      //     formData.append("document", element?.selectedFile);
      //     formData.append("trainingName", element?.training);
      //     formData.append("issuingCountry", element?.trainingCountry);
      //     formData.append("certificateNumber", element?.number);
      //     formData.append("issueDate", element?.issuedate);
      //     formData.append("expiryDate", element?.exdate);
      //   });
      //   let neverExpires = "";

      //   AddStcwData(userDetail?.userId, neverExpires, formData, AddStcwDataCB);
      // };

      let data: any = {
        userId: userDetail?.userId,
      };
      const stcwArray: any = [];

      // UserDetails.forEach((element: any) => {
      //   stcwArray.push({
      //     //   document: element?.selectedFile,
      //     //   trainingName: element?.training,
      //     //   issuingCountry: element?.trainingCountry,
      //     //   certificateNumber: element?.number,
      //     //   issueDate: element?.issuedate,
      //     //   expiryDate: element?.exdate,
      //   });
      // });
      // data.stcwData = stcwArray;

      // let finArry: any = [];
      // finArry.push(data);
      // console.log("fin", finArry);

      // AddStcwData( AddStcwDataCB);
    }
  };

  const AddStcwDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Users Details submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Users Details not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };
  const validateInputs = () => {
    let formIsValid = true;
    let newErrors = {
      cNumber: "",
      mNumber:"",
      
    };

    if (!cNumber?.trim()) {
      newErrors.cNumber = "Phone number is required";
      formIsValid = false;
    } else if (/^\d{13}$/.test(cNumber)) {
      console.log("phone", cNumber.length);
      newErrors.cNumber = "Phone number must be 10 digits";
      formIsValid = false;
    } else if (cNumber.length < 7) {
      newErrors.cNumber = "Phone number must be minimum 7 digits";
      formIsValid = false;
    }

    if (!mNumber?.trim()) {
      newErrors.mNumber= "Phone number is required";
      formIsValid = false;
    } else if (/^\d{13}$/.test(mNumber)) {
      console.log("phone", mNumber.length);
      newErrors.mNumber = "Phone number must be 10 digits";
      formIsValid = false;
    } else if (mNumber.length < 7) {
      newErrors.mNumber = "Phone number must be minimum 7 digits";
      formIsValid = false;
    }

    return formIsValid;
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center my-2">
            <h1 className="text-left font-bold">Super User</h1>
          </div>

          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  First Name
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Enter First Name"
                  disabled={disabled}
                />
              </div>

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  Last Name
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Enter Last Name"
                  disabled={disabled}
                />
              </div>

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  Official Email
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Enter Email"
                  disabled={disabled}
                />
              </div>

              <div className="flex items-center justify-between gap-2  ">
                <div className="flex flex-col  ">
                  <label className="text-[14px] leading-[19.07px]  text-[#333333]  ">
                    Country Code
                  </label>
                  <select
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={rCountrycode}
                    onChange={(e) => setRCountrycode(e.target.value)}
                    disabled={disabled}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    {countryCodeDrop &&
                      countryCodeDrop?.map((code: any, index: number) => (
                        <option key={index} value={code?.phoneCode}>
                          {code?.flag + " " + code?.phoneCode}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="w-[65%] ">
                  <label
                    className="block text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor="phonenumber2"
                  >
                    Official Contact Number
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="phonenumber2"
                      type="text"
                      value={cNumber}
                      maxLength={14} // Maximum 12 digits
                      onChange={(e) => {
                        // Allow only numeric input
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          // Regex to allow only digits
                          setCnumber(value.trimStart());
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value.length < 7) {
                          toast.error(
                            "Phone number must be at least 7 digits long"
                          );
                        }
                      }}
                      className="border rounded-md w-full h-9  px-2  text-[13.5px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Enter Contact Number"
                      disabled={disabled}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2  ">
                <div className="flex flex-col  ">
                  <label className="text-[14px] leading-[19.07px]  text-[#333333]  ">
                    Country Code
                  </label>
                  <select
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={rCountrycode2}
                    onChange={(e) => setRCountrycode2(e.target.value)}
                    disabled={disabled}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    {countryCodeDrop &&
                      countryCodeDrop?.map((code: any, index: number) => (
                        <option key={index} value={code?.phoneCode}>
                          {code?.flag + " " + code?.phoneCode}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="w-[65%] ">
                  <label
                    className="block text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor="phonenumber2"
                  >
                    Mobile Number
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="phonenumber2"
                      type="text"
                      value={mNumber}
                      maxLength={14} // Maximum 12 digits
                      onChange={(e) => {
                        // Allow only numeric input
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          // Regex to allow only digits
                          setmNumber(value.trimStart());
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value.length < 7) {
                          toast.error(
                            "Phone number must be at least 7 digits long"
                          );
                        }
                      }}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Enter Mobile Number"
                      disabled={disabled}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  Total Users
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={totaluser}
                  onChange={(e) => setTotaluser(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  // placeholder="Total Users"
                  readOnly
                  disabled={disabled}
                />
              </div>

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  Registered Users
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={regUser}
                  onChange={(e) => setRegUser(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  // placeholder="Enter Registered Users"
                  readOnly
                  disabled={disabled}
                />
              </div>

              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  Remainging Users
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={remUser}
                  onChange={(e) => setRemUser(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  // placeholder="Enter Remainging Users"
                  readOnly
                  disabled={disabled}
                />
              </div>
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  Manager Lavel Users
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={mLevel}
                  onChange={(e) => setmLevel(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  // placeholder="Enter Manager Lavel Users"
                  readOnly
                  disabled={disabled}
                />
              </div>
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`number12_ `}
                >
                  Support Level Users
                </label>
                <input
                  id={`number12_ `}
                  type="text"
                  value={slevel}
                  onChange={(e) => setSlevel(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  // placeholder="Enter Support Level Users"
                  readOnly
                  disabled={disabled}
                />
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
            <Link
            href={"#"}
            onClick={handleEdit}
            className={`border p-2 rounded-lg px-8 ${
              isEditing
                ? "border-red-500 text-red-500" 
                : "border-[#00A264] text-[#00A264]"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"} {/* Conditional rendering */}
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
