import Link from "next/link";
import React from "react";

export default function EduDetail() {
  return (
    <div className="mx-2  h-[60rem]  ">
      <div>
        {/* // Job description */}
        <div className="mt-5">
          <h1 className="font-bold text-[22px] leading-10">
            Alternate Fuel - Bunkering
          </h1>
          <h1 className="font-bold text-[22px] leading-10">
            Courses Description
          </h1>

          <p className="text-justify text-[#4E4E4E] text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
          <p className="text-justify text-[#4E4E4E] text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
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
