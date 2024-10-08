"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "../CircularProgress";
import {
  AddLanguageData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
type LanguageComplete = {
  percentage: number;
  color: string;
};
type Props = {
  languageComplete: LanguageComplete;
  setLanguageComplete: React.Dispatch<React.SetStateAction<LanguageComplete>>;
  userDetail: any;
};

const Languages = ({
  languageComplete,
  setLanguageComplete,
  userDetail,
}: Props) => {
  // State for form fields
  const [language1, setLanguage1] = useState("");
  const [addiLanguage, setAddiLanguage] = useState("");
  const [languageLavel, setLanguageLavel] = useState("");
  const [englishLavel, setEnglishLavel] = useState("");
  const [languageTests, setLanguageTests] = useState("");
  const [languageLevelDrop, setLanguageLevelDrop] = useState<any>([]);
  const [languageDrop, setLanguageDrop] = useState<any>([]);
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [testCenter, setTestCenter] = useState("");
  const [typeofTest, setTypeofTest] = useState("");
  const [result, setResult] = useState("");

  const [issuingCountry, setIssuingCountry] = useState("");
  const [dateofTest, setDateofTest] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [selectedFile, setSelectedFile] = useState<any>(null);

  useEffect(() => {
    GetDropdownDetails("additionalLanguage", (res: any) => {
      setLanguageLevelDrop(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
    GetDropdownDetails("language", (res: any) => {
      // console.log('lang',res?.data)
      setLanguageDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 11;
  const filledFields = [
    language1,
    addiLanguage,
    languageLavel,
    englishLavel,
    languageTests,
    testCenter,
    typeofTest,
    result,
    issuingCountry,
    dateofTest,
    selectedFile,
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setLanguageComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF0000", // Update the color field
      }));
      color = "red";
    } else if (percentage <= 70) {
      setLanguageComplete((prevState) => ({
        ...prevState, // Spread the previous state to keep any other properties
        percentage: percentage, // Update the percentage field
        color: "#FF9900", // Update the color field
      }));
      color = "#FF9900";
    } else {
      setLanguageComplete((prevState) => ({
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
    let formData = new FormData();

    {
      formData.append("nativeLanguage", language1);
      formData.append("additionalLanguage", addiLanguage);
      formData.append("additionalLanguageLevel", languageLavel);
      formData.append("englishLevel", englishLavel);
      formData.append("testLanguage", languageTests);
      formData.append("testCenter", testCenter);
      formData.append("testType", typeofTest);
      formData.append("testResult", result);
      formData.append("issuingCountry", issuingCountry);
      formData.append("dateOfTest", dateofTest);
      formData.append("document", selectedFile);
    }
    AddLanguageData(userDetail?.userId, formData, AddLanguagedataDB);
  };

  const AddLanguagedataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200) {
      toast.success("Language detail submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Language detail not submited ");
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    // toast.info("You are now in edit mode. Make your changes.");
  };
  return (
    <div className="container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        {/* NATIVE LANGUAGE*/}
        <div className="mb-3">
          <h1 className="font-bold   "> Native Language </h1>
          <div>
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Language
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={language1}
              onChange={(e) => setLanguage1(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                Language
              </option>
              {languageDrop &&
                languageDrop?.map((lang: any, index: number) => (
                  <option key={index} value={lang}>
                    {lang?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          {" "}
          <h1 className="font-bold  ">Additional Language </h1>
          <div className="grid grid-cols-2 gap-4  ">
            <div>
              <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Language
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={addiLanguage}
                onChange={(e) => setAddiLanguage(e.target.value)}
                disabled={disabled}
              >
                <option value="" disabled>
                  Language
                </option>
                {languageDrop &&
                  languageDrop?.map((lang: any, index: number) => (
                    <option key={index} value={lang}>
                      {lang?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>

            {/* Preferred Vessel Type */}
            <div>
              <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
                Level
              </label>
              <select
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={languageLavel}
                onChange={(e) => setLanguageLavel(e.target.value)}
                disabled={disabled}
              >
                <option value="" disabled>
                  Level{" "}
                </option>
                {languageLevelDrop &&
                  languageLevelDrop?.map((lang: any, index: number) => (
                    <option key={index} value={lang}>
                      {lang?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="font-bold  ">English Level </h1>
          <div>
            <label className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              Level
            </label>
            <select
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={englishLavel}
              onChange={(e) => setEnglishLavel(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled>
                Level
              </option>
              {languageLevelDrop &&
                languageLevelDrop?.map((lang: any, index: number) => (
                  <option key={index} value={lang}>
                    {lang?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* LANGUAGE TESTS */}

        <div className="mb-3">
          <h1 className=" font-bold "> Language Tests</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="languagetest"
                className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Language
              </label>
              <select
                id="languagetest"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={languageTests}
                onChange={(e) => setLanguageTests(e.target.value)}
                disabled={disabled}
              >
                <option value="" disabled>
                  Language
                </option>
                {languageDrop &&
                  languageDrop?.map((lang: any, index: number) => (
                    <option key={index} value={lang}>
                      {lang?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>

            <div className="w-full ">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                htmlFor="testcenter"
              >
                Test Center
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="testceter"
                type="text"
                value={testCenter}
                onChange={(e) => setTestCenter(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                disabled={disabled}
              />
              {/* </div> */}
            </div>
            <div className="w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1 "
                htmlFor="cityName"
              >
                Type of Test
              </label>
              {/* <div className="relative flex items-center  "> */}
              <input
                id="cityName"
                type="text"
                value={typeofTest}
                onChange={(e) => setTypeofTest(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                disabled={disabled}
              />
              {/* </div> */}
            </div>
            <div className=" w-full">
              <label
                className="block text-[14px] leading-[19.07px] font-[poppins] text-[#333333] mb-1"
                htmlFor="result1"
              >
                Result
              </label>
              <input
                id="result1"
                type="text"
                value={result}
                onChange={(e) => setResult(e.target.value)}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder=""
                disabled={disabled}
              />
            </div>

            <div>
              <label
                htmlFor="issuingcountry"
                className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Issuing Country
              </label>
              <select
                id="issuingcountry"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={issuingCountry}
                onChange={(e) => setIssuingCountry(e.target.value)}
                disabled={disabled}
              >
                <option value="" disabled>
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

            <div>
              <label
                htmlFor="dateofTest"
                className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]"
              >
                Date of Test
              </label>
              <input
                id="dateofTest"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] font-[poppins] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={dateofTest}
                onChange={(e) => setDateofTest(e.target.value)}
                disabled={disabled}
              />
            </div>

            {/* Available */}
          </div>
        </div>

        {/* Attachment Document */}

        <div className="flex gap-6 items-center  my-6 ">
          <label
            htmlFor="medicalfile-upload3"
            className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px] font-[poppins]  "
          >
            Attachment Document
          </label>
          <input
            id="medicalfile-upload3"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            disabled={disabled}
          />
          {selectedFile ? (
            <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              File Selected: {selectedFile.name}
            </p>
          ) : (
            <p className="text-[14px] leading-[19.07px] font-[poppins] text-[#333333]">
              No file selected
            </p>
          )}
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

export default Languages;
