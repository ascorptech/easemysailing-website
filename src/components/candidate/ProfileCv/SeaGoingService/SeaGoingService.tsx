"use client";
import {
  AddSeagoingData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type SeaGoingServiceComplete = {
  percentage: number;
  color: string;
};
type Props = {
  seaGoingServiceComplete: SeaGoingServiceComplete;
  setSeaGoingServiceComplete: React.Dispatch<
    React.SetStateAction<SeaGoingServiceComplete>
  >;
  userDetail: any;
};

type SeaGoingFiled = {
  imo: string;
  VersalName: string;
  rank:string;
  tonnage:string;
};

const SeaGoingService = ({
  seaGoingServiceComplete,
  setSeaGoingServiceComplete,
  userDetail,
}: Props) => {
  const [fields, setFields] = useState<SeaGoingFiled[]>([
    { imo: "", VersalName: "" ,rank: "",tonnage:""},
  ]);
  const [vercelName, setVercelName] = useState("");
  const [embarkationdate, setEmbarkationDate] = useState("");
  const [disembarkationDate, setDisembarkationDate] = useState("");
  const [tonnage, setTonnage] = useState("");
  const [seagoingNumber, setSeagoingNumber] = useState("");
  const [enginemake, setEnginemake] = useState("");
  const [eCDIS, setECDIS] = useState("");
  const [imo, setImo] = useState("");
  const [rank, setRank] = useState("");
  const [gearless, setGearless] = useState("");
  const [inertGas, setInertGas] = useState("");
  const [imoDrop, setImoDrop] = useState([]);
  const [rankDrop, setRankDrop] = useState<any>([]);
  const [engineDrop, setEngineDrop] = useState<any>([]);
  const [ecdisDrop, setEcdisDrop] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);


  useEffect(() => {
    GetDropdownDetails("SEAGOINGEXP", (res: any) => {
      setImoDrop(res?.data?.values);
    });
    GetDropdownDetails("rank", (res: any) => {
      setRankDrop(res?.data?.values);
    });
    GetDropdownDetails("DRUG&ALCOHOLTEST", (res: any) => {
      setEngineDrop(res?.data?.values);
    });
    GetDropdownDetails("ecdisEquipment", (res: any) => {
      console.log("vac", res?.data);
      setEcdisDrop(res?.data?.values);
    });
    // GetDropdownDetails('country', (res: any) => {
    //   // console.log('County',res?.data)
    //   setCountryDrop(res?.data?.values)
    // })
  }, []);

  // const totalFields = 11;
  const totalFields = fields.length * 4 + 9;
  const filledFields = [
    ...fields.map((field) => field.imo),
    ...fields.map((field) => field.VersalName),
    ...fields.map((field) => field.rank),
    ...fields.map((field) => field.tonnage),


    // vercelName,
    // imo,
    disembarkationDate,
    // tonnage,
    // rank,
    enginemake,
    eCDIS,
    embarkationdate,
    seagoingNumber,
    gearless,
    inertGas,
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setSeaGoingServiceComplete((prevState) => ({
        ...prevState,
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setSeaGoingServiceComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setSeaGoingServiceComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#00A264", // Update the color field
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    let data = {
      id: userDetail?.userId,
      vesselName: vercelName,
      imoNumber: imo,
      disembarkationDate: disembarkationDate,
      tonnage: tonnage,
      rank: rank,
      engineMake: enginemake,
      ecdis: eCDIS,
      embarkationDate: embarkationdate,
      netSeagoingDays: seagoingNumber,
      gearless: gearless,
      inertGasSystem: inertGas,
    };

    AddSeagoingData(data, AddSeagoingDatacb);
  };

  const AddSeagoingDatacb = (result: any) => {
    console.log("res", result);
    if (result?.status == 200 || result?.status == 201) {
      console.log(result);
      toast.success("Sea Going Detaila submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      console.log(result);
      toast.error("Sea Going Detaila  not submited");
    }
  };

  const handleFieldChange = (index: number, name: string, value: string) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { imo: "", VersalName: "" ,rank:"", tonnage:"" }]);
  };

  const removeField = () => {
    if (fields.length > 1) {
      setFields(fields.slice(0, -1));
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h1 className=" font-bold my-2">SeaGoing Experience</h1>

          {/* <div className="flex gap-2">
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
          </div> */}
        </div>
        {fields.map((field, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="imo"
              >
                IMO
              </label>
              <input
                id="imo"
                type="text"
                value={imo}
                onChange={(e) => setImo(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter  IMO"
                disabled={disabled}
              />
              {/* <select
              id="imo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={imo}
              onChange={(e) => setImo(e.target.value)}
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
            </select> */}
            </div>

            <div className="   ">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="vesselname"
              >
                Vessel Name
              </label>
              <input
                id="vesselname"
                type="text"
                value={vercelName}
                onChange={(e) => setVercelName(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter  Vessel Name"
                disabled={disabled}
              />
            </div>

            {/* <div className="flex justify-start items-center gap-4">
              {index === fields.length - 1 && (
                <AiOutlinePlus
                  className="text-green-600 cursor-pointer"
                  onClick={addField}
                />
              )}
              {fields.length > 1 && index === fields.length - 1 && (
                <AiOutlineMinus
                  className="text-red-600 cursor-pointer"
                  onClick={removeField}
                />
              )}
            </div> */}
          {/* </div> */}
        {/* ))} */}
        {/* <div className=" grid grid-cols-2 gap-4"> */}
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="rank1"
            >
              Rank
            </label>
            <select
              id="rank1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {rankDrop &&
                rankDrop?.map((rank: any, index: number) => (
                  <option key={index} value={rank}>
                    {rank?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="tonnage"
            >
              Tonnage
            </label>
            <input
              id="tonnage"
              type="text"
              value={tonnage}
              onChange={(e) => setTonnage(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter  Tonnage"
              disabled={disabled}
            />
          </div>
          </div>
        ))}

          <div className="   my-2">
            {" "}
            <h1 className="font-bold"> Seaman Experience Details</h1>
          </div>
<div className=" grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="enginemake"
            >
              Engine Make
            </label>

            <input
              id="enginemake"
              type="text"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={enginemake}
              onChange={(e) => setEnginemake(e.target.value)}
              disabled={disabled}
              placeholder="Enter Engine Make"
            />
            {/* <select
              id="enginemake"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={enginemake}
              onChange={(e) => setEnginemake(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {engineDrop &&
                engineDrop?.map((eng: any, index: number) => (
                  <option key={index} value={eng}>
                    {eng?.toUpperCase()}
                  </option>
                ))}
            </select> */}
          </div>

          {/* <div className=""> */}

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issue"
            >
              Embarkation Date
            </label>
            <input
              id="issue"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={embarkationdate}
              onChange={(e) => setEmbarkationDate(e.target.value)}
              disabled={disabled}
              placeholder="Enter  Embarkation Date"
            />
          </div>
          {/* </div> */}

          {/* <div className="grid "> */}

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="expiryDate"
            >
              Disembarkation date
            </label>
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={disembarkationDate}
              onChange={(e) => setDisembarkationDate(e.target.value)}
              disabled={disabled}
              placeholder="Enter  Disembarkation date"
            />
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="netSeagoingDays"
            >
              Net Seagoing Days
            </label>
            <input
              id="netSeagoingDays"
              type="text"
              value={seagoingNumber}
              onChange={(e) => setSeagoingNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Net Seagoing Days"
              disabled={disabled}
            />
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="ecdis"
            >
              ECDIS
            </label>
            <select
              id="ecdis"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={eCDIS}
              onChange={(e) => setECDIS(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {ecdisDrop &&
                ecdisDrop?.map((ecd: any, index: number) => (
                  <option key={index} value={ecd}>
                    {ecd?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="  ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="Gearless"
            >
              Gearless
            </label>
            <input
              id="Gearless"
              type="text"
              value={gearless}
              onChange={(e) => setGearless(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Gearless"
              disabled={disabled}
            />
          </div>

          <div className="  ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="inertGasSysterm"
            >
              Inert Gas Systerm
            </label>
            <input
              id="inertGasSysterm"
              type="text"
              value={inertGas}
              onChange={(e) => setInertGas(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Inert Gas Systerm"
              disabled={disabled}
            />
          </div>
        </div>

        {/* fifth section */}

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <Link
            href={'#'}
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

export default SeaGoingService;
