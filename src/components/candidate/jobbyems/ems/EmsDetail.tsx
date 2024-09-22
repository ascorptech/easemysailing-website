import Link from 'next/link';
import React from 'react'

export default function EmsDetail() {
  return (
    <div className="mx-2   ">
      <div>
        <h1 className="font-bold text-[25px]">Maersk Line</h1>
        <p>Captain</p>
        <ul className="flex flex-row w-auto h-12 gap-3 mt-3 bg-[#D6EEEE] text-sm">
          <li className=" ">
            <Link
              href="#"
              className="inline-flex h-12 justify-between items-center px-4 py-2 bg-[#00A264] text-white  rounded-md shadow-sm  focus:outline-none"
            >
              Job Description
            </Link>
          </li>
          <li className="  ">
            <Link
              href="#"
              className="inline-flex h-12 justify-between items-center px-4 py-2 bg-[#00A264] text-white  rounded-md shadow-sm focus:outline-none"
            >
              More Info
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className="inline-flex h-12 justify-between items-center px-4 py-2 bg-[#00A264] text-white rounded-md shadow-sm  focus:outline-none"
            >
              Recruiter Information
            </Link>
          </li>
        </ul>
        {/* // Job description */}
        <div className="mt-5">
          <h1 className="font-bold text-[22px] leading-10">Job Description</h1>
          <p className="text-justify text-[#4E4E4E] text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
          <ul className="list-disc text-sm leading-8 text-[#4E4E4E] list-inside text-justify mt-2">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              since.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic.
            </li>
          </ul>
        </div>
        {/* More Info */}
        <div className="mt-5">
          <h1 className="font-bold text-[22px] leading-10">More Info</h1>
          <p className="text-justify text-[#4E4E4E] text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
        </div>
        {/* Recruiter information */}
        <div className="mt-5">
          <h1 className="font-bold text-[22px] leading-10">
            Recruiter Information
          </h1>
          <p className="text-justify text-[#4E4E4E] text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
          <ul className="list-disc text-sm leading-8 text-[#4E4E4E] list-inside text-justify mt-2">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              since.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
