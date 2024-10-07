// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// type AcademicComplete = {
//   percentage: number;
//   color: string;
// };

// type AcademicForm = {
//   degree: string;
//   percentage: string;
//   startdate: string;
//   enddate: string;
//   selectedFile: File | null;
// };
// type EducationForm = {
//   university: string;
//   subject: string;
//   city: string;
//   issuingCountry: string;
// };

// type Props = {
//   academicComplete: AcademicComplete;
//   setAcademicComplete: React.Dispatch<React.SetStateAction<AcademicComplete>>;
//   userDetail: any;
// };

// const AcademicDetails = ({
//   academicComplete,
//   setAcademicComplete,
//   userDetail,
// }: Props) => {
//   // const [fields, setFields] = useState<AcademicForm[]>([
//   //   { degree: "", percentage: "",
//   //     startdate:"", enddate:"",
//   //     selectedFile: null,
//   //    },
//   // ]);
//   const [academicForms, setAcademicForms] = useState<AcademicForm[]>([
//     {
//       degree: "",
//       percentage: "",
//       startdate: "",
//       enddate: "",
//       selectedFile: null,
//     },
//   ]);

//   const [educationForms, setEducationForms] = useState<EducationForm[]>([
//     {
//       university: "",
//       subject: "",
//       city: "",
//       issuingCountry: "",
//     },
//   ]);

//   const [startdate, setStartDate] = useState("");
//   const [enddate, setEndDate] = useState("");

//   const [university, setUniversity] = useState("");
//   const [subject, setSubject] = useState("");
//   const [city, setCity] = useState("");

//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const [trainingCenter, setTrainingCenter] = useState("");
//   const [eCDISNumber, setECDISNumber] = useState("");
//   const [issuedate1, setIssueDate1] = useState("");
//   const [issuingCountry, setIssuingCountry] = useState("");
//   const [countryDrop, setCountryDrop] = useState<any>([]);
//   const [disabled, setDisabled] = useState(true);

//   // const totalFields = fields.length * 2 + 7;
//   // const filledFields = [
//   //   ...fields.map((field) => field.degree),
//   //   ...fields.map((field) => field.percentage),
//   //   startdate,
//   //   enddate,
//   //   selectedFile,
//   //   university,
//   //   subject,
//   //   city,
//   //   selectedFile,
//   //   issuingCountry,
//   // ].filter(Boolean).length;

//   const totalFields = 9;
//   const filledFields =[
//     university,
//     subject,
//     city,
//     issuingCountry,
//    ...academicForms.flatMap(
//     (form) =>

//       [
//         form.degree,
//         form.percentage,
//         form.startdate,
//         form.enddate,
//         form.selectedFile,
//       ]),].filter(Boolean).length;

//   const percentage =
//     (filledFields / (totalFields * academicForms.length)) * 100;
//   let color;

//   useEffect(() => {
//     console.log("user", userDetail);
//     if (percentage <= 30) {
//       setAcademicComplete((prevState) => ({
//         ...prevState,
//         percentage: percentage,
//         color: "#FF0000",
//       }));
//       color = "red";
//     } else if (percentage <= 70) {
//       setAcademicComplete((prevState) => ({
//         ...prevState,
//         percentage: percentage,
//         color: "#FF9900",
//       }));
//       color = "#FF9900";
//     } else {
//       setAcademicComplete((prevState) => ({
//         ...prevState,
//         percentage: percentage,
//         color: "#00A264",
//       }));
//       color = "green";
//     }
//   }, [percentage, color]);

//   const handleFileChange = (index: number, event: any) => {
//     const updatedForms = [...academicForms];
//     updatedForms[index].selectedFile = event.target.files?.[0] || null;
//     setAcademicForms(updatedForms);
//   };

//   const handleFormChange = (
//     index: number,
//     field: keyof AcademicForm,
//     value: any
//   ) => {
//     const updatedForms = [...academicForms];
//     updatedForms[index][field] = value;
//     setAcademicForms(updatedForms);
//   };

//   const addField = () => {
//     setAcademicForms([
//       ...academicForms,
//       {
//         degree: "",
//         percentage: "",
//         startdate: "",
//         enddate: "",
//         selectedFile: null,
//       },
//     ]);
//   };

//   const removeField = (index:any) => {
//     const updatedForms = academicForms.filter((_, i) => i !== index);
//     setAcademicForms(updatedForms);
//   };

//   const handleFormChangeEdu = (index: number, field: keyof EducationForm, value: any) => {
//     const updatedForms = [...educationForms];
//     updatedForms[index][field] = value;
//     setEducationForms(updatedForms);
//   };

//   const handleAddForm = () => {
//     setEducationForms([
//       ...educationForms,
//       {
//         university: "",
//         subject: "",
//         city: "",
//         issuingCountry: "",
//       },
//     ]);
//   };

//   const handleRemoveForm = (index: number) => {
//     const updatedForms = educationForms.filter((_, i) => i !== index);
//     setEducationForms(updatedForms);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   const handleEdit = () => {
//     setDisabled(!disabled);
//   };
//   return (
//     <div className="container border-2 shadow-lg p-3 mt-[14px] mb-8">
//       <form onSubmit={handleSubmit}>
//         <div className="flex items-center justify-between">
//           <h1 className="font-bold">Qualification</h1>

//           <div className="flex gap-2">
//             <AiOutlinePlus
//               className="text-2xl cursor-pointer"
//               onClick={addField}
//             />
//             {/* {extraFields.length > 0 && ( */}
//             {academicForms.length > 1 && (
//               <AiOutlineMinus
//                 className="text-2xl cursor-pointer"
//                 onClick={() => removeField (index)}
//               />
//             )}
//           </div>
//         </div>

//         {academicForms.map((field, index) => (
//           <div key={index} className="grid grid-cols-2 gap-4 mt-4">
//             <div>
//               <label
//                 className="text-[14px] font-[poppins] text-[#333333]"
//                 htmlFor={`degree_${index}`}
//               >
//                 Degree
//               </label>
//               <input
//                 id={`degree_${index}`}
//                 type="text"
//                 value={field.degree}
//                 onChange={(e) =>
//                   handleFormChange(index, "degree", e.target.value)
//                 }
//                 className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//                 placeholder="Enter degree"
//                 disabled={disabled}
//               />
//             </div>
//             <div>
//               <label
//                 className="text-[14px] font-[poppins] text-[#333333]"
//                 htmlFor={`percetnge_${index}`}
//               >
//                 Percentage
//               </label>
//               <input
//                 id={`percetnge_${index}`}
//                 type="number"
//                 value={field.percentage}
//                 onChange={(e) =>
//                   handleFormChange(index, "percentage", e.target.value)
//                 }
//                 className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//                 placeholder="Enter percentage"
//                 disabled={disabled}
//               />
//             </div>
//             {/* <div className="flex justify-start items-center gap-4">
//               {index === fields.length - 1 && (
//                 <AiOutlinePlus
//                   className="text-green-600 cursor-pointer"
//                   onClick={addField}

//                 />
//               )}
//               {fields.length > 1 && index === fields.length - 1 && (
//                 <AiOutlineMinus
//                   className="text-red-600 cursor-pointer"
//                   onClick={removeField}

//                 />
//               )}
//             </div> */}
//           {/* </div> */}
//         {/* ))} */}

//         <div className="grid col-span-2">
//           <h1 className="font-bold">Passing Year</h1>
//         </div>

//         {/* <div className="grid grid-cols-2 gap-4"> */}
//           <div>
//             <label className="text-[14px] font-[poppins] text-[#333333]">
//               Start Date
//             </label>
//             <input
//               type="date"
//               value={field.startdate}
//               // onChange={(e) => setStartDate(e.target.value)}
//               onChange={(e) => handleFormChange(index, "startdate", e.target.value)}
//               className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//               disabled={disabled}
//             />
//           </div>
//           <div>
//             <label className="text-[14px] font-[poppins] text-[#333333]">
//               End Date
//             </label>
//             <input
//               type="date"
//               value={field.enddate}
//               // onChange={(e) => setEndDate(e.target.value)}
//               onChange={(e) => handleFormChange(index, "enddate", e.target.value)}

//               className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//               disabled={disabled}
//             />
//           </div>

//         <div className="grid col-span-2 gap-4 ">
//           <div className="flex items-center gap-4">
//           <div className="flex gap-6 items-center">
//             <label
//               htmlFor={`file-upload_${index}`}
//               className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] text-[14px] font-[poppins]"
//             >
//               Attachment Document
//             </label>
//             <input
//               id={`file-upload_${index}`}
//               type="file"
//               className="hidden"
//               onChange={(e) => handleFileChange(index, e)}
//               disabled={disabled}
//             />
//           </div>
//           {field.selectedFile ? (
//             <p className="mt-4 text-gray-700">
//               File Selected: {field.selectedFile.name}
//             </p>
//           ) : (
//             <p className="text-[14px] font-[poppins] text-[#333333]">
//               No file selected
//             </p>
//           )}
//         </div>
//         </div>
//         </div>
//   ))}

//         <div className="flex justify-between items-center mt-4">
//           <h1 className="font-bold ">Education</h1>

//           <div className="flex gap-2">
//             <AiOutlinePlus
//               className="text-2xl cursor-pointer"
//               // onClick={addFieldPair}
//             />
//             {/* {extraFields.length > 0 && ( */}
//             <AiOutlineMinus
//               className="text-2xl cursor-pointer"
//               // onClick={removeFieldPair}
//             />
//             {/* )} */}
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="   ">
//             <label
//               className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
//               htmlFor="university"
//             >
//               School / College / University{" "}
//             </label>
//             <input
//               id="university"
//               type="text"
//               value={university}
//               onChange={(e) => setUniversity(e.target.value)}
//               className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//               placeholder="Enter University"
//               disabled={disabled}
//             />
//           </div>
//           <div className="   ">
//             <label
//               className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
//               htmlFor="subject"
//             >
//               Subject
//             </label>
//             <input
//               id="subject"
//               type="text"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
//               placeholder=""
//               disabled={disabled}
//             />
//           </div>
//           <div className=" ">
//             <label
//               className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
//               htmlFor="optionT1"
//             >
//               Country
//             </label>
//             <select
//               id="optionT1"
//               className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//               name="options"
//               value={issuingCountry}
//               onChange={(e) => setIssuingCountry(e.target.value)}
//               disabled={disabled}
//             >
//               <option value="" disabled selected>
//                 Issuing Country
//               </option>
//               {countryDrop &&
//                 countryDrop?.map((country: any, index: number) => (
//                   <option key={index} value={country}>
//                     {country?.toUpperCase()}
//                   </option>
//                 ))}
//             </select>
//           </div>

//           <div className="   ">
//             <label
//               className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
//               htmlFor="number"
//             >
//               City{" "}
//             </label>
//             <input
//               id="number"
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//               placeholder=""
//               disabled={disabled}
//             />
//           </div>
//         </div>

//         <div className="flex gap-2 mb-4 mt-4">
//           <button
//             type="submit"
//             className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
//           >
//             Save
//           </button>
//           <Link
//             href="#"
//             onClick={handleEdit}
//             className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
//           >
//             Edit
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AcademicDetails;

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type AcademicComplete = {
  percentage: number;
  color: string;
};

type AcademicForm = {
  degree: string;
  percentage: string;
  startdate: string;
  enddate: string;
  selectedFile: File | null;
};
type EducationForm = {
  university: string;
  subject: string;
  city: string;
  issuingCountry: string;
};

type Props = {
  academicComplete: AcademicComplete;
  setAcademicComplete: React.Dispatch<React.SetStateAction<AcademicComplete>>;
  userDetail: any;
};

const AcademicDetails = ({
  academicComplete,
  setAcademicComplete,
  userDetail,
}: Props) => {
  const [academicForms, setAcademicForms] = useState<AcademicForm[]>([
    {
      degree: "",
      percentage: "",
      startdate: "",
      enddate: "",
      selectedFile: null,
    },
  ]);

  const [educationForms, setEducationForms] = useState<EducationForm[]>([
    {
      university: "",
      subject: "",
      city: "",
      issuingCountry: "",
    },
  ]);

  const [university, setUniversity] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [issuingCountry, setIssuingCountry] = useState("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);

  const totalFields = educationForms.length * 4 + academicForms.length * 5;
  const filledFields = [
    ...educationForms.flatMap((formed) => [
      formed.university,
      formed.subject,
      formed.city,
      formed.issuingCountry,
    ]),
    ...academicForms.flatMap((form) => [
      form.degree,
      form.percentage,
      form.startdate,
      form.enddate,
      form.selectedFile,
    ]),
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;
  let color;

  useEffect(() => {
    if (percentage <= 30) {
      setAcademicComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setAcademicComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setAcademicComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage, color]);

  const handleFileChange = (index: number, event: any) => {
    const updatedForms = [...academicForms];
    updatedForms[index].selectedFile = event.target.files?.[0] || null;
    setAcademicForms(updatedForms);
  };

  const handleFormChange = (
    index: number,
    field: keyof AcademicForm,
    value: any
  ) => {
    const updatedForms = [...academicForms];
    updatedForms[index][field] = value;
    setAcademicForms(updatedForms);
  };

  const addField = () => {
    setAcademicForms([
      ...academicForms,
      {
        degree: "",
        percentage: "",
        startdate: "",
        enddate: "",
        selectedFile: null,
      },
    ]);
  };

  const removeField = (index: number) => {
    const updatedForms = academicForms.filter((_, i) => i !== index);
    setAcademicForms(updatedForms);
  };

  const handleFormChangeEdu = (
    index: number,
    field: keyof EducationForm,
    value: any
  ) => {
    const updatedForms = [...educationForms];
    updatedForms[index][field] = value;
    setEducationForms(updatedForms);
  };

  const addFields = () => {
    setEducationForms([
      ...educationForms,
      {
        university: "",
        subject: "",
        city: "",
        issuingCountry: "",
      },
    ]);
  };

  const removeFields = (index: number) => {
    const updatedForms = educationForms.filter((_, i) => i !== index);
    setEducationForms(updatedForms);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleEdit = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="container border-2 shadow-lg p-3 mt-[14px] mb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Qualification</h1>

          <div className="flex gap-2">
            <AiOutlinePlus
              className="text-2xl cursor-pointer"
              onClick={addField}
            />
            {academicForms.length > 1 && (
              <AiOutlineMinus
                className="text-2xl cursor-pointer"
                onClick={() => removeField(academicForms.length - 1)}
              />
            )}
          </div>
        </div>

        {academicForms.map((field, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                className="text-[14px] font-[poppins] text-[#333333]"
                htmlFor={`degree_${index}`}
              >
                Degree
              </label>
              <input
                id={`degree_${index}`}
                type="text"
                value={field.degree}
                onChange={(e) =>
                  handleFormChange(index, "degree", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter degree"
                disabled={disabled}
              />
            </div>
            <div>
              <label
                className="text-[14px] font-[poppins] text-[#333333]"
                htmlFor={`percetnge_${index}`}
              >
                Percentage
              </label>
              <input
                id={`percetnge_${index}`}
                type="number"
                value={field.percentage}
                onChange={(e) =>
                  handleFormChange(index, "percentage", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter percentage"
                disabled={disabled}
              />
            </div>

            <div>
              <label className="text-[14px] font-[poppins] text-[#333333]">
                Start Date
              </label>
              <input
                type="date"
                value={field.startdate}
                onChange={(e) =>
                  handleFormChange(index, "startdate", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                disabled={disabled}
              />
            </div>
            <div>
              <label className="text-[14px] font-[poppins] text-[#333333]">
                End Date
              </label>
              <input
                type="date"
                value={field.enddate}
                onChange={(e) =>
                  handleFormChange(index, "enddate", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                disabled={disabled}
              />
            </div>

            <div className="grid col-span-2 gap-4 ">
              <div className="flex items-center gap-4">
                <div className="flex gap-6 items-center">
                  <label
                    htmlFor={`file-upload_${index}`}
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] text-[14px] font-[poppins]"
                  >
                    Attachment Document
                  </label>
                  <input
                    id={`file-upload_${index}`}
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(index, e)}
                    disabled={disabled}
                  />
                </div>
                {field.selectedFile ? (
                  <p className="mt-4 text-gray-700">
                    File Selected: {field.selectedFile.name}
                  </p>
                ) : (
                  <p className="text-[14px] font-[poppins] text-[#333333]">
                    No file selected
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-4">
          <h1 className="font-bold">Education</h1>
          <div className="flex gap-2">
            <AiOutlinePlus
              className="text-2xl cursor-pointer"
              onClick={addFields}
            />
            {educationForms.length > 1 && (
              <AiOutlineMinus
                className="text-2xl cursor-pointer"
                onClick={() => removeFields(educationForms.length - 1)}
              />
            )}
          </div>
        </div>

        {educationForms.map((fields, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                htmlFor="university"
              >
                University/School
              </label>
              <input
                id="university"
                type="text"
                value={fields.university}
                onChange={(e) => handleFormChangeEdu(index, "university", e.target.value)}
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter your university"
                disabled={disabled}
              />
            </div>
            <div>
              <label
                className="text-[14px] font-[poppins] text-[#333333]"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={fields.subject}
                onChange={(e) => handleFormChangeEdu(index, "subject", e.target.value)}
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter your subject"
                disabled={disabled}
              />
            </div>
            <div>
              <label
                className="text-[14px] font-[poppins] text-[#333333]"
                htmlFor="city"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                value={fields.city}
                onChange={(e) => handleFormChangeEdu(index, "city", e.target.value)}
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter your city"
                disabled={disabled}
              />
            </div>
            <div>
              <label
                className="text-[14px] font-[poppins] text-[#333333]"
                htmlFor="issuingCountry"
              >
                Issuing Country
              </label>
              <select
                id="issuingCountry"
                value={fields.issuingCountry}
                onChange={(e) => handleFormChangeEdu(index, "issuingCountry", e.target.value)}
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                disabled={disabled}
              >
                <option value="">Select country</option>
                {countryDrop.map((country: any) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
                <option value="f">hell </option>
              </select>
            </div>
          </div>
        ))}

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

export default AcademicDetails;
