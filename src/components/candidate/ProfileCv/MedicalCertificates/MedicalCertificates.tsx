"use client";
import {
  AddMedicalData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import moment from "moment";

type OtherVaccination = {
  medicalType1: any;
  vaccination1: any;
  vaccinationexp: any;
  veccinationCheck: any;
  selectedFilesOthers: any | null;
};

type MedicalComplete = {
  percentage: number;
  color: string;
};

type Props = {
  medicalComplete: MedicalComplete; // mjrComplete is an object with percentage and color
  setMedicalComplete: React.Dispatch<React.SetStateAction<MedicalComplete>>;
  userDetail: any;
  criminal: any;
  medicalDetail: any;
};

const MedicalCertificates = ({
  medicalComplete,
  setMedicalComplete,
  userDetail,
  criminal,
  medicalDetail,
}: Props) => {
  const [otherVaccinationForms, setOtherVaccinationForms] = useState<
    OtherVaccination[]
  >([
    {
      medicalType1: "",
      vaccination1: "",
      vaccinationexp: "",
      veccinationCheck: "",
      selectedFilesOthers: null,
    },
  ]);

  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>(null);
  const [selectedFilesCovid, setSelectedFilesCovid] = useState<any>(null);
  const [medicalPhysician, setMedicalPhysician] = useState("");

  const [fMedicalcenter, setFMedicalcenter] = useState("");

  const [medicalNumber, setMedicalNumber] = useState("");
  const [medicalCenter, setMedicalCenter] = useState("");

  const [testCenter, setTestCenter] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [issuedateCovid, setIssueDateCovid] = useState("");
  // const [exdateCovid, setExDateCovid] = useState("");

  const [issuingCity, setIssuingCity] = useState("");

  const [expires1, setExpires1] = useState<any>(false);
  const [expires2, setExpires2] = useState<any>(false);

  const [issuingOptions, setIssuingOptions] = useState("");
  const [types2Options, setTypes2Options] = useState("");
  const [typeOptions, setTypeOptions] = useState("");
  const [issuingCountryOpt, setIssuingCountryOpt] = useState("");
  const [medicalType, setMedicalType] = useState("");
  const [vaccinationIssue, setVaccinationIssue] = useState("");
  const [covidOptions, setCovidOptions] = useState("");
  const [color, setColor] = useState("");

  // const [vaccinationExpiry, setVaccinationExpiry] = useState("");
  // const [expiresMedical, setExpiresMedical] = useState<any>(false);
  // const [veccinationCheck, setVeccinationCheck] = useState<any>(false);
  // const [medicalType1, setMedicalType1] = useState("");
  // const [vaccination1, setVaccination1] = useState("");

  // const [vaccinationexp, setVaccinationexp] = useState("");

  // const [selectedFilesOthers, setSelectedFilesOthers] = useState<any>("");

  const [veccinationCheckFlag, setVeccinationCheckFlag] = useState<any>(false);
  const [medicalTypeFlag, setMedicalTypeFlag] = useState("");
  const [vaccinationFlag, setVaccinationFlag] = useState("");

  const [vaccinationexpFlag, setVaccinationexpFlag] = useState("");
  const [selectedFilesFlag, setSelectedFilesFlag] = useState<any>("");
  const [typeDrop, setTypeDrop] = useState<any>([]);
  const [drugDrop, setDrugDrop] = useState<any>([]);
  const [vaccineTypeDrop, setVaccineTypeDrop] = useState<any>([]);
  const [otherVaccineTypeDrop, setOtherVaccineTypeDrop] = useState<any>([]);
  const [countryDrop, setCountryDrop] = useState<any>([]);

  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);

  useEffect(() => {
    GetDropdownDetails("MEDICALFITNESSTYPE", (res: any) => {
      setTypeDrop(res?.data?.values);
    });
    GetDropdownDetails("DRUG&ALCOHOLTEST", (res: any) => {
      setDrugDrop(res?.data?.values);
    });
    GetDropdownDetails("COVID-19VACCINETYPE", (res: any) => {
      setVaccineTypeDrop(res?.data?.values);
    });
    GetDropdownDetails("OTHERVACCINATIONTYPE", (res: any) => {
      setOtherVaccineTypeDrop(res?.data?.values);
    });
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 26 + otherVaccinationForms.length * 4;
  const filledFields = [
    ...otherVaccinationForms.flatMap((field) => [
      field.medicalType1,
      field.selectedFilesOthers,
      field.vaccination1,
      field.vaccinationexp || field.veccinationCheck,
    ]),
    number,
    issuedate,
    exdate || expires1,
    selectedFile,
    selectedFiles,
    selectedFilesCovid,
    medicalPhysician,
    fMedicalcenter,
    medicalNumber,
    medicalCenter,
    testCenter,
    issuedate1,
    exdate1 || expires2,
    issuingCity,
    issuingOptions,
    types2Options,
    typeOptions,
    issuingCountryOpt,
    medicalType,
    vaccinationIssue,
    covidOptions,
    // vaccinationExpiry,
    medicalTypeFlag,
    vaccinationFlag,
    vaccinationexpFlag || veccinationCheckFlag,
    selectedFilesFlag,
    // exdateCovid || expiresMedical,
    issuedateCovid,
  ].filter(Boolean).length;

  const percentage = (filledFields / totalFields) * 100;

  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setMedicalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setMedicalComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setMedicalComplete((prevState) => ({
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
      // setSelectedFile (file)
      const reader = new FileReader();
      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFile(byteArray);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChanges = (event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];
      setSelectedFiles(byteArray);
    };
    reader.readAsDataURL(file);
  };

  // const handleFileChangesOthers = (event: any) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedFilesOthers(file);
  //   }
  // };

  const handleFileChangesOthers = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...otherVaccinationForms];
      updatedForms[index].selectedFilesOthers = byteArray;
      setOtherVaccinationForms(updatedForms);
    };
    reader.readAsDataURL(file);
    // const updatedForms = [...otherVaccinationForms];
    // updatedForms[index].selectedFilesOthers = event.target.files?.[0] || null;
    // setOtherVaccinationForms(updatedForms);
  };

  const handleFormChangeOthers = (
    index: number,
    field: keyof OtherVaccination,
    value: any
  ) => {
    const updatedForms = [...otherVaccinationForms];
    updatedForms[index][field] = value;
    setOtherVaccinationForms(updatedForms);
  };

  const addFieldOthers = () => {
    setOtherVaccinationForms([
      ...otherVaccinationForms,
      {
        medicalType1: "",
        vaccination1: "",
        vaccinationexp: "",
        veccinationCheck: "",
        selectedFilesOthers: null,
      },
    ]);
  };

  const removeFieldOthers = (index: number) => {
    const updatedForms = otherVaccinationForms.filter((_, i) => i !== index);
    setOtherVaccinationForms(updatedForms);
  };

  const handleFileChangesCovid = (event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];
      setSelectedFilesCovid(byteArray);
    };
    reader.readAsDataURL(file);
  };
  const handleFileChangesFlag = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFilesFlag(byteArray);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (medicalDetail) {
      setTypes2Options(medicalDetail.fitnessType);
      setNumber(medicalDetail.fitnessNumber);
      setIssuingOptions(medicalDetail.fitnessIssuingCountry);
      setIssuingCity(medicalDetail.fitnessIssuingCity);
      setIssueDate(moment(medicalDetail.fitnessIssueDate).format("YYYY-MM-DD"));
      setExDate(moment(medicalDetail.fitnessExpiryDate).format("YYYY-MM-DD"));
      setMedicalPhysician(medicalDetail.covidVaccineMedicalCenter);
      setFMedicalcenter(medicalDetail.fitnessMedicalCenter);
      setMedicalNumber(medicalDetail.drugTestNumber);
      setMedicalCenter(medicalDetail.drugTestIssuingCity);
      setTestCenter(medicalDetail.drugTestCenter);
      setIssueDate1(
        moment(medicalDetail.drugTestIssueDate).format("YYYY-MM-DD")
      );
      setExDate1(moment(medicalDetail.drugTestExpiryDate).format("YYYY-MM-DD"));
      setIssueDateCovid(
        moment(medicalDetail.covidVaccineDate2).format("YYYY-MM-DD")
      );

      let combineLng = medicalDetail?.otherVaccinations.map((medical: any) => ({
        medicalType1: medical?.otherVaccinationType,
        vaccination1: moment(medical?.otherVaccinationDate).format(
          "YYYY-MM-DD"
        ),
        vaccinationexp: moment(medical?.otherVaccinationExpiryDate).format(
          "YYYY-MM-DD"
        ),
        selectedFilesOthers: medical?.otherVaccinationDocumentUrl,
      }));
      setOtherVaccinationForms(combineLng);
      // setExpires1(medicalDetail.nativeLanguage);
      // setExpires2(medicalDetail.nativeLanguage);

      setTypeOptions(medicalDetail.drugTestType);
      setIssuingCountryOpt(medicalDetail.drugTestIssuingCountry);
      setMedicalType(medicalDetail.covidVaccineType);
      setVaccinationIssue(
        moment(medicalDetail.covidVaccineDate1).format("YYYY-MM-DD")
      );
      setCovidOptions(medicalDetail.covidVaccineCountry);
      // setVeccinationCheckFlag(medicalDetail.covidVaccineCountry);
      setMedicalTypeFlag(medicalDetail.flagMedicalType);
      setVaccinationFlag(
        moment(medicalDetail.flagMedicalVaccinationDate).format("YYYY-MM-DD")
      );
      setVaccinationexpFlag(
        moment(medicalDetail.flagMedicalExpiryDate).format("YYYY-MM-DD")
      );
      setSelectedFilesFlag(medicalDetail.flagMedicalDocumentUrl);
      setSelectedFile(medicalDetail.fitnessDocumentUrl);
      setSelectedFiles(medicalDetail.drugTestDocumentUrl);
      setSelectedFilesCovid(medicalDetail.covidVaccineDocumentUrl1);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let data: any = {
        id: userDetail?.userId,
        fitnessType: types2Options,
        fitnessNumber: number,
        fitnessIssuingCountry: issuingOptions,
        fitnessIssuingCity: issuingCity,
        fitnessMedicalCenter: fMedicalcenter,
        fitnessIssueDate: issuedate,
        fitnessExpiryDate: exdate,
        // formData.append("fitnessNeverExpires", expires1);
        fitnessDocumentUrl: selectedFile,

        drugTestType: typeOptions,
        drugTestNumber: medicalNumber,
        drugTestIssuingCountry: issuingCountryOpt,
        drugTestIssuingCity: medicalCenter,
        drugTestCenter: testCenter,
        drugTestIssueDate: issuedate1,
        drugTestExpiryDate: exdate1,
        // formData.append("drugTestNeverExpires", expires2);
        drugTestDocumentUrl: selectedFiles,

        covidVaccineType: medicalType,
        covidVaccineCountry: covidOptions,
        covidVaccineMedicalCenter: medicalPhysician,
        covidVaccineDate1: vaccinationIssue,
        // formData.append("covidVaccineExpiryDate1", vaccinationExpiry);
        // missing covid19 expiry data
        // formData.append("covidVaccineNeverExpires1", expiresMedical);
        covidVaccineDocumentUrl1: selectedFilesCovid,

        covidVaccineDate2: issuedateCovid,
        // formData.append("covidVaccineExpiryDate2", exdateCovid);
        // formData.append("covidVaccineNeverExpires2", expires2);

        // formData.append("covidVaccineDocument2", "");

        // formData.append("otherVaccinationNeverExpires", veccinationCheck);

        flagMedicalType: medicalTypeFlag,
        flagMedicalVaccinationDate: vaccinationFlag,
        flagMedicalExpiryDate: vaccinationexpFlag,
        // formData.append("flagMedicalNeverExpires", veccinationCheckFlag);
        flagMedicalDocumentUrl: selectedFilesFlag,
        color: color,
        completed: percentage,
      };
      const otherArray: any = [];
      otherVaccinationForms.forEach((element: any) => {
        otherArray.push({
          otherVaccinationType: element?.medicalType1,
          otherVaccinationDate: element?.vaccination1,
          otherVaccinationExpiryDate: element?.vaccinationexp,
          otherVaccinationDocumentUrl: element.selectedFilesOthers,
        });
      });
      data.otherVaccinations = otherArray;

      AddMedicalData(data, AddmedicalDataDB);
    }
  };

  const AddmedicalDataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      toast.success("medical  submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Medical detail not submited ");
    }
  };

  // add plus and minus symbole

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    // toast.info("You are now in edit mode. Make your changes.");
  };

  const handleValidationChange = (valid: any) => (e: any) => {
    const value = e.target.value;
    const alphabeticValue = value.replace(/[^A-Za-z\s]/g, "");
    valid(alphabeticValue);
  };

  const handlePhoneNumberChange = (setter: any) => (e: any) => {
    let value = e.target.value;

    value = value.replace(/[^0-9]/g, "");
    setter(value);

    // if (value.length <= 10) {
    //   setter(value);
    // }
  };
  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="font-bold"> Medical Fitness</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="types"
            >
              Type
            </label>
            <select
              id="types"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={types2Options}
              onChange={(e) => setTypes2Options(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {typeDrop &&
                drugDrop?.map((type: any, index: number) => (
                  <option key={index} value={type}>
                    {type?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="medicalnumber"
            >
              Enter Certificate Number
            </label>
            <input
              id="medicalnumber"
              type="text"
              value={number}
              onChange={handlePhoneNumberChange(setNumber)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder=" Enter Certificate Number"
              disabled={disabled}
            />
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicalIssuing"
            >
              Issuing Country
            </label>
            <select
              id="medicalIssuing"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingOptions}
              onChange={(e) => setIssuingOptions(e.target.value)}
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
            </select>
          </div>

          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="issuringCity"
            >
              Issuring City
            </label>
            <input
              id="issuringCity"
              type="text"
              value={issuingCity}
              onChange={handleValidationChange(setIssuingCity)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Issuring City"
              disabled={disabled}
            />
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="medicalcenter"
            >
              Medical Center
            </label>
            <input
              id="medicalcenter"
              type="text"
              value={fMedicalcenter}
              onChange={handleValidationChange(setFMedicalcenter)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Medical Center"
              disabled={disabled}
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuemedical"
            >
              Issue Date
            </label>
            <input
              id="issuemedical"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate}
              onChange={(e) => setIssueDate(e.target.value)}
              disabled={disabled}
              placeholder="Enter Issue Date"
            />
          </div>
          {/* </div> */}

          {!expires1 && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor="expirymedical"
              >
                Expiry Date
              </label>

              <input
                id="expirymedical"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate}
                onChange={(e) => setExDate(e.target.value)}
                disabled={disabled}
                placeholder="Enter Expiry Date"
              />
            </div>
          )}
          <div className="flex items-center  gap-2 mt-5">
            <input
              id="nevermedical"
              type="checkbox"
              className="border focus:ring-[#00A264]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] text-[14px] leading-[19.07px]  text-[#333333]"
              checked={expires1}
              onChange={() => setExpires1(!expires1)}
              disabled={disabled}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="nevermedical"
            >
              Never Expires
            </label>
            {/* </div> */}
          </div>
          {isHideShow && (
            <div className="grid col-span-2  items-center">
              <div className="flex gap-6 items-center  my-6">
                <div>
                  <label
                    htmlFor="medicalfile-upload3"
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 text-[14px] leading-[19.07px]   "
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
                </div>
                <div>
                  {selectedFile ? (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      File Selected: {selectedFile.name}
                    </p>
                  ) : (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      No File Selected
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="grid col-span-2 ">
            <h1 className=" font-bold">Drug & Alcohol Test </h1>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="medicaltype"
            >
              Type
            </label>
            <select
              id="medicaltype"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={typeOptions}
              onChange={(e) => setTypeOptions(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {drugDrop &&
                drugDrop?.map((drug: any, index: number) => (
                  <option key={index} value={drug}>
                    {drug?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicalNumber1"
            >
              Enter Certificate Number
            </label>
            <input
              id="medicalNumber1"
              type="text"
              value={medicalNumber}
              onChange={handlePhoneNumberChange(setMedicalNumber)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Certificate Number"
              disabled={disabled}
            />
          </div>

          <div className=" ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="Issuingmedical"
            >
              Issuing Country
            </label>
            <select
              id="Issuingmedical"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountryOpt}
              onChange={(e) => setIssuingCountryOpt(e.target.value)}
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
            </select>
          </div>
          {/* <div className=""> */}

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="issuringCitymedical"
            >
              Issuring City
            </label>
            <input
              id="issuringCitymedical"
              type="text"
              value={medicalCenter}
              onChange={handleValidationChange(setMedicalCenter)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Issuring City"
              disabled={disabled}
            />
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicaltestcenter"
            >
              Test Center
            </label>
            <input
              id="medicaltestcenter"
              type="text"
              value={testCenter}
              onChange={handleValidationChange(setTestCenter)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter  Test Center"
              disabled={disabled}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedatem"
            >
              Issue Date
            </label>
            <input
              id="issuedatem"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
              disabled={disabled}
              placeholder="Enter  Issue Date"
            />
          </div>

          {!expires2 && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="expiryDatemedical"
              >
                Expiry Date
              </label>

              <input
                id="expiryDatemedical"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate1}
                onChange={(e) => setExDate1(e.target.value)}
                disabled={disabled}
                placeholder="Enter Expiry Date"
              />
            </div>
          )}
          <div className=" flex items-center  gap-2 mt-5">
            <input
              id="neverExpiresmedical"
              type="checkbox"
              className="border focus:ring-[#00A264] text-[14px] leading-[19.07px]  text-[#333333]  checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              checked={expires2}
              onChange={() => setExpires2(!expires2)}
              disabled={disabled}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="neverExpiresmedical"
            >
              Never Expires
            </label>
          </div>

          {isHideShow && (
            <div className=" text-center grid col-span-2 mt-3">
              <div className="flex items-center  gap-4">
                <div>
                  <label
                    htmlFor="file-uploadmedical"
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]   "
                  >
                    Attachment Document
                  </label>
                  <input
                    id="file-uploadmedical"
                    type="file"
                    className="hidden"
                    onChange={handleFileChanges}
                    disabled={disabled}
                  />
                </div>
                <div>
                  {selectedFiles ? (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      File Selected: {selectedFiles.name}
                    </p>
                  ) : (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      No File Selected
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="grid col-span-2 ">
            <h1 className="font-bold ">COVID-19 Vaccine</h1>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicaltypes"
            >
              Type
            </label>
            <select
              id="medicaltypes"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={medicalType}
              onChange={(e) => setMedicalType(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
              </option>
              {vaccineTypeDrop &&
                vaccineTypeDrop?.map((typ: any, index: number) => (
                  <option key={index} value={typ}>
                    {typ?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="covid"
            >
              Covid Vaccine Name Country
            </label>
            <select
              id="covid"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={covidOptions}
              onChange={(e) => setCovidOptions(e.target.value)}
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
            </select>
          </div>

          <div className="   ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicalcenter"
            >
              Medical Center / Physician
            </label>
            <input
              id="medicalcenter"
              type="text"
              value={medicalPhysician}
              onChange={handleValidationChange(setMedicalPhysician)}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              placeholder="Enter Medical Center/Physician"
              disabled={disabled}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="vaccinedate1"
            >
              Vaccination Date First
            </label>
            <input
              id="vaccinedate1"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationIssue}
              onChange={(e) => setVaccinationIssue(e.target.value)}
              disabled={disabled}
              placeholder="Enter Vaccination Date First"
            />
          </div>

          {/* <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]  "
              htmlFor="vaccinedate2"
            >
              Vaccination Expiry Date1
            </label>

            <input
              id="vaccinedate2"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationExpiry}
              onChange={(e) => setVaccinationExpiry(e.target.value)}
            />
          </div> */}

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedatemCovid"
            >
              Vaccination Date Second
            </label>
            <input
              id="issuedatemCovid"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedateCovid}
              onChange={(e) => setIssueDateCovid(e.target.value)}
              disabled={disabled}
              placeholder="Enter Vaccination Date Second"
            />
          </div>

          {/* {!expiresMedical && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="expiryDatemedicalCovid"
              >
                Vaccination Expiry Date2
              </label>

              <input
                id="expiryDatemedicalCovid"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdateCovid}
                onChange={(e) => setExDateCovid(e.target.value)}
              />
            </div>
          )}
          <div className=" flex items-center gap-2 mt-5">
            <input
              id="neverExpiresmedical"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              checked={expiresMedical}
              onChange={() => setExpiresMedical(!expiresMedical)}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="neverExpiresmedical"
            >
              Never Expires
            </label>
          </div> */}

          <div className="grid col-span-2">
            {isHideShow && (
              <div className="flex gap-6 items-center  mt-4  ">
                <div>
                  <label
                    htmlFor="file-uploadmedicalvaccine"
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                  >
                    Attachment Document
                  </label>
                  <input
                    id="file-uploadmedicalvaccine"
                    type="file"
                    className="hidden"
                    onChange={handleFileChangesCovid}
                    disabled={disabled}
                  />
                </div>
                <div>
                  {selectedFilesCovid ? (
                    <p className="text-gray-700">
                      File Selected: {selectedFilesCovid.name}
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

          {/* other caccination section */}

          <div className="grid col-span-2 ">
            <div className="flex justify-between items-center">
              <h1 className="font-bold ">Other Vaccination </h1>
              {isHideShow && (
                <div className="flex gap-2">
                  <AiOutlinePlus
                    className="text-2xl cursor-pointer"
                    onClick={addFieldOthers}
                  />
                  {otherVaccinationForms.length > 1 && (
                    <AiOutlineMinus
                      className="text-2xl cursor-pointer"
                      onClick={() =>
                        removeFieldOthers(otherVaccinationForms.length - 1)
                      }
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {otherVaccinationForms.map((field, index) => (
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`medicaltypes1_${index}`}
              >
                Type
              </label>
              <select
                id={`medicaltypes1_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={field.medicalType1}
                onChange={(e) =>
                  handleFormChangeOthers(index, "medicalType1", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
                  Select
                </option>
                {otherVaccineTypeDrop &&
                  otherVaccineTypeDrop?.map((vac: any, index: number) => (
                    <option key={index} value={vac}>
                      {vac?.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor={`vaccinedate01_${index}`}
              >
                Vaccination Date
              </label>
              <input
                id={`vaccinedate01_${index}`}
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={field.vaccination1}
                onChange={(e) =>
                  handleFormChangeOthers(index, "vaccination1", e.target.value)
                }
                disabled={disabled}
                placeholder="Enter  Vaccination Date"
              />
            </div>

            {!field.veccinationCheck && (
              <div className="">
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333] "
                  htmlFor={`vaccinationexp_${index}`}
                >
                  Expiry Date
                </label>

                <input
                  id={`vaccinationexp_${index}`}
                  type="date"
                  className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                  value={field.vaccinationexp}
                  onChange={(e) =>
                    handleFormChangeOthers(
                      index,
                      "vaccinationexp",
                      e.target.value
                    )
                  }
                  disabled={disabled}
                  placeholder="Enter Expiry Date"
                />
              </div>
            )}
            <div className=" flex items-center  gap-2 mt-5">
              <input
                id={`veccinationCheck_${index}`}
                type="checkbox"
                className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                checked={field.veccinationCheck}
                onChange={(e) =>
                  handleFormChangeOthers(
                    index,
                    "veccinationCheck",
                    e.target.checked
                  )
                }
                disabled={disabled}
              />
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor={`veccinationCheck_${index}`}
              >
                Never Expires
              </label>
            </div>

            <div className="grid col-span-2">
              {isHideShow && (
                <div className="flex gap-6 items-center  my-4  ">
                  <div>
                    <label
                      htmlFor={`file-uploadmedicalvaccine_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                    >
                      Attachment Document
                    </label>
                    <input
                      id={`file-uploadmedicalvaccine_${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChangesOthers(index, e)}
                      disabled={disabled}
                    />
                  </div>
                  <div>
                    {field.selectedFilesOthers ? (
                      <p className="text-gray-700">
                        File Selected: {field.selectedFilesOthers.name}
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
          </div>
        ))}

        {/* {extraFields.map((field, index) => (
            <React.Fragment key={index}>
              <div className="w-full ">
                <label
                  className="block text-[14px]  text-[#333333] mb-1"
                  htmlFor={`extraField1_${index}`}
                >
                  Type {index * 2 + 1}
                </label>
                <select
                  id={`extraField1_${index}`}
                  value={field.field1}
                  onChange={(e) =>
                    handleExtraFieldChange(index, e.target.value, "field1")
                  }
                  className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                  disabled={disabled}
                >
                  <option value="" disabled selected>
                    Type
                  </option>
                </select>
              </div>
              <div className="w-full">
                <label
                  className="block text-[14px]  text-[#333333] mb-1"
                  htmlFor={`extraField2_${index}`}
                >
                  Vaccination Date {index * 2 + 2}
                </label>
                <input
                  id={`extraField2_${index}`}
                  type="date"
                  value={field.field2}
                  onChange={(e) =>
                    handleExtraFieldChange(index, e.target.value, "field2")
                  }
                  className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                  disabled={disabled}
                />
              </div>

              {!field.neverExpires && (
                <div className="w-full">
                  <label
                    className="block text-[14px]  text-[#333333] mb-1"
                    htmlFor={`extraField3_${index}`}
                  >
                    Expiry Date {index * 2 + 2}
                  </label>
                  <input
                    id={`extraField3_${index}`}
                    type="date"
                    value={field.field3}
                    onChange={(e) =>
                      handleExtraFieldChange(index, e.target.value, "field3")
                    }
                    className="border rounded-md w-full h-9 px-2 text-[14px] text-[#333333] focus:outline-[#00A264] border-[#00A264]"
                    disabled={disabled}
                  />
                </div>
              )}
              <div className=" flex items-center  gap-2 mt-5">
                <input
                  id={`field3_${index}`}
                  type="checkbox"
                  className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                  checked={field.neverExpires}
                  onChange={(e) =>
                    handleExtraFieldChange(
                      index,
                      e.target.checked,
                      "neverExpires"
                    )
                  }
                  disabled={disabled}
                />
                <label
                  className="text-[14px] leading-[19.07px]  text-[#333333]"
                  htmlFor={`field3_${index}`}
                >
                  Never Expires
                </label>
              </div>

              <div className="grid col-span-2">
                <div className="flex gap-6 items-center  my-4  ">
                  <div>
                    <label
                      htmlFor={`file-uploadmedicalvaccine_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                    >
                      Attachment Document
                    </label>
                    <input
                      id={`file-uploadmedicalvaccine_${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        handleExtraFieldChange(
                          index,
                          e.target.files?.[0],
                          "selectedFile"
                        )
                      }
                      disabled={disabled}
                    />
                  </div>
                  <div>
                    {field.selectedFile ? (
                      <p className="text-gray-700">
                        File Selected: {field.selectedFile.name}
                      </p>
                    ) : (
                      <p className="text-[14px] leading-[19.07px] text-[#333333]">
                        No File Selected
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))} */}

        <div className="grid grid-cols-2 gap-4">
          {/* Flag medical */}
          <div className="grid col-span-2 ">
            <h1 className="font-bold ">Flag Medical </h1>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="medicaltypesflag"
            >
              Type
            </label>
            <select
              id="medicaltypesflag"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={medicalTypeFlag}
              onChange={(e) => setMedicalTypeFlag(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                Select
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
              <option value="other">other</option>
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="vaccinedateflag"
            >
              Vaccination Date
            </label>
            <input
              id="vaccinedateflag"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={vaccinationFlag}
              onChange={(e) => setVaccinationFlag(e.target.value)}
              disabled={disabled}
              placeholder="Enter Vaccination Date"
            />
          </div>

          {!veccinationCheckFlag && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="vaccinationexpflag"
              >
                Expiry Date
              </label>

              <input
                id="vaccinationexpflag"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={vaccinationexpFlag}
                onChange={(e) => setVaccinationexpFlag(e.target.value)}
                disabled={disabled}
                placeholder="Enter Expiry Date"
              />
            </div>
          )}
          <div className=" flex items-center  gap-2 mt-5">
            <input
              id="veccinationCheckflag"
              type="checkbox"
              className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
              checked={veccinationCheckFlag}
              onChange={() => setVeccinationCheckFlag(!veccinationCheckFlag)}
              disabled={disabled}
            />
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="veccinationCheckflag"
            >
              Never Expires
            </label>
          </div>

          <div className="grid col-span-2">
            {isHideShow && (
              <div className="flex gap-6 items-center  mt-4  ">
                <div>
                  <label
                    htmlFor="file-uploadmedicalvaccineflag"
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  text-[14px] leading-[19.07px]  "
                  >
                    Attachment Document
                  </label>
                  <input
                    id="file-uploadmedicalvaccineflag"
                    type="file"
                    className="hidden"
                    onChange={handleFileChangesFlag}
                    disabled={disabled}
                  />
                </div>
                <div>
                  {selectedFilesFlag ? (
                    <p className="text-gray-700">
                      File Selected: {selectedFilesFlag.name}
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
        </div>

        {/* Third section */}

        <div className="flex gap-2 mb-4 mt-4">
          <button
            type="submit"
            className="border text-[14px] leading-[19.07px]   border-[#00A264] bg-[#00A264] p-2 px-8 rounded-lg text-white"
          >
            Save
          </button>
          <Link
            href="#"
            onClick={handleEdit}
            className="border text-[14px] leading-[19.07px]  text-[#333333] border-[#00A264]  p-2 rounded-lg px-8"
          >
            Edit
          </Link>
        </div>
      </form>
    </div>
  );
};
export default MedicalCertificates;
