"use client";
import { GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { countryCodeDrop } from "@/constants/constants";

import { act, useEffect, useState } from "react";
import { toast } from "react-toastify";

type CompanyComplete = {
  percentage: number;
  color: string;
};

type Props = {
  companyParticular: CompanyComplete;
  setCompanyParticular: React.Dispatch<React.SetStateAction<CompanyComplete>>;
  // userDetail: any;
};

const CompanyParticular = ({
  companyParticular,
  setCompanyParticular,
}: Props) => {
  const [cmpName, setCmpname] = useState("");
  const [cmpType, setCmpType] = useState("");
  // const [cmpLogo, setCpmLogo] = useState<any>(null);
  const [contactPerson, setContactPerson] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  const [personPhone, setPersonPhone] = useState("");
  const [cmpSite, setCmpSite] = useState("");
  const [cmpTel, setCmpTel] = useState("");
  const [nearestAirport, setNearestAirport] = useState("");
  const [gstNum, setGstNum] = useState("");

  const [rCountrycode, setRCountrycode] = useState("+91");
  const [mCountrycode, setMCountrycode] = useState("+91");
  const [postalCode, setPostalCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [country1, setCountry1] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  // const [countryCodeDrop, setCountryCodeDrop] = useState<any>([]);

  // const [mCountryTel, setMCountryTel] = useState("+91");
  const [countryCodeTel, setCountryCodeTel] = useState<any>([]);

  // const [exdate1, setExDate1] = useState("");
  // const [checkBox1, setCheckBox1] = useState<any>(false);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  // const [trainDrop, setTrainDrop] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    GetDropdownDetails("countryCode", (res: any) => {
      // console.log('County',res?.data)
      // setCountryCodeDrop(res?.data?.values);
      setCountryCodeTel(res?.data?.values);
    });
  }, []);

  // useEffect(() => {
  //   GetDropdownDetails("country", (res: any) => {
  //     // console.log('County',res?.data)
  //     setCountryDrop(res?.data?.values);
  //   });
  //   GetDropdownDetails("country", (res: any) => {
  //     // console.log('County',res?.data)
  //     // setTrainDrop(res?.data?.values);
  //   });
  // }, []);

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

  const totalFields = 16;
  const filledFields = [
    cmpName,
    cmpType,
    contactPerson,
    contactPersonEmail,
    personPhone,
    cmpSite,
    cmpTel,
    gstNum,
    nearestAirport,
    address,
    number,
    addInfo,
    postalCode,
    state,
    cityName,
    country1,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    // console.log("user", userDetail);
    if (percentage <= 30) {
      setCompanyParticular((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setCompanyParticular((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setCompanyParticular((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage, color]);

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setCpmAdd(file);
  //   }
  // };

  // const handleFileChanges = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setCpmLogo(file);
  //   }
  // };

  // const handleIsoChanges = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setIsoCerti(file);
  //   }
  // };

  const handleEdit = () => {
    setDisabled(!disabled);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    // let formData = new FormData();
    // formData.append("trainingName", trainings);
    // formData.append("trainingCenter", trainingCenter);
    // formData.append("issuingCountry", issuingCountry);
    // formData.append("certificateNumber", eCDISNumber);
    // formData.append("issueDate", issuedate1);
    // formData.append("expiryDate", exdate1);
    // formData.append("neverExpires", checkBox1);

    // formData.append("document", selectedFiles);

    // AddEcdisData(userDetail?.userId, formData, AddEcdisdataDB);
  };

  // const AddEcdisdataDB = (result: any) => {
  //   console.log(result);
  //   if (result?.status == 200) {
  //     toast.success("ECDIS submited successfully");
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1000);
  //   } else {
  //     toast.error("ECDIS  detail not submited ");
  //   }
  // };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <h1 className="text-left font-bold">Company Particulars</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainingC"
              >
                Company Name
              </label>
              <input
                id="trainingC"
                type="text"
                value={cmpName}
                onChange={(e) => setCmpname(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Company Name"
                disabled={disabled}
                required
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainings"
              >
                Company Type
              </label>
              <select
                id="trainings"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={cmpType}
                disabled={disabled}
                onChange={(e) => setCmpType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="ownership">Ownership</option>
                <option value="shipManagement">Ship Management</option>
                <option value="crewManagement">Crew Management</option>
              </select>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="person"
              >
                Contact Person
              </label>
              <input
                id="person"
                type="text"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Contact Person"
                disabled={disabled}
                required
              />
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="mail"
              >
                Contact Person Email
              </label>
              <input
                id="mail"
                type="text"
                value={contactPersonEmail}
                onChange={(e) => setContactPersonEmail(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Email Id"
                disabled={disabled}
                required
              />
            </div>
          </div>
          {/* Contact Person section */}
          <div className="grid grid-cols-1 gap-4 mt-3">
            <div className="flex items-center gap-4 ">
              <div className="flex flex-col  ">
                <label className="text-[14px] leading-[23px]  text-[#333333]  ">
                  Country Code
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[13.7px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={mCountrycode}
                  onChange={(e) => setMCountrycode(e.target.value)}
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
              <div className="w-[40%] ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="contactNo"
                >
                  Contact Person Phone Number
                </label>
                <input
                  id="contactNo"
                  type="number"
                  value={personPhone}
                  onChange={(e) => setPersonPhone(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Enter Phone Number"
                  disabled={disabled}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="   ">
              <label
                className="text-[14px] leading-[19px]  text-[#333333] "
                htmlFor="website"
              >
                Company Website
              </label>
              <input
                id="website"
                type="text"
                value={cmpSite}
                onChange={(e) => setCmpSite(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Company Website"
                disabled={disabled}
                required
              />
            </div>
            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="gstno"
              >
                GST Number or VAT or Other Taxes
              </label>
              <input
                id="gstno"
                type="text"
                value={gstNum}
                onChange={(e) => setGstNum(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter GST or VAT Number"
                disabled={disabled}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-3">
            <div className="flex items-center gap-4 ">
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

              <div className="w-[40%] ">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor="telNo"
                >
                  Company Telephone Number
                </label>
                <input
                  id="telNo"
                  type="number"
                  value={cmpTel}
                  onChange={(e) => setCmpTel(e.target.value)}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                  placeholder="Enter Telephone Number"
                  disabled={disabled}
                  required
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="grid col-span-2 ">
              <h1 className="font-bold">Address</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="flex items-center justify-between gap-4  ">
                {" "}
                <div className="w-full ">
                  <label
                    className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                    htmlFor="street"
                  >
                    Street Name
                  </label>
                  {/* <div className="relative flex items-center  "> */}
                  <input
                    id="street"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Street Name"
                    disabled={disabled}
                  />
                  {/* </div> */}
                </div>
              </div>
              <div className="w-full ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="number"
                >
                  Street Number
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="number"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder=" Enter Street Number"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className=" ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                  htmlFor="addinfo"
                >
                  Add. Info (c/o etc.)
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="addinfo"
                    type="text"
                    value={addInfo}
                    onChange={(e) => setAddInfo(e.target.value)}
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Add. Info (c/o etc.)"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col w-full  ">
                  <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 ">
                    Country
                  </label>{" "}
                  <select
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={country1}
                    onChange={(e) => setCountry1(e.target.value)}
                    disabled={disabled}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {countryDrop &&
                      countryDrop?.map((country: any, index: number) => (
                        <option key={index} value={country}>
                          {country?.toUpperCase()}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 "
                  htmlFor="state"
                >
                  State/Province
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter  State/Province"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 w-full">
                <div className="w-full ">
                  <label
                    className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
                    htmlFor="cityName"
                  >
                    City
                  </label>
                  <div className="relative flex items-center  ">
                    <input
                      id="cityName"
                      type="text"
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Enter  City"
                      disabled={disabled}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label className="text-[14px] leading-[19.07px]  text-[#333333] mb-2 ">
                  Postal Code/ZIP Code
                </label>
                <div className="relative flex items-center  ">
                  <input
                    id="addinfo"
                    type="number"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder="Enter Postal Code/ZIP Code"
                    disabled={disabled}
                  />
                </div>
              </div>
            
            <div className="flex gap-2 mb-4 mt-5">
              <button
                type="submit"
                className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
              >
                Save
              </button>
              <Link
                href="#"
                onClick={handleEdit}
                className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
              >
                Edit
              </Link>
            </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyParticular;
