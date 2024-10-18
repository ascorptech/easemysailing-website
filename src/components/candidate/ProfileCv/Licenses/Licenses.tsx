"use client";

import {
  AddLicensesData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import moment from "moment";
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
  selectedFile: any | null;
};

type GlobalMaritime = {
  issuingCountry: any;
  number: any;

  capacity: any;
  wRegulation: any;
  gMissueDate: any;

  gMexpiryDate: any;
  selectedFile1: any | null;
};

type Endorsements = {
  typeOption: any;
  issuingOption: any;
  number1: any;

  capacityOption: any;

  sTCWRegulationOption: any;

  issueDateOption: any;

  expiryDateOption: any;
  selectedFile2: any | null;
};

type LicensesComplete = {
  percentage: number;
  color: string;
};
type Props = {
  licensesComplete: LicensesComplete;
  setLicensesComplete: React.Dispatch<React.SetStateAction<LicensesComplete>>;
  userDetail: any;
  licensesDetail: any;
  criminal: any;
};

const Licenses = ({
  licensesComplete,
  setLicensesComplete,
  userDetail,
  licensesDetail,
  criminal,
}: Props) => {
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


  const [separatelyCheckBox, setSeparatelyCheckBox] = useState<any>(false);


  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [capacityDrop, setCapacityDrop] = useState<any>([]);
  const [competencyDrop, setCompetencyDrop] = useState<any>([]);
  const [stcwRegDrop, setStcWRegDrop] = useState<any>([]);
  const [edorTyDrop, setEndorTyDrop] = useState<any>([]);

  const [showFields, setShowFields] = useState<any>(false);
  const [color, setColor] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // const [showFieldsens, setShowFieldsens] = useState(false);

  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);

  useEffect(() => {
    GetDropdownDetails("capacity", (res: any) => {
      setCapacityDrop(res?.data?.values);
    });
    GetDropdownDetails("CERTIFICATEOFCOMPETENCY", (res: any) => {
      setCompetencyDrop(res?.data?.values);
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
  ].filter(Boolean).length;

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setLicensesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setLicensesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setLicensesComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  useEffect(() => {
    console.log("licensesDetail", licensesDetail);
    if (licensesDetail) {
      // setLicensesForms.forEach((element:any) =>{
      //   element.licensesDetail?.cocIssuingAuthority
      //  })
      let combineLng = licensesDetail?.cocs?.length?licensesDetail?.cocs?.map((li: any) => ({
        areaLimitation: li?.cocAreaLimitation,
        certificateNo: li?.cocCertificateNumber,
        certificateType: li?.cocCertificateType,
        issueAuthority: li?.cocIssuingAuthority,
        sTCWRegulation: li?.cocStcwRegulation,
        otherLimitation: li?.cocOtherLimitation,
        issueDate: moment(li?.cocIssueDate).format('YYYY-MM-DD'),
        expiryDate: moment(li?.cocExpiryDate).format('YYYY-MM-DD'),
      })):[
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
      ];
      setLicensesForms(combineLng)
      let combineLng1 = licensesDetail?.gmdss?.length?licensesDetail?.gmdss?.map((li: any) => ({
        capacity: li?.gmdssCapacity,
        number: li?.gmdssNumber,
        wRegulation: li?.gmdssStcwRegulation,
        issuingCountry: li?.gmdssIssuingCountry,
        gMissueDate: moment(li?.gmdssIssueDate).format('YYYY-MM-DD'),
        gMexpiryDate: moment(li?.gmdssExpiryDate).format('YYYY-MM-DD'),
      })):[
        {
          issuingCountry: "",
          number: "",
          capacity: "",
          wRegulation: "",
          gMissueDate: "",
          gMexpiryDate: "",
          selectedFile1: null,
        },
      ];
      setGlobalMaritimeForms(combineLng1)
      let combineLng2 = licensesDetail?.endorsements?.length?licensesDetail?.endorsements?.map((li: any) => ({
        typeOption: li?.endorsementType,
        number1: li?.endorsementNumber,
        sTCWRegulationOption: li?.endorsementStcwRegulation,
        capacityOption: li?.endorsementCapacity,
        issuingOption: li?.endorsementIssuingCountry,
        issueDateOption: moment(li?.endorsementIssueDate).format('YYYY-MM-DD'),
        expiryDateOption: moment(li?.endorsementExpiryDate).format('YYYY-MM-DD'),
      })):[
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
      ];
      setEndorsementsForms(combineLng2)
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    if (!criminal) {
      toast.error("Please accept the declaration");
    } else {
      // try {
      e.preventDefault();
      let data: any = {
        id: userDetail?.userId,
        color: color,
        completed: percentage,
      };

      const cocArray: any = [];
      const gmdssArray: any = [];
      const endorsementArray: any = [];

      // Loop through licensesForms and push each form's data into cocArray
      licensesForms.forEach((element: any) => {
        cocArray.push({
          cocIssuingAuthority: element?.issueAuthority,
          cocCertificateNumber: element?.certificateNo,
          cocCertificateType: element?.certificateType,
          cocStcwRegulation: element?.sTCWRegulation,
          cocAreaLimitation: element?.areaLimitation,
          cocOtherLimitation: element?.otherLimitation,
          cocIssueDate: element?.issueDate,
          cocExpiryDate: element?.expiryDate,
          cocDocumentUrl: element?.selectedFile,
        });
      });

      globalMaritimeForms.forEach((element: any) => {
        gmdssArray.push({
          gmdssIssuingCountry: element?.issuingCountry,
          gmdssNumber: element?.number,
          gmdssCapacity: element?.capacity,
          gmdssStcwRegulation: element?.wRegulation,
          gmdssIssueDate: element?.gMissueDate,
          gmdssExpiryDate: element?.gMexpiryDate,
          gmdssDocumentUrl: element?.selectedFile1,
        });
      });

      endorsementsForms.forEach((element: any) => {
        endorsementArray.push({
          endorsementType: element?.typeOption,
          endorsementIssuingCountry: element?.issuingOption,
          endorsementNumber: element?.number1,
          endorsementCapacity: element?.capacityOption,
          endorsementStcwRegulation: element?.sTCWRegulationOption,
          endorsementIssueDate: element?.issueDateOption,
          endorsementExpiryDate: element?.expiryDateOption,
          endorsementDocumentUrl: element?.selectedFile2,
        });
      });

      data.cocs = cocArray;
      data.gmdss = gmdssArray;
      data.endorsements = endorsementArray;
      data.cocCapacity = showFields;
      data.endorsementsNotIssuedSeparately = separatelyCheckBox;

      AddLicensesData(data, AddLicensesdataDB);
    }
  };

  const AddLicensesdataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Licenses submited successfully");
      setDisabled(!disabled);
    setIsEditing((prev) => !prev);
    } else {
      toast.error("Licenses detail not submited ");
    }
  };

  const handleFormChange = (
    index: number,
    field: keyof LicensesForms,
    value: any
  ) => {
    const updatedForms = [...licensesForms];
    updatedForms[index][field] = value;
    setLicensesForms(updatedForms);
  };

  // const handleFileChange = (index: number, event: any) => {
  //   const updatedForms = [...licensesForms];
  //   updatedForms[index].selectedFile = event.target.files?.[0] || null;
  //   setLicensesForms(updatedForms);
  // };
  const handleFileChange = (index: number, event: any) => {
    const file = event.target.files?.[0];
    // if (file) {
    //   // Create a Blob from the selected file
    //   const fileBlob = new Blob([file], { type: file.type });

    //   // Update the licensesForms array with the Blob
    //   const updatedForms:any = [...licensesForms];
    //   updatedForms[index].selectedFile = fileBlob;
    //   setLicensesForms(updatedForms);

    //   console.log('File Blob:', fileBlob); // Optional: Logs the Blob to confirm
    // }
    //     const updatedForms= [...licensesForms]
    //  updatedForms(index).selectedFile = event.target.files?.[0] || null;
    // setLicensesForms(updatedForms);
    //   };

    const reader = new FileReader();

    reader.onloadend = function () {
      const imageBinary: any = reader.result; // this will be a base64 encoded string
      const byteArray = imageBinary.split(",")[1]; // get only the binary data part

      const updatedForms: any = [...licensesForms];
      updatedForms[index].selectedFile = byteArray;
      setLicensesForms(updatedForms);
    };

    reader.readAsDataURL(file);
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
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...globalMaritimeForms];
      updatedForms[index].selectedFile1 = byteArray;
      setGlobalMaritimeForms(updatedForms);
    };
    reader.readAsDataURL(file);
    // const updatedForms = [...globalMaritimeForms];
    // updatedForms[index].selectedFile1 = event.target.files?.[0] || null;
    // setGlobalMaritimeForms(updatedForms);
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
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...endorsementsForms];
      updatedForms[index].selectedFile2 = byteArray;
      setEndorsementsForms(updatedForms);
    };
    reader.readAsDataURL(file);

    // const updatedForms = [...endorsementsForms];
    // updatedForms[index].selectedFile2 = event.target.files?.[0] || null;
    // setEndorsementsForms(updatedForms);
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
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };

  const handleValidationChange = (setValue: any) => (e: any) => {
    const value = e.target.value;
    const alphabeticValue = value.replace(/[^A-Za-z\s]/g, ""); 
    // const capitalizedValue =
    //   alphabeticValue.charAt(0).toUpperCase() + alphabeticValue.slice(1); 
    const upperCaseValue = alphabeticValue.toUpperCase(); 
    setValue(upperCaseValue);
  };

  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3"> */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold  text-left  ">Certificate Of Competency</h1>
          {isHideShow && (
            <div>
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
                      SELECT
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
                      Enter Certificate Number
                    </label>
                    {/* <div className="relative flex items-center  "> */}
                    <input
                      id={`Certificate_${index}`}
                      type="text"
                      value={field.certificateNo}
                      onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z0-9. ]/g, "").toUpperCase();
                        handleFormChange(index, "certificateNo", value)
                      }}
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
                        SELECT
                      </option>
                      {competencyDrop &&
                        competencyDrop?.map((cap: any, index: number) => (
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
                        SELECT
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
                      onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z0-9. ]/g, "").toUpperCase();
                        handleFormChange(
                          index,
                          "areaLimitation",
                          value
                        )
                      }}
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
                      onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z0-9. ]/g, "").toUpperCase();
                        handleFormChange(
                          index,
                          "otherLimitation",
                          value
                        )
                          }}
                      className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                      placeholder="Enter Other Limitation"
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
                      // placeholder="Enter Issue Date"
                      disabled={disabled}
                      max={new Date().toISOString().split("T")[0]}
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
                      min={new Date().toISOString().split("T")[0]}
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
                {isHideShow && (
                  <div>
                    <div className="flex gap-6 items-center  my-6 ">
                      <label
                        htmlFor={`medicalfile-upload2_${index}`}
                        className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                      >
                        Attachment Document
                      </label>
                      <input
                        id={`medicalfile-upload2_${index}`}
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
                )}
              </div>
            ))}
          </div>
        )}

        {/* <div className="mb-3"> */}

        <div className="flex justify-between items-center">
          <h1 className="text-left font-bold  ">
            Global Maritime Distress and Safety System (GMDSS)
          </h1>
          {isHideShow && (
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
          )}
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
                    SELECT
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
                  Enter Certificate Number
                </label>
                {/* <div className="relative flex items-center  "> */}
                <input
                  id={`cNumber_${index}`}
                  type="text"
                  value={field1.number}
                  onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z0-9. ]/g, "").toUpperCase();
                    handleFormChangeGlobal(index, "number", value)
                    }}
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Certificate Number"
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
                    SELECT
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
                    SELECT
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
                  max={new Date().toISOString().split("T")[0]}

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
                  min={new Date().toISOString().split("T")[0]}

                  
                />
              </div>
            </div>
            {isHideShow && (
              <div className="flex gap-6 items-center  my-6 ">
                <label
                  htmlFor={`medicalfile-upload4_${index}`}
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                >
                  Attachment Document
                </label>
                <input
                  id={`medicalfile-upload4_${index}`}
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
            )}
          </div>
        ))}

        {/* <div> */}
        <div className="mb-3 flex justify-between items-center">
          <h1 className="font-bold text-left ">Endorsements</h1>
          {isHideShow && (
            <div>
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
                          SELECT
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
                          SELECT
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
                        Enter Certificate Number
                      </label>
                      {/* <div className="relative flex items-center  "> */}
                      <input
                        type="text"
                        value={field.number1}
                        onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z0-9.]/g, "").toUpperCase();
                          handleFormChangeEndors(
                            index,
                            "number1",
                            value
                          )
                        }}
                        className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                        placeholder="Enter Certificate Number"
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
                          SELECT
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
                          SELECT
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
                        max={new Date().toISOString().split("T")[0]}

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
                        disabled={disabled}
                        min={new Date().toISOString().split("T")[0]}

                      />
                    </div>
                  </div>
                </div>

                {/* Attachment Document */}

                {isHideShow && (
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
                )}
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
            className={`border p-2 rounded-lg px-8 ${
              isEditing
                ? "border-red-500 text-red-500" 
                : "border-[#00A264] text-[#00A264]"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"} {/* Conditional rendering */}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Licenses;
