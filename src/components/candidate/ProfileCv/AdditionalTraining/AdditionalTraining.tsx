"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type AdditionalComplete = {
  percentage: number;
  color: string;
};
type Props={
  additionalComplete: AdditionalComplete ; 
  setAdditionalComplete: React.Dispatch<React.SetStateAction<AdditionalComplete >>; // setMjrComplete is a function to update mjrComplete
  userDetail:any
}

const AdditionalTraining = ({additionalComplete, setAdditionalComplete,userDetail}:Props) => {
  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [trainingCenter1, setTrainingCenter1] = useState("");
  const [result, setResult] = useState("");

  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [countryCertifi, setCountryCertifi] = useState("");
  const [countryIC, setCountryIC] = useState("");
  const [neverExpCheck, setNeverExpCheck] = useState(false);
  const [capacity, setCapacity] = useState("");
  const [level, setLevel] = useState("");
  const [ typeOfTest, setTypeOfTest] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [neverChecked1, setNeverChecked1] = useState(false);
  
  const totalFields = 19;
  const filledFields = [
    number,
    issuedate,
    exdate,
    selectedFile,
    selectedFiles,
    trainingCenter,
    trainingCenter1,
    result,
    eCDISNumber,
    issuedate1,
    exdate1,
    countryCertifi,
    countryIC,
    neverExpCheck,
    capacity,
    level,
    typeOfTest,
    issuingCountry,
    neverChecked1
    
  ].filter(Boolean).length;


  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log('user',userDetail)
    if (percentage <= 30) {
      setAdditionalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF0000' // Update the color field
      }));
      color = "red"; 
    } else if (percentage <= 70) {
      setAdditionalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#FF9900' // Update the color field
      }));
      color = "#FF9900"; 
    } else {
      setAdditionalComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: '#00A264' // Update the color field
      }));
      color = "green";
    }
  }, [percentage,color])

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

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
       <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="optionce">
            Certification
          </label>
          <select
            id="optionce"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            name="options"
            value={countryCertifi}
                  onChange={(e) => setCountryCertifi(e.target.value)}
          >
            <option value="" disabled selected>
            Certification
            </option>
            <option value="training1">Training1</option>
            <option value="training2">Training2</option>
            <option value="training3">Training3</option>
          </select>
        </div>

        <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="trainingC1"
            >
              Training Center
            </label>
            <input
              id="trainingC1"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>


          <div className=" ">
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="optionsIC">
          Issuing Country
          </label>
          <select
            id="optionsIC"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            name="options"
            value={countryIC}
            onChange={(e) => setCountryIC(e.target.value)}
          >
            <option value="" disabled selected>
              Issuing Country
            </option>
            <option value="India">India</option>
            <option value="us">Us</option>
            <option value="England">England</option>
          </select>
        </div>
        
        {/* <div className=""> */}

        <div className="   ">
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="numberA">
            Enter Number
          </label>
          <input
            id="numberA"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>

       

        {/* </div> */}
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]" htmlFor="issue3">
            Issue Date
          </label>
          <input
            id="issue3"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={issuedate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
      {/* </div> */}

      <div className="">
        <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  " htmlFor="expiryDate3">
          Expiry Date
        </label>
        <div className="flex items-center gap-4 ">
          <input
            id="expiryDate3"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={exdate}
            onChange={(e) => setExDate(e.target.value)}
          />
          </div>
          </div>
          {/* <div className="flex items-center gap-4">

          <input
            id="neverExpires1"
            type="checkbox"
            className="border focus:ring-[#00A264]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
            //   value={exdate}
            //   onChange={(e) => setExDate(e.target.value)}
          />
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
            htmlFor="neverExpires1"
          >
            Never Expires
          </label>
       
      </div> */}
       <div className=" flex items-center  gap-4">
            <input
              id="neverExpires1"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                checked={neverExpCheck}
                onChange={(e) => setNeverExpCheck(!neverExpCheck)}
            />
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="neverExpires1"
            >
              Never Expires
            </label>
          </div>
<div className="grid col-span-2">
      <div className="flex gap-6 items-center justify-center">
        <div>
        <label
          htmlFor="file-upload03"
          className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
        >
          Attachment Document
        </label>
        <input
          id="file-upload03"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        </div>
        <div>
       
         {selectedFile ? (
              <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                File Selected: {selectedFile.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">No file selected</p>
            )}
            </div>
      </div>
      </div>

      {/* second section */}
      {/* <div className=" flex flex-col items-center"> */}
        {/* <h1 className="font-bold">ECDIS</h1> */}

        {/* <div className="grid grid-cols-2 gap-4"> */}

{/* </div> */}

{/* PROFESSIONAL KNOWLEDGE TEST  */}


        <div className="grid col-span-2 "> 
            <h1 className=" font-bold">PROFESSIONAL KNOWLEDGE TEST</h1>
            </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="option02">
             Capacity
            </label>
            <select
              id="option02"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            >
              <option value="" disabled selected>
              Capacity
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>


          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="level">
             Level
            </label>
            <select
              id="level"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="" disabled selected>
            Level
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="trainingCe"
            >
              Training Center
            </label>
            <input
              id="trainingCe"
              type="text"
              value={trainingCenter1}
              onChange={(e) => setTrainingCenter1(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="typeoftest">
             Type of Test
            </label>
            <select
              id="typeoftest"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={typeOfTest}
              onChange={(e) => setTypeOfTest(e.target.value)}
            >
              <option value="" disabled selected>
              Type of Test
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>


          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="result"
            >
              Result
            </label>
            <input
              id="result"
              type="text"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>
         

          <div className=" ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="optionT1">
              Issuing Country
            </label>
            <select
              id="optionT1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)}
            >
              <option value="" disabled selected>
                Issuing Country
              </option>
              <option value="india">India</option>
              <option value="Us">Us</option>
              <option value="england">England</option>
            </select>
          </div>
          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="proNumber1"
            >
              Enter Number
            </label>
            <input
              id="proNumber1"
              type="number"
              value={eCDISNumber}
              onChange={(e) => setECDISNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]" htmlFor="issue2">
              Issue Date
            </label>
            <input
              id="issue2"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  "
              htmlFor="expiryDate2"
            >
              Expiry Date
            </label>

            <input
              id="expiryDate2"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate1}
              onChange={(e) => setExDate1(e.target.value)}
            />
          </div>
          <div className=" flex items-center justify-center gap-4">
            <input
              id="neverExpires2"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
               checked={neverChecked1}
                onChange={(e) => setNeverChecked1(!neverChecked1)}
            />
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="neverExpires2"
            >
              Never Expires
            </label>
          </div>
      <div className="grid col-span-2">
          <div className="flex gap-4 items-center justify-center ">
            <div>
            <label
              htmlFor="file-upload2"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px] font-[poppins]  focus:outline-none focus:ring-2 "
            >
              Attachment Docoment
            </label>
            <input
              id="file-upload2"
              type="file"
              className="hidden"
              onChange={handleFileChanges}
            />
            </div>
            <div>
            {selectedFiles ? (
              <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                File Selected: {selectedFiles.name}
              </p>
            ) : (
              <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">No file selected</p>
            )}
            </div>
          </div>
        </div>
        </div>
      {/* </div> */}

      {/* Third section */}

      <div className="flex gap-2 mb-4 mt-4">
        <button
          type="button"
          className="border text-[14px] leading-[19.07px] font-[poppins]  border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
        >
          Save
        </button>
        <Link
          href="#"
          className="border border-[#00A264]  p-2 rounded-lg px-8 text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
        >
          Edit
        </Link>
      </div>
      </form>
    </div>
  );
};

export default AdditionalTraining;
