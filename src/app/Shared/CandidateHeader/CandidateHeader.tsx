import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { SiApollographql } from "react-icons/si";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdNotificationAdd } from "react-icons/md";
import { IoCart } from "react-icons/io5";

interface HeaderProps {
  sidebarToggle: boolean;
  setSidebarToggle: (toggle: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className="bg-gray-200 flex items-center justify-between sticky top-0 z-50">
      <div className="ml-4">
        <FaBars
          className="text-green-700 text-2xl cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
      </div>

      <div className="flex items-center p-[3px]">
        <div className="border-4 w-24  rounded-lg mr-6">
          <Link
            href="#"
            className="bg-white flex items-center justify-center p-1 rounded-2xl font-bold gap-1 text-xl"
          >
            <SiApollographql className="text-orange-500" />
            50
          </Link>
        </div>

        <ul className="flex items-center gap-2">
          <li className="flex items-center gap-2 cursor-pointer">
            <RiExchangeDollarLine className="text-green-500 text-xl " />
            <Link href="#" className=" underline text-lg">
              Subscription
            </Link>
          </li>
          <li>
            <Link href="#">
              <MdNotificationAdd className="text-green-600 text-xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <IoCart className="text-green-600 text-xl" />
            </Link>
          </li>
        </ul>
        <div className="ml-[5px] mr-11 cursor-pointer flex items-center">
          <Image
            src="/Images/user.webp"
            alt="image not found"
            width={500}
            height={500}
            className="w-9 h-9 rounded-full border-2 border-green-600"
          ></Image>
          <p className="ml-1 font-semibold">Me</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
