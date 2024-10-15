"use client";
import {
  AddProfessionalSkillData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ProfessionalComplete = {
  percentage: number;
  color: string;
};
type Props = {
  professionalComplete: ProfessionalComplete;
  setProfessionalComplete: React.Dispatch<
    React.SetStateAction<ProfessionalComplete>
  >;
  userDetail: any;
  criminal:any;
};

const ProfessionalSkills = ({
  professionalComplete,
  setProfessionalComplete,
  userDetail,
  criminal
}: Props) => {
  const [maker, setMaker] = useState("");
  const [sWL, setSWL] = useState("");
  const [skill, setSkill] = useState("");
  const [level1, setLevel1] = useState("");
  const [bulkCargo, setBulkCargo] = useState("");
  const [generalCargo, setGeneralCargo] = useState("");
  const [tankerCargo, setTankerCargo] = useState("");
  const [woodProducts, setWoodProducts] = useState("");
  const [stowage, setStowage] = useState("");
  const [typeProfessional, setTypeProfessional] = useState("");
  const [skillmetal, setSkillmetal] = useState("");
  const [levelMetal, setLevelMetal] = useState("");
  const [typeTank, setTypeTank] = useState("");

  const [regionalAgreement, setRegionalAgreement] = useState("");

  const [port, setPort] = useState("");
  const [port1, setPort1] = useState("");

  const [cAvailable, setCAvailable] = useState("");
  const [classApproved, setClassApproved] = useState("");
  const [date, setDate] = useState("");
  const [vdate, setVDate] = useState("");

  const [tradingArea, setTradingArea] = useState("");
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [inspection, setInspection] = useState("");
  const [professionalTstDrop, setProfessionalTstDrop] = useState<any>([]);
  const [professionalLvlDrop, setProfessionalLvlDrop] = useState<any>([]);
  const [cargoGearDrop, setCargoGearDrop] = useState<any>([]);
  const [cargoBulkDrop, setCargoBulkDrop] = useState<any>([]);
  const [cargoTankerDrop, setCargoTankerDrop] = useState<any>([]);
  const [cargoGeneralDrop, setCargoGeneralDrop] = useState<any>([]);
  const [woodProDrop, setWoodProDrop] = useState<any>([]);
  const [stowageDrop, setStowageDrop] = useState<any>([]);
  const [metalWDrop, setMetalWDrop] = useState<any>([]);
  const [metalLvlDrop, setMetalLvlDrop] = useState<any>([]);
  const [tankTypeDrop, setTankTypeDrop] = useState<any>([]);
  const [regionalAgDrop, setRegionalAgDrop] = useState<any>([]);
  const [portDrop, setPortDrop] = useState<any>([]);
  const [tradingAreaDrop, setTradingAreaDrop] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);

  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [isHideShow, setIsHideShow] = useState(false);

  useEffect(() => {
    GetDropdownDetails("ProfessionalKnowledgeTest", (res: any) => {
      setProfessionalTstDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setProfessionalLvlDrop(res?.data?.values);
    });
    GetDropdownDetails("CARGOGEAREXPERIENCE", (res: any) => {
      setCargoGearDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setCargoBulkDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setCargoTankerDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setCargoGeneralDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setWoodProDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setStowageDrop(res?.data?.values);
    });
    GetDropdownDetails("METALWORKINGSKILLS", (res: any) => {
      setMetalWDrop(res?.data?.values);
    });
    GetDropdownDetails("METALWORKINGLevel", (res: any) => {
      setMetalLvlDrop(res?.data?.values);
    });
    GetDropdownDetails("TANKCOATINGTYPEEXPERIENCE", (res: any) => {
      setTankTypeDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setRegionalAgDrop(res?.data?.values);
    });
    GetDropdownDetails("ProfessionalKnowledgeLevel", (res: any) => {
      setPortDrop(res?.data?.values);
    });
    GetDropdownDetails("TRADINGAREAEXPERIENCE", (res: any) => {
      setTradingAreaDrop(res?.data?.values);
    });

    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 25;
  const filledFields = [
    maker,
    sWL,
    skill,
    level1,
    bulkCargo,
    tankerCargo,
    generalCargo,
    woodProducts,
    stowage,
    typeProfessional,
    skillmetal,
    levelMetal,
    typeTank,
    cAvailable,
    classApproved,
    classApproved,
    port,
    port1,
    tradingArea,
    regionalAgreement,
    date,
    vdate,
    description,
    description1,
    selectedFile,
    inspection,
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;

  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setProfessionalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setProfessionalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setProfessionalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
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
    if (!criminal) {
      toast.error("Please accept the declaration");
      return; 
    } else {

    // let formData = new FormData();
    // // formData.append('document', selectedFile);
    // formData.append("computerSkill", skill);
    // formData.append("computerSkillLevel", level1);
    // formData.append("bulkCargo", bulkCargo);
    // formData.append("tankerCargo", tankerCargo);
    // formData.append("generalCargo", generalCargo);
    // formData.append("woodProducts", woodProducts);
    // formData.append("stowageLashingExperience", stowage);
    // formData.append("cargoGearType", typeProfessional);
    // formData.append("cargoGearMaker", maker);
    // formData.append("cargoGearSWL", sWL);
    // formData.append("metalWorkingSkill", skillmetal);
    // formData.append("metalWorkingSkillLevel", levelMetal);
    // formData.append("tankCoatingType", typeTank);
    // formData.append("portStateRegionalAgreement", regionalAgreement);
    // formData.append("portStatePort", port);
    // formData.append("portStateDate", date);
    // formData.append("portStateFindings", description);
    // formData.append("vettingInspectionBy", inspection);
    // formData.append("vettingPort", port1);
    // formData.append("vettingDate", vdate);
    // formData.append("vettingFindings", description1);
    // formData.append("tradingArea", tradingArea);
    // formData.append('document',selectedFile);

  // 
  let data:any = {
    userId:userDetail?.userId,
    
  } 

    }
}

  const AddProfessionalSkillDataCB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("Professional skill submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Professional skill not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    // toast.info("You are now in edit mode. Make your changes.");
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold ">Computer Skills</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="Skill"
            >
              Skill
            </label>
            <select
              id="Skill"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {professionalTstDrop &&
                professionalTstDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="level1"
            >
              Level
            </label>
            <select
              id="level1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={level1}
              onChange={(e) => setLevel1(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {professionalLvlDrop &&
                professionalLvlDrop?.map((lvl: any, index: number) => (
                  <option key={index} value={lvl}>
                    {lvl?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="grid col-span-2">
            <h1 className="font-bold ">Cargo Experience </h1>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="bulkCargo"
            >
              Bulk Cargo
            </label>
            <select
              id="bulkCargo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={bulkCargo}
              onChange={(e) => setBulkCargo(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {cargoBulkDrop &&
                cargoBulkDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="tankerCargo"
            >
              Tanker Cargo
            </label>
            <select
              id="tankerCargo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={tankerCargo}
              onChange={(e) => setTankerCargo(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {cargoTankerDrop &&
                cargoTankerDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="generalCargo"
            >
              General Cargo
            </label>
            <select
              id="generalCargo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={generalCargo}
              onChange={(e) => setGeneralCargo(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {cargoGeneralDrop &&
                cargoGeneralDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="woodProducts"
            >
              Wood Products
            </label>
            <select
              id="woodProducts"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={woodProducts}
              onChange={(e) => setWoodProducts(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {woodProDrop &&
                woodProDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className=" grid col-span-2">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="stowage"
            >
              Stowage And Lashing Experience
            </label>
            <select
              id="stowage"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={stowage}
              onChange={(e) => setStowage(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {stowageDrop &&
                stowageDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">Cargo Gear Experience</h1>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="typeProfessional"
            >
              Type
            </label>
            <select
              id="typeProfessional"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={typeProfessional}
              onChange={(e) => setTypeProfessional(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {cargoGearDrop &&
                cargoGearDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="maker"
            >
              Maker
            </label>
            <input
              id="maker"
              type="text"
              value={maker}
              onChange={(e) => setMaker(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter  Maker"
              disabled={disabled}
            />
          </div>
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="swl"
            >
              SWL
            </label>
            <input
              id="swl"
              type="text"
              value={sWL}
              onChange={(e) => setSWL(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter SWL"
              disabled={disabled}
            />
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">Metal Working Skills</h1>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="skillmetal"
            >
              Skill
            </label>
            <select
              id="skillmetal"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={skillmetal}
              onChange={(e) => setSkillmetal(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {metalWDrop &&
                metalWDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="levelMetal"
            >
              Level
            </label>
            <select
              id="levelMetal"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={levelMetal}
              onChange={(e) => setLevelMetal(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {metalLvlDrop &&
                metalLvlDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Certificate Available
            </label>
            <input
              type="text"
              value={cAvailable}
              onChange={(e) => setCAvailable(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Yes/No"
              disabled={disabled}
            />
          </div>

          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Class Approved
            </label>
            <input
              type="text"
              value={classApproved}
              onChange={(e) => setClassApproved(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Yes/No"
              disabled={disabled}
            />
          </div>

          <div className="grid col-span-2">
            {isHideShow && (
              <div className="flex items-center  gap-4 my-6">
                <div className="flex gap-6 items-center  ">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
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
                </div>
                {/* <div> */}
                {selectedFile ? (
                  <p className="mt-4 text-gray-700">
                    File Selected: {selectedFile.name}
                  </p>
                ) : (
                  <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                    No File Selected
                  </p>
                )}
                {/* </div> */}
              </div>
            )}
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">Tank Coating Type Experience</h1>
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="typeTank"
              >
                Type
              </label>
              <select
                id="typeTank"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={typeTank}
                onChange={(e) => setTypeTank(e.target.value)}
                disabled={disabled}
              >
                <option value="" disabled selected>
                  Select
                </option>
                {tankTypeDrop &&
                  tankTypeDrop?.map((tst: any, index: number) => (
                    <option key={index} value={tst}>
                      {tst?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="grid col-span-2">
            <h1 className="font-bold ">Port State Control Experience </h1>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="regionalAgreement"
            >
              Regional Agreement
            </label>
            <select
              id="regionalAgreement"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={regionalAgreement}
              onChange={(e) => setRegionalAgreement(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {regionalAgDrop &&
                regionalAgDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="port"
            >
              Port
            </label>
            <select
              id="port"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={port}
              onChange={(e) => setPort(e.target.value)}
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
              {/* {portDrop &&
                portDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))} */}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="expiryDate"
            >
              Date
            </label>
            {/* <div className="flex items-center gap-4 mt-2"> */}
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={disabled}
              placeholder="Enter  Date"
            />
            {/* </div> */}
          </div>

          <div className="grid col-span-2   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Description of Findings / Observation / Deficiencies (if any){" "}
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Yes/No"
              disabled={disabled}
            />
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">Vetting Inspection</h1>
          </div>
          <div className="   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Inspection By
            </label>
            <input
              type="text"
              value={inspection}
              onChange={(e) => setInspection(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter  Inspection By"
              disabled={disabled}
            />
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="port1"
            >
              Port
            </label>
            <select
              id="port1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={port1}
              onChange={(e) => setPort1(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {portDrop &&
                portDrop?.map((tst: any, index: number) => (
                  <option key={index} value={tst}>
                    {tst?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="expiryDate"
            >
              Date
            </label>
            {/* <div className="flex items-center gap-4 mt-2"> */}
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vdate}
              onChange={(e) => setVDate(e.target.value)}
              disabled={disabled}
              placeholder="Enter Date"
            />
            {/* </div> */}
          </div>

          <div className="grid col-span-2   ">
            <label className="text-[14px] leading-[19.07px]  text-[#333333] ">
              Description of Findings / Observation / Deficiencies (if any){" "}
            </label>
            <input
              type="text"
              value={description1}
              onChange={(e) => setDescription1(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Yes/No"
              disabled={disabled}
            />
          </div>
          <div className="grid col-span-2">
            <h1 className="font-bold ">Trading Area Experience</h1>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="tradingArea"
              >
                Trading Area
              </label>
              <select
                id="tradingArea"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={tradingArea}
                onChange={(e) => setTradingArea(e.target.value)}
                disabled={disabled}
              >
                <option value="" disabled selected>
                  Select
                </option>
                {tradingAreaDrop &&
                  tradingAreaDrop?.map((tst: any, index: number) => (
                    <option key={index} value={tst}>
                      {tst?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
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

export default ProfessionalSkills;
