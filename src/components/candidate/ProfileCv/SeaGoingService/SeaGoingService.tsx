"use client";
import {
  AddSeagoingData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import moment from "moment";

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
  seaGoingServiceDetail: any;
  criminal:any
};

const SeaGoingService = ({
  seaGoingServiceComplete,
  setSeaGoingServiceComplete,
  userDetail,
  seaGoingServiceDetail,
  criminal
}: Props) => {
  // const [imo , setImo] =useState("")
  // const [versalName, setVercelName] useState ();

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
  const [color, setColor] = useState("");

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

  const totalFields = 11;
  const filledFields = [
    vercelName,
    imo,
    disembarkationDate,
    tonnage,
    rank,
    enginemake,
    eCDIS,
    embarkationdate,
    seagoingNumber,
    gearless,
    inertGas,
  ].filter(Boolean).length;

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setSeaGoingServiceComplete((prevState) => ({
        ...prevState,
        percentage: percentage, 
        color: "#FF0000", 
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setSeaGoingServiceComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: "#FF9900", 
      }));
      setColor("#FF9900");
    } else {
      setSeaGoingServiceComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: "#00A264", 
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  useEffect(() => {
    console.log("seaGoing", seaGoingServiceDetail);
    if (seaGoingServiceDetail) {
      setDisembarkationDate(moment(seaGoingServiceDetail?.disembarkationDate).format('YYYY-MM-DD'));
      setECDIS(seaGoingServiceDetail?.ecdis);
      setEmbarkationDate(moment(seaGoingServiceDetail?.embarkationDate).format('YYYY-MM-DD'));
      setEnginemake(seaGoingServiceDetail?.engineMake);
      setGearless(seaGoingServiceDetail?.gearless);
      setImo(seaGoingServiceDetail?.imoNumber);
      setInertGas(seaGoingServiceDetail?.inertGasSystem);
      setSeagoingNumber(seaGoingServiceDetail?.netSeagoingDays);
      setRank(seaGoingServiceDetail?.rank);
      setTonnage(seaGoingServiceDetail?.tonnage);
      setVercelName(seaGoingServiceDetail?.vesselName);
    }
  },[seaGoingServiceDetail]);

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return; 
    } else {

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
      color: color,
      completed: percentage ,
    };

    AddSeagoingData(data, AddSeagoingDatacb);
  };
}

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

 

  const handleEdit = () => {
    setDisabled(!disabled);
    // toast.info("You are now in edit mode. Make your changes.");
  };

  const handleValidationChange = (valid: any) => (e: any) => {
    const value = e.target.value;
    const alphabeticValue = value.replace(/[^A-Za-z\s]/g, "");
    valid(alphabeticValue);
  };

  const handlePhoneNumberChange = (setter:any) => (e:any) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '');
  setter(value)
    // if (value.length <= 10) {
    //   setter(value);
    // }
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
        {/* {fields.map((field, index) => ( */}
        <div className="grid grid-cols-2 gap-4">
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
              placeholder="Enter IMO"
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

          <div className=" ">
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
              onChange={handleValidationChange(setVercelName)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter  Vessel Name"
              disabled={disabled}
            />
          </div>

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
              onChange={handleValidationChange(setTonnage)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter  Tonnage"
              disabled={disabled}
            />
          </div>
        </div>
        {/* ))} */}

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
              onChange={handleValidationChange(setEnginemake)}
              disabled={disabled}
              placeholder="Enter Engine Make"
            />
            
          </div>

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
              onChange={handleValidationChange(setGearless)}
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
