"use client";
import Link from "next/link";
import {
  AddSeaDetailsData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

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
  criminal: any;
  offShoreDetail: any;
};

const PreSeaTrainigDetails = ({
  preSeaTrainigComplete,
  setPreSeaTrainigComplete,
  userDetail,
  criminal,
  offShoreDetail,
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
  const [currencyDrop, setCurrencyDrop] = useState<any>([]);
  const [trainingDrop, setTrainingDrop] = useState<any>([]);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [imoDrop, setImoDrop] = useState([]);
  const [shipTypeDrop, setShipTypeDrop] = useState<any>([]);
  const [rankDrop, setRankDrop] = useState<any>([]);
  const [rigMoveDrop, setRigMoveDrop] = useState<any>([]);
  const [rigMoveWaterDrop, setRigMoveWaterDrop] = useState<any>([]);
  const [tradingAreaDrop, setTradingAreaDrop] = useState<any>([]);
  const [winchDiveDrop, setWinchDiveDrop] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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
    GetDropdownDetails("rank", (res: any) => {
      setRankDrop(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
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

  const totalFields = 29;
  const filledFields = [
    permanect,
    issuedate,
    exdate || neverExpires,
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
  ].filter(Boolean).length;

  // const totalFields = available === "Yes" ? 6 : 5;

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setPreSeaTrainigComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setPreSeaTrainigComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setPreSeaTrainigComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    console.log("seaGoing", offShoreDetail);
    if (offShoreDetail) {
      setPermanect(offShoreDetail?.permanentPerDay);
      setCurrency(offShoreDetail?.currency);
      setSalary(offShoreDetail?.salaryNegotiable ? "Yes" : "No");
      setTimeonBoard(offShoreDetail?.minTimeOnBoardWeeks);
      setMaxTimeonBoard(offShoreDetail?.maxTimeOnBoardWeeks);
      setMinTimeonHome(offShoreDetail?.minTimeAtHomeWeeks);
      setMaxTimeonHome(offShoreDetail?.maxTimeAtHomeWeeks);
      setCertificate(offShoreDetail?.certificate);
      setTrainingCenter(offShoreDetail?.trainingCenter);
      setIssuingCountry(offShoreDetail?.issuingCountry);
      setIssueDate(moment(offShoreDetail?.issueDate).format("YYYY-MM-DD"));
      setNeverExpires(offShoreDetail?.neverExpires);
      setSelectedFile(offShoreDetail?.documentUrl);
      setNumber(offShoreDetail?.certificateNumber);
      setPumpType(offShoreDetail?.pumpType);
      setCrewManager(offShoreDetail?.crewManager);
      setTechnicalManager(offShoreDetail?.technicalManager);
      setOperator(offShoreDetail?.operator);
      setCommercialSpecification(
        offShoreDetail?.vesselTypeCommercialSpecification
      );
      setDesignSpecification(offShoreDetail?.vesselTypeDesignSpecification);
      setDPHours(offShoreDetail?.dpHours);
      setVesselType1(offShoreDetail?.rigMoveVesselType);
      setRank(offShoreDetail?.rigMoveRank);
      setNumberOfrig(offShoreDetail?.rigMoveNumber);
      setMoveditem(offShoreDetail?.movedItem);
      setWaterDepth(offShoreDetail?.waterDepth);
      setTradingArea(offShoreDetail?.tradingArea);
      setWinchDrive(offShoreDetail?.winchDriveExperience);
    }
  }, [offShoreDetail]);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let formData = new FormData();

      {
        formData.append("permanentPerDay", permanect);
        formData.append("currency", currency);
        formData.append("minTimeOnBoardWeeks", timeonBoard);
        formData.append("maxTimeOnBoardWeeks", maxTimeonBoard);
        formData.append("minTimeAtHomeWeeks", minTimeonHome);
        formData.append("maxTimeAtHomeWeeks", maxTimeonHome);
        formData.append("certificate", certificate);
        formData.append("trainingCenter", trainingCenter);
        formData.append("issuingCountry", issuingCountry);
        formData.append("issueDate", issuedate);
        formData.append("expiryDate", exdate);
        formData.append("document", selectedFile);
        formData.append("pumpType", pumpType);
        formData.append("crewManager", crewManager);
        formData.append("technicalManager", technicalManager);
        formData.append("operator", operator);
        formData.append("companyNameOrShipType", vesselType);
        formData.append(
          "vesselTypeCommercialSpecification",
          commercialSpecification
        );
        formData.append("vesselTypeDesignSpecification", designSpecification);
        formData.append("dpHours", dPHours);
        formData.append("rigMoveVesselType", vesselType1);
        formData.append("rigMoveRank", rank);
        formData.append("rigMoveNumber", numberOfrig);
        formData.append("movedItem", moveditem);
        formData.append("waterDepth", waterDepth);
        formData.append("tradingArea", tradingArea);
        formData.append("winchDriveExperience", winchDrive);
        formData.append("color", color);
        formData.append("certificateNumber", number);
        formData.append("completed", percentage);
      }
      AddSeaDetailsData(
        userDetail?.userId,
        salary == "Yes" ? "true" : "false",
        neverExpires,
        formData,
        AddSeaDetailsDataDB
      );
    }
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
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className=" font-bold"> Salary Expectation</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="permanent"
            >
              Permanent (per day)
            </label>
            <input
              id="permanent"
              type="text"
              value={permanect}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "");
                setPermanect(value);
              }}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter  Permanent (per day)"
              disabled={disabled}
            />
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="Currency"
            >
              Currency
            </label>
            <select
              id="Currency"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
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
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="salaryis"
            >
              Salary is Negotiable
            </label>
            <select
              id="salaryis"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
          </div>

          <div className="grid col-span-2">
            {" "}
            <h1 className=" font-bold"> Rotation Expectation</h1>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="minBoard"
            >
              Min. Time on Board (weeks)
            </label>
            <select
              id="minBoard"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={timeonBoard}
              onChange={(e) => setTimeonBoard(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
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
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="maxBoard"
            >
              Max. Time on Board (weeks)
            </label>
            <select
              id="maxBoard"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={maxTimeonBoard}
              onChange={(e) => setMaxTimeonBoard(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
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
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="minHome"
            >
              Min. Time at Home (weeks)
            </label>
            <select
              id="minHome"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={minTimeonHome}
              onChange={(e) => setMinTimeonHome(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
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
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="maxHome"
            >
              Max. Time at Home (weeks)
            </label>
            <select
              id="maxHome"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={maxTimeonHome}
              onChange={(e) => setMaxTimeonHome(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
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
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="certificate1"
            >
              Certificate
            </label>
            <select
              id="certificate1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
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
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="trainingCenter"
            >
              Training Center
            </label>
            <input
              id="trainingCenter"
              type="text"
              value={trainingCenter}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z ]/g, "");
                setTrainingCenter(value);
              }}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter  Training Center"
              disabled={disabled}
            />
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="issuingCountry"
            >
              Issuing Country
            </label>
            <select
              id="issuingCountry"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)}
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

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="number01"
            >
              Enter Certificate Number
            </label>
            <input
              id="number01"
              type="text"
              value={number}
              onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z0-9. ]/g, "");setNumber(value)}} 
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Certificate Number"
              disabled={disabled}
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issue01"
            >
              Issue Date
            </label>
            <input
              id="issue01"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate}
              onChange={(e) => setIssueDate(e.target.value)}
              disabled={disabled}
              placeholder="Enter Issue Date"
            />
          </div>
          {!neverExpires && (
            <div>
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="expiryDate"
              >
                Expiry Date
              </label>
              {/* <div className="flex items-center gap-4 "> */}
              <input
                id="expiryDate"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate}
                onChange={(e) => setExDate(e.target.value)}
                disabled={disabled}
                placeholder="Enter  Expiry Date"
              />
              {/* </div> */}
            </div>
          )}

          <div className=" flex gap-2 items-center mt-5">
            <div>
              <input
                id="neverExpires01"
                type="checkbox"
                className="border focus:ring-[#00A264] text-[14px] leading-[19.07px]  text-[#333333]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264]"
                checked={neverExpires}
                onChange={() => setNeverExpires(!neverExpires)}
                disabled={disabled}
              />
            </div>
            <div>
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="neverExpires01"
              >
                Never Expires
              </label>
            </div>
          </div>

          <div className="grid col-span-2">
            {isHideShow && (
              <div className="flex gap-4 items-center  ">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] "
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
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      No File Selected
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* <div className="grid col-span-2 ">
            <h1 className="font-bold ">Company Name/Ship type</h1>
          </div> */}

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="pumpType"
            >
              Pump Type
            </label>
            <select
              id="pumpType"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={pumpType}
              onChange={(e) => setPumpType(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
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
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Company Crew Manager
            </label>
            <input
              type="text"
              value={crewManager}
              onChange={(e) => {const value = e.target.value.replace(/[^a-zA-Z ]/g, "");setCrewManager(value)}}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter  Company Crew Manager"
              disabled={disabled}
            />
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Technical Manager
            </label>
            <input
              type="text"
              value={technicalManager}
              onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z ]/g, ""); setTechnicalManager(value)}}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Technical Manager"
              disabled={disabled}
            />
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Operator
            </label>
            <input
              type="text"
              value={operator}
              onChange={(e) => {const value = e.target.value.replace(/[^a-zA-Z ]/g, "");setOperator(value)}}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Operator"
              disabled={disabled}
            />
          </div>

          {/* <div className="grid col-span-2">
            <h1 className=" font-bold">Company Name/Ship type</h1>
          </div> */}
          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Company Vessel Type
            </label>
            <input
              type="text"
              value={vesselType}
              onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z ]/g, ""); setVesselType(value)}}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Company Vessel Type"
              disabled={disabled}
            />
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Vessel Type-Commercial Specification
            </label>
            <input
              type="text"
              value={commercialSpecification}
              onChange={(e) => {const value = e.target.value.replace(/[^a-zA-Z ]/g, "");setCommercialSpecification(value)}}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Commercial Specification"
              disabled={disabled}
            />
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Vessel Type-Design Specification
            </label>
            <input
              type="text"
              value={designSpecification}
              onChange={(e) =>{const value = e.target.value.replace(/[^a-zA-Z ]/g, ""); setDesignSpecification(value)}}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Design Specification"
              disabled={disabled}
            />
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold"> Offshore Specific Skills</h1>

            <div className="   ">
              <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
                DP hours
              </label>
              <input
                type="text"
                value={dPHours}
                onChange={(e) => {const value = e.target.value.replace(/[^a-zA-Z0-9. ]/g, "");setDPHours(value)}}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
                placeholder="Enter  DP hours"
                disabled={disabled}
              />
            </div>
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">Rig Move Experience</h1>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="vesseltype"
            >
              Vessel Type
            </label>
            <select
              id="vesseltype"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={vesselType1}
              onChange={(e) => setVesselType1(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {shipTypeDrop &&
                shipTypeDrop?.map((ship: any, index: number) => (
                  <option key={index} value={ship}>
                    {ship?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="rank01"
            >
              Rank
            </label>
            <select
              id="rank01"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {rankDrop &&
                rankDrop?.map((rank: any, index: number) => (
                  <option key={index} value={rank}>
                    {rank?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="numberOfrig"
            >
              Number of rig moves
            </label>
            <input
              id="numberOfrig"
              type="text"
              value={numberOfrig}
              onChange={(e) =>{const value = e.target.value.replace(/[^0-9.]/g, ""); setNumberOfrig(value)}}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Number of rig moves"
              disabled={disabled}
            />
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="moveditem"
            >
              Moved item
            </label>
            <select
              id="moveditem"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={moveditem}
              onChange={(e) => setMoveditem(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {rigMoveDrop &&
                rigMoveDrop?.map((rigM: any, index: number) => (
                  <option key={index} value={rigM}>
                    {rigM?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor=" waterdepth"
            >
              Water depth
            </label>
            <select
              id="waterdepth"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={waterDepth}
              onChange={(e) => setWaterDepth(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {rigMoveWaterDrop &&
                rigMoveWaterDrop?.map((rigMW: any, index: number) => (
                  <option key={index} value={rigMW}>
                    {rigMW?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="tradingarea"
            >
              Trading area
            </label>
            <select
              id="tradingarea"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={tradingArea}
              onChange={(e) => setTradingArea(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {tradingAreaDrop &&
                tradingAreaDrop?.map((tArea: any, index: number) => (
                  <option key={index} value={tArea}>
                    {tArea?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="grid col-span-2 ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="winchDrive"
            >
              Winch Drive Experience
            </label>
            <select
              id="winchDrive"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={winchDrive}
              onChange={(e) => setWinchDrive(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {winchDiveDrop &&
                winchDiveDrop?.map((dive: any, index: number) => (
                  <option key={index} value={dive}>
                    {dive?.toUpperCase()}
                  </option>
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

export default PreSeaTrainigDetails;
