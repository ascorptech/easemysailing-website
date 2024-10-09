"use client";
import Link from "next/link";
import { AddSeaDetailsData, GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type PreSeaTrainigComplete = {
  percentage: number;
  color: string;
};

type Props = {
  preSeaTrainigComplete: PreSeaTrainigComplete; // mjrComplete is an object with percentage and color
  setPreSeaTrainigComplete: React.Dispatch<
    React.SetStateAction<PreSeaTrainigComplete>
  >;
  userDetail: any;
};

const PreSeaTrainigDetails = ({
  preSeaTrainigComplete,
  setPreSeaTrainigComplete,
  userDetail,
}: Props) => {
  const [permanect, setPermanect] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [trainingCenter, setTrainingCenter] = useState("");
  const [salary, setSalary] = useState("");
  const [number, setNumber] = useState("");
  const [crewManager, setCrewManager] = useState("");
  const [technicalManager, setTechnicalManager] = useState("");
  const [operator, setOperator] = useState("");
  const [vesselType, setVesselType] = useState("");
  const [commercialSpecification, setCommercialSpecification] = useState("");
  const [designSpecification, setDesignSpecification] = useState("");
  const [dPHours, setDPHours] = useState("");
  const [numberOfrig, setNumberOfrig] = useState("");
  const [winchDrive, setWinchDrive] = useState("");
  const [tradingArea, setTradingArea] = useState("");
  const [waterDepth, setWaterDepth] = useState("");
  const [moveditem, setMoveditem] = useState("");
  const [rank, setRank] = useState("");
  const [vesselType1, setVesselType1] = useState("");
  const [pumpType, setPumpType] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [maxTimeonHome, setMaxTimeonHome] = useState("");
  const [certificate, setCertificate] = useState("");
  const [minTimeonHome, setMinTimeonHome] = useState("");
  const [maxTimeonBoard, setMaxTimeonBoard] = useState("");
  const [timeonBoard, setTimeonBoard] = useState("");
  const [currency, setCurrency] = useState("");
  const [neverExpires, setNeverExpires] = useState<any>(false);
  const [currencyDrop,setCurrencyDrop] = useState<any>([])
  const [trainingDrop,setTrainingDrop] = useState<any>([])
  const [countryDrop,setCountryDrop] = useState<any>([])
  const [imoDrop, setImoDrop] = useState([]);
  const [shipTypeDrop, setShipTypeDrop] = useState<any>([])
  const [rankDrop, setRankDrop] = useState<any>([])
  const [rigMoveDrop, setRigMoveDrop] = useState<any>([])
  const [rigMoveWaterDrop, setRigMoveWaterDrop] = useState<any>([])
  const [tradingAreaDrop, setTradingAreaDrop] = useState<any>([])
  const [winchDiveDrop, setWinchDiveDrop] = useState<any>([])
  const [disabled,setDisabled] = useState(true)


  useEffect(() => {
    GetDropdownDetails("countryCurrencyCode", (res: any) => {
      setCurrencyDrop(res?.data?.values);
    });
    GetDropdownDetails("OFFSHORESPECIFICTRAININGS", (res: any) => {
      setTrainingDrop(res?.data?.values);
    });
    GetDropdownDetails("shipType", (res: any) => {
      setShipTypeDrop(res?.data?.values);
    });
    GetDropdownDetails('rank', (res: any) => {
      setRankDrop(res?.data?.values)
    })
    GetDropdownDetails('country', (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values)
    })
    GetDropdownDetails("SEAGOINGEXP", (res: any) => {
      setImoDrop(res?.data?.values);
    });
    GetDropdownDetails("RigMoveExperiencemoveditem", (res: any) => {
      setRigMoveDrop(res?.data?.values);
    });
    GetDropdownDetails("RigMoveExperiencewaterdepth", (res: any) => {
      setRigMoveWaterDrop(res?.data?.values);
    });
    GetDropdownDetails("TRADINGAREAEXPERIENCE", (res: any) => {
      setTradingAreaDrop(res?.data?.values);
    });
    GetDropdownDetails("WinchDriveExperience", (res: any) => {
      setWinchDiveDrop(res?.data?.values);
    });
  }, []);

  //   const handleFileChange = (event: any) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

  const totalFields = 30;
  const filledFields = [
    permanect,
    issuedate,
    exdate,
    selectedFile,
    trainingCenter,
    salary,
    number,
    crewManager,
    technicalManager,
    operator,
    vesselType,
    commercialSpecification,
    designSpecification,
    dPHours,
    numberOfrig,
    winchDrive,
    tradingArea,
    waterDepth,
    moveditem,
    rank,
    vesselType1,
    pumpType,
    issuingCountry,
    certificate,
    maxTimeonHome,
    minTimeonHome,
    maxTimeonBoard,
    timeonBoard,
    currency,
    neverExpires,
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setPreSeaTrainigComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setPreSeaTrainigComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setPreSeaTrainigComplete((prevState) => ({
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

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    let formData = new FormData();

    {
      formData.append("permanentPerDay", permanect);
      formData.append("issueDate", issuedate);
      formData.append("expiryDate", exdate);
      formData.append("document", selectedFile);
      formData.append("trainingCenter", trainingCenter);
      formData.append("salaryNegotiable", salary);
      formData.append("certificateNumber", number);
      formData.append("crewManager", crewManager);
      formData.append("technicalManager", technicalManager);
      formData.append("operator", operator);
      formData.append("document", vesselType);
      formData.append(
        "vesselTypeCommercialSpecification",
        commercialSpecification
      );
      formData.append("vesselTypeDesignSpecification", designSpecification);
      formData.append("dpHours", dPHours);
      formData.append("rigMoveNumber", numberOfrig);
      formData.append("winchDriveExperience", winchDrive);
      formData.append("tradingArea", tradingArea);
      formData.append("waterDepth", waterDepth);
      formData.append("movedItem", moveditem);
      formData.append("rigMoveRank", rank);
      formData.append("rigMoveVesselType", vesselType1);
      formData.append("pumpType", pumpType);
      formData.append("issuingCountry", issuingCountry);
      formData.append("certificate", certificate);
      formData.append("maxTimeAtHomeWeeks", maxTimeonHome);
      formData.append("minTimeAtHomeWeeks", minTimeonHome);
      formData.append("maxTimeOnBoardWeeks", maxTimeonBoard);
      formData.append("minTimeOnBoardWeeks", timeonBoard);
      formData.append("currency", currency);
      formData.append("neverExpires", neverExpires);
    }
    AddSeaDetailsData(userDetail?.userId, formData, AddSeaDetailsDataDB);
  };

  const AddSeaDetailsDataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Sea detail submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Sea detail not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled)
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className=" font-bold">  Salary Expectation</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="permanent"
            >
              Permanent (per day)
            </label>
            <input
              id="permanent"
              type="text"
              value={permanect}
              onChange={(e) => setPermanect(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              disabled={disabled}
            />
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="Currency"
            >
              Currency
            </label>
            <select
              id="Currency"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {currencyDrop &&
                currencyDrop?.map((cu: any, index: number) => (
                  <option key={index} value={cu}>
                    {cu?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="salaryis"
            >
              Salary is Negotiable
            </label>
            <input
              id="salaryis"
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Yes/No"
              disabled={disabled}
            />
          </div>

          <div className="grid col-span-2">
            {" "}
            <h1 className=" font-bold"> Rotation Expectation</h1>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="minBoard"
            >
              Min. Time on Board (weeks)
            </label>
            <select
              id="minBoard"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={timeonBoard}
              onChange={(e) => setTimeonBoard(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select 
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="maxBoard"
            >
              Max. Time on Board (weeks)
            </label>
            <select
              id="maxBoard"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={maxTimeonBoard}
              onChange={(e) => setMaxTimeonBoard(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
              Select 
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="minHome"
            >
              Min. Time at Home (weeks)
            </label>
            <select
              id="minHome"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={minTimeonHome}
              onChange={(e) => setMinTimeonHome(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
              Select 
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="maxHome"
            >
              Max. Time at Home (weeks)
            </label>
            <select
              id="maxHome"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={maxTimeonHome}
              onChange={(e) => setMaxTimeonHome(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
              Select 
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* <div className=""> */}

          <div className="grid col-span-2">
            {" "}
            <h1 className="font-bold">Offshore Specific Trainings</h1>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="certificate1"
            >
              Certificate
            </label>
            <select
              id="certificate1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {trainingDrop &&
                trainingDrop?.map((train: any, index: number) => (
                  <option key={index} value={train}>
                    {train?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="trainingCenter"
            >
              Training Center
            </label>
            <input
              id="trainingCenter"
              type="text"
              value={trainingCenter}
              onChange={(e) => setTrainingCenter(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="issuingCountry"
            >
              Issuing Country
            </label>
            <select
              id="issuingCountry"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
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

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="number01"
            >
              Number
            </label>
            <input
              id="number01"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              disabled={disabled}
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="issue01"
            >
              Issue Date
            </label>
            <input
              id="issue01"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate}
              onChange={(e) => setIssueDate(e.target.value)}
              disabled={disabled}
            />
          </div>
          <div>
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  "
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            {/* <div className="flex items-center gap-4 "> */}
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate}
              onChange={(e) => setExDate(e.target.value)}
              disabled={disabled}
            />
            {/* </div> */}
          </div>

          <div className="">
            <input
              id="neverExpires01"
              type="checkbox"
              className="border focus:ring-[#00A264] text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264]"
              checked={neverExpires}
              onChange={() => setNeverExpires(!neverExpires)}
              disabled={disabled}
            />
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="neverExpires01"
            >
              Never Expires
            </label>
          </div>

          <div className="grid col-span-2">
            <div className="flex gap-4 items-center  ">
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]"
              >
                Attachment Document
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                disabled={disabled}
              />

              {/* </div> */}
              <div>
                {selectedFile ? (
                  <p className="mt-4 text-gray-700">
                    File Selected: {selectedFile.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* <div className="grid col-span-2 ">
            <h1 className="font-bold ">Company Name/Ship type</h1>
          </div> */}

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="pumpType"
            >
              Pump Type
            </label>
            <select
              id="pumpType"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={pumpType}
              onChange={(e) => setPumpType(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {imoDrop &&
                imoDrop?.map((im: any, index: number) => (
                  <option key={index} value={im}>
                    {im?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
            Company Crew Manager
            </label>
            <input
              type="text"
              value={crewManager}
              onChange={(e) => setCrewManager(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Technical Manager
            </label>
            <input
              type="text"
              value={technicalManager}
              onChange={(e) => setTechnicalManager(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Operator
            </label>
            <input
              type="text"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>

          {/* <div className="grid col-span-2">
            <h1 className=" font-bold">Company Name/Ship type</h1>
          </div> */}
          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
            Company Vessel Type
            </label>
            <input
              type="text"
              value={vesselType}
              onChange={(e) => setVesselType(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Vessel Type - Commercial Specification
            </label>
            <input
              type="text"
              value={commercialSpecification}
              onChange={(e) => setCommercialSpecification(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
              Vessel Type - Design Specification
            </label>
            <input
              type="text"
              value={designSpecification}
              onChange={(e) => setDesignSpecification(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              disabled={disabled}
            />
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold"> Offshore Specific Skills</h1>

            <div className="   ">
              <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] ">
                DP hours
              </label>
              <input
                type="text"
                value={dPHours}
                onChange={(e) => setDPHours(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder=""
                disabled={disabled}
              />
            </div>
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">Rig Move Experience</h1>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="vesseltype"
            >
              Vessel type
            </label>
            <select
              id="vesseltype"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={vesselType1}
              onChange={(e) => setVesselType1(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {shipTypeDrop && shipTypeDrop?.map((ship: any, index: number) => (
                <option key={index} value={ship}>{ship?.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="rank01"
            >
              Rank
            </label>
            <select
              id="rank01"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {rankDrop && rankDrop?.map((rank: any, index: number) => (
                <option key={index} value={rank}>{rank?.toUpperCase()}</option>
              ))}
            </select>
          </div>
          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="numberOfrig"
            >
              Number of rig moves
            </label>
            <input
              id="numberOfrig"
              type="number"
              value={numberOfrig}
              onChange={(e) => setNumberOfrig(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="moveditem"
            >
              Moved item
            </label>
            <select
              id="moveditem"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={moveditem}
              onChange={(e) => setMoveditem(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {rigMoveDrop && rigMoveDrop?.map((rigM: any, index: number) => (
                <option key={index} value={rigM}>{rigM?.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor=" waterdepth"
            >
              Water depth
            </label>
            <select
              id="waterdepth"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={waterDepth}
              onChange={(e) => setWaterDepth(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {rigMoveWaterDrop && rigMoveWaterDrop?.map((rigMW: any, index: number) => (
                <option key={index} value={rigMW}>{rigMW?.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="tradingarea"
            >
              Trading area
            </label>
            <select
              id="tradingarea"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={tradingArea}
              onChange={(e) => setTradingArea(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {tradingAreaDrop && tradingAreaDrop?.map((tArea: any, index: number) => (
                <option key={index} value={tArea}>{tArea?.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className="grid col-span-2 ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="winchDrive"
            >
              Winch Drive Experience
            </label>
            <select
              id="winchDrive"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={winchDrive}
              onChange={(e) => setWinchDrive(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
              Select 
              </option>
              {winchDiveDrop && winchDiveDrop?.map((dive: any, index: number) => (
                <option key={index} value={dive}>{dive?.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Third section */}

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <Link
            href="#"
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

export default PreSeaTrainigDetails;
