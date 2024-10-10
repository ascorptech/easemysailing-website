"use client";

import {
  AddLicensesData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import React from "react";

type LicensesForms = {
  issueAuthority: string;
  certificateNo: any;
  certificateType: string;
  sTCWRegulation: string;
  areaLimitation: string;
  otherLimitation: string;
  issueDate: any;
  expiryDate: string;
  selectedFile: File | null;
};

type LicensesComplete = {
  percentage: number;
  color: string;
};
type Props = {
  licensesComplete: LicensesComplete;
  setLicensesComplete: React.Dispatch<React.SetStateAction<LicensesComplete>>;
  userDetail: any;
};

const Licenses = ({
  licensesComplete,
  setLicensesComplete,
  userDetail,
}: Props) => {
  const [extraFields, setExtraFields] = useState<
    { field1: string; field2: string }[]
  >([]);

  const [licensesForms, setLicensesForms] = useState<LicensesForms[]>([
    {
      issueAuthority: "",
      certificateNo: "",
      certificateType: "",
      sTCWRegulation: "",
      areaLimitation: "",
      otherLimitation: "",
      issueDate: "",
      expiryDate: "",
      selectedFile: null,
    },
  ]);

  const [number, setNumber] = useState("");

  const [idoNotACoC, setIdoNotACoC] = useState("");
  // const [areaLimitation, setAreaLimitation] = useState("");
  const [capacity, setCapacity] = useState("");

  const [issuingOption, setIssuingOption] = useState("");
  const [typeOption, setTypeOption] = useState("");
  const [number1, setNumber1] = useState("");

  const [wRegulation, setWRegulation] = useState("");

  // const [otherLimitation, setOtherLimitation] = useState("");
  // const [issueDate, setIssueDate] = useState("");
  // const [expiryDate, setExpiryDate] = useState("");

  const [gMexpiryDate, setGMExpiryDate] = useState("");

  const [gMissueDate, setGMIssueDate] = useState("");

  const [issuingCountry, setIssuingCountry] = useState("");

  // const [certificateNo, setCertificateNo] = useState("");
  // const [issueAuthority, setIssueAuthority] = useState("");
  // const [sTCWRegulation, setSTCWRegulation] = useState("");
  // const [certificateType, setCertificateType] = useState("");
  const [separatelyCheckBox, setSeparatelyCheckBox] = useState<any>(false);

  const [sTCWRegulationOption, setSTCWRegulationOption] = useState("");
  const [capacityOption, setCapacityOption] = useState("");
  const [issueDateOption, setIssueDateOption] = useState("");
  const [expiryDateOption, setExpiryDateOption] = useState("");

  // const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFile1, setSelectedFile1] = useState<any>(null);

  const [selectedFile2, setSelectedFile2] = useState<any>(null);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [capacityDrop, setCapacityDrop] = useState<any>([]);
  const [stcwRegDrop, setStcWRegDrop] = useState<any>([]);
  const [edorTyDrop, setEndorTyDrop] = useState<any>([]);

  const [showFields, setShowFields] = useState(true);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    GetDropdownDetails("capacity", (res: any) => {
      setCapacityDrop(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    GetDropdownDetails("STCWRegulation", (res: any) => {
      // console.log('lang',res?.data)
      setStcWRegDrop(res?.data?.values);
    });
    GetDropdownDetails("EndorsmentType", (res: any) => {
      // console.log('lang',res?.data)
      setEndorTyDrop(res?.data?.values);
    });
  }, []);

  // Salary expectation states

  const totalFields = 17 + licensesForms.length * 9;
  const filledFields = [
    ...licensesForms.flatMap((field) => [
      field.areaLimitation,
      field.certificateNo,
      field.certificateType,
      field.expiryDate,
      field.issueAuthority,
      field.issueDate,
      field.otherLimitation,
      field.selectedFile,
      field.sTCWRegulation,
    ]),
    number,
    idoNotACoC,
    capacity,
    issuingOption,
    typeOption,
    number1,
    wRegulation,
    issuingCountry,
    separatelyCheckBox,
    sTCWRegulationOption,
    capacityOption,
    issueDateOption,
    expiryDateOption,
    selectedFile1,
    selectedFile2,
    gMexpiryDate,
    gMissueDate,
    // ...extraFields.flatMap((field) => [field.field1, field.field2]),
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setLicensesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setLicensesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setLicensesComplete((prevState) => ({
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
    let formData = new FormData();
    {
      licensesForms.forEach((element: any) => {
        formData.append("cocIssuingAuthority", element?.issueAuthority);
        formData.append("cocCertificateNumber", element?.certificateNo);
        formData.append("cocCertificateType", element?.certificateType);
        formData.append("cocStcwRegulation", element?.sTCWRegulation);
        formData.append("cocAreaLimitation", element?.areaLimitation);
        formData.append("cocOtherLimitation", element?.otherLimitation);
        formData.append("cocIssueDate", element?.issueDate);
        formData.append("cocExpiryDate", element?.expiryDate);
        formData.append("cocDocument", element?.selectedFile);
      });

      formData.append("cocCapacity", idoNotACoC);
      formData.append("gmdssIssuingCountry", issuingCountry);
      formData.append("gmdssNumber", number);
      formData.append("gmdssCapacity", capacity);
      formData.append("gmdssStcwRegulation", wRegulation);
      formData.append("gmdssIssueDate", gMissueDate);
      formData.append("gmdssExpiryDate", gMexpiryDate);
      formData.append("gmdssDocument", selectedFile1);
      formData.append("endorsementsNotIssuedSeparately", separatelyCheckBox);
      formData.append("endorsementType", typeOption);
      formData.append("endorsementIssuingCountry", issuingOption);
      formData.append("endorsementNumber", number1);
      formData.append("endorsementCapacity", capacityOption);
      formData.append("endorsementStcwRegulation", sTCWRegulationOption);
      formData.append("endorsementIssueDate", issueDateOption);
      formData.append("endorsementExpiryDate", expiryDateOption);
      formData.append("endorsementDocument", selectedFile2);
    }
    AddLicensesData(userDetail?.userId, formData, AddLicensesdataDB);
  };

  const AddLicensesdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Licenses submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Licenses detail not submited ");
    }
  };

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedFile(file);
  //   }
  // };
  const handleFileChange = (index: number, event: any) => {
    const updatedForms = [...licensesForms];
    updatedForms[index].selectedFile = event.target.files?.[0] || null;
    setLicensesForms(updatedForms);
  };

  const handleFileChange1 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile1(file);
    }
  };

  const handleFileChange2 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile2(file);
    }
  };

  // add plus and minus symbole

  // const addFieldPair = () => {
  //   setExtraFields([...extraFields, { field1: "", field2: "" }]);
  // };

  const addFieldLic = () => {
    setLicensesForms([
      ...licensesForms,
      {
        issueAuthority: "",
        certificateNo: "",
        certificateType: "",
        sTCWRegulation: "",
        areaLimitation: "",
        otherLimitation: "",
        issueDate: "",
        expiryDate: "",
        selectedFile: null,
      },
    ]);
  };

  const removeFieldLic = (index: number) => {
    const updatedForms = licensesForms.filter((_, i) => i !== index);
    setLicensesForms(updatedForms);
  };

  // const removeFieldPair = () => {
  //   if (extraFields.length > 0) {
  //     setExtraFields(extraFields.slice(0, -1));
  //   }
  // };

  // const handleExtraFieldChange = (
  //   index: number,
  //   value: string,
  //   field: "field1" | "field2"
  // ) => {
  //   const updatedFields = [...licensesForms];
  //   updatedFields[index][field] = value;
  //   setLicensesForms(updatedFields);
  // };

  const handleFormChange = (
    index: number,
    field: keyof LicensesForms,
    value: any
  ) => {
    const updatedForms = [...licensesForms];
    updatedForms[index][field] = value;
    setLicensesForms(updatedForms);
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3"> */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold  text-left  ">Certificate Of Competency</h1>
          <div className="flex gap-2">
            <AiOutlinePlus
              className="text-2xl cursor-pointer"
              onClick={addFieldLic}
            />
            {licensesForms.length > 1 && (
              <AiOutlineMinus
                className="text-2xl cursor-pointer"
                onClick={() => removeFieldLic(licensesForms.length - 1)}
              />
            )}
          </div>
        </div>

        <div className="flex items-center  my-4">
          <input
            type="checkbox"
            checked={showFields}
            onChange={(e) => setShowFields(e.target.checked)}
            className="mr-2"
          />
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            I do not have a CoC
          </label>
        </div>

        {showFields && (
          <div>
            {licensesForms.map((field, index) => (
              <div className="mb-3">
                <div className="grid grid-cols-2 gap-4  ">
                  <div>
                    <label
                      className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                      htmlFor={`issueAuthority_${index}`}
                    >
                      Issue Authority
                    </label>
                    <select
                      id={`issueAuthority_${index}`}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.issueAuthority}
                      onChange={(e) =>
                        handleFormChange(
                          index,
                          "issueAuthority",
                          e.target.value
                        )
                      }
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        Issuing Country
                      </option>
                      {countryDrop &&
                        countryDrop?.map((country: any, index: number) => (
                          <option key={index} value={country}>
                            {country?.toUpperCase()}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="w-full ">
                    <label
                      className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                      htmlFor={`Certificate_${index}`}
                    >
                      Certificate No
                    </label>
                    {/* <div className="relative flex items-center  "> */}
                    <input
                      id={`Certificate_${index}`}
                      type="text"
                      value={field.certificateNo}
                      onChange={(e) =>
                        handleFormChange(index, "certificateNo", e.target.value)
                      }
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      disabled={disabled}
                    />
                    {/* </div> */}
                  </div>

                  {/* Preferred Vessel Type */}
                  <div>
                    <label
                      className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                      htmlFor={`certificatetype_${index}`}
                    >
                      Certificate Type
                    </label>
                    <select
                      id={`certificatetype_${index}`}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.certificateType}
                      onChange={(e) =>
                        handleFormChange(
                          index,
                          "certificateType",
                          e.target.value
                        )
                      }
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        Capacity{" "}
                      </option>
                      {capacityDrop &&
                        capacityDrop?.map((cap: any, index: number) => (
                          <option key={index} value={cap}>
                            {cap?.toUpperCase()}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                      htmlFor={`stcwregulation_${index}`}
                    >
                      STCW Regulation
                    </label>
                    <select
                      id={`stcwregulation_${index}`}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.sTCWRegulation}
                      onChange={(e) =>
                        handleFormChange(
                          index,
                          "sTCWRegulation",
                          e.target.value
                        )
                      }
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        STCW Regulation{" "}
                      </option>
                      {stcwRegDrop &&
                        stcwRegDrop?.map((stc: any, index: number) => (
                          <option key={index} value={stc}>
                            {stc?.toUpperCase()}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className=" w-full">
                    <label
                      className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                      htmlFor={`Limitation_${index}`}
                    >
                      Area Limitation
                    </label>
                    {/* <div className="relative flex items-center  "> */}
                    <input
                      id={`Limitation_${index}`}
                      type="text"
                      value={field.areaLimitation}
                      onChange={(e) =>
                        handleFormChange(
                          index,
                          "areaLimitation",
                          e.target.value
                        )
                      }
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      disabled={disabled}
                    />
                    {/* </div> */}
                  </div>
                  <div className=" w-full">
                    <label
                      className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                      htmlFor={`OtherLimitation_${index}`}
                    >
                      Other Limitation
                    </label>
                    {/* <div className="relative flex items-center  "> */}
                    <input
                      id={`OtherLimitation_${index}`}
                      type="text"
                      value={field.otherLimitation}
                      onChange={(e) =>
                        handleFormChange(
                          index,
                          "otherLimitation",
                          e.target.value
                        )
                      }
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      disabled={disabled}
                    />
                    {/* </div> */}
                  </div>

                  <div>
                    <label
                      className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                      htmlFor={`issuesdate_${index}`}
                    >
                      Issue Date
                    </label>
                    <input
                      id={`issuesdate_${index}`}
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.issueDate}
                      onChange={(e) =>
                        handleFormChange(index, "issueDate", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                      htmlFor={`expirydate_${index}`}
                    >
                      Expiry Date
                    </label>
                    <input
                      id={`expirydate_${index}`}
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.expiryDate}
                      onChange={(e) =>
                        handleFormChange(index, "expiryDate", e.target.value)
                      }
                      disabled={disabled}
                    />
                  </div>
                  {/* {extraFields.map((field, index) => (
                  <React.Fragment key={index}>
                    <div className="w-full">
                      <label
                        className="block text-[14px] font-[poppins] text-[#333333] mb-1"
                        htmlFor={`extraField1_${index}`}
                      >
                        Extra Field {index * 2 + 1}
                      </label>
                      <input
                        id={`extraField1_${index}`}
                        type="text"
                        value={field.field1}
                        onChange={(e) =>
                          handleExtraFieldChange(
                            index,
                            e.target.value,
                            "field1"
                          )
                        }
                        className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-full">
                      <label
                        className="block text-[14px] font-[poppins] text-[#333333] mb-1"
                        htmlFor={`extraField2_${index}`}
                      >
                        Extra Field {index * 2 + 2}
                      </label>
                      <input
                        id={`extraField2_${index}`}
                        type="text"
                        value={field.field2}
                        onChange={(e) =>
                          handleExtraFieldChange(
                            index,
                            e.target.value,
                            "field2"
                          )
                        }
                        className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                        disabled={disabled}
                      />
                    </div>
                  </React.Fragment>
                ))} */}
                </div>
                {/* Attachment Document */}
                <div className="flex gap-6 items-center  my-6 ">
                  <label
                    htmlFor={`medicalfile-upload3_${index}`}
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
                  >
                    Attachment Document
                  </label>
                  <input
                    id={`medicalfile-upload3_${index}`}
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(index, e)}
                    disabled={disabled}
                  />
                  {field.selectedFile ? (
                    <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      File Selected: {field.selectedFile.name}
                    </p>
                  ) : (
                    <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      No file selected
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="mb-3">
              <h1 className="text-left font-bold  ">
                Global Maritime Distress and Safety System (GMDSS)
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    Issuing Country
                  </label>
                  <select
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={issuingCountry}
                    onChange={(e) => setIssuingCountry(e.target.value)}
                    disabled={disabled}
                  >
                    <option value="" disabled>
                      Issuing Country
                    </option>
                    {countryDrop &&
                      countryDrop?.map((country: any, index: number) => (
                        <option key={index} value={country}>
                          {country?.toUpperCase()}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="w-full ">
                  <label
                    className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                    htmlFor="cNumber"
                  >
                    Number
                  </label>
                  {/* <div className="relative flex items-center  "> */}
                  <input
                    id="cNumber"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    placeholder=""
                    disabled={disabled}
                  />
                  {/* </div> */}
                </div>
                <div>
                  <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    Capacity
                  </label>
                  <select
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                  >
                    <option value="" disabled>
                      Capacity
                    </option>
                    {capacityDrop &&
                      capacityDrop?.map((cap: any, index: number) => (
                        <option key={index} value={cap}>
                          {cap?.toUpperCase()}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    STCW Regulation
                  </label>
                  <select
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={wRegulation}
                    onChange={(e) => setWRegulation(e.target.value)}
                    disabled={disabled}
                  >
                    <option value="" disabled>
                      STCW Regulation
                    </option>
                    {stcwRegDrop &&
                      stcwRegDrop?.map((stc: any, index: number) => (
                        <option key={index} value={stc}>
                          {stc?.toUpperCase()}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={gMissueDate}
                    onChange={(e) => setGMIssueDate(e.target.value)}
                    disabled={disabled}
                  />
                </div>
                <div>
                  <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                    value={gMexpiryDate}
                    onChange={(e) => setGMExpiryDate(e.target.value)}
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="flex gap-6 items-center  my-6 ">
                <label
                  htmlFor="medicalfile-upload3"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
                >
                  Attachment Document
                </label>
                <input
                  id="medicalfile-upload3"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange1}
                  disabled={disabled}
                />
                {selectedFile1 ? (
                  <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    File Selected: {selectedFile1.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>

              <div className="mb-3">
                <h1 className="font-bold text-left ">Endorsements</h1>
                <div className="flex items-center gap-2 my-2">
                  <input
                    id="neverExpires"
                    type="checkbox"
                    className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                    checked={separatelyCheckBox}
                    onChange={(e) => setSeparatelyCheckBox(!separatelyCheckBox)}
                    disabled={disabled}
                  />
                  <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    Not Issued Separately
                  </label>
                  {/* <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={separately}
                  onChange={(e) => setSeparately(e.target.value)}
                >
                  <option value="" disabled>
                    Not Issued Separately
                  </option>
                  {edorTyDrop &&
                    edorTyDrop?.map((endor: any, index: number) => (
                      <option key={index} value={endor}>
                        {endor?.toUpperCase()}
                      </option>
                    ))}
                </select> */}
                </div>
              </div>

              <div className="mb-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      Type
                    </label>
                    <select
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={typeOption}
                      onChange={(e) => setTypeOption(e.target.value)}
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        Type
                      </option>
                      {edorTyDrop &&
                        edorTyDrop?.map((endor: any, index: number) => (
                          <option key={index} value={endor}>
                            {endor?.toUpperCase()}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      Issuing Country
                    </label>
                    <select
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={issuingOption}
                      onChange={(e) => setIssuingOption(e.target.value)}
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        Issuing Country
                      </option>
                      {countryDrop &&
                        countryDrop?.map((country: any, index: number) => (
                          <option key={index} value={country}>
                            {country?.toUpperCase()}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                      htmlFor=""
                    >
                      Number
                    </label>
                    {/* <div className="relative flex items-center  "> */}
                    <input
                      type="text"
                      value={number1}
                      onChange={(e) => setNumber1(e.target.value)}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder=""
                      disabled={disabled}
                    />
                  </div>

                  <div>
                    <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      Capacity
                    </label>
                    <select
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={capacityOption}
                      onChange={(e) => setCapacityOption(e.target.value)}
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        Capacity
                      </option>
                      {capacityDrop &&
                        capacityDrop?.map((cap: any, index: number) => (
                          <option key={index} value={cap}>
                            {cap?.toUpperCase()}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      STCW Regulation
                    </label>
                    <select
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={sTCWRegulationOption}
                      onChange={(e) => setSTCWRegulationOption(e.target.value)}
                      disabled={disabled}
                    >
                      <option value="" disabled>
                        STCW Regulation
                      </option>
                      {stcwRegDrop &&
                        stcwRegDrop?.map((stcw: any, index: number) => (
                          <option key={index} value={stcw}>
                            {stcw?.toUpperCase()}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      Issue Date
                    </label>
                    <input
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={issueDateOption}
                      onChange={(e) => setIssueDateOption(e.target.value)}
                      disabled={disabled}
                    />
                  </div>
                  <div>
                    <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={expiryDateOption}
                      onChange={(e) => setExpiryDateOption(e.target.value)}
                      disabled={disabled}
                    />
                  </div>
                </div>
              </div>

              {/* Attachment Document */}

              <div className="flex gap-6 items-center my-6">
                <label
                  htmlFor="medicalfile-upload3"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
                >
                  Attachment Document
                </label>
                <input
                  id="medicalfile-upload3"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange2}
                  disabled={disabled}
                />
                {selectedFile2 ? (
                  <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    File Selected: {selectedFile2.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

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

export default Licenses;
