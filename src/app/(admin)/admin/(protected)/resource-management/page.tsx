"use client";
import { getReq, postReq } from "@/RootServices";
// import QuillEditor from "@/components/admin/quilleditor/QuillEditor";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(
  () => import("@/components/admin/quilleditor/QuillEditor"),
  { ssr: false }
);
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { AddResourcesData, GetResourcesList } from "./Services/resourceService";
type Props = {};

const page = (props: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [resourcesList,setResourcesList] = useState([
    {
      id: 1,
      title: "Gwen Stacy",
      about: "Lorem Ipsum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
    },
    {
      id: 2,
      title: "Gwen Stacy",
      about: "Lorem Ipsum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
    },
    {
      id: 3,
      title: "Gwen Stacy",
      about: "Lorem Ipsum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
    },
  ])

  const handleAddClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null); // Remove the selected image
  };

  const handleSubmit = async(e: React.FormEvent) => {
    try {
      e.preventDefault();
    console.log("Form Submitted:", formData);
    let data ={
      title:formData.title,
      description:formData.description,
    }
    AddResourcesData(data,AddResourcesDataCB)
    // setIsPopupOpen(false); // Close the popup after submission
    } catch (error) {
      
    }
    
  };

  const AddResourcesDataCB=(result:any)=>{
    console.log(result);
    setIsPopupOpen(false);
  }

  useEffect(() => {
    GetResourcesList(fetchResources)
  }, [])

  const fetchResources=(result:any)=>{
    console.log('res',result)
    // setResourcesList(response.data);
  }
  


  return (
    <div className="mt-4 mx-auto flex w-[90%] flex-col">
      <div className=" flex justify-end ">
        <Link
          href={"#"}
          className="px-4 py-2 bg-green-600 text-white rounded transition duration-300"
          onClick={handleAddClick}
        >
          Add Resource
        </Link>
      </div>
      {/* Table */}
      <div className="overflow-x-auto w-full mt-2 -z-10">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 ">Title</th>
              <th className="py-2 px-4 ">Description</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resourcesList?.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="py-2 px-4  flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="py-2 px-4 ">{item.about}</td>
                <td className="py-2 px-4 ">{item.date}</td>
                <td className="py-2 px-4 flex justify-center space-x-4">
                  <Link
                    href="#"
                    className="text-blue-500 pb-2 hover:text-blue-700"
                  >
                    <FaEye />
                  </Link>
                  <Link
                    href="#"
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaEdit />
                  </Link>
                  <Link href="#" className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg  lg:w-[600px] lg:h-auto w-[600px] h-[500px]">
            <h2 className="text-xl font-bold mb-4">Add Resource</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 mb-2">
                  Choose Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="block w-full border rounded-lg h-12 text-sm text-gray-500 file:mr-4 file:py-[15px] file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-100"
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <div className=" relative mt-4 h-20 w-20 ">
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="relative h-full w-full object-cover rounded-lg border"
                    />
                    {/* Close button for removing the image */}
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-white rounded-full text-red-500 h-5 w-5  "
                      onClick={removeSelectedImage}
                    >
                      <IoIosClose className="text-xl w-full h-full" />
                    </button>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border h-12 border-gray-300 rounded"
                  placeholder="Enter title"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Description
                </label>
                {/* <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border h-32 border-gray-300 rounded"
                  placeholder="Enter description"
                /> */}
                <QuillEditor content={formData.description} setContent={(des:any)=>setFormData({...formData,description:des})}/>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="reset"
                  onClick={handleClosePopup}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
