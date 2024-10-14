"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { X } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { GetProfileDetail } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";
import { toast } from "react-toastify";
import { IoIosCloseCircle } from "react-icons/io";

const ProfileCV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ratings, setRatings] = useState({
    teamCollaboration: 0,
    teamEnhancement: 0,
    problemResolution: 0,
    communication: 0,
    attitude: 0,
    acceptability: 0,
  });
  const [profileDetail, setProfileDetail] = useState<any>();
  const [date, setDate] = useState("");
  const [feedback, setFeedback] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState(
    "/images/candidate/profileCv/profile.png"
  );
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [showEditImagePopup, setShowEditImagePopup] = useState(false);
  const [color, setColor] = useState("");


  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    let id = await localStorage.getItem("id");
    setProfileDetail({
      name:
        localStorage.getItem("firstName") +
        " " +
        localStorage.getItem("lastName"),
      email: localStorage.getItem("email"),
    });
    GetProfileDetail(id, (res: any) => {
      if (res?.status == 200) {
        setProfileDetail(res?.data);
      } else {
        toast.error("No data found");
      }
      console.log("data here iam", res);
    });
  };

  // const handleRating = (key: string, value: number) => {
  //   setRatings({ ...ratings, [key]: value });
  // };

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };

  // const handleAddClick = () => {
  //   setIsPopupOpen(true);
  // };
  const simulateUpload = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false); // Hide upload progress after completion
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name); 

     
      const fileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
      if (fileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string); 
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }

      setUploading(true);
      simulateUpload();
    }
  };

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

 


  const openEditImagePopup = () => {
    setShowEditImagePopup(true);
  };
  const closeEditImagePopup = () => {
    setShowEditImagePopup(false);
    setFilePreview(null);
    setFileName("");
    setProgress(0);
  };
  const triggerFileUpload = () => {
    document.getElementById("file-input")?.click();
  };
  const handleSubmitImageChange = () => {
    if (progress === 100 && filePreview) {
      setProfileImage(filePreview);

      closeEditImagePopup();
    }
  };

  const handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3 px-9">
      <div className="flex  flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between border-2 py-2 px-4">
        <div className="flex md:flex-row flex-col items-center gap-2 ">
        

          <div className="relative w-[115.32px] h-[128.85px] border p-2 -z-30">
            <Image
              priority
              width={200}
              height={200}
              src={profileImage} 
              className="w-full h-full "
              alt={"Profile Image"}
            />
            {/* Edit profile image */}
            <div
              className="absolute top-0 right-0 cursor-pointer"
              onClick={openEditImagePopup}
            >
              <Image
                priority
                width={20}
                height={20}
                src={"/edit.png"}
                className="w-6 h-6"
                alt={"Edit Image"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-semibold text-[24px] leading-[36px]">
              {profileDetail?.firstName + " " + profileDetail?.lastName}
            </h1>
            <p className="text-[#00A264] font-medium text-[16px] leading-[24px]">
              {/* {profileDetail?.rank} */}
              {profileDetail?.rank || "Rank not available"}
            </p>
            <div className="flex items-center gap-2">
              <Image
                priority
                src="/images/candidate/profileCv/user.png"
                alt="logo not found"
                width={300}
                height={300}
                className="object-contain w-[24px] h-[24px]"
              />
              <p className="font-semibold text-[15px] leading-[21px]">
                About :
                <span className="font-normal ml-1 text-[15px] leading-[21px]">
                  {profileDetail?.aboutMe}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                priority
                src="/vector1.png"
                alt="logo not found"
                width={300}
                height={300}
                className="object-contain w-[24px] h-[24px]"
              />
              <p className="font-semibold text-[15px] leading-[21px]">
                Email :
                <span className="ml-1 font-normal text-[15px] leading-[21px]">
                  {profileDetail?.email}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex  gap-2">
            {" "}
            <Image
              priority
              src="/images/candidate/profileCv/Vector.png"
              alt=""
              width={200}
              height={200}
              className="object-contain w-[24px] h-[24px]"
            />
            <p className="font-semibold text-[15px] leading-[21px]">
              Availability :{" "}
              <span className="ml-1 font-normal text-[15px] leading-[21px]">
                Available
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            {" "}
            <Image
              priority
              src="/images/candidate/profileCv/Group.png"
              alt=""
              width={500}
              height={500}
              className="object-contain w-[24px] h-[24px]"
            />
            <div className="flex items-center justify-center ">
              <p className="font-semibold text-[15px] leading-[21px]">
                Current Status :
              </p>
              <p
                className="flex items-center justify-center ml-2 bg-[#00A264] p-1 px-2 rounded-lg text-white font-normal  text-[15px] leading-[18px] "
                onClick={handletoggle}
              >
                On Leave
                {/* <RiArrowDownSLine className="text-2xl " /> */}
                <span className="ml-2 ">
                  {isOpen ? (
                    <svg
                      className="w-6 h-6 transform rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </p>
{/* 
              {isOpen && (
                <div className="fixed bg-black  bg-opacity-10 rounded-lg flex mt-32 ml-28 justify-center items-center z-50">
                  <div className="border  shadow-lg p-2 pl-3 rounded-lg bg-white text-[14px] leading-[20px] ">
                    <p>On board</p>
                    <p>On leave</p>
                    <p>Ready for joining</p>
                  </div>
                </div>
              )} */}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {" "}
            <Image
              priority
              src="/images/candidate/profileCv/zondicons_time.png"
              alt=""
              width={50}
              height={50}
              className="object-contain w-[24px] h-[24px]"
            />
            <p className="font-semibold text-[15px] leading-[21px]">
              Total Seagoing Time(months) :{" "}
              <span className="font-normal text-[15px] leading-[18px] ">
                2 Months
              </span>
            </p>
          </div>

          {/* <div className="flex gap-2">
            {" "}
            <Image
             priority
              src="/images/candidate/profileCv/star-rate.png"
              alt=""
              width={500}
              height={500}
              className="object-contain w-[24px] h-[24px]"
            />
            <p className="font-semibold text-[15px] leading-[21px]">
              3.6 |{" "}
              <span className="font-normal text-[15px] leading-[18px]">
                1K+ reviews
              </span>
            </p>
          </div> */}
        </div>
        {/* <div className="flex flex-col items-center ">
          <Link
            href="#"
            className="rounded-lg  bg-[#00A264] flex p-2 px-4 text-white"
          >
            <Image
             priority
              src="/images/candidate/profileCv/import-line.png"
              alt=""
              width={500}
              height={500}
              className="object-contain w-[24px] h-[24px] "
            />{" "}
            Import CV
          </Link>

          <Link href="#"
            
            className="rounded-lg p-2 text-white bg-[#00A264] mt-2"
          onClick={handleAddClick} >
            Rate Employer
          </Link>
        </div> */}
      </div>

      {/* Popup Form */}
      {/* {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px] ">
            <button className="absolute top-2 right-2 bg-[#00A264] text-white  rounded-full">
              <X size={20} onClick={handleClosePopup} />
            </button>
            <h2 className="text-center text-[24px] leading-[36px] font-bold mt-2 mb-4">
              Rate your previous employer
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-[16px] leading-[21.79px] font-semibold mb-2 ">
                  1. Enter your Signoff Date
                </label>
                <input
                  type="date"
                  className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                {[
                  {
                    label: "2. Please rate your Team Collaboration",
                    key: "teamCollaboration",
                  },
                  {
                    label: "3. Please rate your Team Enhancement",
                    key: "teamEnhancement",
                  },
                  {
                    label: "4. Please rate your Problem Resolution",
                    key: "problemResolution",
                  },
                  {
                    label: "5. Please rate your Effective Communication",
                    key: "communication",
                  },
                  { label: "6. Please rate your Attitude", key: "attitude" },
                  {
                    label:
                      "7. Please rate your Acceptability for next employment",
                    key: "acceptability",
                  },
                ].map(({ label, key }, index) => (
                  <div key={index} className="flex flex-col mb-1 ">
                    <label className="text-[16px] leading-[21.79px] font-semibold mb-2">
                      {label}
                    </label>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`cursor-pointer ${
                            ratings[key as keyof typeof ratings] > i
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          onClick={() => handleRating(key, i + 1)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              
              <div className="flex flex-col mb-2 mt-2">
               
                <textarea
                  className="border p-2 bg-[#DAFFF1] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[#333333]"
                  rows={2}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter your Feedback"
                />
              </div>
              <div className="mb-2  ">
                <Link
                  href={"#"}
                  type="submit"
                  className=" block w-full text-center px-4 py-2 bg-green-600 text-white rounded "
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      )} */}

      {showEditImagePopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[35rem] flex flex-col justify-center items-center">
            <div className="ml-[32rem] -mt-4 ">
              <button className="text-[#00A264]" onClick={closeEditImagePopup}>
                <IoIosCloseCircle className="w-8 h-8" />
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Update Logo
            </h3>

            <div
              className="border-[#00A264] w-44 h-44 bg-[#E9FFF7] shadow-lg rounded-full flex flex-col justify-center items-center border-2 cursor-pointer overflow-hidden"
              onClick={triggerFileUpload}
            >
              {filePreview ? (
                <Image
                  priority
                  width={176} 
                  height={176}
                  src={filePreview}
                  alt="Selected Preview"
                  className="object-fit w-full h-full rounded-full"
                />
              ) : (
                <div className="flex justify-center items-center relative">
                  <Image
                    priority
                    width={60}
                    height={60}
                    src={"/upload.png"}
                    alt="Upload Icon"
                    className="h-8 w-10 z-30"
                  />
                </div>
              )}
              <input
                type="file"
                className="hidden"
                id="file-input"
                onChange={handleFileUpload}
              />
            </div>

            {uploading && (
              <div className="mt-4 w-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#00A264] h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-gray-600">{progress}%</p>
              </div>
            )}

            <button
              className={`mt-6 w-full px-4 py-2 rounded-lg ${
                progress === 100 ? "bg-[#00A264]" : "bg-gray-400"
              } text-white font-semibold`}
              onClick={handleSubmitImageChange}
              disabled={progress !== 100}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCV;
