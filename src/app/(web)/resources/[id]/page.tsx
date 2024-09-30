"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { Resource } from "../../data/resources";
import { GetResourceDetail, GetResourcesExcludeList } from "../Services/resourceService";
import moment from "moment";
import Link from "next/link";
import RotateLoader from "react-spinners/RotateLoader";
import Heading7 from "@/components/web/resource_page/heading7/Heading7";

const ResourceDetailsPage: React.FC = () => {
  const params = useParams(); // useParams hook to get route parameters
  const { id } = params;

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextArea] = useState("");
  const [resourceDetail, setResourceDetail] = useState<any>()
  const [resourcesList, setResourcesList] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    GetResourceDetail(id, GetResourceDetailCB)
    GetResourcesExcludeList(id, GetResourcesExcludeListCB)
  }, [])

  const GetResourceDetailCB = (res: any) => {
    setResourceDetail(res?.data)
  }

  const GetResourcesExcludeListCB = (res: any) => {
    setResourcesList(res?.data)
    setIsLoading(false)
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  const cleanDescText = (text: any) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
  
    // Collect paragraphs as an array
    let paragraphs: string[] = [];
  
    // Iterate through the child nodes of the body
    doc.body.childNodes.forEach(node => {
      // If the node is a paragraph or block-level element, push its text content to the array
      if (node.nodeName === "P" || node.nodeName === "DIV") {
        let paragraph = (node.textContent || "").trim();
        if (paragraph) {
          // Wrap content in <p> tags
          paragraphs.push(paragraph);
        }
      }
    });
  
    // Join paragraphs with no additional line breaks (HTML handles spacing)
    return paragraphs.join('');
  }
  
  
  
  // If no item is found, show a not found message
  if (!resourceDetail) {
    return <div>Item not found</div>;
  }

  return (
    <React.Fragment>
      <div className="flex flex-col">
      <Heading7 />
      {isLoading ? (<div className="h-[500px] w-full mt-[100px] justify-center flex items-center">
        <RotateLoader
          color={'#00A264'}
          loading={isLoading}
          size={10}
        />
      </div>) :
        (<div className="flex sm:flex-row flex-col sm:justify-around sm:mx-14 sm:my-11 sm:mt-[100px]">
          <div className=" sm:float-left sm:w-[70%] w-full sm:px-10 px-2">
            <div className="w-full">
              <Image
                src={resourceDetail?.imageUrl ? `data:image/png;image/jpg;image/jpeg;base64,${resourceDetail?.imageUrl}` : "/images/captain4.jpeg"}
                alt="image not found"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              ></Image>
            </div>
            <div className="flex gap-4 mt-0 ">
              <p className="text-green-600">{moment(resourceDetail?.createdDate).format('YYYY-MM-DD')}</p>
              <p className="font-semibold">By Gwen Stacy</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mt-4">{resourceDetail?.title}</h2>
              {/* <p className=" text-sm text-justify  mt-4">{resourceDetail?.description?.replace(/<[^>]+>/g, '')}</p> */}
              <p className=" text-sm text-justify  mt-4">{cleanDescText(resourceDetail?.description)}</p>
            </div>

            {/* <h1 className=" my-4  font-bold text-xl">Drop Your Comment</h1>

        <div className="bg-gray-200  p-8 rounded-xl ">
          <form onSubmit={handleSubmit} className="   ">
            <div className="mb-[7px]">
              <div className="relative flex items-center ">
                <input
                  id="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <input
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>

            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <textarea
                  value={textarea}
                  onChange={(e) => setTextArea(e.target.value)}
                  className="border rounded-lg w-full h-40 py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Message"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="p-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Post Your Comment
              </button>
            </div>
          </form>
        </div> */}
          </div>

          <div className="sm:float-right  sm:w-[27%] w-full mt-2 sm:mt-0">
            <div className="relative bg-green-100 px-4 pt-2 h-[460px] rounded-lg">
              <h2 className="font-bold text-xl ">More Articles</h2>
              <div className="absolute">
                {resourcesList?.map((item: any) => (
                  <Link href={`/resources/${item?.id}`} className=" flex gap-3  mb-2 p-2">
                    <div className="w-24 h-14 border-2 border-green-500">
                      <Image
                        priority
                        src={item?.imageUrl ? `data:image/png;image/jpg;image/jpeg;base64,${item?.imageUrl}` : "/images/captain4.jpeg"}
                        alt="image not found"
                        width={50}
                        height={50}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="text-xs">
                      <h2 className="font-bold text-sm">
                        {item?.title}
                      </h2>
                      <p className="text-green-600   mt-0">
                        {moment(item?.createdDate).format('YYYY-MM-DD')} By gwen stacy
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>)}
        </div>
    </React.Fragment>
  );
};

export default ResourceDetailsPage;
