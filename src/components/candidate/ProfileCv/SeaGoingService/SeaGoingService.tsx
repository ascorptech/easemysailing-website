"use client";
import Link from "next/link";
import { useState } from "react";

const SeaGoingService = () => {
  const [number, setNumber] = useState("");
  const [embarkationdate, setEmbarkationDate] = useState("");
  const [disembarkationDate, setDisembarkationDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
  const [selectedFileVisa, setSelectedFileVisa] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
    const [seagoingNumber, setSeagoingNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [visaNumber, setVisaNumber] = useState("");
  const [permitNumber, setPermitNumber] = useState("");
  const [gearless, setGearless] = useState("");
  const [inertGas,  setInertGas] = useState("");


  
 
  //   const handleFileChange = (event: any) => { visaNumber
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
  const handleFileChangeVisa = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFileVisa(file);
    }
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <h1 className="text-center font-bold my-2" >PASSPORT DETAILS</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
            IMO
          </label>
          <select
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              IMO
            </option>
            <option value="">Training1</option>
            <option value="">Training2</option>
            <option value="">Training3</option>
          </select>
        </div>

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
            htmlFor="vesselname"
          >
            Vessel Name
          </label>
          <input
            id="vesselname"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder="Passport No"
            required
          />
        </div>


        <div className=" ">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="">
            Rank
          </label>
          <select
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            name="options"
          >
            <option value="" disabled selected>
              Rank
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="tonnage"
            >
              Tonnage
            </label>
            <input
              id="tonnage"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className=" grid col-span-2 text-center my-2"> <h1 className="font-bold"> Seaman Experience Details</h1></div>

          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
              Engine Make
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
                Engine Make
              </option>
              <option value="">Engine 1</option>
              <option value="">Engine 2</option>
              <option value="">Engine 3</option>
            </select>
          </div>

        {/* <div className=""> */}

        {/* </div> */}
        <div className="">
          <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]" htmlFor="issue">
            Embarkation Date
          </label>
          <input
            id="issue"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={embarkationdate}
            onChange={(e) => setEmbarkationDate(e.target.value)}
          />
        </div>
        {/* </div> */}

       
        {/* <div className="grid "> */}

        <div className="">
          <label
            className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333]  "
            htmlFor="expiryDate"
          >
             Disembarkation date
          </label>
          <input
            id="expiryDate"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={ disembarkationDate}
            onChange={(e) => setDisembarkationDate(e.target.value)}
          />
 </div>
          
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="netSeagoingDays"
            >
              Net Seagoing Days
            </label>
            <input
              id="netSeagoingDays"
              type="text"
              value={seagoingNumber}
              onChange={(e) => setSeagoingNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

            <div className=" ">
            <label className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] " htmlFor="">
              ECDIS
            </label>
            <select
              
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
            >
              <option value="" disabled selected>
              ECDIS
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>

            <div className="  ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="Gearless"
            >
              Gearless
            </label>
            <input
              id="Gearless"
              type="text"
              value={ gearless}
              onChange={(e) => setGearless(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className="  ">
            <label
              className="text-[14px] leading-[19.07px] font-[openSans] text-[#333333] "
              htmlFor="inertGasSysterm"
            >
              Inert Gas Systerm
            </label>
            <input
              id="inertGasSysterm"
              type="text"
              value={inertGas}
              onChange={(e) => setInertGas(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[openSans] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
            />
          </div>
        
        

      

       

        


         



   

    </div>

      {/* fifth section */}

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

export default SeaGoingService;
