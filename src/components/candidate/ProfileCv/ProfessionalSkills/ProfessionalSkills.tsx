"use client";
import { AddProfessionalSkillData, GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ProfessionalComplete = {
  percentage: number;
  color: string;
};
type Props={
  professionalComplete:ProfessionalComplete; 
  setProfessionalComplete: React.Dispatch<React.SetStateAction<ProfessionalComplete>>; 
  userDetail:any
}


const ProfessionalSkills = ({professionalComplete, setProfessionalComplete, userDetail}:Props) => {
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

  // useEffect(() => {
  //   GetDropdownDetails('gender',(res:any)=>{
  //     setGenderDrop(res?.data?.values)
  //   })
  //   GetDropdownDetails('martialStatus',(res:any)=>{
  //     setMartialStatusDrop(res?.data?.values)
  //   })
  // }, [])




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
    inspection
    
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;
 
  let color;
  useEffect(() => {
    console.log('user',userDetail)
    if (percentage <= 30) {
      setProfessionalComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: '#FF0000' 
      }));
      color = "red"; 
    } else if (percentage <= 70) {
      setProfessionalComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: '#FF9900' 
      }));
      color = "#FF9900"; 
    } else {
      setProfessionalComplete((prevState) => ({
        ...prevState, 
        percentage: percentage, 
        color: '#00A264'
      }));
      color = "green";
    }
  }, [percentage,color])



  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // try {
    e.preventDefault();

    let formData = new FormData()
    // formData.append('document', selectedFile);
    formData.append('computerSkill', skill);
    formData.append('computerSkillLevel', level1);
    formData.append('bulkCargo', bulkCargo);
    formData.append('tankerCargo', tankerCargo);
    formData.append('generalCargo', generalCargo);
    formData.append('woodProducts', woodProducts);
    formData.append('stowageLashingExperience', stowage);
    formData.append('cargoGearType', typeProfessional);
    formData.append('cargoGearMaker', maker);
    formData.append('cargoGearSWL', sWL);
    formData.append('metalWorkingSkill',skillmetal);
    formData.append('metalWorkingSkillLevel',levelMetal);
    formData.append('tankCoatingType',typeTank);
    formData.append('portStateRegionalAgreement',regionalAgreement);
    formData.append('portStatePort',port);
    formData.append('portStateDate',date);
    formData.append('portStateFindings',description);
    formData.append('vettingInspectionBy',inspection);
    formData.append('vettingPort',port1);
    formData.append('vettingDate',vdate);
    formData.append('vettingFindings',description1);
    formData.append('tradingArea',tradingArea);
    // formData.append('document',selectedFile);

    AddProfessionalSkillData(userDetail?.userId,cAvailable,classApproved,formData,AddProfessionalSkillDataCB)
  };

  const AddProfessionalSkillDataCB = (result:any)=>{
    console.log(result);
    if (result?.status == 200) {
      toast.success("Professional skill submited successfully");
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      toast.error("Professional skill not submited ");
    }
  }

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
       <form onSubmit={handleSubmit}>
      <h1 className="font-bold ">COMPUTER SKILLS</h1>
      <div className="grid grid-cols-2 gap-4">
      <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="Skill">
            Skill
            </label>
            <select
              id="Skill"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            >
              <option value="" disabled selected>
              Skill
              </option>
              <option value="skill">Skill1</option>
              <option value="skill">Skill2</option>
              <option value="skill">Skill3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="level1">
            Level
            </label>
            <select
              id="level1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={level1}
              onChange={(e) => setLevel1(e.target.value)}
            >
              <option value="" disabled selected>
              Level
              </option>
              <option value="level1">Level1</option>
              <option value="level2">Level2</option>
              <option value="level3">Level3</option>
            </select>
          </div>
          <div className="grid col-span-2">
          <h1 className="font-bold ">CARGO EXPERIENCE</h1>

          </div>

          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="bulkCargo">
            Bulk Cargo
            </label>
            <select
              id="bulkCargo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={bulkCargo}
                  onChange={(e) => setBulkCargo(e.target.value)}
            >
              <option value="" disabled selected>
              Bulk Cargo
              </option>
              <option value="bulk cargo1">Bulk Cargo1</option>
              <option value="bulk cargo2">Bulk Cargo2</option>
              <option value="bulk cargo3">Bulk Cargo3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="tankerCargo">
            Tanker Cargo
            </label>
            <select
              id="tankerCargo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={tankerCargo}
              onChange={(e) => setTankerCargo(e.target.value)}
            >
              <option value="" disabled selected>
              Tanker Cargo
              </option>
              <option value="Tanker Cargo1">Tanker Cargo1</option>
              <option value="Tanker Cargo2">Tanker Cargo2</option>
              <option value="Tanker Cargo3">Tanker Cargo3</option>
            </select>
          </div>


          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="generalCargo">
            General Cargo
            </label>
            <select
              id="generalCargo"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={generalCargo}
                  onChange={(e) => setGeneralCargo(e.target.value)}
            >
              <option value="" disabled selected>
              General Cargo
              </option>
              <option value="General Cargo1">General Cargo1</option>
              <option value="General Cargo2">General Cargo2</option>
              <option value="General Cargo3">General Cargo3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="woodProducts">
            Wood Products
            </label>
            <select
              id="woodProducts"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={woodProducts}
                  onChange={(e) => setWoodProducts(e.target.value)}
            >
              <option value="" disabled selected>
              Wood Products
              </option>
              <option value="wood Products1">Wood Products1</option>
              <option value="wood Products2 ">Wood Products2</option>
              <option value="wood Products3">Wood Products3</option>
            </select>
          </div>

          <div className=" grid col-span-2">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="stowage">
            Stowage and Lashing Experience
            </label>
            <select
              id="stowage"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={stowage}
                  onChange={(e) => setStowage(e.target.value)}
            >
              <option value="" disabled selected>
              Stowage and Lashing Experience
              </option>
              <option value="Wood Products1">Wood Products1</option>
              <option value="Wood Products2">Wood Products2</option>
              <option value="Wood Products3">Wood Products3</option>
            </select>
          </div>

          <div className="grid col-span-2">
            <h1 className=" font-bold">CARGO GEAR EXPERIENCE</h1>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="typeProfessional">
            Type
            </label>
            <select
              id="typeProfessional"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={typeProfessional}
              onChange={(e) => setTypeProfessional(e.target.value)}
            >
              <option value="" disabled selected>
              Type
              </option>
              <option value="type1">Type1</option>
              <option value="type2">Type2</option>
              <option value="type3">Type3</option>
            </select>
          </div>
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
            htmlFor="maker"
          >
            Maker
          </label>
          <input
            id="maker"
            type="text"
            value={maker}
            onChange={(e) => setMaker(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
            htmlFor="swl"
          >
            SWL
          </label>
          <input
            id="swl"
            type="text"
            value={sWL}
            onChange={(e) => setSWL(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder=""
            required
          />
        </div>

        <div className="grid col-span-2"><h1 className=" font-bold">METAL WORKING SKILLS</h1></div>

        <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="skillmetal">
            Skill
            </label>
            <select
              id="skillmetal"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={skillmetal}
              onChange={(e) => setSkillmetal(e.target.value)}
            >
              <option value="" disabled selected>
              Skill
              </option>
              <option value="type1">Type1</option>
              <option value="type2">Type2</option>
             
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="levelMetal">
            Level
            </label>
            <select
              id="levelMetal"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={levelMetal}
              onChange={(e) => setLevelMetal(e.target.value)}
            >
              <option value="" disabled selected>
              Level
              </option>
              <option value="t">Type1</option>
              <option value="t2">Type2</option>
              <option value="t3">Type3</option>
            </select>
          </div>
         

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
           
          >
           Certificate Available
          </label>
          <input
            
            type="text"
            value={cAvailable}
            onChange={(e) => setCAvailable(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder="Yes/No"
            required
          />
        </div>

        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
           
          >
           Class Approved
          </label>
          <input
            
            type="text"
            value={classApproved}
            onChange={(e) => setClassApproved(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder="Yes/No"
            required
          />
        </div>

      <div className="grid col-span-2">

      <div className="flex items-center  gap-4 my-6">
        <div className="flex gap-6 items-center  ">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
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
          <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
            No file selected
          </p>
        )}
        {/* </div> */}
      </div>
      </div>

      <div className="grid col-span-2">
        <h1 className=" font-bold" >TANK COATING TYPE EXPERIENCE</h1>
        <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="typeTank">
            Type
            </label>
            <select
              id="typeTank"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={typeTank}
              onChange={(e) => setTypeTank(e.target.value)}
            >
              <option value="" disabled selected>
              Type
              </option>
              <option value="t1">Type1</option>
              <option value="t2">Type2</option>
              <option value="t3">Type3</option>
            </select>
          </div>
      </div>

      <div className="grid col-span-2"><h1 className="font-bold ">PORT STATE CONTROL EXPERIENCE</h1></div>
      <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="regionalAgreement">
            Regional Agreement
            </label>
            <select
              id="regionalAgreement"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={regionalAgreement}
              onChange={(e) => setRegionalAgreement(e.target.value)}
            >
              <option value="" disabled selected>
              Regional Agreement
              </option>
              <option value="type1">Type1</option>
              <option value="type2">Type2</option>
              <option value="type3">Type3</option>
            </select>
          </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="port">
            Port
            </label>
            <select
              id="port"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            >
              <option value="" disabled selected>
              Port
              </option>
              <option value="port1">Port1</option>
              <option value="port2">Port2</option>
              <option value="port3">Port3</option>
            </select>
          </div>
          <div className="">
        <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  " htmlFor="expiryDate">
          Date
        </label>
        {/* <div className="flex items-center gap-4 mt-2"> */}
          <input
            id="expiryDate"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {/* </div> */}
          </div>

          <div className="grid col-span-2   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
           
          >
            Description of Findings / Observation / Deficiencies (if any)          </label>
          <input
            
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            placeholder="Yes/No"
            required
          />
        </div>

        <div className="grid col-span-2"><h1 className=" font-bold">VETTING INSPECTION EXPERIENCE</h1></div>
        <div className="   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
           
          >
           Inspection By
          </label>
          <input
            
            type="text"
            value={inspection}
            onChange={(e) => setInspection(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder=""
            required
          />
        </div>
          <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="port1">
            Port
            </label>
            <select
              id="port1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={port1}
              onChange={(e) => setPort1(e.target.value)}
            >
              <option value="" disabled selected>
              Port
              </option>
              <option value="port1">Port1</option>
              <option value="port2">Port2</option>
              <option value="port3">Port3</option>
            </select>
          </div>
          <div className="">
        <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]  " htmlFor="expiryDate">
          Date
        </label>
        {/* <div className="flex items-center gap-4 mt-2"> */}
          <input
            id="expiryDate"
            type="date"
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
            value={vdate}
            onChange={(e) => setVDate(e.target.value)}
          />
          {/* </div> */}
          </div>

          <div className="grid col-span-2   ">
          <label
            className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
           
          >
            Description of Findings / Observation / Deficiencies (if any)          </label>
          <input
            
            type="text"
            value={description1}
            onChange={(e) => setDescription1(e.target.value)}
            className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
            placeholder="Yes/No"
            required
          />
        </div>
        <div className="grid col-span-2"><h1 className="font-bold ">TRADING AREA EXPERIENCE</h1>

        <div className="">
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="tradingArea">
            Trading Area
            </label>
            <select
              id="tradingArea"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={tradingArea}
              onChange={(e) => setTradingArea(e.target.value)}
            >
              <option value="" disabled selected>
              Trading Area
              </option>
              <option value="port1">Port1</option>
              <option value="port2">Port2</option>
              <option value="port3">Port3</option>
            </select>
          </div>
         </ div>

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