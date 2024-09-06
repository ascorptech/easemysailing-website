import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-100 p-4 text-sm pl-10 text-gray-700  ">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand and Description */}

        <div>
          <h2 className="text-2xl font-bold">
            EaseMy<span className="text-green-600">Sailing</span>
          </h2>
          <p className="mt-4 mr-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <p className="mt-4 font-semibold">
            Are You a vender?{" "}
            <Link href="#" className="text-green-600 underline">Join Us</Link>
          </p>
        </div>

        {/* Quick link */}

        <div className="ml-12">
          <h3 className="text-lg text-green-600 font-semibold">Quick link</h3>
          <ul>
            <li className="mt-2">
              <Link href="#" className=" hover:text-green-600">
                Home
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="hover:text-green-600">
                About
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="hover:text-green-600">
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

        <div className="ml-12">
          <h3 className="text-lg text-green-600 font-semibold">Help</h3>
          <ul>
            <li className="mt-2">
              <Link href="#" className="hover:text-green-600">
                Privacy Policy
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="hover:text-green-600">
                GDPR & Privacy Policy
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="hover:text-green-600">
                Terms and conditions
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="hover:text-green-600">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="ml-10">
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
              <Link href="#" className="flex items-center hover:text-green-600">
                <span className="text-green-600 mr-1">
                  <MdOutlineMail />
                </span>
                example@gmail.com
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="flex items-center hover:text-green-600">
                <span className="text-green-600">
                  🌐
                </span>
                www.easemysailing.au
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
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <hr className=" border-spacing-1 border-green-400 ml-[-2.4rem] mr-[-1rem] mt-3  "></hr>
      <div className="mt-4 flex justify-between items-center ">
        <span>Copyright © {new Date().getFullYear()} | All Rights Reserved</span>

        {/* <p className="font-semibold">
          Designed with <span className="text-red-500">❤</span>
          <span className="text-green-600 mr-10">by YES IT Labs LLC</span>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
