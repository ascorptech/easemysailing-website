"use client";
import Link from "next/link";

import { useState } from "react";
const ProfessionalSkills = () => {
  const [maker, setMaker] = useState("");
  const [sWL, setSWL] = useState("");
  const [city, setCity] = useState("");

  const [cAvailable, setCAvailable] = useState("");
  const [classApproved, setClassApproved] = useState("");
  const [date, setDate] = useState("");
  const [vdate, setVDate] = useState("");

  const [description, setDescription] = useState("");


  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

  const [inspection, setInspection] = useState("");
  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");

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
      <h1 className="font-bold text-center">COMPUTER SKILLS</h1>
      <div className="grid grid-cols-2 gap-4">
      <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Skill
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Skill
              </option>
              <option value="">Skill1</option>
              <option value="">Skill2</option>
              <option value="">Skill3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Level
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Level
              </option>
              <option value="">Level1</option>
              <option value="">Level2</option>
              <option value="">Level3</option>
            </select>
          </div>
          <div className="grid col-span-2">
          <h1 className="font-bold text-center">CARGO EXPERIENCE</h1>

          </div>

          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Bulk Cargo
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Bulk Cargo
              </option>
              <option value="">Bulk Cargo1</option>
              <option value="">Bulk Cargo2</option>
              <option value="">Bulk Cargo3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Tanker Cargo
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Tanker Cargo
              </option>
              <option value="">Tanker Cargo1</option>
              <option value="">Tanker Cargo2</option>
              <option value="">Tanker Cargo3</option>
            </select>
          </div>


          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            General Cargo
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              General Cargo
              </option>
              <option value="">General Cargo1</option>
              <option value="">General Cargo2</option>
              <option value="">General Cargo3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Wood Products
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Wood Products
              </option>
              <option value="">Wood Products1</option>
              <option value="">Wood Products2</option>
              <option value="">Wood Products3</option>
            </select>
          </div>

          <div className=" grid col-span-2">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Stowage and Lashing Experience
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Stowage and Lashing Experience
              </option>
              <option value="">Wood Products1</option>
              <option value="">Wood Products2</option>
              <option value="">Wood Products3</option>
            </select>
          </div>

          <div className="grid col-span-2">
            <h1 className="text-center font-bold">CARGO GEAR EXPERIENCE</h1>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Type
            </label>
            <select
              id="option1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Type
              </option>
              <option value="">Type1</option>
              <option value="">Type2</option>
              <option value="">Type3</option>
            </select>
          </div>




       
       
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
            htmlFor="maker"
          >
            Maker
          </label>
          <input
            id="maker"
            type="text"
            value={maker}
            onChange={(e) => setMaker(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
            htmlFor="swl"
          >
            SWL
          </label>
          <input
            id="swl"
            type="text"
            value={sWL}
            onChange={(e) => setSWL(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>

        <div className="grid col-span-2"><h1 className="text-center font-bold">METAL WORKING SKILLS</h1></div>

        <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Skill
            </label>
            <select
              id=""
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Skill
              </option>
              <option value="">Type1</option>
              <option value="">Type2</option>
              <option value="">Type3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Level
            </label>
            <select
              id=""
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Level
              </option>
              <option value="">Type1</option>
              <option value="">Type2</option>
              <option value="">Type3</option>
            </select>
          </div>
         

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
           
          >
           Certificate Available
          </label>
          <input
            
            type="text"
            value={cAvailable}
            onChange={(e) => setCAvailable(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder="Yes/No"
            required
          />
        </div>

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
           
          >
           Class Approved
          </label>
          <input
            
            type="text"
            value={classApproved}
            onChange={(e) => setClassApproved(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder="Yes/No"
            required
          />
        </div>



      
      <div className="grid col-span-2">

      <div className="flex items-center justify-center gap-4 my-6">
        <div className="flex gap-6 items-center  ">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[openSans]  "
          >
            Attachment Document
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
         
        </div>
        {/* <div> */}
        {selectedFile ? (
          <p className="mt-4 text-gray-700">
            File Selected: {selectedFile.name}
          </p>
        ) : (
          <p className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]">
            No file selected
          </p>
        )}
        {/* </div> */}
      </div>
      </div>

      <div className="grid col-span-2">
        <h1 className="text-center font-bold" >TANK COATING TYPE EXPERIENCE</h1>
        <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Type
            </label>
            <select
              id=""
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Type
              </option>
              <option value="">Type1</option>
              <option value="">Type2</option>
              <option value="">Type3</option>
            </select>
          </div>
      </div>

      <div className="grid col-span-2"><h1>PORT STATE CONTROL EXPERIENCE</h1></div>
      <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Regional Agreement
            </label>
            <select
              id=""
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Regional Agreement
              </option>
              <option value="">Type1</option>
              <option value="">Type2</option>
              <option value="">Type3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Port
            </label>
            <select
              id=""
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Port
              </option>
              <option value="">Port1</option>
              <option value="">Port2</option>
              <option value="">Port3</option>
            </select>
          </div>
          <div className="">
        <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  " htmlFor="expiryDate">
          Date
        </label>
        {/* <div className="flex items-center gap-4 mt-2"> */}
          <input
            id="expiryDate"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {/* </div> */}
          </div>

          <div className="grid col-span-2   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
           
          >
            Description of Findings / Observation / Deficiencies (if any)          </label>
          <input
            
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder="Yes/No"
            required
          />
        </div>

        <div className="grid col-span-2"><h1 className="text-center font-bold">VETTING INSPECTION EXPERIENCE</h1></div>
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
           
          >
           Inspection By
          </label>
          <input
            
            type="text"
            value={inspection}
            onChange={(e) => setInspection(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder=""
            required
          />
        </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Port
            </label>
            <select
              id=""
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Port
              </option>
              <option value="">Port1</option>
              <option value="">Port2</option>
              <option value="">Port3</option>
            </select>
          </div>
          <div className="">
        <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  " htmlFor="expiryDate">
          Date
        </label>
        {/* <div className="flex items-center gap-4 mt-2"> */}
          <input
            id="expiryDate"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={vdate}
            onChange={(e) => setVDate(e.target.value)}
          />
          {/* </div> */}
          </div>

          <div className="grid col-span-2   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
           
          >
            Description of Findings / Observation / Deficiencies (if any)          </label>
          <input
            
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder="Yes/No"
            required
          />
        </div>
        <div className="grid col-span-2"><h1 className="text-center font-bold ">TRADING AREA EXPERIENCE</h1>

        <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="option1">
            Trading Area
            </label>
            <select
              id=""
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              Trading Area
              </option>
              <option value="">Port1</option>
              <option value="">Port2</option>
              <option value="">Port3</option>
            </select>
          </div>
         </ div>

      </div>

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

export default ProfessionalSkills;