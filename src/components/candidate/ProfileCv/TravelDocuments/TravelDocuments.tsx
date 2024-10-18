"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import CircularProgress from "../CircularProgress";
import {
  AddTravelDocumentData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import moment from "moment";

type TravelDocumentsVisaForms = {
  issueAuthority: string;
  visaNumber: string;
  issueDateVisa: string;
  expryDateVisa: string;
  selectedFileVisa: any | null;
};

type TravelDocumentsComplete = {
  percentage: number;
  color: string;
};
type Props = {
  travelComplete: TravelDocumentsComplete;
  setTravelComplete: React.Dispatch<
    React.SetStateAction<TravelDocumentsComplete>
  >;
  userDetail: any;
  travelDocumentsDetails: any;
  criminal: any;
};

const TravelDocuments = ({
  travelComplete,
  setTravelComplete,
  userDetail,
  travelDocumentsDetails,
  criminal,
}: Props) => {
  const [visaForms, setVisaForms] = useState<TravelDocumentsVisaForms[]>([
    {
      issueAuthority: "",
      visaNumber: "",
      issueDateVisa: "",
      expryDateVisa: "",
      selectedFileVisa: null,
    },
  ]);

  const [number, setNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [exdate, setExDate] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  // const [isssueAuthority, setIsssueAuthority] = useState("");
  const [issuingCountry, setIssuingCountry] = useState("");
  const [issueDate2, setIssueDate2] = useState("");
  const [expDate2, setExpDate2] = useState("");

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>(null);
  // const [selectedFileVisa, setSelectedFileVisa] = useState<any>(null);
  const [selectedFileResidence, setSelectedFileResidence] = useState<any>(null);

  const [trainingCenter, setTrainingCenter] = useState("");
  const [issuedate1, setIssueDate1] = useState("");
  const [exdate1, setExDate1] = useState("");
  const [permitNumber, setPermitNumber] = useState("");
  const [issuingAuthority, setIssuingAuthority] = useState("");
  const [biometric, setBiometric] = useState("");
  const [flagState, setFlagState] = useState("");

  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [indNumber, setIndNumber] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [color, setColor] = useState("");
  const [isHideShow, setIsHideShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);

  const totalFields = 17 + visaForms.length * 5;
  const filledFields = [
    ...visaForms?.flatMap((field) => [
      field.issueAuthority,
      field.expryDateVisa,
      field.visaNumber,
      field.issueDateVisa,
      field.selectedFileVisa,
    ]),
    number,
    issuedate,
    exdate || checkBox,
    issuingCountry,
    issueDate2,
    expDate2,
    selectedFile,
    selectedFiles,
    trainingCenter,
    issuedate1,
    exdate1,
    permitNumber,
    biometric,
    flagState,
    selectedFileResidence,
    indNumber,
    issuingAuthority,
  ].filter(Boolean).length;

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;

  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setTravelComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setTravelComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setTravelComplete((prevState) => ({
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
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFiles(byteArray);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileChangeVisa = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...visaForms];
      updatedForms[index].selectedFileVisa = byteArray;
      setVisaForms(updatedForms);
    };
    reader.readAsDataURL(file);
  };

  const handleFormChangeVisa = (
    index: number,
    field: keyof TravelDocumentsVisaForms,
    value: any
  ) => {
    const updatedForms = [...visaForms];
    updatedForms[index][field] = value;
    setVisaForms(updatedForms);
  };

  const addFieldVisa = () => {
    setVisaForms([
      ...visaForms,
      {
        issueAuthority: "",
        visaNumber: "",
        issueDateVisa: "",
        expryDateVisa: "",
        selectedFileVisa: null,
      },
    ]);
  };

  const removeFieldVisa = (index: number) => {
    const updatedForms = visaForms.filter((_, i) => i !== index);
    setVisaForms(updatedForms);
  };

  const handleFileChangeResidence = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const imageBinary: any = reader.result;
        const byteArray = imageBinary.split(",")[1];
        setSelectedFileResidence(byteArray);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log("travelDoc", travelDocumentsDetails);
    if (travelDocumentsDetails) {
      setIssuingAuthority(travelDocumentsDetails?.passportIssuingCountry);
      setNumber(travelDocumentsDetails?.passportNumber);
      setIssueDate(
        moment(travelDocumentsDetails?.passportIssueDate).format("YYYY-MM-DD")
      );
      setExDate(
        moment(travelDocumentsDetails?.passportExpiryDate).format("YYYY-MM-DD")
      );
      setBiometric(
        travelDocumentsDetails?.passportBiometric == "true" ? "Yes" : "No"
      );
      setSelectedFile(travelDocumentsDetails?.passportDocumentUrl);

      setFlagState(travelDocumentsDetails?.seamansBookIssuingCountry);
      setTrainingCenter(travelDocumentsDetails?.seamansBookNumber);
      setIssueDate1(
        moment(travelDocumentsDetails?.seamansBookIssueDate).format(
          "YYYY-MM-DD"
        )
      );
      setExDate1(
        moment(travelDocumentsDetails?.seamansBookExpiryDate).format(
          "YYYY-MM-DD"
        )
      );
      setSelectedFiles(travelDocumentsDetails?.seamansBookDocumentUrl);

      let combineTravel = travelDocumentsDetails?.visaDetails?.length
        ? travelDocumentsDetails?.visaDetails?.map((travel: any) => ({
            visaNumber: travel?.visaNumber,
            issueAuthority: travel?.visaIssuingCountry,
            issueDateVisa: moment(travel?.visaIssueDate).format("YYYY-MM-DD"),
            expryDateVisa: moment(travel?.visaExpiryDate).format("YYYY-MM-DD"),
            selectedFileVisa: travel?.visaDocumentUrl,
          }))
        : [
            {
              issueAuthority: "",
              visaNumber: "",
              issueDateVisa: "",
              expryDateVisa: "",
              selectedFileVisa: null,
            },
          ];
      setVisaForms(combineTravel);

      setIssuingCountry(travelDocumentsDetails?.residencePermitIssuingCountry);
      setPermitNumber(travelDocumentsDetails?.residencePermitNumber);

      setIssueDate2(
        moment(travelDocumentsDetails?.residencePermitIssueDate).format(
          "YYYY-MM-DD"
        )
      );

      setExpDate2(
        moment(travelDocumentsDetails?.residencePermitExpiryDate).format(
          "YYYY-MM-DD"
        )
      );

      setSelectedFileResidence(
        travelDocumentsDetails?.residencePermitDocumentUrl
      );

      setIndNumber(travelDocumentsDetails?.passportIssueDate);
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

        passportNumber: number,
        passportIssuingCountry: issuingAuthority,
        passportIssueDate: issuedate,
        passportExpiryDate: exdate,
        seamansBookNumber: trainingCenter,
        seamansBookIssuingCountry: flagState,
        seamansBookIssueDate: issuedate1,
        seamansBookExpiryDate: exdate1,

        residencePermitIssuingCountry: issuingCountry,
        residencePermitNumber: permitNumber,
        residencePermitIssueDate: issueDate2,
        residencePermitExpiryDate: expDate2,
        passportDocumentUrl: selectedFile,
        seamansBookDocumentUrl: selectedFiles,
        passportBiometric: biometric == "Yes" ? true : false,
        residencePermitDocumentUrl: selectedFileResidence,
        color: color,
        completed: percentage,
      };
      const visaArray: any = [];
      visaForms.forEach((element: any) => {
        visaArray.push({
          visaNumber: element?.visaNumber,
          visaIssueDate: element?.issueDateVisa,
          visaExpiryDate: element?.expryDateVisa,
          visaDocumentUrl: element?.selectedFileVisa,
          visaIssuingCountry: element?.issueAuthority,
        });
      });
      data.visaDetails = visaArray;
    
      AddTravelDocumentData(data, AddTravelDocumentDataCB);
    }
  };

  const AddTravelDocumentDataCB = (result: any) => {
    if (result?.status == 200 || result?.status == 201) {
      toast.success("Travel document submited successfully");
      setDisabled(!disabled);
      setIsEditing((prev) => !prev);
    } else {
      toast.error("Travel document not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
    setIsEditing((prev) => !prev);

    // toast.info("You are now in edit mode. Make your changes.");
  };

  return (
    <div className=" container border-2 shadow-lg p-3  mt-[14px] mb-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className=" font-bold mb-4">Passport Details </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="IssuingAuthority1"
            >
              Issuing Authority
            </label>
            <select
              id="IssuingAuthority1"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingAuthority}
              onChange={(e) => setIssuingAuthority(e.target.value)}
              disabled={disabled}
              required
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {countryDrop &&
                countryDrop?.map((country: any, index: number) => (
                  <option key={index} value={country}>
                    {country?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="passportnumber"
            >
              Passport Number
            </label>
            <input
              id="passportnumber"
              type="text"
              value={number}
              onChange={(e) => {
                const value = e.target.value
                  .replace(/[^a-zA-Z0-9 ]/g, "")
                  .toUpperCase();
                setNumber(value);
              }}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Passport Number"
              disabled={disabled}
              required
            />
          </div>

          {/* </div> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issue"
            >
              Issue Date
            </label>
            <input
              id="issue"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate}
              onChange={(e) => setIssueDate(e.target.value)}
              disabled={disabled}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={exdate}
              onChange={(e) => setExDate(e.target.value)}
              disabled={disabled}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="grid col-span-2 ">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="biometric"
            >
              Biometric
            </label>
            <select
              id="biometric"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={biometric}
              onChange={(e) => setBiometric(e.target.value)}
              disabled={disabled}
              required
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {/* {countryDrop && countryDrop?.map((country: any, index: number) => (
                <option key={index} value={country}>{country?.toUpperCase()}</option>
              ))} */}
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="grid col-span-2 my-4">
            {isHideShow && (
              <div className="flex gap-4 items-center  ">
                <div>
                  <label
                    htmlFor="file-uploadpassport1"
                    className="cursor-pointer bg-[#00A264] text-[14px] leading-[19.07px]   text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2 "
                  >
                    Attachment Document
                  </label>
                  <input
                    id="file-uploadpassport1"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    disabled={disabled}
                    required
                  />
                </div>

                <div>
                  {selectedFile ? (
                    <p className="mt-4 text-[14px] leading-[19.07px]  text-[#333333]">
                      File Selected: {selectedFile.name}
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

          {/* second section */}
          <div className=" grid col-span-2 ">
            <h1 className="font-bold ">Seaman's Book/Id</h1>
          </div>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="issingcountry"
            >
              Issuing Country/Flag State
            </label>
            <select
              id="issingcountry"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={flagState}
              onChange={(e) => setFlagState(e.target.value)}
              disabled={disabled}
              required
            >
              <option value="" disabled selected>
                SELECT
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
              htmlFor="seamanbook"
            >
              Seaman Book No.
            </label>
            <input
              id="seamanbook"
              type="text"
              value={trainingCenter}
              onChange={(e) => {
                const value = e.target.value
                  .replace(/[^a-zA-Z0-9 ]/g, "")
                  .toUpperCase();
                setTrainingCenter(e.target.value);
              }}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter  Seaman Book No."
              disabled={disabled}
              required
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedate"
            >
              Issue Date
            </label>
            <input
              id="issuedate"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issuedate1}
              onChange={(e) => setIssueDate1(e.target.value)}
              disabled={disabled}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          {!checkBox && (
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor="expdate"
              >
                Expiry Date
              </label>

              <input
                id="expdate"
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px] text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={exdate1}
                onChange={(e) => setExDate1(e.target.value)}
                disabled={disabled}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          )}

          <div className="grid col-span-2">
            <div className=" flex items-center  gap-4 ">
              <input
                id="neverExpires"
                type="checkbox"
                className="border focus:ring-[#00A264]  text-[#00A264] checked:border-transparent checked:bg-[#00A264] focus:outline-green-300  rounded-md border-[#00A264] "
                checked={checkBox}
                onChange={() => setCheckBox(!checkBox)}
                disabled={disabled}
              />
              <label
                className="text-[14px] leading-[19.07px] text-[#333333]"
                htmlFor="neverExpires"
              >
                Never Expires
              </label>
            </div>
          </div>

          <div className="grid col-span-2 my-4">
            {isHideShow && (
              <div className="flex gap-4 items-center  ">
                <div>
                  <label
                    htmlFor="file-uploadpassport"
                    className="cursor-pointer bg-[#00A264] text-[14px] leading-[19.07px]  text-white px-4 py-2 rounded-md  hover:bg-[#04714e] focus:outline-none focus:ring-2  "
                  >
                    Attachment Document
                  </label>
                  <input
                    id="file-uploadpassport"
                    type="file"
                    className="hidden"
                    onChange={handleFileChanges}
                    disabled={disabled}
                    required
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
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="font-bold ">VISA</h1>
          {isHideShow && (
            <div className="flex gap-2">
              <AiOutlinePlus
                className="text-2xl cursor-pointer"
                onClick={addFieldVisa}
              />
              {visaForms.length > 1 && (
                <AiOutlineMinus
                  className="text-2xl cursor-pointer"
                  onClick={() => removeFieldVisa(visaForms.length - 1)}
                />
              )}
            </div>
          )}
        </div>

        {visaForms.map((field, index) => (
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333] "
                htmlFor={`countryissue_${index}`}
              >
                Country(Issue Authority)
              </label>
              <select
                id={`countryissue_${index}`}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                name="options"
                value={field.issueAuthority}
                onChange={(e) =>
                  handleFormChangeVisa(index, "issueAuthority", e.target.value)
                }
                disabled={disabled}
              >
                <option value="" disabled selected>
                  SELECT
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
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor={`visanumber01_${index}`}
              >
                Visa Number
              </label>
              <input
                id={`visanumber01_${index}`}
                type="text"
                value={field.visaNumber}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^a-zA-Z0-9 ]/g, "")
                    .toUpperCase();
                  handleFormChangeVisa(index, "visaNumber", value);
                }}
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Visa Number"
                disabled={disabled}
              />
            </div>

            {/* </div> */}
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor={`issueDatevisa_${index}`}
              >
                Issue Date
              </label>
              <input
                id={`issueDatevisa_${index}`}
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={field.issueDateVisa}
                onChange={(e) =>
                  handleFormChangeVisa(index, "issueDateVisa", e.target.value)
                }
                disabled={disabled}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]  "
                htmlFor={`expdateVisa_${index}`}
              >
                Expiry Date
              </label>

              <input
                id={`expdateVisa_${index}`}
                type="date"
                className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                value={field.expryDateVisa}
                onChange={(e) =>
                  handleFormChangeVisa(index, "expryDateVisa", e.target.value)
                }
                disabled={disabled}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="grid col-span-2 my-4">
              {isHideShow && (
                <div className="flex gap-4 items-center  ">
                  <div>
                    <label
                      htmlFor={`file-uploadVisa_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px]   focus:outline-none focus:ring-2 "
                    >
                      Attachment Document
                    </label>
                    <input
                      id={`file-uploadVisa_${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChangeVisa(index, e)}
                      disabled={disabled}
                    />
                  </div>
                  <div>
                    {field.selectedFileVisa ? (
                      <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                        File Selected: {field.selectedFileVisa.name}
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

        {/* forth section */}

        {/* <div className="grid col-span-2 "> */}
        <h1 className="font-bold ">Residence Permit</h1>
        {/* </div> */}

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuingcou"
            >
              Issuing Country
            </label>
            <select
              id="issuingcou"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              name="options"
              value={issuingCountry}
              onChange={(e) => setIssuingCountry(e.target.value)}
              disabled={disabled}
            >
              <option value="" disabled selected>
                SELECT
              </option>
              {countryDrop &&
                countryDrop?.map((country: any, index: number) => (
                  <option key={index} value={country}>
                    {country?.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="seamanPermit"
            >
              Enter Number
            </label>
            <input
              id="seamanPermit"
              type="text"
              value={permitNumber}
              onChange={(e) => {
                const value = e.target.value
                  .replace(/[^a-zA-Z0-9 ]/g, "")
                  .toUpperCase();
                setPermitNumber(value);
              }}
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264] "
              placeholder="Enter Number"
              disabled={disabled}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333]"
              htmlFor="issuedate11"
            >
              Issue Date
            </label>
            <input
              id="issuedate11"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={issueDate2}
              onChange={(e) => setIssueDate2(e.target.value)}
              disabled={disabled}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="">
            <label
              className="text-[14px] leading-[19.07px]  text-[#333333] "
              htmlFor="expidate11"
            >
              Expiry Date
            </label>

            <input
              id="expidate11"
              type="date"
              className="border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
              value={expDate2}
              onChange={(e) => setExpDate2(e.target.value)}
              disabled={disabled}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          {/* </div> */}

          <div className="col-span-2 ">
            {isHideShow && (
              <div className="flex gap-6 items-center   my-6 ">
                <div>
                  <label
                    htmlFor="file-uploadpermit"
                    className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md  hover:bg-[#04714e] text-[14px] leading-[19.07px]   focus:outline-none focus:ring-2  "
                  >
                    Attachment Document
                  </label>
                  <input
                    id="file-uploadpermit"
                    type="file"
                    className="hidden"
                    onChange={handleFileChangeResidence}
                    disabled={disabled}
                  />
                </div>
                <div>
                  {selectedFileResidence ? (
                    <p className="text-[14px] leading-[19.07px]  text-[#333333]">
                      File Selected: {selectedFileResidence.name}
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

          <div className="w-full grid col-span-2 ">
            <label
              className="block text-[14px] leading-[19.07px]  text-[#333333] mb-1"
              htmlFor="inumber"
            >
              INDoS Number
            </label>
            <div className="relative flex items-center  ">
              <input
                id="inumber"
                type="text"
                value={indNumber}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^a-zA-Z0-9 ]/g, "")
                    .toUpperCase();
                  setIndNumber(value);
                }}
                className=" border rounded-md w-full h-9  px-2  text-[14px] leading-[19.07px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter INDoS Number"
                disabled={disabled}
                required
              />
            </div>
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
            href={"#"}
            onClick={handleEdit}
            className={`border p-2 rounded-lg px-8 ${
              isEditing
                ? "border-red-500 text-red-500"
                : "border-[#00A264] text-[#00A264]"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"} {/* Conditional rendering */}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TravelDocuments;
