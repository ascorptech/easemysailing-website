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

type UserDetailsForm = {
  fname: string;
  lname: string;
  mail: any;
  cNumber: any;
  mNumber: any;
  totaluser: any;
  regUser: any;
  remUser: any;
  mLevel: any;
  slevel: any;
  rCountrycode:any;
  rCountrycode2:any;
};

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
  

  const [UserDetails, setUserDetails] = useState<UserDetailsForm[]>([
    {
      fname: "",
      lname: "",
      mail: "",
      cNumber: "",
      mNumber: "",
      totaluser: "",
      regUser: "",
      remUser: "",
      mLevel: "",
      slevel: "",
      rCountrycode:"+91",
      rCountrycode2:"+91",
        },
  ]);

  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");


  useEffect(() => {
    GetDropdownDetails("STCHTraining", (res: any) => {
      //   setSTCHTrainOption(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      //   setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 10;
  const filledFields = UserDetails.reduce(
    (acc, form) =>
      acc +
      [
        form.fname,
        form.lname,
        form.mail,
        form.cNumber,
        form.mNumber,
        form.totaluser,
        form.regUser,
        form.remUser,
        form.mLevel,
        form.slevel,
      ].filter(Boolean).length,
    0
  );

  const percentage = (filledFields / (totalFields * UserDetails.length)) * 100;
  // let color = "";

  // const totalFields = available === "Yes" ? 6 : 5;

  // const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setUserComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setUserComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      setColor("#FF9900");
    } else {
      setUserComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedFile(file);
  //   }
  // };

//   const handleAddForm = () => {
//     setUserDetails([
//       ...UserDetails,
//       {
//         fname: "",
//         lname: "",
//         mail: "",
//         cNumber: "",
//         mNumber: "",
//         totaluser: "",
//         regUser: "",
//         remUser: "",
//         mLevel: "",
//         slevel: "",
//         rCountrycode:"",
//         rCountrycode2:"",
//       },
//     ]);
//   };

//   const handleRemoveForm = (index: number) => {
//     const updatedForms = UserDetails.filter((_, i) => i !== index);
//     setUserDetails(updatedForms);
//   };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();

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

      UserDetails.forEach((element: any) => {
        stcwArray.push({
          //   document: element?.selectedFile,
          //   trainingName: element?.training,
          //   issuingCountry: element?.trainingCountry,
          //   certificateNumber: element?.number,
          //   issueDate: element?.issuedate,
          //   expiryDate: element?.exdate,
        });
      });
      data.stcwData = stcwArray;

      let finArry: any = [];
      finArry.push(data);
      console.log("fin", finArry);

      AddStcwData(finArry, AddStcwDataCB);
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

  // add plus and minus symbole

  //   const handleFileChange = (index: number, event: any) => {
  //     const file = event.target.files?.[0];

  //     const reader = new FileReader();
  //     reader.onloadend = function () {
  //       const imageBinary: any = reader.result;
  //       const byteArray = imageBinary.split(",")[1];

  //       const updatedForms: any = [...UserDetails];
  //       updatedForms[index].selectedFile = byteArray;
  //       setUserDetails(updatedForms);
  //     };
  //     reader.readAsDataURL(file);
  //     // const updatedForms = [...UserDetails];
  //     // updatedForms[index].selectedFile = event.target.files?.[0] || null;
  //     // setUserDetails(updatedForms);
  //   };

  const handleFormChange = (
    index: number,
    field: keyof UserDetailsForm,
    value: any
  ) => {
    const updatedForms = [...UserDetails];
    updatedForms[index][field] = value;
    setUserDetails(updatedForms);
  };

  // const handleExtraFieldChange = (
  //   index: number,
  //   value: string,
  //   field: "field1" | "field2"
  // ) => {
  //   const updatedFields = [...extraFields];
  //   updatedFields[index][field] = value;
  //   setExtraFields(updatedFields);
  // };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    // toast.info("You are now in edit mode. Make your changes.");
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center my-2">
            <h1 className="text-left font-bold">Super User</h1>
            {/* {isHideShow && (
              <div className="flex gap-2">
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={handleAddForm}
                />
                {UserDetails.length > 1 && (
                  <AiOutlineMinus
                    className="text-2xl cursor-pointer"
                    onClick={() => handleRemoveForm(UserDetails.length - 1)}
                  />
                )}
              </div>
            )} */}
          </div>

          {UserDetails.map((field, index) => (
            <div key={index} className="">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    First Name
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.fname}
                    onChange={(e) =>
                      handleFormChange(index, "fname", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    placeholder="Enter First Name"
                    disabled={disabled}
                  />
                </div>

                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Last Name
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.lname}
                    onChange={(e) =>
                      handleFormChange(index, "lname", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    placeholder="Enter Last Name"
                    disabled={disabled}
                  />
                </div>

                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Official Email
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.mail}
                    onChange={(e) =>
                      handleFormChange(index, "mail", e.target.value)
                    }
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
                      value={field.rCountrycode}
                      onChange={(e) =>handleFormChange(index , "rCountrycode",e.target.value)}
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
                        value={field.cNumber}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                            if (value.length <= 10) {
                                handleFormChange(index,"cNumber", e.target.value); // Set value only if it's 10 digits or less
                            }
                          }}
                        // onChange={(e) => setPhoneNumber1(e.target.value)}
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                      value={field.rCountrycode2}
                      onChange={(e) => handleFormChange(index,"rCountrycode2",e.target.value)}
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
                        value={field.mNumber}
                        // onChange={(e) => setPhoneNumber2(e.target.value)}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                            if (value.length <= 10) {
                                handleFormChange(index, "mNumber",e.target.value); // Set value only if it's 10 digits or less
                            }
                          }}
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        placeholder="Mobile Number"
                        disabled={disabled}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Total Users
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.totaluser}
                    onChange={(e) =>
                      handleFormChange(index, "totaluser", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    // placeholder="Total Users"
                    readOnly
                    disabled={disabled}
                  />
                </div>

                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Registered Users
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.regUser}
                    onChange={(e) =>
                      handleFormChange(index, "regUser", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    // placeholder="Enter Registered Users"
                    readOnly
                    disabled={disabled}
                  />
                </div>

                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Remainging Users
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.remUser}
                    onChange={(e) =>
                      handleFormChange(index, "remUser", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    // placeholder="Enter Remainging Users"
                    readOnly
                    disabled={disabled}
                  />
                </div>
                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Manager Lavel Users
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.mLevel}
                    onChange={(e) =>
                      handleFormChange(index, "mLevel", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    // placeholder="Enter Manager Lavel Users"
                    readOnly
                    disabled={disabled}
                  />
                </div>
                <div className="">
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333] "
                    htmlFor={`number12_${index}`}
                  >
                    Support Level Users
                  </label>
                  <input
                    id={`number12_${index}`}
                    type="text"
                    value={field.slevel}
                    onChange={(e) =>
                      handleFormChange(index, "slevel", e.target.value)
                    }
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                    // placeholder="Enter Support Level Users"
                    readOnly
                    disabled={disabled}
                  />
                </div>

                {/* {!field.neverExpires && (
                  <div className="">
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333]  "
                      htmlFor="expiryDate12"
                    >
                      Expiry Date
                    </label>
                    <input
                      id={`expiryDate12`}
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.exdate}
                      onChange={(e) =>
                        handleFormChange(index, "exdate", e.target.value)
                      }
                      disabled={disabled}
                    />
                  </div>
                )} */}

                {/* <div className=" flex items-center gap-2 mt-5 ">
                  <input
                    id={`neverExpires_${index}`}
                    type="checkbox"
                    className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                    checked={field.neverExpires}
                    onChange={(e) =>
                      handleFormChange(index, "neverExpires", e.target.checked)
                    }
                    disabled={disabled}
                  />
                  <label
                    className="text-[14px] leading-[19.07px]  text-[#333333]"
                    htmlFor={`neverExpires_${index}`}
                  >
                    Never Expires
                  </label>
                </div> */}
              </div>
              {/* {isHideShow && (
                <div className="flex items-center justify-start gap-4 my-6">
                  <div className="flex gap-6 items-center  ">
                    <label
                      htmlFor={`file-upload_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                    >
                      Attachment Document
                    </label>
                    <input
                      id={`file-upload_${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(index, e)}
                      disabled={disabled}
                    />
                    
                  </div>
                  {field.selectedFile ? (
                    <p className="mt-4 text-gray-700">
                      File Selected: {field.selectedFile.name}
                    </p>
                  ) : (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      No File Selected
                    </p>
                  )}
                </div>
              )} */}
            </div>
          ))}

          <div className="flex gap-2 mb-4 mt-4">
            <button
              type="submit"
              className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
            >
              Save
            </button>
            <Link
              href={"#"}
              className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
              onClick={handleEdit}
            >
              Edit
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
