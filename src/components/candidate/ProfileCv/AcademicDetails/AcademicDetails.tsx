"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type AcademicComplete = {
  percentage: number;
  color: string;
};

type AcademicField = {
  degree: string;
  percentage: string;
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
  const [fields, setFields] = useState<AcademicField[]>([
    { degree: "", percentage: "" },
  ]);

  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");

  const [university, setUniversity] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [eCDISNumber, setECDISNumber] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [disabled,setDisabled] = useState(true)


  const totalFields = fields.length * 2 + 7;
  const filledFields = [
    ...fields.map((field) => field.degree),
    ...fields.map((field) => field.percentage),
    startdate,
    enddate,
    selectedFile,
    university,
    subject,
    city,
    selectedFile,
    issuingCountry,
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;
  let color;

  useEffect(() => {
    console.log("user", userDetail);
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

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFieldChange = (index: number, name: string, value: string) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { degree: "", percentage: "" }]);
  };

  const removeField = () => {
    if (fields.length > 1) {
      setFields(fields.slice(0, -1));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleEdit = () => {
    setDisabled(!disabled)
    // toast.info("You are now in edit mode. Make your changes.");
  };
  return (
    <div className="container border-2 shadow-lg p-3 mt-[14px] mb-8">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold">Qualification</h1>

        {fields.map((field, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-[14px] font-[poppins] text-[#333333]">
                Degree
              </label>
              <input
                type="text"
                value={field.degree}
                onChange={(e) =>
                  handleFieldChange(index, "degree", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter degree"
                disabled={disabled}
              />
            </div>
            <div>
              <label className="text-[14px] font-[poppins] text-[#333333]">
                Percentage
              </label>
              <input
                type="number"
                value={field.percentage}
                onChange={(e) =>
                  handleFieldChange(index, "percentage", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter percentage"
                disabled={disabled}
              />
            </div>
            <div className="flex justify-start items-center gap-4">
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
            </div>
          </div>
        ))}

        <h1 className="font-bold mt-6">Passing Year</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] font-[poppins] text-[#333333]">
              Start Date
            </label>
            <input
              type="date"
              value={startdate}
              onChange={(e) => setStartDate(e.target.value)}
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
              value={enddate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border rounded-md w-full h-9 px-2 text-[14px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              disabled={disabled}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="flex gap-6 items-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] text-[14px] font-[poppins]"
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
          {selectedFile ? (
            <p className="mt-4 text-gray-700">
              File Selected: {selectedFile.name}
            </p>
          ) : (
            <p className="text-[14px] font-[poppins] text-[#333333]">
              No file selected
            </p>
          )}
        </div>

        <h1 className="font-bold ">Education</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="university"
            >
              School / College / University{" "}
            </label>
            <input
              id="university"
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter University"
              disabled={disabled}
            />
          </div>
          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=""
              disabled={disabled}
            />
          </div>
          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333] "
              htmlFor="optionT1"
            >
               Country
            </label>
            <select
              id="optionT1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Issuing Country
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
              htmlFor="number"
            >
              City{" "}
            </label>
            <input
              id="number"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder=""
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
