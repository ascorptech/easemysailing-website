import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  const data = [
    {
      id: 1,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
      // form: "Form 1",
    },
    {
      id: 2,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
    },
    {
      id: 3,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
      // form: "Form 1",
    },
    {
      id: 4,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
    },
    {
      id: 5,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
      // form: "Form 1",
    },
    {
      id: 6,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
    },
    {
      id: 7,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
      // form: "Form 1",
    },
    {
      id: 8,
      title: "Gwen stacy",
      about: "Lorem Ip sum is simply dummy text of the printing.",
      image: "/images/captain.png",
      date: "2020-01-01",
    },
  ];

  return (
    <div className="overflow-x-auto mt-16 sm:md:ml-[1rem] flex flex-row justify-center items-center sm:md:w-[80%]">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">About</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Form</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="py-2 px-4 border-b flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
                <span>{item.title}</span>
              </td>
              <td className="py-2 px-4 border-b">{item.about}</td>
              <td className="py-2 px-4 border-b">{item.date}</td>
              <td className="py-2 px-4 border-b ">
                <Link
                  href="#"
                  className="text-blue-500 flex justify-center space-x-4 hover:text-blue-700"
                >
                  <FaEye />
                </Link>
              </td>{" "}
              {/* New Form Column */}
              <td className="py-2 px-4 border-b flex justify-center space-x-4">
                <Link
                  href="#"
                  className="text-blue-500 pb-2 hover:text-blue-700"
                >
                  <FaEye />
                </Link>
                <Link href="#" className="text-green-500 hover:text-green-700">
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
  );
};

export default page;
