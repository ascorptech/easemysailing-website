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
  issueAuthority: any;
  certificateNo: any;
  certificateType: any;
  sTCWRegulation: any;
  areaLimitation: any;
  otherLimitation: any;
  issueDate: any;
  expiryDate: any;
  selectedFile: File | null;
};

type GlobalMaritime = {
  issuingCountry: any;
  number: any;

  capacity: any;
  wRegulation: any;
  gMissueDate: any;

  gMexpiryDate: any;
  selectedFile1: File | null;
};

type Endorsements = {
  typeOption: any;
  issuingOption: any;
  number1: any;

  capacityOption: any;

  sTCWRegulationOption: any;

  issueDateOption: any;

  expiryDateOption: any;
  selectedFile2: File | null;
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

  const [globalMaritimeForms, setGlobalMaritimeForms] = useState<
    GlobalMaritime[]
  >([
    {
      issuingCountry: "",
      number: "",
      capacity: "",
      wRegulation: "",
      gMissueDate: "",
      gMexpiryDate: "",
      selectedFile1: null,
    },
  ]);

  const [endorsementsForms, setEndorsementsForms] = useState<Endorsements[]>([
    {
      typeOption: "",
      issuingOption: "",
      number1: "",
      capacityOption: "",
      sTCWRegulationOption: "",
      issueDateOption: "",
      expiryDateOption: "",
      selectedFile2: null,
    },
  ]);

  // const [number, setNumber] = useState("");

  // const [idoNotACoC, setIdoNotACoC] = useState<any>(false);
  // const [areaLimitation, setAreaLimitation] = useState("");
  // const [capacity, setCapacity] = useState("");

  // const [issuingOption, setIssuingOption] = useState("");
  // const [typeOption, setTypeOption] = useState("");
  // const [number1, setNumber1] = useState("");

  // const [wRegulation, setWRegulation] = useState("");

  // const [otherLimitation, setOtherLimitation] = useState("");
  // const [issueDate, setIssueDate] = useState("");
  // const [expiryDate, setExpiryDate] = useState("");

  // const [gMexpiryDate, setGMExpiryDate] = useState("");

  // const [gMissueDate, setGMIssueDate] = useState("");

  // const [issuingCountry, setIssuingCountry] = useState("");

  // const [certificateNo, setCertificateNo] = useState("");
  // const [issueAuthority, setIssueAuthority] = useState("");
  // const [sTCWRegulation, setSTCWRegulation] = useState("");
  // const [certificateType, setCertificateType] = useState("");
  const [separatelyCheckBox, setSeparatelyCheckBox] = useState<any>(false);

  // const [sTCWRegulationOption, setSTCWRegulationOption] = useState("");
  // const [capacityOption, setCapacityOption] = useState("");
  // const [issueDateOption, setIssueDateOption] = useState("");
  // const [expiryDateOption, setExpiryDateOption] = useState("");

  // // const [selectedFile, setSelectedFile] = useState<any>(null);
  // const [selectedFile1, setSelectedFile1] = useState<any>(null);

  // const [selectedFile2, setSelectedFile2] = useState<any>(null);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [capacityDrop, setCapacityDrop] = useState<any>([]);
  const [stcwRegDrop, setStcWRegDrop] = useState<any>([]);
  const [edorTyDrop, setEndorTyDrop] = useState<any>([]);

  const [showFields, setShowFields] = useState<any>(false);

  // const [showFieldsens, setShowFieldsens] = useState(false);

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

  const totalFields =
    2 +
    globalMaritimeForms.length * 7 +
    endorsementsForms.length * 8 +
    licensesForms.length * 9;
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

    ...globalMaritimeForms.flatMap((field1) => [
      field1.gMissueDate,
      field1.capacity,
      field1.gMexpiryDate,
      field1.issuingCountry,
      field1.number,
      field1.selectedFile1,
      field1.wRegulation,
    ]),

    ...endorsementsForms.flatMap((field2) => [
      field2.capacityOption,
      field2.expiryDateOption,
      field2.issueDateOption,
      field2.number1,
      field2.sTCWRegulationOption,
      field2.typeOption,
      field2.selectedFile2,
      field2.issuingOption,
    ]),
    // number,
    // idoNotACoC,
    // capacity,
    // issuingOption,
    // typeOption,
    // number1,
    // wRegulation,
    // issuingCountry,
    // separatelyCheckBox,
    // sTCWRegulationOption,
    // capacityOption,
    // issueDateOption,
    // expiryDateOption,
    // selectedFile1,
    // selectedFile2,
    // gMexpiryDate,
    // gMissueDate,
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
      globalMaritimeForms.forEach((element: any) => {
        formData.append("gmdssIssuingCountry", element?.issuingCountry);
        formData.append("gmdssNumber", element?.number);
        formData.append("gmdssCapacity", element?.capacity);
        formData.append("gmdssStcwRegulation", element?.wRegulation);
        formData.append("gmdssIssueDate", element?.gMissueDate);
        formData.append("gmdssExpiryDate", element?.gMexpiryDate);
        formData.append("gmdssDocument", element?.selectedFile1);
      });
      endorsementsForms.forEach((element: any) => {
        formData.append("endorsementType", element?.typeOption);
        formData.append("endorsementIssuingCountry", element?.issuingOption);
        formData.append("endorsementNumber", element?.number1);
        formData.append("endorsementCapacity", element?.capacityOption);
        formData.append(
          "endorsementStcwRegulation",
          element?.sTCWRegulationOption
        );
        formData.append("endorsementIssueDate", element?.issueDateOption);
        formData.append("endorsementExpiryDate", element?.expiryDateOption);
        formData.append("endorsementDocument", element?.selectedFile2);
      });

      formData.append("cocCapacity", showFields);

      formData.append("endorsementsNotIssuedSeparately", separatelyCheckBox);
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

  // const handleFileChange1 = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedFile1(file);
  //   }
  // };

  // const handleFileChange2 = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedFile2(file);
  //   }
  // };

  // add plus and minus symbole

  // const addFieldPair = () => {
  //   setExtraFields([...extraFields, { field1: "", field2: "" }]);
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

  const handleFileChange = (index: number, event: any) => {
    const updatedForms = [...licensesForms];
    updatedForms[index].selectedFile = event.target.files?.[0] || null;
    setLicensesForms(updatedForms);
  };

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

  const handleFileChange1 = (index: number, event: any) => {
    const updatedForms = [...globalMaritimeForms];
    updatedForms[index].selectedFile1 = event.target.files?.[0] || null;
    setGlobalMaritimeForms(updatedForms);
  };

  const handleFormChangeGlobal = (
    index: number,
    field: keyof GlobalMaritime,
    value: any
  ) => {
    const updatedForms = [...globalMaritimeForms];
    updatedForms[index][field] = value;
    setGlobalMaritimeForms(updatedForms);
  };

  const addFieldGlobal = () => {
    setGlobalMaritimeForms([
      ...globalMaritimeForms,
      {
        issuingCountry: "",
        number: "",
        capacity: "",
        wRegulation: "",
        gMissueDate: "",
        gMexpiryDate: "",
        selectedFile1: null,
      },
    ]);
  };
  const removeFieldGlobal = (index: number) => {
    const updatedForms = globalMaritimeForms.filter((_, i) => i !== index);
    setGlobalMaritimeForms(updatedForms);
  };

  const handleFileChange2 = (index: number, event: any) => {
    const updatedForms = [...endorsementsForms];
    updatedForms[index].selectedFile2 = event.target.files?.[0] || null;
    setEndorsementsForms(updatedForms);
  };

  const handleFormChangeEndors = (
    index: number,
    field: keyof Endorsements,
    value: any
  ) => {
    const updatedForms = [...endorsementsForms];
    updatedForms[index][field] = value;
    setEndorsementsForms(updatedForms);
  };

  const addFieldEndors = () => {
    setEndorsementsForms([
      ...endorsementsForms,
      {
        typeOption: "",
        issuingOption: "",
        number1: "",
        capacityOption: "",
        sTCWRegulationOption: "",
        issueDateOption: "",
        expiryDateOption: "",
        selectedFile2: null,
      },
    ]);
  };
  const removeFieldEndors = (index: number) => {
    const updatedForms = endorsementsForms.filter((_, i) => i !== index);
    setEndorsementsForms(updatedForms);
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
          {!showFields && (
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
          )}
        </div>

        <div className="flex items-center  my-4">
          <input
            type="checkbox"
            checked={showFields}
            onChange={(e) => setShowFields(e.target.checked)}
            className="mr-2"
            disabled={disabled}
          />
          <label className="text-[14px] leading-[19.07px]  text-[#333333]">
            I do not have a CoC
          </label>
        </div>

        {!showFields && (
          <div>
            {licensesForms.map((field, index) => (
              <div className="mb-3">
                <div className="grid grid-cols-2 gap-4  ">
                  <div>
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333]"
                      htmlFor={`issueAuthority_${index}`}
                    >
                      Issue Authority
                    </label>
                    <select
                      id={`issueAuthority_${index}`}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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

                  <div className="w-full ">
                    <label
                      className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1 "
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
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Enter Certificate Number"
                      disabled={disabled}
                    />
                    {/* </div> */}
                  </div>

                  {/* Preferred Vessel Type */}
                  <div>
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333]"
                      htmlFor={`certificatetype_${index}`}
                    >
                      Certificate Type
                    </label>
                    <select
                      id={`certificatetype_${index}`}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                        Select
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
                      className="text-[14px] leading-[19.07px]  text-[#333333]"
                      htmlFor={`stcwregulation_${index}`}
                    >
                      STCW Regulation
                    </label>
                    <select
                      id={`stcwregulation_${index}`}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
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
                        Select
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
                      className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Enter Area Limitation"
                      disabled={disabled}
                    />
                    {/* </div> */}
                  </div>
                  <div className=" w-full">
                    <label
                      className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
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
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Enter  Other Limitation"
                      disabled={disabled}
                    />
                    {/* </div> */}
                  </div>

                  <div>
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333]"
                      htmlFor={`issuesdate_${index}`}
                    >
                      Issue Date
                    </label>
                    <input
                      id={`issuesdate_${index}`}
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.issueDate}
                      onChange={(e) =>
                        handleFormChange(index, "issueDate", e.target.value)
                      }
                      placeholder="Enter Issue Date"
                      disabled={disabled}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[14px] leading-[19.07px]  text-[#333333]"
                      htmlFor={`expirydate_${index}`}
                    >
                      Expiry Date
                    </label>
                    <input
                      id={`expirydate_${index}`}
                      type="date"
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      value={field.expiryDate}
                      onChange={(e) =>
                        handleFormChange(index, "expiryDate", e.target.value)
                      }
                      disabled={disabled}
                      placeholder="Enter Expiry Date"
                    />
                  </div>
                  {/* {extraFields.map((field, index) => (
                  <React.Fragment key={index}>
                    <div className="w-full">
                      <label
                        className="block text-[14px]  text-[#333333] mb-1"
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
                        className="block text-[14px]  text-[#333333] mb-1"
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
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
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
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      File Selected: {field.selectedFile.name}
                    </p>
                  ) : (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      No file selected
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* <div className="mb-3"> */}

        <div className="flex justify-between items-center">
          <h1 className="text-left font-bold  ">
            Global Maritime Distress and Safety System (GMDSS)
          </h1>
          <div className="flex gap-2">
            <AiOutlinePlus
              className="text-2xl cursor-pointer"
              onClick={addFieldGlobal}
            />
            {globalMaritimeForms.length > 1 && (
              <AiOutlineMinus
                className="text-2xl cursor-pointer"
                onClick={() =>
                  removeFieldGlobal(globalMaritimeForms.length - 1)
                }
              />
            )}
          </div>
        </div>

        {globalMaritimeForms.map((field1, index) => (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                  Issuing Country
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={field1.issuingCountry}
                  onChange={(e) =>
                    handleFormChangeGlobal(
                      index,
                      "issuingCountry",
                      e.target.value
                    )
                  }
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

              <div className="w-full ">
                <label
                  className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1 "
                  htmlFor={`cNumber_${index}`}
                >
                  Enter Number
                </label>
                {/* <div className="relative flex items-center  "> */}
                <input
                  id={`cNumber_${index}`}
                  type="text"
                  value={field1.number}
                  onChange={(e) =>
                    handleFormChangeGlobal(index, "number", e.target.value)
                  }
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Number"
                  disabled={disabled}
                />
                {/* </div> */}
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                  Capacity
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={field1.capacity}
                  onChange={(e) =>
                    handleFormChangeGlobal(index, "capacity", e.target.value)
                  }
                  disabled={disabled}
                >
                  <option value="" disabled>
                    Select
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
                <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                  STCW Regulation
                </label>
                <select
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={field1.wRegulation}
                  onChange={(e) =>
                    handleFormChangeGlobal(index, "wRegulation", e.target.value)
                  }
                  disabled={disabled}
                >
                  <option value="" disabled>
                    Select
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
                <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                  Issue Date
                </label>
                <input
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={field1.gMissueDate}
                  onChange={(e) =>
                    handleFormChangeGlobal(index, "gMissueDate", e.target.value)
                  }
                  disabled={disabled}
                  placeholder="Enter Issue Date"
                />
              </div>
              <div>
                <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                  Expiry Date
                </label>
                <input
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={field1.gMexpiryDate}
                  onChange={(e) =>
                    handleFormChangeGlobal(
                      index,
                      "gMexpiryDate",
                      e.target.value
                    )
                  }
                  disabled={disabled}
                  placeholder="Enter Expiry Date"
                />
              </div>
            </div>

            <div className="flex gap-6 items-center  my-6 ">
              <label
                htmlFor={`medicalfile-upload3_${index}`}
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
              >
                Attachment Document
              </label>
              <input
                id={`medicalfile-upload3_${index}`}
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange1(index, e)}
                disabled={disabled}
              />
              {field1.selectedFile1 ? (
                <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                  File Selected: {field1.selectedFile1.name}
                </p>
              ) : (
                <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                  No file selected
                </p>
              )}
            </div>
          </div>
        ))}

        {/* <div> */}
        <div className="mb-3 flex justify-between items-center">
          <h1 className="font-bold text-left ">Endorsements</h1>
          {!separatelyCheckBox && (
            <div className="flex gap-2">
              <AiOutlinePlus
                className="text-2xl cursor-pointer"
                onClick={addFieldEndors}
              />
              {endorsementsForms.length > 1 && (
                <AiOutlineMinus
                  className="text-2xl cursor-pointer"
                  onClick={() =>
                    removeFieldEndors(endorsementsForms.length - 1)
                  }
                />
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 my-2">
          <input
            id="showhidecheck"
            type="checkbox"
            className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
            checked={separatelyCheckBox}
            onChange={(e) => setSeparatelyCheckBox(e.target.checked)}
            disabled={disabled}
          />
          <label
            className="text-[14px] leading-[19.07px]  text-[#333333]"
            htmlFor="showhidecheck"
          >
            Not Issued Separately
          </label>
        </div>

        {!separatelyCheckBox && (
          <div>
            {endorsementsForms.map((field, index) => (
              <div>
                <div className="mb-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                        Type
                      </label>
                      <select
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        value={field.typeOption}
                        onChange={(e) =>
                          handleFormChangeEndors(
                            index,
                            "typeOption",
                            e.target.value
                          )
                        }
                        disabled={disabled}
                      >
                        <option value="" disabled>
                          Select
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
                      <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                        Issuing Country
                      </label>
                      <select
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        value={field.issuingOption}
                        onChange={(e) =>
                          handleFormChangeEndors(
                            index,
                            "issuingOption",
                            e.target.value
                          )
                        }
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
                    <div>
                      <label
                        className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1 "
                        htmlFor=""
                      >
                        Enter Number
                      </label>
                      {/* <div className="relative flex items-center  "> */}
                      <input
                        type="text"
                        value={field.number1}
                        onChange={(e) =>
                          handleFormChangeEndors(
                            index,
                            "number1",
                            e.target.value
                          )
                        }
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        placeholder="Enter Number"
                        disabled={disabled}
                      />
                    </div>

                    <div>
                      <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                        Capacity
                      </label>
                      <select
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        value={field.capacityOption}
                        onChange={(e) =>
                          handleFormChangeEndors(
                            index,
                            "capacityOption",
                            e.target.value
                          )
                        }
                        disabled={disabled}
                      >
                        <option value="" disabled>
                          Select
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
                      <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                        STCW Regulation
                      </label>
                      <select
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        value={field.sTCWRegulationOption}
                        onChange={(e) =>
                          handleFormChangeEndors(
                            index,
                            "sTCWRegulationOption",
                            e.target.value
                          )
                        }
                        disabled={disabled}
                      >
                        <option value="" disabled>
                          Select
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
                      <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                        Issue Date
                      </label>
                      <input
                        type="date"
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        value={field.issueDateOption}
                        onChange={(e) =>
                          handleFormChangeEndors(
                            index,
                            "issueDateOption",
                            e.target.value
                          )
                        }
                        placeholder="Enter Issue Date"
                        disabled={disabled}
                      />
                    </div>
                    <div>
                      <label className="text-[14px] leading-[19.07px]  text-[#333333]">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        value={field.expiryDateOption}
                        onChange={(e) =>
                          handleFormChangeEndors(
                            index,
                            "expiryDateOption",
                            e.target.value
                          )
                        }
                        placeholder="Enter Expiry Date"
                        disabled={disabled}
                      />
                    </div>
                  </div>
                </div>

                {/* Attachment Document */}

                <div className="flex gap-6 items-center my-6">
                  <label
                    htmlFor={`medicalfile-upload3_${index}`}
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                  >
                    Attachment Document
                  </label>
                  <input
                    id={`medicalfile-upload3_${index}`}
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange2(index, e)}
                    disabled={disabled}
                  />
                  {field.selectedFile2 ? (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      File Selected: {field.selectedFile2.name}
                    </p>
                  ) : (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      No file selected
                    </p>
                  )}
                </div>
              </div>
            ))}
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
