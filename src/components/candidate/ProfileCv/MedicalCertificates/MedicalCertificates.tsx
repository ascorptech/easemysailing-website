"use client";
import {
  AddMedicalData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type MedicalComplete = {
  percentage: number;
  color: string;
};

type Props = {
  medicalComplete: MedicalComplete; // mjrComplete is an object with percentage and color
  setMedicalComplete: React.Dispatch<React.SetStateAction<MedicalComplete>>;
  userDetail: any;
};

const MedicalCertificates = ({
  medicalComplete,
  setMedicalComplete,
  userDetail,
}: Props) => {
  const [extraFields, setExtraFields] = useState<
    {
      field1: string;
      field2: any;
      neverExpires: any;
      field3: any;
      field4: any;
      selectedFile:any;
    }[]
  >([]);
  //   const [extraFields, setExtraFields] = useState<
  //   {  neverexp:any; field4:any; field5:any }[]
  // >([]);

  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>(null);
  const [selectedFilesCovid, setSelectedFilesCovid] = useState<any>(null);
  const [medicalPhysician, setMedicalPhysician] = useState("");

  const [fMedicalcenter, setFMedicalcenter] = useState("");

  const [medicalNumber, setMedicalNumber] = useState("");
  const [medicalCenter, setMedicalCenter] = useState("");

  const [testCenter, setTestCenter] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [issuedateCovid, setIssueDateCovid] = useState("");
  const [exdateCovid, setExDateCovid] = useState("");

  const [issuingCity, setIssuingCity] = useState("");

  const [expires1, setExpires1] = useState<any>(false);
  const [expires2, setExpires2] = useState<any>(false);

  const [issuingOptions, setIssuingOptions] = useState("");
  const [types2Options, setTypes2Options] = useState("");
  const [typeOptions, setTypeOptions] = useState("");
  const [issuingCountryOpt, setIssuingCountryOpt] = useState("");
  const [medicalType, setMedicalType] = useState("");
  const [vaccinationIssue, setVaccinationIssue] = useState("");
  const [covidOptions, setCovidOptions] = useState("");
  const [vaccinationExpiry, setVaccinationExpiry] = useState("");
  const [expiresMedical, setExpiresMedical] = useState<any>(false);
  const [veccinationCheck, setVeccinationCheck] = useState<any>(false);
  const [medicalType1, setMedicalType1] = useState("");
  const [vaccination1, setVaccination1] = useState("");

  const [vaccinationexp, setVaccinationexp] = useState("");

  const [selectedFilesOthers, setSelectedFilesOthers] = useState<any>("");

  const [veccinationCheckFlag, setVeccinationCheckFlag] = useState<any>(false);
  const [medicalTypeFlag, setMedicalTypeFlag] = useState("");
  const [vaccinationFlag, setVaccinationFlag] = useState("");

  const [vaccinationexpFlag, setVaccinationexpFlag] = useState("");
  const [selectedFilesFlag, setSelectedFilesFlag] = useState<any>("");
  const [typeDrop, setTypeDrop] = useState<any>([]);
  const [drugDrop, setDrugDrop] = useState<any>([]);
  const [vaccineTypeDrop, setVaccineTypeDrop] = useState<any>([]);
  const [otherVaccineTypeDrop, setOtherVaccineTypeDrop] = useState<any>([]);
  const [countryDrop, setCountryDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails("MEDICALFITNESSTYPE", (res: any) => {
      setTypeDrop(res?.data?.values);
    });
    GetDropdownDetails("DRUG&ALCOHOLTEST", (res: any) => {
      setDrugDrop(res?.data?.values);
    });
    GetDropdownDetails("covidVaccine", (res: any) => {
      console.log("vac", res?.data);
      setVaccineTypeDrop(res?.data?.values);
    });
    GetDropdownDetails("otherVaccine", (res: any) => {
      console.log("vac", res?.data);
      setOtherVaccineTypeDrop(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 31 + extraFields.length * 5;
  const filledFields = [
    number,
    issuedate,
    exdate || expires1,
    selectedFile,
    selectedFiles,
    selectedFilesCovid,
    medicalPhysician,
    fMedicalcenter,
    medicalNumber,
    medicalCenter,
    testCenter,
    issuedate1,
    exdate1 || expires2,
    issuingCity,
    issuingOptions,
    types2Options,
    typeOptions,
    issuingCountryOpt,
    medicalType,
    vaccinationIssue,
    covidOptions,
    vaccinationExpiry,
    medicalType1,
    vaccination1,
    vaccinationexp || veccinationCheck,
    selectedFilesOthers,
    medicalTypeFlag,
    vaccinationFlag,
    vaccinationexpFlag || veccinationCheckFlag,
    selectedFilesFlag,
    exdateCovid || expiresMedical,
    issuedateCovid,
    ...extraFields.flatMap((field) => [
      field.field1,
      field.field2,
      field.neverExpires,
      field.field3,
      field.field4,
      field.selectedFile
    ]),
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setMedicalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setMedicalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setMedicalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChanges = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFiles(file);
    }
  };

  const handleFileChangesOthers = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFilesOthers(file);
    }
  };
  const handleFileChangesCovid = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFilesCovid(file);
    }
  };
  const handleFileChangesFlag = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFilesFlag(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("fitnessType", types2Options);
    formData.append("fitnessNumber", number);
    formData.append("fitnessIssuingCountry", issuingOptions);
    formData.append("fitnessIssuingCity", issuingCity);
    formData.append("fitnessMedicalCenter", fMedicalcenter);
    formData.append("fitnessIssueDate", issuedate);
    formData.append("fitnessExpiryDate", exdate);
    // formData.append("fitnessNeverExpires", expires1);
    formData.append("fitnessDocument", selectedFile);

    formData.append("drugTestType", typeOptions);
    formData.append("drugTestNumber", medicalNumber);
    formData.append("drugTestIssuingCountry", issuingCountryOpt);
    formData.append("drugTestIssuingCity", medicalCenter);
    formData.append("drugTestCenter", testCenter);
    formData.append("drugTestIssueDate", issuedate1);
    formData.append("drugTestExpiryDate", exdate1);
    // formData.append("drugTestNeverExpires", expires2);
    formData.append("drugTestDocument", selectedFiles);

    formData.append("covidVaccineType", medicalType);
    formData.append("covidVaccineCountry", covidOptions);
    formData.append("covidVaccineMedicalCenter", medicalPhysician);
    formData.append("covidVaccineDate1", vaccinationIssue);
    formData.append("covidVaccineExpiryDate1", vaccinationExpiry);
    // missing covid19 expiry data
    // formData.append("covidVaccineNeverExpires1", expiresMedical);
    formData.append("covidVaccineDocument1", selectedFilesCovid);

    formData.append("covidVaccineDate2", issuedateCovid);
    formData.append("covidVaccineExpiryDate2", exdateCovid);
    // formData.append("covidVaccineNeverExpires2", expires2);

    formData.append("covidVaccineDocument2", "");

    formData.append("otherVaccinationType", medicalType1);
    formData.append("otherVaccinationDate", vaccination1);
    formData.append("otherVaccinationExpiryDate", vaccinationexp);
    // formData.append("otherVaccinationNeverExpires", veccinationCheck);
    formData.append("otherVaccinationDocument", selectedFilesOthers);

    formData.append("flagMedicalType", medicalTypeFlag);
    formData.append("flagMedicalVaccinationDate", vaccinationFlag);
    formData.append("flagMedicalExpiryDate", vaccinationexpFlag);
    // formData.append("flagMedicalNeverExpires", veccinationCheckFlag);
    formData.append("flagMedicalDocument", selectedFilesFlag);

    AddMedicalData(userDetail?.userId, formData, AddmedicalDataDB);
  };

  const AddmedicalDataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("medical  submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Medical detail not submited ");
    }
  };

  // add plus and minus symbole

  const addFieldPair = () => {
    setExtraFields([
      ...extraFields,
      { field1: "", field2: "", neverExpires: "", field3: "", field4: "",selectedFile:"" },
    ]);
  };

  const removeFieldPair = () => {
    if (extraFields.length > 0) {
      setExtraFields(extraFields.slice(0, -1));
    }
  };

  const handleExtraFieldChange = (
    index: number,
    value: any,
    field: "field1" | "field2" | "neverExpires" | "field3" | "field4"|"selectedFile"
  ) => {
    const updatedFields = [...extraFields];
    updatedFields[index] = { ...updatedFields[index], [field]: value };
    setExtraFields(updatedFields);
  };
  

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="font-bold"> Medical Fitness</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="types"
            >
              Type
            </label>
            <select
              id="types"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={types2Options}
              onChange={(e) => setTypes2Options(e.target.value)}
            >
              <option value="" disabled selected>
                Type
              </option>
              {typeDrop &&
                drugDrop?.map((type: any, index: number) => (
                  <option key={index} value={type}>
                    {type?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="medicalnumber"
            >
              Number
            </label>
            <input
              id="medicalnumber"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicalIssuing"
            >
              Issuing Country
            </label>
            <select
              id="medicalIssuing"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingOptions}
              onChange={(e) => setIssuingOptions(e.target.value)}
            >
              <option value="" disabled selected>
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

          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="issuringCity"
            >
              Issuring City
            </label>
            <input
              id="issuringCity"
              type="text"
              value={issuingCity}
              onChange={(e) => setIssuingCity(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="medicalcenter"
            >
              Medical Center
            </label>
            <input
              id="medicalcenter"
              type="text"
              value={fMedicalcenter}
              onChange={(e) => setFMedicalcenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuemedical"
            >
              Issue Date
            </label>
            <input
              id="issuemedical"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
          {/* </div> */}

          {!expires1 && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="expirymedical"
              >
                Expiry Date
              </label>

              <input
                id="expirymedical"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate}
                onChange={(e) => setExDate(e.target.value)}
              />
            </div>
          )}
          <div className="flex items-center  gap-2 mt-5">
            <input
              id="nevermedical"
              type="checkbox"
              className="border focus:ring-[#00A264]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] text-[14px] leading-[19.07px]  text-[#333333]"
              checked={expires1}
              onChange={() => setExpires1(!expires1)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="nevermedical"
            >
              Never Expires
            </label>
            {/* </div> */}
          </div>
          <div className="grid col-span-2  items-center">
            <div className="flex gap-6 items-center  my-6">
              <div>
                <label
                  htmlFor="medicalfile-upload3"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
                >
                  Attachment Document
                </label>

                <input
                  id="medicalfile-upload3"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                {selectedFile ? (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    File Selected: {selectedFile.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid col-span-2 ">
            <h1 className=" font-bold">Drug & Alcohol Test </h1>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="medicaltype"
            >
              Type
            </label>
            <select
              id="medicaltype"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={typeOptions}
              onChange={(e) => setTypeOptions(e.target.value)}
            >
              <option value="" disabled selected>
                Type
              </option>
              {drugDrop &&
                drugDrop?.map((drug: any, index: number) => (
                  <option key={index} value={drug}>
                    {drug?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicalNumber1"
            >
              Enter Number
            </label>
            <input
              id="medicalNumber1"
              type="number"
              value={medicalNumber}
              onChange={(e) => setMedicalNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="Issuingmedical"
            >
              Issuing Country
            </label>
            <select
              id="Issuingmedical"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountryOpt}
              onChange={(e) => setIssuingCountryOpt(e.target.value)}
            >
              <option value="" disabled selected>
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
          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="issuringCitymedical"
            >
              Issuring City
            </label>
            <input
              id="issuringCitymedical"
              type="text"
              value={medicalCenter}
              onChange={(e) => setMedicalCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicaltestcenter"
            >
              Test Center
            </label>
            <input
              id="medicaltestcenter"
              type="text"
              value={testCenter}
              onChange={(e) => setTestCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedatem"
            >
              Issue Date
            </label>
            <input
              id="issuedatem"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          {!expires2 && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="expiryDatemedical"
              >
                Expiry Date
              </label>

              <input
                id="expiryDatemedical"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate1}
                onChange={(e) => setExDate1(e.target.value)}
              />
            </div>
          )}
          <div className=" flex items-center  gap-2 mt-5">
            <input
              id="neverExpiresmedical"
              type="checkbox"
              className="border focus:ring-[#00A264] text-[14px] leading-[19.07px]  text-[#333333]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              checked={expires2}
              onChange={() => setExpires2(!expires2)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="neverExpiresmedical"
            >
              Never Expires
            </label>
          </div>

          <div className=" text-center grid col-span-2 mt-3">
            <div className="flex items-center  gap-4">
              <div>
                <label
                  htmlFor="file-uploadmedical"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]   "
                >
                  Attachment Docoment
                </label>
                <input
                  id="file-uploadmedical"
                  type="file"
                  className="hidden"
                  onChange={handleFileChanges}
                />
              </div>
              <div>
                {selectedFiles ? (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    File Selected: {selectedFiles.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid col-span-2 ">
            <h1 className="font-bold ">COVID-19 Vaccine</h1>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicaltypes"
            >
              Type
            </label>
            <select
              id="medicaltypes"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={medicalType}
              onChange={(e) => setMedicalType(e.target.value)}
            >
              <option value="" disabled selected>
                Type
              </option>
              {vaccineTypeDrop &&
                vaccineTypeDrop?.map((typ: any, index: number) => (
                  <option key={index} value={typ}>
                    {typ?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="covid"
            >
              Covid Vaccine Name Country
            </label>
            <select
              id="covid"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={covidOptions}
              onChange={(e) => setCovidOptions(e.target.value)}
            >
              <option value="" disabled selected>
                Covid Vaccine Name Country
              </option>
              {countryDrop &&
                countryDrop?.map((country: any, index: number) => (
                  <option key={index} value={country}>
                    {country?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicalcenter"
            >
              Medical Center / Physician
            </label>
            <input
              id="medicalcenter"
              type="text"
              value={medicalPhysician}
              onChange={(e) => setMedicalPhysician(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="vaccinedate1"
            >
              Vaccination Date First
            </label>
            <input
              id="vaccinedate1"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationIssue}
              onChange={(e) => setVaccinationIssue(e.target.value)}
            />
          </div>

          {/* <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="vaccinedate2"
            >
              Vaccination Expiry Date1
            </label>

            <input
              id="vaccinedate2"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationExpiry}
              onChange={(e) => setVaccinationExpiry(e.target.value)}
            />
          </div> */}

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedatemCovid"
            >
              Vaccination Date Second
            </label>
            <input
              id="issuedatemCovid"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedateCovid}
              onChange={(e) => setIssueDateCovid(e.target.value)}
            />
          </div>

          {/* {!expiresMedical && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="expiryDatemedicalCovid"
              >
                Vaccination Expiry Date2
              </label>

              <input
                id="expiryDatemedicalCovid"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdateCovid}
                onChange={(e) => setExDateCovid(e.target.value)}
              />
            </div>
          )}
          <div className=" flex items-center gap-2 mt-5">
            <input
              id="neverExpiresmedical"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              checked={expiresMedical}
              onChange={() => setExpiresMedical(!expiresMedical)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="neverExpiresmedical"
            >
              Never Expires
            </label>
          </div> */}

          <div className="grid col-span-2">
            <div className="flex gap-6 items-center  mt-4  ">
              <div>
                <label
                  htmlFor="file-uploadmedicalvaccine"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                >
                  Attachment Docoment
                </label>
                <input
                  id="file-uploadmedicalvaccine"
                  type="file"
                  className="hidden"
                  onChange={handleFileChangesCovid}
                />
              </div>
              <div>
                {selectedFilesCovid ? (
                  <p className="text-gray-700">
                    File Selected: {selectedFilesCovid.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* other caccination section */}

          <div className="grid col-span-2 ">
            <div className="flex justify-between items-center">
              <h1 className="font-bold ">Other Vaccination </h1>

              <div className="flex gap-2">
                <AiOutlinePlus
                  className="text-2xl cursor-pointer"
                  onClick={addFieldPair}
                />
                {extraFields.length > 0 && (
                  <AiOutlineMinus
                    className="text-2xl cursor-pointer"
                    onClick={removeFieldPair}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicaltypes1"
            >
              Type
            </label>
            <select
              id="medicaltypes1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={medicalType1}
              onChange={(e) => setMedicalType1(e.target.value)}
            >
              <option value="" disabled selected>
                Type
              </option>
              {otherVaccineTypeDrop &&
                otherVaccineTypeDrop?.map((vac: any, index: number) => (
                  <option key={index} value={vac}>
                    {vac?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="vaccinedate01"
            >
              Vaccination Date
            </label>
            <input
              id="vaccinedate01"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccination1}
              onChange={(e) => setVaccination1(e.target.value)}
            />
          </div>

          {!veccinationCheck && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="vaccinationexp"
              >
                Expiry Date
              </label>

              <input
                id="vaccinationexp"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={vaccinationexp}
                onChange={(e) => setVaccinationexp(e.target.value)}
              />
            </div>
          )}
          <div className=" flex items-center  gap-2 mt-5">
            <input
              id="veccinationCheck"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              checked={veccinationCheck}
              onChange={() => setVeccinationCheck(!veccinationCheck)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="veccinationCheck"
            >
              Never Expires
            </label>
          </div>

      

          <div className="grid col-span-2">
            <div className="flex gap-6 items-center  my-4  ">
              <div>
                <label
                  htmlFor="file-uploadmedicalvaccine"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                >
                  Attachment Docoment
                </label>
                <input
                  id="file-uploadmedicalvaccine"
                  type="file"
                  className="hidden"
                  onChange={handleFileChangesOthers}
                />
              </div>
              <div>
                {selectedFilesOthers ? (
                  <p className="text-gray-700">
                    File Selected: {selectedFilesOthers.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>

          {extraFields.map((field, index) => (
            <React.Fragment key={index} >

              <div className="w-full ">
                <label
                  className="block text-[14px] font-[poppins] text-[#333333] mb-1"
                  htmlFor={`extraField1_${index}`}
                >
                  Type {index * 2 + 1}
                </label>
                <select
                  id={`extraField1_${index}`}
                  
                  value={field.field1}
                  onChange={(e) =>
                    handleExtraFieldChange(index, e.target.value, "field1")
                  }
                  className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                  // disabled={disabled}
                >
                 <option value="" disabled selected>
                Type
              </option></select>
              </div>
              <div className="w-full">
                <label
                  className="block text-[14px] font-[poppins] text-[#333333] mb-1"
                  htmlFor={`extraField2_${index}`}
                >
                  Vaccination Date {index * 2 + 2}
                </label>
                <input
                  id={`extraField2_${index}`}
                  type="date"
                  value={field.field2}
                  onChange={(e) =>
                    handleExtraFieldChange(index, e.target.value, "field2")
                  }
                  className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                  // disabled={disabled}
                />
              </div>

              {!field.neverExpires && (
                <div className="w-full">
                  <label
                    className="block text-[14px] font-[poppins] text-[#333333] mb-1"
                    htmlFor={`extraField3_${index}`}
                  >
                    Expiry Date {index * 2 + 2}
                  </label>
                  <input
                    id={`extraField3_${index}`}
                    type="date"
                    value={field.field3}
                    onChange={(e) =>
                      handleExtraFieldChange(index, e.target.value, "field3")
                    }
                    className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                    // disabled={disabled}
                  />
                </div>
              )}
              <div className=" flex items-center  gap-2 mt-5">
                <input
                  id={`field3_${index}`}
                  type="checkbox"
                  className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                  checked={field.neverExpires}
                  onChange={(e) =>
                    handleExtraFieldChange(
                      index,
                      e.target.checked,
                      "neverExpires"
                    )
                  }
                />
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]"
                  htmlFor={`field3_${index}`}
                >
                  Never Expires
                </label>
              </div>

              <div className="grid col-span-2">
            <div className="flex gap-6 items-center  my-4  ">
              <div>
                <label
                 htmlFor={`file-uploadmedicalvaccine_${index}`}
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                >
                  Attachment Docoment
                </label>
                <input
                   id={`file-uploadmedicalvaccine_${index}`}
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    handleExtraFieldChange(index, e.target.files?.[0], "selectedFile")
                  }
                />
              </div>
              <div>
              {field.selectedFile ? (
            <p className="text-gray-700">
              File Selected: {field.selectedFile.name}
            </p>
          ) : (
            <p className="text-[14px] leading-[19.07px] text-[#333333]">
              No file selected
            </p>
          )}
              </div>
            </div>
          </div>
            </React.Fragment>
          ))}

          {/* Flag medical */}
          <div className="grid col-span-2 ">
            <h1 className="font-bold ">Flag Medical </h1>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicaltypesflag"
            >
              Type
            </label>
            <select
              id="medicaltypesflag"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={medicalTypeFlag}
              onChange={(e) => setMedicalTypeFlag(e.target.value)}
            >
              <option value="" disabled selected>
                Type
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="vaccinedateflag"
            >
              Vaccination Date
            </label>
            <input
              id="vaccinedateflag"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationFlag}
              onChange={(e) => setVaccinationFlag(e.target.value)}
            />
          </div>

          {!veccinationCheckFlag && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="vaccinationexpflag"
              >
                Expiry Date
              </label>

              <input
                id="vaccinationexpflag"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={vaccinationexpFlag}
                onChange={(e) => setVaccinationexpFlag(e.target.value)}
              />
            </div>
          )}
          <div className=" flex items-center  gap-2 mt-5">
            <input
              id="veccinationCheckflag"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              checked={veccinationCheckFlag}
              onChange={() => setVeccinationCheckFlag(!veccinationCheckFlag)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="veccinationCheckflag"
            >
              Never Expires
            </label>
          </div>

          <div className="grid col-span-2">
            <div className="flex gap-6 items-center  mt-4  ">
              <div>
                <label
                  htmlFor="file-uploadmedicalvaccineflag"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                >
                  Attachment Docoment
                </label>
                <input
                  id="file-uploadmedicalvaccineflag"
                  type="file"
                  className="hidden"
                  onChange={handleFileChangesFlag}
                />
              </div>
              <div>
                {selectedFilesFlag ? (
                  <p className="text-gray-700">
                    File Selected: {selectedFilesFlag.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Third section */}

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border text-[14px] leading-[19.07px]   border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <Link
            href="#"
            className="border text-[14px] leading-[19.07px]  text-[#333333] border-[#00A264]  p-2 rounded-lg px-8"
          >
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
};
export default MedicalCertificates;
