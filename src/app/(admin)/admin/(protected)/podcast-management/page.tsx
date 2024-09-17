// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

// type Props = {}

// const page = (props: Props) => {

//   const data = [
//     {
//       id: 1,
//       title: "video 1",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image1.jpg",
//       date: "2024-01-01",
//     },
//     {
//       id: 2,
//       title: "video 2",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image2.jpg",
//       date: "2024-01-01",
//     },
//     {
//       id: 3,
//       title: "video 3",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image1.jpg",
//       date: "2024-01-01",
//     },
//     {
//       id: 4,
//       title: "video 4",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image2.jpg",
//       date: "2024-01-01",
//     },
//     {
//       id: 5,
//       title: "video 5",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image1.jpg",
//       date: "2024-01-01",
//     },
//     {
//       id: 6,
//       title: "video 6",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image2.jpg",
//       date: "2024-01-01",
//     },
//     {
//       id: 7,
//       title: "video 7",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image1.jpg",
//       date: "2024-01-01",
//     },
//     {
//       id: 8,
//       title: "video 8",
//       description: "Cruise ship Interviews questions & answers !",
//       image: "/path/to/image2.jpg",
//       date: "2024-01-01",
//     },
//   ];

//   return (
//     <div className="overflow-x-auto mt-16 sm:md:ml-[1rem] flex flex-row justify-center items-center sm:md:w-[80%]">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Title</th>
//             <th className="py-2 px-4 border-b">Video Link</th>
//             <th className="py-2 px-4 border-b">Date</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id} className="text-center">
//               <td className="py-2 px-4 border-b flex items-center justify-center">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={100}
//                   height={100}
//                   className="w-8 h-8 rounded-full object-cover mr-2"
//                 />
//                 <span>{item.title}</span>
//               </td>
//               <td className="py-2 px-4 border-b">{item.description}</td>
//               <td className="py-2 px-4 border-b">{item.date}</td>
//               <td className="py-2 px-4 border-b flex justify-center space-x-4">
//                 <Link
//                   href="#"
//                   className="text-blue-500 pb-2 hover:text-blue-700 "
//                 >
//                   <FaEye />
//                 </Link>
//                 <Link href="#" className="text-green-500 hover:text-green-700">
//                   <FaEdit />
//                 </Link>
//                 <Link href="#" className="text-red-500 hover:text-red-700">
//                   <FaTrash />
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default page
"use client";
import QuillEditor from "@/components/admin/quilleditor/QuillEditor";
// import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";
import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., update state or send to backend)
    console.log("Form Submitted:", formData);
    setIsPopupOpen(false); // Close the popup after submission
  };

  const data = [
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
  ];

  return (
    <div className="mt-4 mx-auto flex w-[90%] flex-col">
      <div className=" flex justify-end ">
        <Link
          href={"#"}
          className="px-4 py-2 bg-green-600 text-white rounded transition duration-300"
          onClick={handleAddClick}
        >
          Add Podcast
        </Link>
      </div>
      {/* Table */}
      <div className="overflow-x-auto w-full mt-2  -z-10">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4 ">video link</th>
              <th className="py-2 px-4 ">Date</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="py-2 px-4 flex items-center justify-center">
                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  /> */}
                  <span>{item.title}</span>
                </td>
                <td className="py-2 px-4 ">{item.about}</td>
                <td className="py-2 px-4 ">{item.date}</td>
                <td className="py-2 px-4  flex justify-center space-x-4">
                  <Link href="#" className="text-blue-500  hover:text-blue-700">
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center  lg:h-auto h-[500px] items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-[500px]">
            <h2 className="text-xl font-bold mt-6 mb-4">Add Podcast</h2>
            <form onSubmit={handleSubmit}>
              {/* <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter image URL"
                />
              </div> */}
              <div className="mb-4 ">
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
                  Video link
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border h-36 border-gray-300 rounded"
                  placeholder="Enter description"
                />
                {/* <QuillEditor /> */}
              </div>
              <div className="flex mt-12 justify-end space-x-4">
                <Link
                  href={"#"}
                  type="button"
                  onClick={handleClosePopup}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </Link>
                <Link
                  href={"#"}
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded "
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
