import { FaBars } from "react-icons/fa6";
import { SiApollographql } from "react-icons/si";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdNotificationAdd } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import Image from "next/image";

// interface HeaderProps{
//   sidebarToggle:boolean;
//   setSidebarToggle: (toggle: boolean) => void ;
// }

const Header = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-end sticky top-0 ">
      {/* <div className="ml-4">
         <FaBars className="text-green-700 text-2xl cursor-pointer" /> */}
      {/* </div> */}

      {/* <div className="flex items-center p-[3px]"> */}
      {/* <div className="border-4 w-24  rounded-lg mr-6">
          <a
            href="#"
            className="bg-white flex items-center justify-center p-1 rounded-2xl font-bold gap-1 text-xl"
          >
            <SiApollographql className="text-orange-500" />
            50
          </a>
        </div> */}

      {/* <ul className="flex items-center gap-2"> */}
      {/* <li className="flex items-center gap-2 cursor-pointer">
            <RiExchangeDollarLine className="text-green-500 text-xl " />
            <a href="#" className=" underline text-lg">
              Subscription
            </a>
          </li> */}
      {/* <li>
            <a href="">
              <MdNotificationAdd  className="text-green-600 text-xl"/>
            </a>
          </li> */}
      {/* <li>
            <a href="">
              <IoCart  className="text-green-600 text-xl"/>
            </a>
          </li> */}
      {/* </ul> */}
      <div className=" mr-[8rem] cursor-pointer flex items-center py-1">
        <Image
          src="/Images/user.webp"
          alt="image not found"
          width={500}
          height={500}
          className="w-12 h-12 rounded-full border-2 border-green-600"
          priority
        ></Image>
        <p className="ml-1 font-semibold">Easemy Sailing</p>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Header;
