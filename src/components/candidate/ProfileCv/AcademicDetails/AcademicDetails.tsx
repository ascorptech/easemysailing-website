"use client";
import {
  AddAcademicData,
  GetDropdownDetails,
} from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { toast } from "react-toastify";

type AcademicComplete = {
  percentage: number;
  color: string;
};

type AcademicForm = {
  degree: string;
  percentage: string;
  startdate: string;
  enddate: string;
  selectedFile: any | null;
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
  criminal: any;
  academicDetail: any;
};

const AcademicDetails = ({
  academicComplete,
  setAcademicComplete,
  userDetail,
  criminal,
  academicDetail,
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

  // const [university, setUniversity] = useState("");
  // const [subject, setSubject] = useState("");
  // const [city, setCity] = useState("");
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [issuingCountry, setIssuingCountry] = useState("");
  const [countryDrop, setCountryDrop] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);
  const [isHideShow, setIsHideShow] = useState(false);
  const [color, setColor] = useState("");

  const totalFields = educationForms.length * 4 + academicForms.length * 5;
  const filledFields = [
    ...educationForms?.flatMap((formed) => [
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

  useEffect(() => {
    if (academicDetail) {
      let combineLng = academicDetail?.educations?.length
        ? academicDetail?.educations?.map((lang: any) => ({
            university: lang?.schoolCollegeUniversity,
            subject: lang?.subject,
            issuingCountry: lang?.country,
            city: lang?.city,
          }))
        : [
            {
              university: "",
              subject: "",
              city: "",
              issuingCountry: "",
            },
          ];
      setEducationForms(combineLng);
      let combineLng1 = academicDetail?.qualifications?.length
        ? academicDetail?.qualifications?.map((lang: any) => ({
            degree: lang?.degree,
            percentage: lang?.percentage,
            startdate: moment(lang?.startDate).format("YYYY-MM-DD"),
            enddate: moment(lang?.endDate).format("YYYY-MM-DD"),
            selectedFile: lang?.documentUrl,
          }))
        : [
            {
              degree: "",
              percentage: "",
              startdate: "",
              enddate: "",
              selectedFile: null,
            },
          ];
      setAcademicForms(combineLng1);
    }
  }, [academicDetail]);

  const percentage: any =
    totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  // const percentage = totalFields > 0 ? (filledFields / totalFields) * 100 : 0;
  // let color;
  useEffect(() => {
    console.log("user", userDetail);
    if (percentage <= 30) {
      setAcademicComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF0000",
      }));
      setColor("#FF0000");
    } else if (percentage <= 70) {
      setAcademicComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#FF9900",
      }));
      setColor("#FF9900");
    } else {
      setAcademicComplete((prevState) => ({
        ...prevState,
        percentage: percentage,
        color: "#00A264",
      }));
      setColor("#00A264");
    }
  }, [percentage, color]);

  useEffect(() => {
    GetDropdownDetails("country", (res: any) => {
      // console.log('County',res?.data)
      setCountryDrop(res?.data?.values);
    });
  }, []);
  const handleFileChange = (index: number, event: any) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBinary: any = reader.result;
      const byteArray = imageBinary.split(",")[1];

      const updatedForms: any = [...academicForms];
      updatedForms[index].selectedFile = byteArray;
      setAcademicForms(updatedForms);
    };
    reader.readAsDataURL(file);
    // const updatedForms = [...academicForms];
    // updatedForms[index].selectedFile = event.target.files?.[0] || null;
    // setAcademicForms(updatedForms);
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
    if (!criminal) {
      toast.error("Please accept the declaration");
      return;
    } else {
      let data: any = {
        id: userDetail?.userId,
        color: color,
        completed: percentage,
      };
      const acadeArray: any = [];
      const eduArray: any = [];

      academicForms.forEach((element: any) => {
        acadeArray.push({
          degree: element?.degree,
          percentage: element?.percentage,
          startDate: element?.startdate,
          endDate: element?.enddate,
          documentUrl: element?.selectedFile,
        });
      });

      educationForms.forEach((element: any) => {
        eduArray.push({
          schoolCollegeUniversity: element?.university,
          subject: element?.subject,
          country: element?.issuingCountry,
          city: element?.city,
        });
      });
      data.educations = eduArray;
      data.qualifications = acadeArray;

      AddAcademicData(data, AddAcademicDataDB);
    }
  };

  const AddAcademicDataDB = (result: any) => {
    console.log(result);
    if (result?.status == 200 || result?.status == 201) {
      console.log(result);
      toast.success("Academic Details submited successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Next Of Kin Details not submited ");
    }
  };

  const handleEdit = () => {
    setDisabled(!disabled);
    setIsHideShow(!isHideShow);
  };

  // const handleValidationChange = (setValue: any) => (e: any) => {
  //   const value = e.target.value;
  //   const alphabeticValue = value.replace(/[^A-Za-z\s]/g, "");
  //   const capitalizedValue =
  //     alphabeticValue.charAt(0).toUpperCase() + alphabeticValue.slice(1);
  //   setValue(capitalizedValue);
  // };

  // const handlePhoneNumberChange = (setter: any) => (e: any) => {
  //   let value = e.target.value;

  //   value = value.replace(/[^0-9]/g, "");
  //   // setter(value);

  //   if (value.length <= 2) {
  //     setter(value);
  //   }
  // };

  return (
    <div className="container border-2 shadow-lg p-3 mt-[14px] mb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Qualification</h1>

          {isHideShow && (
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
          )}
        </div>

        {academicForms.map((field, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                className="text-[14px]  text-[#333333]"
                htmlFor={`degree_${index}`}
              >
                Degree
              </label>
              <input
                id={`degree_${index}`}
                type="text"
                value={field.degree}
                onChange={(e) => {
                  const alphabeticValue = e.target.value.replace(
                    /[^A-Za-z\s]/g,
                    ""
                  ).toUpperCase();
                 
                  handleFormChange(index, "degree", alphabeticValue);
                }}
                // onChange={(e) =>
                //   handleFormChange(index, "degree", e.target.value)
                // }
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Degree"
                disabled={disabled}
              />
            </div>
            <div>
              <label
                className="text-[14px]  text-[#333333]"
                htmlFor={`percetnge_${index}`}
              >
                Percentage
              </label>
              <input
                id={`percetnge_${index}`}
                type="text"
                value={field.percentage}
                onChange={(e) => {
                  let value: any = e.target.value.replace(/[^0-9.]/g, "");
                  if (parseFloat(value) > 100) {
                    value = "100"; // Set the value to 100 if the user enters more than 100
                  }
                  handleFormChange(index, "percentage", value);
                }}
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Percentage"
                disabled={disabled}
              />
            </div>

            <div>
              <label className="text-[14px]  text-[#333333]">Start Date</label>
              <input
                type="date"
                value={field.startdate}
                onChange={(e) =>
                  handleFormChange(index, "startdate", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                disabled={disabled}
                // max={new Date().toISOString().split("T")[0]}
                max={new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0]}
              />
            </div>
            <div>
              <label className="text-[14px]  text-[#333333]">End Date</label>
              <input
                type="date"
                value={field.enddate}
                onChange={(e) =>
                  handleFormChange(index, "enddate", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                disabled={disabled}
                max={new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0]}/>
            </div>

            <div className="grid col-span-2 gap-4 ">
              {isHideShow && (
                <div className="flex items-center gap-4">
                  <div className="flex gap-6 items-center">
                    <label
                      htmlFor={`file-upload_${index}`}
                      className="cursor-pointer bg-[#00A264] text-white px-4 py-2 rounded-md hover:bg-[#04714e] text-[14px] "
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
                    <p className="text-[14px]  text-[#333333]">
                      No File Selected
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-4">
          <h1 className="font-bold">Education</h1>
          {isHideShow && (
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
          )}
        </div>

        {educationForms.map((fields, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="text-[14px] leading-[19.07px]  text-[#333333]"
                htmlFor="university"
              >
                University/School
              </label>
              <input
                id="university"
                type="text"
                value={fields.university}
                onChange={(e) => {
                  const alphabeticValue = e.target.value.replace(
                    /[^A-Za-z\s]/g,
                    ""
                  ).toUpperCase();
                  
                  handleFormChangeEdu(index, "university", alphabeticValue);
                }}
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Your University"
                disabled={disabled}
              />
            </div>
            <div>
              <label className="text-[14px]  text-[#333333]" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={fields.subject}
                onChange={(e) => {
                  const alphabeticValue = e.target.value.replace(
                    /[^A-Za-z\s]/g,
                    ""
                  ).toUpperCase();
                  
                  handleFormChangeEdu(index, "subject", alphabeticValue);
                }}
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Your Subject"
                disabled={disabled}
              />
            </div>
            <div>
              <label className="text-[14px]  text-[#333333]" htmlFor="city">
                City
              </label>
              <input
                id="city"
                type="text"
                value={fields.city}
                onChange={(e) => {
                  const alphabeticValue = e.target.value.replace(
                    /[^A-Za-z\s]/g,
                    ""
                  ).toUpperCase();
                  
                  handleFormChangeEdu(index, "city", alphabeticValue);
                }}
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                placeholder="Enter Your City"
                disabled={disabled}
              />
            </div>
            <div>
              <label
                className="text-[14px]  text-[#333333]"
                htmlFor="issuingCountry"
              >
                Issuing Country
              </label>
              <select
                id="issuingCountry"
                value={fields.issuingCountry}
                onChange={(e) =>
                  handleFormChangeEdu(index, "issuingCountry", e.target.value)
                }
                className="border rounded-md w-full h-9 px-2 text-[14px]  text-[#333333] focus:outline-[#00A264] focus:shadow-outline border-[#00A264]"
                disabled={disabled}
              >
                <option value="">Select</option>
                {countryDrop?.map((country: any, index: number) => (
                  <option key={index} value={country}>
                    {country?.toUpperCase()}
                  </option>
                ))}
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
