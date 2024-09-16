import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaXingSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-teal-100 p-4 text-sm md:pl-10 text-gray-700 w-full ">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand and Description */}

        <div className="flex flex-col justify-start">
           {/* <div className="w-[70%] md:w-[240px] h-12 md:h-[65px]"> */}
              <Link href="/" className="">
                <Image
                  src="/images/logo_1.png"
                  alt="EaseMySailing Logo"
                  className="object-contain h-full w-[80%] mb-2 -ml-1"
                  width={800}
                  height={800}
                />
              </Link>
            {/* </div> */}
          <p className=" mr-14 text-justify">
          EaseMySailing is a platform created by seafarers, for seafarers, built on empathy for life at sea and its unique challenges and joys.
           <Link href="/about" className="text-[#00A264] font-semibold"> Read More</Link></p>
          <p className="mt-4 font-semibold">
            Are You a Vendor?{" "}
            <Link href="#" className="font-bold text-[#00A264] underline">
              Join Us
            </Link>
          </p>
        </div>

        {/* Quick link */}

        <div className=" md:ml-12">
          <h3 className="text-lg text-green-600 font-semibold">Quick link</h3>
          <ul>
            <li className="mt-2">
              <Link href="/" className=" hover:text-green-600">
                Home
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/about" className="hover:text-green-600">
                About
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/toprecruiting" className="hover:text-green-600">
                Recruiter
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/career" className="hover:text-green-600">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        {/* Help */}

        <div className="md:ml-12">
          <h3 className="text-lg text-green-600 font-semibold">Help</h3>
          <ul>
            <li className="mt-2">
              <Link href="/privacy-policy" className="hover:text-green-600">
                Privacy Policy
              </Link>
            </li>
            {/* <li className="mt-2">
              <Link href="/gdpr" className="hover:text-green-600">
                GDPR & Privacy Policy
              </Link>
            </li> */}
            <li className="mt-2">
              <Link href="/terms" className="hover:text-green-600">
                Terms and Conditions
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/faq" className="hover:text-green-600">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:ml-10">
          <h3 className="text-lg text-green-600 font-semibold">
            Connect with Us
          </h3>
          <ul>
            <li className="mt-2">
              <Link href="#" className="flex items-center hover:text-green-600">
                <span className="text-green-600 mr-1">
                  <FiPhone />
                </span>
                (01) xxx xxx xxxx
              </Link>
            </li>
            <li className="mt-2">
              <Link href="mailto:business@EaseMySailing.com" className="flex items-center hover:text-green-600">
                <span className="text-green-600 mr-1">
                  <MdOutlineMail />
                </span>
                business@EaseMySailing.com
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="flex items-center hover:text-green-600">
                <span className="text-green-600 mr-1">🌐</span>
                www.easemysailing.com
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex p-1 space-x-1 items-center">
            <h2 className="font-semibold">Follow Us :</h2>
            <Link href="#" className="text-green-600">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-green-600">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-green-600">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full  border-spacing-1 border-green-400 mt-3 border "></div>
      <div className="mt-4 flex justify-center items-center ">
        <span>
          Copyright © {new Date().getFullYear()} | All Rights Reserved
        </span>

        
      </div>
    </footer>
  );
};

export default Footer;
