


// "use client";
// import { GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
// import Link from "next/link";

// import { useEffect, useState } from "react";
// type EducationComplete = {
//   percentage: number;
//   color: string;
// };
// type Props={
//   educationComplete: EducationComplete; 
//   setEducationComplete: React.Dispatch<React.SetStateAction<EducationComplete>>; // setMjrComplete is a function to update mjrComplete
//   userDetail:any
// }

// const Education = ({educationComplete, setEducationComplete, userDetail}:Props) => {
//   const [university, setUniversity] = useState("");
//   const [subject, setSubject] = useState("");
//   const [city, setCity] = useState("");

 


//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
 

//   const [trainingCenter, setTrainingCenter] = useState("");
//   const [eCDISNumber, setECDISNumber] = useState("");
//   const [issuedate1, setIssueDate1] = useState("");
//   const [issuingCountry, setIssuingCountry] = useState("");
//   const [countryDrop, setCountryDrop] = useState<any>([]);

//   useEffect(() => {

//     GetDropdownDetails('country', (res: any) => {
//       // console.log('County',res?.data)
//       setCountryDrop(res?.data?.values)
//     })
//   }, [])


//   const totalFields = 5;
//   const filledFields = [
//     university,
//     subject,
//     city,
//     selectedFile,
//     issuingCountry
   
//   ].filter(Boolean).length;


//   const percentage = (filledFields / totalFields) * 100;
//   // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
//   let color;
//   useEffect(() => {
//     console.log('user',userDetail)
//     if (percentage <= 30) {
//       setEducationComplete((prevState) => ({
//         ...prevState, // Spread the previous state to keep any other properties
//         percentage: percentage, // Update the percentage field
//         color: '#FF0000' // Update the color field
//       }));
//       color = "red"; 
//     } else if (percentage <= 70) {
//       setEducationComplete((prevState) => ({
//         ...prevState, // Spread the previous state to keep any other properties
//         percentage: percentage, // Update the percentage field
//         color: '#FF9900' // Update the color field
//       }));
//       color = "#FF9900"; 
//     } else {
//       setEducationComplete((prevState) => ({
//         ...prevState, // Spread the previous state to keep any other properties
//         percentage: percentage, // Update the percentage field
//         color: '#00A264' // Update the color field
//       }));
//       color = "green";
//     }
//   }, [percentage,color])



//   const handleFileChange = (event: any) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

  


//   const handleSubmit = (e: React.FormEvent) => {
//     // try {
//     e.preventDefault();
//   };
//   return (
//     <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
//       <form onSubmit={handleSubmit}>
//       <h1 className="font-bold ">Education</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="   ">
//           <label
//             className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
//             htmlFor="university"
//           >
//             School / College / University{" "}
//           </label>
//           <input
//             id="university"
//             type="text"
//             value={university}
//             onChange={(e) => setUniversity(e.target.value)}
//             className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//             placeholder="Enter University"
//             required
//           />
//         </div>
//         <div className="   ">
//           <label
//             className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
//             htmlFor="subject"
//           >
//             Subject
//           </label>
//           <input
//             id="subject"
//             type="text"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
//             placeholder=""
//             required
//           />
//         </div>
//         <div className=" ">
//             <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] " htmlFor="optionT1">
//               Issuing Country
//             </label>
//             <select
//               id="optionT1"
//               className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//               name="options"
//               value={issuingCountry}
//               onChange={(e) => setIssuingCountry(e.target.value)}
//             >
//               <option value="" disabled selected>
//                 Issuing Country
//               </option>
//               {countryDrop && countryDrop?.map((country: any, index: number) => (
//                   <option key={index} value={country}>{country?.toUpperCase()}</option>
//                 ))}
//             </select>
//           </div>

//         <div className="   ">
//           <label
//             className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
//             htmlFor="number"
//           >
//             City{" "}
//           </label>
//           <input
//             id="number"
//             type="number"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
//             placeholder=""
//             required
//           />
//         </div>
//       </div>

//       {/* <div className="flex items-center justify-start gap-4 my-6">
//         <div className="flex gap-6 items-center ">
//           <label
//             htmlFor="file-upload"
//             className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
//           >
//             Attachment Document
//           </label>
//           <input
//             id="file-upload"
//             type="file"
//             className="hidden"
//             onChange={handleFileChange}
//           />
         
//         </div>
//         {selectedFile ? (
//           <p className="mt-4 text-gray-700">
//             File Selected: {selectedFile.name}
//           </p>
//         ) : (
//           <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
//             No file selected
//           </p>
//         )}
//       </div> */}

//       {/* Third section */}

//       <div className="flex gap-2 mb-4 mt-4">
//         <button
//           type="submit"
//           className="border border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
//         >
//           Save
//         </button>
//         <Link
//           href="#"
//           className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8"
//         >
//           Edit
//         </Link>
//       </div>
//       </form>
//     </div>
//   );
// };

// export default Education;


"use client";
import { GetDropdownDetails } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import { useEffect, useState } from "react";

type EducationForm = {
  university: string;
  subject: string;
  city: string;
  issuingCountry: string;
  selectedFile: File | null;
};

type EducationComplete = {
  percentage: number;
  color: string;
};

type Props = {
  educationComplete: EducationComplete;
  setEducationComplete: React.Dispatch<React.SetStateAction<EducationComplete>>;
  userDetail: any;
};

const Education = ({ educationComplete, setEducationComplete, userDetail }: Props) => {
  const [educationForms, setEducationForms] = useState<EducationForm[]>([
    {
      university: "",
      subject: "",
      city: "",
      issuingCountry: "",
      selectedFile: null,
    },
  ]);

  const [countryDrop, setCountryDrop] = useState<any>([]);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const handleFileChange = (index: number, event: any) => {
    const updatedForms = [...educationForms];
    updatedForms[index].selectedFile = event.target.files?.[0] || null;
    setEducationForms(updatedForms);
  };

  const handleFormChange = (index: number, field: keyof EducationForm, value: any) => {
    const updatedForms = [...educationForms];
    updatedForms[index][field] = value;
    setEducationForms(updatedForms);
  };

  const handleAddForm = () => {
    setEducationForms([
      ...educationForms,
      {
        university: "",
        subject: "",
        city: "",
        issuingCountry: "",
        selectedFile: null,
      },
    ]);
  };

  const handleRemoveForm = (index: number) => {
    const updatedForms = educationForms.filter((_, i) => i !== index);
    setEducationForms(updatedForms);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  const totalFields = 5; // Adjust based on total fields you want to calculate
  const filledFields = educationForms.reduce(
    (acc, form) => acc + [form.university, form.subject, form.city, form.issuingCountry].filter(Boolean).length,
    0
  );

  const percentage = (filledFields / (totalFields * educationForms.length)) * 100;
  let color = "";

  useEffect(() => {
    if (percentage <= 30) {
      setEducationComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      color = "red";
    } else if (percentage <= 70) {
      setEducationComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      color = "#FF9900";
    } else {
      setEducationComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      color = "green";
    }
  }, [percentage]);

  return (
    <div className="container border-2 shadow-lg p-3 mt-[14px] mb-8">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold">Education</h1>
        {educationForms.map((form, index) => (
          <div key={index} className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                  htmlFor={`university_${index}`}
                >
                  School / College / University
                </label>
                <input
                  id={`university_${index}`}
                  type="text"
                  value={form.university}
                  onChange={(e) => handleFormChange(index, "university", e.target.value)}
                  className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter University"
                  required
                />
              </div>
              <div>
                <label
                  className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                  htmlFor={`subject_${index}`}
                >
                  Subject
                </label>
                <input
                  id={`subject_${index}`}
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleFormChange(index, "subject", e.target.value)}
                  className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <div>
                <label
                  className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                  htmlFor={`issuingCountry_${index}`}
                >
                  Issuing Country
                </label>
                <select
                  id={`issuingCountry_${index}`}
                  className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  name="issuingCountry"
                  value={form.issuingCountry}
                  onChange={(e) => handleFormChange(index, "issuingCountry", e.target.value)}
                >
                  <option value="" disabled selected>
                    Issuing Country
                  </option>
                  {countryDrop &&
                    countryDrop.map((country: any, index: number) => (
                      <option key={index} value={country}>
                        {country?.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label
                  className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
                  htmlFor={`city_${index}`}
                >
                  City
                </label>
                <input
                  id={`city_${index}`}
                  type="text"
                  value={form.city}
                  onChange={(e) => handleFormChange(index, "city", e.target.value)}
                  className="border rounded-md w-full h-9 px-2 text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  placeholder="Enter City"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-start gap-4 my-6">
              <div className="flex gap-6 items-center">
                <label
                  htmlFor={`file-upload_${index}`}
                  className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]"
                >
                  Attachment Document
                </label>
                <input
                  id={`file-upload_${index}`}
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileChange(index, e)}
                />
              </div>
              {form.selectedFile ? (
                <p className="mt-4 text-gray-700">File Selected: {form.selectedFile.name}</p>
              ) : (
                <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">No file selected</p>
              )}
            </div>

            <div className="flex gap-2 mb-4 mt-4">
              {educationForms.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveForm(index)}
                  className="border border-red-500 bg-red-500 text-white px-2 rounded-lg"
                >
                  -
                </button>
              )}
              <button
                type="button"
                onClick={handleAddForm}
                className="border border-[#00A264] bg-[#00A264] text-white px-2 rounded-lg"
              >
                +
              </button>
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
          <Link href="#" className="border border-[#00A264] text-[#00A264] p-2 rounded-lg px-8">
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Education;
