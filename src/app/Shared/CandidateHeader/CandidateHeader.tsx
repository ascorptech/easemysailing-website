"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { SiApollographql } from "react-icons/si";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdNotificationAdd } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { GetProfileDetail } from "@/app/(candidate)/candidate/(auth)/(dashboard)/profilecv/Services/profileService";

interface HeaderProps {
  sidebarToggle: boolean;
  setSidebarToggle: (toggle: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarToggle, setSidebarToggle }) => {
  
  const [name, setName] = useState<any>();
  const [profileDetail, setProfileDetail] = useState<any>();
  const [profileImage, setProfileImage] = useState(
    "/images/avatar-place.jpg"
  );
  useEffect(() => {
    fetchDetails()
  }, [])


  const fetchDetails = async () => {
    let id = await localStorage.getItem("id");
    
    GetProfileDetail(id, (res: any) => {
        setProfileDetail(res?.data);
        setProfileImage(res?.data?.imageUrl?`data:image/png;image/jpg;image/jpeg;base64,${res?.data?.imageUrl}`:"/images/avatar-place.jpg")
    });
  };
  
  return (
    <div className="bg-[#EBEBEB] flex items-center justify-between sticky top-0 -z-30 ">
      <div className="ml-4 ">
        <FaBars
          className="text-green-700 text-2xl cursor-pointer "
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
      </div>

      <div className="flex items-center p-[3px]">
        {/* <div className="border-4 w-24  rounded-lg mr-6">
          <Link
            href="#"
            className="bg-white flex items-center justify-center  rounded-2xl font-bold gap-1 text-xl"
          >
            <Image
              src="/images/candidate/coin.png"
              alt="image not found"
              width={40}
              height={40}
              className="text-green-600 text-xl p-1 "
            />
            50
          </Link>
        </div> */}

        <ul className="flex items-center gap-2">
          {/* <li className="flex items-center gap-2 cursor-pointer">
            <Link href="#" className="">
              <Image
                src="/images/candidate/doller.png"
                alt="image not found"
                width={30}
                height={30}
                className="text-green-600 text-xl py-2 "
              />
            </Link>
            <Link href="#" className=" underline text-lg">
              Subscription
            </Link>
          </li> */}
          {/* <li>
            <Link href="#" className="w-36 h-36">
              <Image
                src="/images/candidate/notification.png"
                alt="image not found"
                width={40}
                height={40}
                className="text-green-600 text-xl p-2 "
              />
            </Link>
          </li> */}
          {/* <li>
            <Link href="#" className="w-36 h-36">
              <Image
                src="/images/candidate/card.png"
                alt="image not found"
                width={40}
                height={40}
                className="text-green-600 text-xl p-2 "
              />
            </Link>
          </li> */}
        </ul>
        <div className="ml-[5px] mr-11 cursor-pointer flex flex-row items-center justify-center">
          <Image
            src={profileImage}
            alt="image not found"
            width={5000}
            height={5000}
            className="w-9 h-9 rounded-full border-2 border-green-600"
          ></Image>
          <p className="ml-1 font-semibold">{profileDetail?.firstName +' '+profileDetail?.lastName}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
