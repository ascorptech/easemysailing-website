"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [medicalPhysician, setMedicalPhysician] = useState("");

  const [result, setResult] = useState("");

  const [medicalNumber, setMedicalNumber] = useState("");
  const [medicalCenter, setMedicalCenter] = useState("");

  const [testCenter, setTestCenter] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [issuedateCovid, setIssueDateCovid] = useState("");
  const [exdateCovid, setExDateCovid] = useState("");

  const [trainingCenter, setTrainingCenter] = useState("");

  const [expires1, setExpires1] = useState(false);
  const [expires2, setExpires2] = useState(false);

  const [issuingOptions, setIssuingOptions] = useState("");
  const [types2Options, setTypes2Options] = useState("");
  const [typeOptions, setTypeOptions] = useState("");
  const [issuingCountryOpt, setIssuingCountryOpt] = useState("");
  const [medicalType, setMedicalType] = useState("");
  const [vaccinationIssue, setVaccinationIssue] = useState("");
  const [covidOptions, setCovidOptions] = useState("");
  const [vaccinationExpiry, setVaccinationExpiry] = useState("");
  const [expiresMedical, setExpiresMedical] = useState(false);
  const [veccinationCheck, setVeccinationCheck] = useState(false);
  const [medicalType1, setMedicalType1] = useState("");
  const [vaccination1, setVaccination1] = useState("");

  const [vaccinationexp, setVaccinationexp] = useState("");
  const [selectedFiles1, setSelectedFiles1] = useState("");

  const [veccinationCheckFlag, setVeccinationCheckFlag] = useState(false);
  const [medicalTypeFlag, setMedicalTypeFlag] = useState("");
  const [vaccinationFlag, setVaccinationFlag] = useState("");

  const [vaccinationexpFlag, setVaccinationexpFlag] = useState("");
  const [selectedFilesFlag, setSelectedFilesFlag] = useState("");

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };medicalType

  const totalFields = 36;
  const filledFields = [
    number,
    issuedate,
    exdate,
    selectedFile,
    selectedFiles,
    medicalPhysician,
    result,
    medicalNumber,
    medicalCenter,
    testCenter,
    issuedate1,
    exdate1,
    trainingCenter,
    expires1,
    expires2,
    issuingOptions,
    types2Options,
    typeOptions,
    issuingCountryOpt,
    medicalType,
    vaccinationIssue,
    covidOptions,
    vaccinationExpiry,
    expiresMedical,
    veccinationCheck,
    medicalType1,
    vaccination1,
    vaccinationexp,
    selectedFiles1,
    veccinationCheckFlag,
    medicalTypeFlag,
    vaccinationFlag,
    vaccinationexpFlag,
    selectedFilesFlag,
    exdateCovid,
    issuedateCovid,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setMedicalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setMedicalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setMedicalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
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

  const handleFileChanges1 = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFiles1(file);
    }
  };
  const handleFileChangesFlag = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFilesFlag(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className=" font-bold">MEDICAL FITNESS</h1>
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
              <option value="training1">Training1</option>
              <option value="training2">Training2</option>
              <option value="training3">Training3</option>
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
              <option value="India">India</option>
              <option value="Us">Us</option>
              <option value="England">England</option>
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
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
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
              value={result}
              onChange={(e) => setResult(e.target.value)}
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

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="expirymedical"
            >
              Expiry Date
            </label>
            <div className="flex items-center gap-4 ">
              <input
                id="expirymedical"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate}
                onChange={(e) => setExDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
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
          <div className="grid col-span-2 justify-center items-center">
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
            <h1 className=" font-bold">DRUG & ALCOHOL TEST</h1>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
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
              <option value="India">India</option>
              <option value="us">Us</option>
              <option value="england">England</option>
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
          <div className=" flex items-center justify-center gap-4">
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
            <div className="flex items-center justify-center gap-4">
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
            <h1 className="font-bold ">COVID-19 VACCINE</h1>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="covid"
            >
              Covid Caccine Name Country
            </label>
            <select
              id="covid"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={covidOptions}
              onChange={(e) => setCovidOptions(e.target.value)}
            >
              <option value="" disabled selected>
                Covid Caccine Name Country
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicalcenter"
            >
              Medical Center Physician
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
              Vaccination Date1
            </label>
            <input
              id="vaccinedate1"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationIssue}
              onChange={(e) => setVaccinationIssue(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="vaccinedate2"
            >
              Vaccination Date
            </label>

            <input
              id="vaccinedate2"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationExpiry}
              onChange={(e) => setVaccinationExpiry(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[16px] leading-[21.79px]"
              htmlFor="issuedatemCovid"
            >
              Issue Date
            </label>
            <input
              id="issuedatemCovid"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedateCovid}
              onChange={(e) => setIssueDateCovid(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="expiryDatemedicalCovid"
            >
              Expiry Date
            </label>

            <input
              id="expiryDatemedicalCovid"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdateCovid}
              onChange={(e) => setExDateCovid(e.target.value)}
            />
          </div>
          <div className=" flex items-center justify-center gap-4">
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
          </div>

          <div className="grid col-span-2">
            <div className="flex gap-6 items-center  mt-4 justify-center ">
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
                  onChange={handleFileChanges}
                />
              </div>
              <div>
                {selectedFiles ? (
                  <p className="text-gray-700">
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

          {/* other caccination section */}

          <div className="grid col-span-2 ">
            <h1 className="font-bold ">OTHER VACCINATION</h1>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
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
          <div className=" flex items-center justify-center gap-4">
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
            <div className="flex gap-6 items-center  mt-4 justify-center ">
              <div>
                <label
                  htmlFor="file-uploadmedicalvaccine1"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                >
                  Attachment Docoment
                </label>
                <input
                  id="file-uploadmedicalvaccine1"
                  type="file"
                  className="hidden"
                  onChange={handleFileChanges1}
                />
              </div>
              <div>
                {selectedFiles1 ? (
                  <p className="text-gray-700">
                    File Selected: {selectedFiles1}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Flag medical */}
          <div className="grid col-span-2 ">
            <h1 className="font-bold ">FLAG MEDICAL </h1>
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
          <div className=" flex items-center justify-center gap-4">
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
            <div className="flex gap-6 items-center  mt-4 justify-center ">
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
                    File Selected: {selectedFilesFlag}
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
