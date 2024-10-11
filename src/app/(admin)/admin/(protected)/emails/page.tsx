"use client";
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { DeleteEmailData, GetEmailsList } from './Services/emailService';
import RotateLoader from 'react-spinners/RotateLoader';

type Props = {}

const page = (props: Props) => {
  const [isPopupDeleteOpen, setIsPopupDeleteOpen] = useState(false);
  const [emailsList, setEmailsList] = useState<any>([])
  const [totalPages, setTotalPages] = useState(1)
  const [emailDetail, setEmailDetail] = useState<any>({})
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [resourcesPerPage,setResourcesPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Pagination start
  // Pagination: Calculate current page resources
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentEmails = emailsList.length?emailsList?.slice(indexOfFirstResource, indexOfLastResource):[];

  const searchByFilter = (event: any) => {
    const query = event.target.value;
    if (query) {
      const lowerQuery = query.toLowerCase();
  
      let updatedList = emailsList.filter((item: any) => {
        for (const key in item) {
          if (
            item[key] &&
            typeof item[key] === "string" &&
            item[key].toLowerCase().includes(lowerQuery)
          ) {
            return true;
          }
        }
        return false;
      });
  
      setEmailsList(updatedList);
    } else {
      GetEmailsList(currentPage,resourcesPerPage,fetchResources)
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      GetEmailsList(currentPage+1,resourcesPerPage,fetchResources)
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      GetEmailsList(currentPage-1,resourcesPerPage,fetchResources)
    }
  };

  useEffect(() => {
    setIsLoading(true)
    GetEmailsList(currentPage,resourcesPerPage,fetchResources)
  }, [])

  const fetchResources = (result: any) => {
    setEmailsList(result.data?.content);
    setTotalPages(result.data?.totalPages)
    setIsLoading(false)
  }

  const handleDelete = (id: any) => {
    DeleteEmailData(id, DeletePodcastCB)
  }

  const DeletePodcastCB = (result: any) => {
    if (result?.status == 204) {
      GetEmailsList(currentPage,resourcesPerPage,fetchResources)
      toast.success('Email deleted successfully')
    } else {
      toast.error('Email not deleted')
    }
    setIsPopupDeleteOpen(false);
  }
  const onChangePage = (pageLimit:any)=>{
    GetEmailsList(currentPage,pageLimit,fetchResources)
  }
  return (
    <div className="mt-4 mx-auto flex w-[90%] flex-col">
      {/* <div className=" flex justify-end ">
        <Link
          href={"#"}
          className="px-4 py-2 bg-green-600 text-white rounded transition duration-300"
          onClick={handleAddClick}
        >
          Add Resource
        </Link>
      </div> */}
      {/* Table */}
      {isLoading ? (<div className="h-[500px] w-full mt-[100px] justify-center flex items-center">
        <RotateLoader
          color={'#00A264'}
          loading={isLoading}
          size={10}
        />
      </div>) : (<div className="overflow-x-auto w-full mt-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div className="flex space-x-4">
            <div>
              <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                </svg>
                Last 30 days
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isOpen ? <div id="dropdownRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute inset-y-auto inset-x-0 m-0 translate-[522.5px, 3847.5px, 0px]" >
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                    </div>
                  </li>
                  {/* <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                    </div>
                  </li> */}
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                    </div>
                  </li>
                </ul>
              </div> : null}
            </div>
            <div>
              <select className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" value={resourcesPerPage} onChange={(ro:any)=>{setResourcesPerPage(ro.target.value);onChangePage(ro.target.value)}}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            </div>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"  onChange={(event) => {
                          searchByFilter(event);
                        }} />
            </div>
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
                <th scope="col" className="p-2">
                  User Name
                </th>
                <th scope="col" className="p-2">
                  User Email
                </th>
                <th scope="col" className="p-2">
                  User PhoneNumber
                </th>
                <th scope="col" className="p-2">
                  Message
                </th>
                <th scope="col" className="p-2">
                  Date
                </th>
                <th scope="col" className="p-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {emailsList?.length ? emailsList?.map((item: any) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item?.id}>
                  <th scope="row" className="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.name}
                  </th>
                  <th scope="row" className="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.email}
                  </th>
                  <td className="p-2">
                    {item?.mobileNumber}
                  </td>
                  <td className="p-2">
                    {item?.message}
                  </td>
                  <td className="p-2">
                    {item?.createdDate ? moment(item?.createdDate).format('YYYY-MM-DD') : ''}
                  </td>
                  <td className="p-2 flex justify-center items-center gap-2">
                    {/* <Link href={`#`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => { setIsPopupViewOpen(true); setResourceDetail(item); }}><FaEye /></Link>
                    <Link href={`#`} className="font-medium text-green-600 dark:text-green-500 hover:underline" onClick={() => { setIsPopupEditOpen(true); setResourceDetail(item); }}><FaEdit /></Link> */}
                    <Link href={`#`} className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => { setIsPopupDeleteOpen(true); setEmailDetail(item); }}><FaTrash /></Link>
                  </td>
                </tr>
              )) : <tr>
                <td colSpan={6} className="text-center">No Data Found</td>
              </tr>}

            </tbody>
          </table>
        </div>
      </div>)}

      {/* Popup Form */}
      {/* {isPopupViewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center  lg:h-auto h-[500px] items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
            <div className="flex justify-end">
              <Link href={''} className="font-bold text-3xl" onClick={() => { setIsPopupViewOpen(false) }}>x</Link>
            </div>
            <h2 className="text-xl font-bold mt-6 mb-4">Resource Details</h2>
            <form >
              <div className="mb-4 ">
                <label htmlFor="title" className="block text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={resourceDetail.title}
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
                <input
                  type="text"
                  id="link"
                  name="description"
                  value={resourceDetail.description}
                  className="w-full px-3 py-2 border h-12 border-gray-300 rounded"
                  placeholder="Enter description"
                />
              </div>
            </form>
          </div>
        </div>
      )} */}
      {/* {isPopupEditOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center  lg:h-auto h-[500px] items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
            <div className="flex justify-end">
              <Link href={''} className="font-bold text-3xl" onClick={() => { setIsPopupEditOpen(false) }}>x</Link>
            </div>
            <h2 className="text-xl font-bold mt-6 mb-4">Edit Resource Details</h2>
            <form onSubmit={handleUpdateSubmit}>
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
                  Video link
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
      )} */}
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
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this email?</h3>
              <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={() => handleDelete(emailDetail?.id)}>
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
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>
          Page {currentPage+1} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="bg-[#00A264] text-white px-4 py-2 rounded"
          disabled={currentPage+1 >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default page