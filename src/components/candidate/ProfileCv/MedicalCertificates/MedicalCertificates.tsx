"use client";
import Link from "next/link";
import { useState } from "react";

const MedicalCertificates = () => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [medicalPhysician, setMedicalPhysician] = useState("");

  const [trainingCenter1, setTrainingCenter1] = useState("");
  const [result, setResult] = useState("");

  const [eCDISNumber, setECDISNumber] = useState("");
  const [medicalCenter, setMedicalCenter] = useState("");

  const [testCenter, setTestCenter] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");

  const [trainingCenter, setTrainingCenter] = useState("");

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

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
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <div>
        <h1 className="text-center font-bold">MEDICAL FITNESS</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="text-[16px] leading-[21.79px] " htmlFor="type">
            Type
          </label>
          <select
            id="type"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Type
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>

        <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicalnumber"
          >
            Number
          </label>
          <input
            id="medicalnumber"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        <div className=" ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicalIssuing"
          >
            Issuing Country
          </label>
          <select
            id="medicalIssuing"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Issuing Country
            </option>
            <option value="">India</option>
            <option value="">Us</option>
            <option value="">England</option>
          </select>
        </div>

        {/* <div className=""> */}

        <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="issuringCity"
          >
            Issuring City
          </label>
          <input
            id="issuringCity"
            type="text"
            value={trainingCenter}
            onChange={(e) => setTrainingCenter(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicalcenter"
          >
            Medical Center
          </label>
          <input
            id="medicalcenter"
            type="text"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        {/* </div> */}
        <div className="">
          <label
            className="text-[16px] leading-[21.79px]"
            htmlFor="issuemedical"
          >
            Issue Date
          </label>
          <input
            id="issuemedical"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            value={issuedate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
        {/* </div> */}

        <div className="">
          <label
            className="text-[16px] leading-[21.79px]  "
            htmlFor="expirymedical"
          >
            Expiry Date
          </label>
          <div className="flex items-center gap-4 ">
            <input
              id="expirymedical"
              type="date"
              className="border focus:outline-green-300  w-full  h-11 rounded-md border-[#00A264]"
              value={exdate}
              onChange={(e) => setExDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="nevermedical"
            type="checkbox"
            className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264]"
            //   value={exdate}
            //   onChange={(e) => setExDate(e.target.value)}
          />
          <label
            className="text-[16px] leading-[21.79px]"
            htmlFor="nevermedical"
          >
            Never Expires
          </label>
          {/* </div> */}
        </div>

        <div className="flex gap-6 items-center  my-6">
          <label
            htmlFor="medicalfile-upload3"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
          >
            Attachment Document
          </label>
          <input
            id="medicalfile-upload3"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <p className="mt-4 text-gray-700">
              File Selected: {selectedFile.name}
            </p>
          )}
        </div>

        {/* second section */}
        {/* <div className=" flex flex-col items-center"> */}
        {/* <h1 className="font-bold">ECDIS</h1> */}

        {/* <div className="grid grid-cols-2 gap-4"> */}

        {/* </div> */}

        {/* PROFESSIONAL KNOWLEDGE TEST  */}

        <div className="grid col-span-2 ">
          <h1 className="text-center font-bold">DRUG & ALCOHOL TEST</h1>
        </div>
        <div className="">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicaltype"
          >
            Type
          </label>
          <select
            id="medicaltype"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Type
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicalNumber1"
          >
            Enter Number
          </label>
          <input
            id="medicalNumber1"
            type="number"
            value={eCDISNumber}
            onChange={(e) => setECDISNumber(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        <div className=" ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="Issuingmedical"
          >
            Issuing Country
          </label>
          <select
            id="Issuingmedical"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Issuing Country
            </option>
            <option value="">India</option>
            <option value="">Us</option>
            <option value="">England</option>
          </select>
        </div>
        {/* <div className=""> */}

        <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="issuringCitymedical"
          >
            Issuring City
          </label>
          <input
            id="issuringCitymedical"
            type="text"
            value={medicalCenter}
            onChange={(e) => setMedicalCenter(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicaltestcenter"
          >
            Test Center
          </label>
          <input
            id="medicaltestcenter"
            type="text"
            value={testCenter}
            onChange={(e) => setTestCenter(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        {/* </div> */}
        <div className="">
          <label className="text-[16px] leading-[21.79px]" htmlFor="issuedatem">
            Issue Date
          </label>
          <input
            id="issuedatem"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            value={issuedate1}
            onChange={(e) => setIssueDate1(e.target.value)}
          />
        </div>

        <div className="">
          <label
            className="text-[16px] leading-[21.79px]  "
            htmlFor="expiryDatemedical"
          >
            Expiry Date
          </label>

          <input
            id="expiryDatemedical"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            value={exdate1}
            onChange={(e) => setExDate1(e.target.value)}
          />
        </div>
        <div className=" flex items-center justify-center gap-4">
          <input
            id="neverExpiresmedical"
            type="checkbox"
            className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
            //   value={exdate}
            //   onChange={(e) => setExDate(e.target.value)}
          />
          <label
            className="text-[16px] leading-[21.79px]"
            htmlFor="neverExpiresmedical"
          >
            Never Expires
          </label>
        </div>

        <div className=" text-center grid col-span-2 w-[60%]  ">
          <label
            htmlFor="file-uploadmedical"
            className="cursor-pointer   bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
          >
            Attach Docoment
          </label>
          <input
            id="file-uploadmedical"
            type="file"
            className="hidden"
            onChange={handleFileChanges}
          />
          {selectedFiles ? (
            <p className="text-gray-700">File Selected: {selectedFiles.name}</p>
          ) : (
            <p className="text-gray-500">No file selected</p>
          )}
        </div>

        {/* <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="trainingCe"
          >
            Training Center
          </label>
          <input
            id="trainingCe"
            type="text"
            value={trainingCenter1}
            onChange={(e) => setTrainingCenter1(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div> */}

        <div className="grid col-span-2 text-center">
          <h1 className="font-bold ">COVID-19 VACCINE</h1>
        </div>

        <div className="">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicaltype"
          >
            Type
          </label>
          <select
            id="medicaltype"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Type
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div className="">
          <label className="text-[16px] leading-[21.79px] " htmlFor="covid">
            Covid Caccine Name Country
          </label>
          <select
            id="covid"
            className="rounded-md text-[14px] leading-[19.07px] font-[openSans] text-[#333333] w-full h-11 focus:outline-green-300 border border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Covid Caccine Name Country
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div className="   ">
          <label
            className="text-[16px] leading-[21.79px] "
            htmlFor="medicalcenter"
          >
            Medical Center Physician
          </label>
          <input
            id="medicalcenter"
            type="text"
            value={medicalPhysician}
            onChange={(e) => setMedicalPhysician(e.target.value)}
            className="border border-[#00A264] rounded-md w-full h-11 py-[8px] px-2 text-gray-700 leading-tight focus:outline-green-300 focus:shadow-outline "
            placeholder=""
            required
          />
        </div>

        <div className="">
          <label
            className="text-[16px] leading-[21.79px]"
            htmlFor="vaccinedate1"
          >
            Vaccination Date1
          </label>
          <input
            id="vaccinedate1"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            // value={issuedate1}
            // onChange={(e) => setIssueDate1(e.target.value)}
          />
        </div>

        <div className="">
          <label
            className="text-[16px] leading-[21.79px]  "
            htmlFor="vaccinedate2"
          >
            Vaccination Date
          </label>

          <input
            id="vaccinedate2"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            // value={exdate1}
            // onChange={(e) => setExDate1(e.target.value)}
          />
        </div>

        <div className="">
          <label className="text-[16px] leading-[21.79px]" htmlFor="issuedatem">
            Issue Date
          </label>
          <input
            id="issuedatem"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            value={issuedate1}
            onChange={(e) => setIssueDate1(e.target.value)}
          />
        </div>

        <div className="">
          <label
            className="text-[16px] leading-[21.79px]  "
            htmlFor="expiryDatemedical"
          >
            Expiry Date
          </label>

          <input
            id="expiryDatemedical"
            type="date"
            className="border focus:outline-green-300 w-full  h-11 rounded-md border-[#00A264]"
            value={exdate1}
            onChange={(e) => setExDate1(e.target.value)}
          />
        </div>
        <div className=" flex items-center justify-center gap-4">
          <input
            id="neverExpiresmedical"
            type="checkbox"
            className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
            //   value={exdate}
            //   onChange={(e) => setExDate(e.target.value)}
          />
          <label
            className="text-[16px] leading-[21.79px]"
            htmlFor="neverExpiresmedical"
          >
            Never Expires
          </label>
        </div>
      </div>

      <div className="flex gap-6 items-center  mt-4 justify-center ">
        <label
          htmlFor="file-uploadmedicalvaccine"
          className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
        >
          Attach Docoment
        </label>
        <input
          id="file-uploadmedicalvaccine"
          type="file"
          className="hidden"
          onChange={handleFileChanges}
        />
        {selectedFiles ? (
          <p className="text-gray-700">File Selected: {selectedFiles.name}</p>
        ) : (
          <p className="text-gray-500">No file selected</p>
        )}
      </div>

      {/* </div> */}
      {/* </div> */}

      {/* Third section */}

      <div className="flex gap-2 mb-4 mt-4">
        <Link
          href="#"
          className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
        >
          Save
        </Link>
        <Link
          href="#"
          className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};
export default MedicalCertificates;
