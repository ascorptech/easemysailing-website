"use client";
import {
  AddSeagoingData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

const SeaGoingService = ({
  seaGoingServiceComplete,
  setSeaGoingServiceComplete,
  userDetail,
}: Props) => {
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

  useEffect(() => {
    GetDropdownDetails("MEDICALFITNESSTYPE", (res: any) => {
      setImoDrop(res?.data?.values);
    });
    GetDropdownDetails("rank", (res: any) => {
      setRankDrop(res?.data?.values);
    });
    GetDropdownDetails("DRUG&ALCOHOLTEST", (res: any) => {
      setEngineDrop(res?.data?.values);
    });
    // GetDropdownDetails('COVID19VACCINE', (res: any) => {
    //   console.log('vac',res?.data)
    //   setVaccineTypeDrop(res?.data?.values)
    // })
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
      " id": userDetail?.userId,
      "vesselName": vercelName,
      "imoNumber": imo,
      "disembarkationDate": disembarkationDate,
      " tonnage": tonnage,
      "rank": rank,
      "engineMake": enginemake,
      "ecdis": eCDIS,
      "embarkationDate": embarkationdate,
      "netSeagoingDays": seagoingNumber,
      "gearless": gearless,
      " inertGasSystem": inertGas,
    };

    AddSeagoingData(data, AddSeagoingDatacb);
  };


  const AddSeagoingDatacb = (result:any)=>{
    console.log('res',result)
    if (result?.status == 200||result?.status == 201) {
      console.log(result)
      toast.success("Sea Going Detaila submited successfully");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      console.log(result)
      toast.error("Sea Going Detaila  not submited");
    }
  }
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className=" font-bold my-2">PASSPORT DETAILS</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="imo"
            >
              IMO
            </label>
            <select
              id="imo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={imo}
              onChange={(e) => setImo(e.target.value)}
            >
              <option value="" disabled selected>
                IMO
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
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="vesselname"
            >
              Vessel Name
            </label>
            <input
              id="vesselname"
              type="text"
              value={vercelName}
              onChange={(e) => setVercelName(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="rank1"
            >
              Rank
            </label>
            <select
              id="rank1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            >
              <option value="" disabled selected>
                Rank
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
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="tonnage"
            >
              Tonnage
            </label>
            <input
              id="tonnage"
              type="text"
              value={tonnage}
              onChange={(e) => setTonnage(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className=" grid col-span-2  my-2">
            {" "}
            <h1 className="font-bold"> Seaman Experience Details</h1>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="enginemake"
            >
              Engine Make
            </label>
            <select
              id="enginemake"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={enginemake}
              onChange={(e) => setEnginemake(e.target.value)}
            >
              <option value="" disabled selected>
                Engine Make
              </option>
              {engineDrop &&
                engineDrop?.map((eng: any, index: number) => (
                  <option key={index} value={eng}>
                    {eng?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          {/* <div className=""> */}

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              htmlFor="issue"
            >
              Embarkation Date
            </label>
            <input
              id="issue"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={embarkationdate}
              onChange={(e) => setEmbarkationDate(e.target.value)}
            />
          </div>
          {/* </div> */}

          {/* <div className="grid "> */}

          <div className="">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  "
              htmlFor="expiryDate"
            >
              Disembarkation date
            </label>
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={disembarkationDate}
              onChange={(e) => setDisembarkationDate(e.target.value)}
            />
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="netSeagoingDays"
            >
              Net Seagoing Days
            </label>
            <input
              id="netSeagoingDays"
              type="text"
              value={seagoingNumber}
              onChange={(e) => setSeagoingNumber(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="ecdis"
            >
              ECDIS
            </label>
            <select
              id="ecdis"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={eCDIS}
              onChange={(e) => setECDIS(e.target.value)}
            >
              <option value="" disabled selected>
                ECDIS
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="  ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="Gearless"
            >
              Gearless
            </label>
            <input
              id="Gearless"
              type="text"
              value={gearless}
              onChange={(e) => setGearless(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
              required
            />
          </div>

          <div className="  ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="inertGasSysterm"
            >
              Inert Gas Systerm
            </label>
            <input
              id="inertGasSysterm"
              type="text"
              value={inertGas}
              onChange={(e) => setInertGas(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              required
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
            href="#"
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
