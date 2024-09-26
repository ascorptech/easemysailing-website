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
import { AddResourcesData, DeleteResourcesData, GetResourcesList, PutResourcesData } from "./Services/resourceService";
import { toast } from "react-toastify";
import moment from "moment";
type Props = {};

const page = (props: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupDeleteOpen, setIsPopupDeleteOpen] = useState(false);
  const [isPopupViewOpen, setIsPopupViewOpen] = useState(false);
  const [isPopupEditOpen, setIsPopupEditOpen] = useState(false);
  const [resourceData, setResourceData] = useState<any>({
    
    title: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [image, setImage] = useState<any>(null);
  const [resourceDetail, setResourceDetail] = useState<any>()
  const [resourcesList,setResourcesList] = useState([])

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const resourcesPerPage = 5;

  const [letterCount, setLetterCount] = useState(0); 


  // Pagination start
 // Pagination: Calculate current page resources
 const indexOfLastResource = currentPage * resourcesPerPage;
 const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
 const currentResources = resourcesList.slice(indexOfFirstResource, indexOfLastResource);

 const nextPage = () => {
   if (currentPage < Math.ceil(resourcesList.length / resourcesPerPage)) {
     setCurrentPage(currentPage + 1);
   }
 };

 const previousPage = () => {
   if (currentPage > 1) {
     setCurrentPage(currentPage - 1);
   }
 };

   // Pagination end
 

  const handleDescriptionChange = (content: any) => {
    // Update letter count (excluding HTML tags)
    const plainText = content.replace(/<[^>]+>/g, ""); // Remove HTML tags

    // Limit to 4000 characters
    if (plainText.length <= 4000) {
      setResourceData({
        ...resourceData,
        description: content,
      });
      setLetterCount(plainText.length); // Update letter count
    } else {
      toast.error("Description cannot exceed 4000 characters.");
    }
  };
 


  // const handleDescriptionChange = (content: any) => {
  //   setResourceData({
  //     ...resourceData,
  //     description: content,
  //   });
  //   // Update word count
  //   const plainText = content.replace(/<[^>]+>/g, ""); // Remove HTML tags
  //   const wordArray = plainText.trim().split(/\s+/);
  //   setWordCount(wordArray.filter((word) => word !== "").length); // Update word count
  // };

  const handleAddClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResourceData({
      ...resourceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setImage(e.target.files[0])
      setSelectedImage(imageUrl);
    }
  };
  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResourceDetail({
      ...resourceDetail,
      [e.target.name]: e.target.value,
    });
  };

  const removeSelectedImage = () => {
    setSelectedImage(null); // Remove the selected image
  };

  const handleSubmit = async(e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!image) {
        toast.error('Image is required')
      }
      if (!resourceData.title) {
        toast.error('Title is required')
      }
      if (!resourceData.description) {
        toast.error('Description is required')
      }else{
        let formData = new FormData()
        formData.append('image',image)
        formData.append('title',resourceData.title)
        formData.append('description',resourceData.description)
        AddResourcesData(formData,AddResourcesDataCB)
        setResourceData({title: null, description: "" });
        setSelectedImage(null);
        setLetterCount(0);
      }
    
    
    // setIsPopupOpen(false); // Close the popup after submission
    
    } catch (error) {
      console.log('err',error)
    }
    
  };

  const AddResourcesDataCB=(result:any)=>{
    if (result?.status == 200) {
      GetResourcesList(fetchResources)
      toast.success('Resource created successfully')
    } else {
      toast.error('Resource not created')
    }
    setIsPopupOpen(false);
  }

  useEffect(() => {
    GetResourcesList(fetchResources)
  }, [])

  const fetchResources=(result:any)=>{
    if (result?.status == 200) {
    setResourcesList(result.data);
    } else {
      setResourcesList([])
      toast.success('No Record Found')
    }
  }

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., update state or send to backend)
  
    let formData = new FormData()
    formData.append('image',image)
    // formData.append('id',resourceDetail.id)
    formData.append('title',resourceDetail.title)
    formData.append('description',resourceDetail.description)
    PutResourcesData(resourceDetail.id,formData, PutPodcastDataCB)
  };

  const PutPodcastDataCB = (result: any) => {
    if (result?.status == 200) {
      GetResourcesList(fetchResources)
      toast.success('Resource updated successfully')
    } else {
      toast.error('Resource not updated')
    }
    setIsPopupEditOpen(false);
  }

  const handleDelete = (id:any)=>{
    DeleteResourcesData(id, DeletePodcastCB)
  }

  const DeletePodcastCB=(result:any)=>{
    if (result?.status == 204) {
      GetResourcesList(fetchResources)
      toast.success('Resource deleted successfully')
    } else {
      toast.error('Resource not deleted')
    }
    setIsPopupDeleteOpen(false);
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
      <div className="overflow-x-auto w-full mt-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            {/* <div>
            <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={()=>setIsOpen(!isOpen)}>
                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
                Last 30 days
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {isOpen?<div id="dropdownRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute inset-y-auto inset-x-0 m-0 translate-[522.5px, 3847.5px, 0px]" >
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                        </div>
                    </li>
                </ul>
            </div>:null}
        </div> */}
            {/* <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
            </div> */}
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Resource Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Resource Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Resource Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Resource Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentResources?.length ? currentResources?.map((item: any) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item?.id}>
                  {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                  </td> */}
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Image
                    src={`data:image/png;image/jpg;image/jpeg;base64,${item?.imageUrl}`}
                    alt={item?.title}
                    width={100}
                    height={100}
                    priority
                    className="h-14 w-14 rounded-full"
                    />
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white text-wrap">
                    {item?.title}
                  </th>
                  <td className="px-6 py-4">
                  {item?.description?.replace(/<[^>]+>/g, '')}
                  </td>
                  <td className="px-6 py-4">
                  {item?.createdDate?moment(item?.createdDate).format('YYYY-MM-DD'):''}
                  </td>
                  <td className="px-6 py-4 flex justify-center items-center">
                    <div className="flex self-center space-x-4">
                  <Link href={`#`} className="font-large text-blue-600 dark:text-blue-500 hover:underline" onClick={() => { setIsPopupViewOpen(true); setResourceDetail(item); }}><FaEye  className="h-10"/></Link>
                    <Link href={`#`} className="font-large text-green-600 dark:text-green-500 hover:underline" onClick={() => { setIsPopupEditOpen(true); setResourceDetail(item);setSelectedImage(`data:image/png;image/jpg;image/jpeg;base64,${item?.imageUrl}`); }}><FaEdit  className="h-10"/></Link>
                    <Link href={`#`} className="font-large text-red-600 dark:text-red-500 hover:underline" onClick={() => { setIsPopupDeleteOpen(true); setResourceDetail(item); }}><FaTrash  className="h-10"/></Link>
                    </div>
                  </td>
                </tr>
              )) : <tr>
                <td colSpan={4} className="text-center">No Data Found</td>
              </tr>}

            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg  lg:w-[600px] w-[600px] h-[500px] overflow-y-auto no-scroll">
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
                  value={resourceData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border h-12 border-gray-300 rounded"
                  placeholder="Enter title"
                />
              </div>
              {/* <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Description
                </label>
               
                <QuillEditor content={resourceData.description} setContent={(des:any)=>setResourceData({...resourceData,description:des})}/>
              </div> */}
              
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Description
                </label>
               
                <QuillEditor content={resourceData.description} setContent={handleDescriptionChange}/>
                <div className="text-gray-500 text-sm float-right mb-4">
                Word Count: {letterCount}\4000
              </div>
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
      {isPopupViewOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg  lg:w-[600px] w-[600px] h-[500px] overflow-y-auto no-scroll">
            <div className="flex justify-end">
              <Link href={''} className="font-bold text-3xl" onClick={() => { setIsPopupViewOpen(false) }}>x</Link>
            </div>
            <h2 className="text-xl font-bold mt-6 mb-4">Resource Details</h2>
            <form >
              <div className="mb-4 flex justify-center">

                <Image
                    src={`data:image/png;image/jpg;image/jpeg;base64,${resourceDetail?.imageUrl}`}
                    alt={resourceDetail?.title}
                    width={100}
                    height={100}
                    priority
                    className="h-14 w-14 rounded-full"
                    />
              </div>
              <div className="mb-4 ">
                <label htmlFor="title" className="block text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={resourceDetail.title}
                  // onChange={handleInputChange}
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
                <QuillEditor content={resourceDetail.description} setContent={(des:any)=>setResourceDetail({...resourceDetail,description:des})}/>
                {/* <input
                  type="text"
                  id="link"
                  name="description"
                  value={resourceDetail.description?.replace(/<[^>]+>/g, '')}
                  // onChange={handleInputChange}
                  className="w-full px-3 py-2 border h-12 border-gray-300 rounded"
                  placeholder="Enter description"
                /> */}
              </div>
              {/* <div className="flex mt-12 justify-end space-x-4">
                <Link
                  href={"#"}
                  type="button"
                  onClick={() => setIsPopupViewOpen(true)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded "
                >
                  Submit
                </button>
              </div> */}
            </form>
          </div>
        </div>
      )}
      {isPopupEditOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center  lg:h-auto h-[500px] items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
            <div className="flex justify-end">
              <Link href={''} className="font-bold text-3xl" onClick={() => { setIsPopupEditOpen(false) }}>x</Link>
            </div>
            <h2 className="text-xl font-bold mt-6 mb-4">Edit Resource Details</h2>
            <form onSubmit={handleUpdateSubmit}>
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
              <div className="mb-4 ">
                <label htmlFor="title" className="block text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={resourceDetail.title}
                  onChange={handleEditInputChange}
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
                <QuillEditor content={resourceDetail.description} setContent={(des:any)=>setResourceDetail({...resourceDetail,description:des})}/>
              </div>
              <div className="flex mt-12 justify-end space-x-4">
                <Link
                  href={"#"}
                  type="button"
                  onClick={() => setIsPopupEditOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </Link>
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
      {isPopupDeleteOpen && <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center  lg:h-auto h-[500px] items-center">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={() => setIsPopupDeleteOpen(false)}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this resource?</h3>
              <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={()=>handleDelete(resourceDetail?.id)}>
                Yes, I'm sure
              </button>
              <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setIsPopupDeleteOpen(false)}>No, cancel</button>
            </div>
          </div>
        </div>
      </div>}

       {/* Pagination Controls */}
       <div className="flex justify-center gap-4 items-center mt-4">
        <button
          onClick={previousPage}
          className="bg-[#00A264] text-white px-4 py-2 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(resourcesList.length / resourcesPerPage)}
        </span>
        <button
          onClick={nextPage}
          className="bg-[#00A264] text-white px-4 py-2 rounded"
          disabled={currentPage >= Math.ceil(resourcesList.length / resourcesPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default page;
