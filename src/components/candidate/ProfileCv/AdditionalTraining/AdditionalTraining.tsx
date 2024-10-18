"use client";
import {
  AddAdditionalData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import moment from "moment";

import Link from "next/link";
import React from "react";
import react, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { toast } from "react-toastify";

type AdditionalTraining = {
  countryCertifi: string;
  number: any;
  issuedate: string;
  exdate: string;
  trainingCenter: string;
  countryIC: string;
  neverExpCheck: any;
  selectedFile: any | null;
};

type Professional = {
  capacity: string;
  level: string;
  trainingCenter1: string;
  typeOfTest: string;
  result: string;
  issuingCountry: string;
  eCDISNumber: string;
  issuedate1: string;
  exdate1: string;
  neverChecked1: any;
  selectedFiles: any | null;
};

type AdditionalComplete = {
  percentage: number;
  color: string;
};
type Props = {
  additionalComplete: AdditionalComplete;
  setAdditionalComplete: React.Dispatch<
    React.SetStateAction<AdditionalComplete>
  >;
  userDetail: any;
  criminal: any;
  additionalDetail: any;
};

const AdditionalTraining = ({
  additionalComplete,
  setAdditionalComplete,
  userDetail,
  criminal,
  additionalDetail,
}: Props) => {
  const [additionalForms, setAdditionalForms] = useState<AdditionalTraining[]>([
    {
      countryCertifi: "",
      number: "",
      issuedate: "",
      exdate: "",
      trainingCenter: "",
      countryIC: "",
      neverExpCheck: "",
      selectedFile: null,
    },
  ]);

  const [professionalForms, setProfessionalForms] = useState<Professional[]>([
    {
      capacity: "",
      level: "",
      trainingCenter1: "",
      typeOfTest: "",
      result: "",
      issuingCountry: "",
      eCDISNumber: "",
      issuedate1: "",
      exdate1: "",
      neverChecked1: "",
      selectedFiles: null,
    },
  ]);

  const [additionalTraDrop, setAdditionalTraDrop] = useState([]);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [capacityDrop, setCapacityDrop] = useState<any>([]);
  const [levelDrop, setLevelDrop] = useState<any>([]);
  const [levelTestDrop, setLevelTestDrop] = useState<any>([]);
  const [color, setColor] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const [isHideShow, setIsHideShow] = useState(false);

  useEffect(() => {
    GetDropdownDetails("ProfessionalKnowledgeTest", (res: any) => {
      setLevelDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeTestType", (res: any) => {
      setLevelTestDrop(res?.data?.values);
    });
    GetDropdownDetails("capacity", (res: any) => {
      setCapacityDrop(res?.data?.values);
    });
    GetDropdownDetails("AdditionalTrainingsCertificates", (res: any) => {
      setAdditionalTraDrop(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields =
    additionalForms.length * 10 + professionalForms.length * 7;
  const filledFields = [
    ...additionalForms.flatMap((field) => [
      field.countryCertifi,
      field.number,
      field.issuedate,
      field.trainingCenter,
      field.countryIC,
      field.exdate || field.neverExpCheck,
      field.selectedFile,
    ]),
    ...professionalForms.flatMap((fields) => [
      fields.capacity,
      fields.level,
      fields.trainingCenter1,
      fields.typeOfTest,
      fields.result,
      fields.issuingCountry,
      fields.eCDISNumber,
      fields.issuedate1,
      fields.exdate1 || fields.neverChecked1,
      fields.selectedFiles,
    ]),
  ].filter(Boolean).length;

  useEffect(() => {
    if (additionalDetail) {
      let combineLng = additionalDetail?.addiTrainings?.length
        ? additionalDetail?.addiTrainings?.map((lang: any) => ({
            countryCertifi: lang?.certificate,
            number: lang?.certificateNumber,
            issuedate: moment(lang?.issueDate).format("YYYY-MM-DD"),
            trainingCenter: lang?.additionalLanguageLevel,
            countryIC: lang?.issuingCountry,
            exdate: moment(lang?.expiryDate).format("YYYY-MM-DD"),
            neverExpCheck: lang?.neverExpires,
            selectedFile: lang?.documentUrl,
          }))
        : [
            {
              capacity: "",
              level: "",
              trainingCenter1: "",
              typeOfTest: "",
              result: "",
              issuingCountry: "",
              eCDISNumber: "",
              issuedate1: "",
              exdate1: "",
              neverChecked1: "",
              selectedFiles: null,
            },
          ];
      setAdditionalForms(combineLng);
      let combineLng1 = additionalDetail?.professionalKnowledgeTests?.length
        ? additionalDetail?.professionalKnowledgeTests?.map((lang: any) => ({
            capacity: lang?.capacity,
            level: lang?.level,
            trainingCenter1: lang?.trainingCenter,
            typeOfTest: lang?.testType,
            result: lang?.result,
            issuingCountry: lang?.issuingCountry,
            eCDISNumber: lang?.certificateNumber,
            issuedate1: moment(lang?.issueDate).format("YYYY-MM-DD"),
            exdate1: moment(lang?.expiryDate).format("YYYY-MM-DD"),
            neverChecked1: lang?.neverExpires,
            selectedFiles: lang?.documentUrl,
          }))
        : [
            {
              capacity: "",
              level: "",
              trainingCenter1: "",
              typeOfTest: "",
              result: "",
              issuingCountry: "",
              eCDISNumber: "",
              issuedate1: "",
              exdate1: "",
              neverChecked1: "",
              selectedFiles: null,
            },
          ];
      setProfessionalForms(combineLng1);
    }
  }, [additionalDetail]);

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setAdditionalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setAdditionalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setAdditionalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleFileChange = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...additionalForms];
      updatedForms[index].selectedFile = byteArray;
      setAdditionalForms(updatedForms);
    };
    reader.readAsDataURL(file);
  };

  const handleFormChangeAdd = (
    index: number,
    field: keyof AdditionalTraining,
    value: any
  ) => {
    const updatedForms = [...additionalForms];
    updatedForms[index][field] = value;
    setAdditionalForms(updatedForms);
  };

  const addFieldAddi = () => {
    setAdditionalForms([
      ...additionalForms,
      {
        countryCertifi: "",
        number: "",
        issuedate: "",
        exdate: "",
        trainingCenter: "",
        countryIC: "",
        neverExpCheck: "",
        selectedFile: null,
      },
    ]);
  };

  const removeFieldAdd = (index: number) => {
    const updatedForms = additionalForms.filter((_, i) => i !== index);
    setAdditionalForms(updatedForms);
  };

  const handleFileChanges = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...professionalForms];
      updatedForms[index].selectedFiles = byteArray;
      setProfessionalForms(updatedForms);
    };
    reader.readAsDataURL(file);
    // const updatedForms = [...professionalForms];
    // updatedForms[index].selectedFiles = event.target.files?.[0] || null;
    // setProfessionalForms(updatedForms);
  };

  const handleFormChangePro = (
    index: number,
    field: keyof Professional,
    value: any
  ) => {
    const updatedForms = [...professionalForms];
    updatedForms[index][field] = value;
    setProfessionalForms(updatedForms);
  };

  const addFieldProff = () => {
    setProfessionalForms([
      ...professionalForms,
      {
        capacity: "",
        level: "",
        trainingCenter1: "",
        typeOfTest: "",
        result: "",
        issuingCountry: "",
        eCDISNumber: "",
        issuedate1: "",
        exdate1: "",
        neverChecked1: "",
        selectedFiles: null,
      },
    ]);
  };

  const removeFieldProf = (index: number) => {
    const updatedForms = professionalForms.filter((_, i) => i !== index);
    setProfessionalForms(updatedForms);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let data: any = {
        id: userDetail?.userId,
        color: color,
        completed: percentage,
      };
      const addiArray: any = [];
      const profArray: any = [];
      additionalForms.forEach((element: any) => {
        addiArray.push({
          certificate: element?.countryCertifi,
          trainingCenter: element?.number,
          issuingCountry: element?.number,
          certificateNumber: element?.number,
          issueDate: element?.issuedate,
          expiryDate: element?.exdate,
          neverExpires: true,
          documentUrl: element?.selectedFile,
        });
      });
      professionalForms.forEach((element: any) => {
        profArray.push({
          capacity: element?.capacity,
          level: element?.level,
          trainingCenter: element?.trainingCenter1,
          testType: element?.typeOfTest,
          result: element?.result,
          issuingCountry: element?.issuingCountry,
          certificateNumber: element?.eCDISNumber,
          issueDate: element?.issuedate1,
          expiryDate: element?.exdate1,
          neverExpires: element?.neverChecked1,
          documentUrl: element?.selectedFiles,
        });
      });
      data.addiTrainings = addiArray;
      data.professionalKnowledgeTests = profArray;

      AddAdditionalData(data, AddAdditionDB);
    }
  };
  const AddAdditionDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Additional Detail submited successfully");
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    } else {
      toast.error("Additional Detail submited not submited ");
    }
  };
  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Additional Trainings</h2>
          {isHideShow && (
            <div className="flex gap-2">
              <AiOutlinePlus
                className="text-2xl cursor-pointer"
                onClick={addFieldAddi}
              />
              {additionalForms.length > 1 && (
                <AiOutlineMinus
                  className="text-2xl cursor-pointer"
                  onClick={() => removeFieldAdd(additionalForms.length - 1)}
                />
              )}
            </div>
          )}
        </div>

        {additionalForms.map((field, index) => (
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`optionce_${index}`}
              >
                Certificate
              </label>
              <select
                id={`optionce_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={field.countryCertifi}
                onChange={(e) =>
                  handleFormChangeAdd(index, "countryCertifi", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
                  SELECT
                </option>
                {additionalTraDrop &&
                  additionalTraDrop?.map((addi: any, index: number) => (
                    <option key={index} value={addi}>
                      {addi?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="trainingC1"
              >
                Training Center
              </label>
              <input
                id={`trainingC1_${index}`}
                type="text"
                value={field.trainingCenter}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^a-zA-Z ]/g, "")
                    .toUpperCase();
                  handleFormChangeAdd(index, "trainingCenter", value);
                }}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter Training Center"
                disabled={disabled}
              />
            </div>

            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`optionsIC_${index}`}
              >
                Issuing Country
              </label>
              <select
                id={`optionsIC_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={field.countryIC}
                onChange={(e) =>
                  handleFormChangeAdd(index, "countryIC", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
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

            {/* <div className=""> */}

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`numberA_${index}`}
              >
                Enter Certificate Number
              </label>
              <input
                id={`numberA_${index}`}
                type="text"
                value={field.number}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^a-zA-Z0-9 ]/g, "")
                    .toUpperCase();
                  handleFormChangeAdd(index, "number", value);
                }}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=" Enter Certificate Number"
                disabled={disabled}
              />
            </div>

            {/* </div> */}
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor={`issue3_${index}`}
              >
                Issue Date
              </label>
              <input
                id={`issue3_${index}`}
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={field.issuedate}
                onChange={(e) =>
                  handleFormChangeAdd(index, "issuedate", e.target.value)
                }
                disabled={disabled}
                placeholder="Enter  Issue Date"
              />
            </div>
            {/* </div> */}

            {!field.neverExpCheck && (
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]  "
                  htmlFor={`expiryDate3_${index}`}
                >
                  Expiry Date
                </label>

                <input
                  id={`expiryDate3_${index}`}
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={field.exdate}
                  onChange={(e) =>
                    handleFormChangeAdd(index, "exdate", e.target.value)
                  }
                  disabled={disabled}
                  placeholder="Enter Expiry Date"
                />
              </div>
            )}

            <div className="grid col-span-2 my-3">
              <div className=" flex items-center  gap-2">
                <input
                  id="neverExpires1"
                  type="checkbox"
                  className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                  checked={field.neverExpCheck}
                  onChange={(e) =>
                    handleFormChangeAdd(
                      index,
                      "neverExpCheck",
                      e.target.checked
                    )
                  }
                  disabled={disabled}
                />
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]"
                  htmlFor="neverExpires1"
                >
                  Never Expires
                </label>
              </div>
            </div>
            <div className="grid col-span-2">
              {isHideShow && (
                <div className="flex gap-6 items-center ">
                  <div>
                    <label
                      htmlFor={`file-uploads03_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                    >
                      Attachment Document
                    </label>
                    <input
                      id={`file-uploads03_${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(index, e)}
                      disabled={disabled}
                    />
                  </div>
                  <div>
                    {field.selectedFile ? (
                      <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                        File Selected: {field.selectedFile.name}
                      </p>
                    ) : (
                      <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                        No File Selected
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* PROFESSIONAL KNOWLEDGE TEST  */}

        <div className=" ">
          <div className="flex justify-between mt-3">
            {" "}
            <h1 className=" font-bold">Professional Knowledge Test</h1>
            {isHideShow && (
              <div className="flex gap-2">
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={addFieldProff}
                />
                {professionalForms.length > 1 && (
                  <AiOutlineMinus
                    className="text-2xl cursor-pointer"
                    onClick={() =>
                      removeFieldProf(professionalForms.length - 1)
                    }
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {professionalForms.map((fields, index) => (
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`option02_${index}`}
              >
                Capacity
              </label>
              <select
                id={`option02_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={fields.capacity}
                onChange={(e) =>
                  handleFormChangePro(index, "capacity", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
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

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`level_${index}`}
              >
                Level
              </label>
              <select
                id={`level_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={fields.level}
                onChange={(e) =>
                  handleFormChangePro(index, "level", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
                  SELECT
                </option>
                {levelDrop &&
                  levelDrop?.map((lev: any, index: number) => (
                    <option key={index} value={lev}>
                      {lev?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`trainingCe_${index}`}
              >
                Training Center
              </label>
              <input
                id={`trainingCe_${index}`}
                type="text"
                value={fields.trainingCenter1}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-z ]/g, "");
                  handleFormChangePro(index, "trainingCenter1", value);
                }}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Training Center"
                disabled={disabled}
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`typeoftest_${index}`}
              >
                Type of Test
              </label>
              <select
                id={`typeoftest_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={fields.typeOfTest}
                onChange={(e) =>
                  handleFormChangePro(index, "typeOfTest", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
                  SELECT
                </option>
                {levelTestDrop &&
                  levelTestDrop?.map((levTest: any, index: number) => (
                    <option key={index} value={levTest}>
                      {levTest?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`result_${index}`}
              >
                Result
              </label>
              <input
                id={`result_${index}`}
                type="text"
                value={fields.result}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z ]/g, "");
                  handleFormChangePro(index, "result", value);
                }}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Result"
                disabled={disabled}
              />
            </div>

            <div className=" ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`optionT1_${index}`}
              >
                Issuing Country
              </label>
              <select
                id={`optionT1_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={fields.issuingCountry}
                onChange={(e) =>
                  handleFormChangePro(index, "issuingCountry", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
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
            {/* <div className=""> */}

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`proNumber1_${index}`}
              >
                Enter Certificate Number
              </label>
              <input
                id={`proNumber1_${index}`}
                type="text"
                value={fields.eCDISNumber}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^a-zA-Z0-9 ]/g, "")
                    .toUpperCase();
                  handleFormChangePro(index, "eCDISNumber", value);
                }}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Certificate Number"
                disabled={disabled}
              />
            </div>

            {/* </div> */}
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor={`issue2_${index}`}
              >
                Issue Date
              </label>
              <input
                id={`issue2_${index}`}
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={fields.issuedate1}
                onChange={(e) =>
                  handleFormChangePro(index, "issuedate1", e.target.value)
                }
                disabled={disabled}
                placeholder="Enter  Issue Date"
              />
            </div>

            {!fields.neverChecked1 && (
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]  "
                  htmlFor={`expiryDate2_${index}`}
                >
                  Expiry Date
                </label>

                <input
                  id={`expiryDate2_${index}`}
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={fields.exdate1}
                  onChange={(e) =>
                    handleFormChangePro(index, "exdate1", e.target.value)
                  }
                  disabled={disabled}
                  placeholder="Enter  Expiry Date"
                />
              </div>
            )}

            <div className=" flex items-center gap-2 mt-5">
              <input
                id={`neverExpires2_${index}`}
                type="checkbox"
                className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                checked={fields.neverChecked1}
                onChange={(e) =>
                  handleFormChangePro(index, "neverChecked1", e.target.checked)
                }
                disabled={disabled}
              />
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor={`neverExpires2_${index}`}
              >
                Never Expires
              </label>
            </div>

            <div className="grid col-span-2 my-2">
              {isHideShow && (
                <div className="flex gap-4 items-center justify-start ">
                  <div>
                    <label
                      htmlFor={`file-upload2_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px]   focus:outline-none focus:ring-2 "
                    >
                      Attachment Document
                    </label>
                    <input
                      id={`file-upload2_${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChanges(index, e)}
                      disabled={disabled}
                    />
                  </div>
                  <div>
                    {fields.selectedFiles ? (
                      <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                        File Selected: {fields.selectedFiles.name}
                      </p>
                    ) : (
                      <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                        No File Selected
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Third section */}

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border text-[14px] leading-[19.07px]   border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
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

export default AdditionalTraining;
