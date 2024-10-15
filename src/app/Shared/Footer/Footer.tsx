"use client";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaXingSquare,
  FaYoutube
} from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

const Footer = () => {
  useEffect(() => {
    var Tawk_API: any = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1: any = document.createElement("script");
      let s0: any = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66d5966cea492f34bc0cb5e9/1i6p57660";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <footer className="bg-[#D1EFE4] p-4 text-sm text-gray-700 w-full ">
      <div className="container mx-auto grid md:grid-cols-4 md:grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 grid-rows-1 grid-cols-1 h-auto sm:space-x-2 lg:space-x-4">
        <div className="sm:w-[70%] w-full">
          <Link href="/">
            <Image
              src="/images/logo_1.png"
              alt="EaseMySailing Logo"
              className="object-contain w-full mb-2 -ml-1"
              width={800}
              height={800}
            />
          </Link>
          {/* </div> */}
          <p className="text-justify">
            EaseMySailing is a platform created by seafarers, for seafarers,
            built on empathy for life at sea and its unique challenges and joys.
            <Link href="/about-us" className="text-[#00A264] font-semibold">
              {" "}
              Read More
            </Link>
          </p>
        </div>
        <div className="md:mt-0 mt-4 sm:ml-2 md:ml-0 flex flex-col justify-center">
          <h3 className="text-lg text-green-600 font-semibold">Quick Link</h3>
          <ul>
            <li className="mt-2">
              <Link href="/" className=" hover:text-green-600">
                Home
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/about-us" className="hover:text-green-600">
                About Us
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/contact-us" className="hover:text-green-600">
                {/* Recruiter */}
                Contact Us
              </Link>
            </li>
            {/* <li className="mt-2">
              <Link href="/career" className="hover:text-green-600">
                Careers
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="md:mt-0 mt-4 flex flex-col justify-center">
          <h3 className="text-lg text-green-600 font-semibold">Legal & User Support</h3>
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
              <Link href="/terms-conditions" className="hover:text-green-600">
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
        <div className="md:mt-0 mt-4 flex flex-col justify-center">
          <h3 className="text-lg text-green-600 font-semibold">
            Connect With Us
          </h3>
          <ul>
            <li className="mt-2">
              <Link
                href="tel:+917055-70-5555"
                className="hover:text-green-600 sm:text-[11px] lg:text-sm flex lg:flex lg:items-center"
              >
                <FiPhone className="text-green-600 mr-1" />
                (+91) - 7055-70-5555
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="mailto:business@EaseMySailing.com"
                className="hover:text-green-600 sm:text-[11px] lg:text-sm flex lg:flex lg:items-center"
              >
                <MdOutlineMail className="text-green-600 mr-1" />business@easemysailing.com

              </Link>
            </li>
            <li className="mt-2">
              <Link href="https://www.easemysailing.com" className="hover:text-green-600 sm:text-[11px] lg:text-sm flex lg:flex lg:items-center">
                <Image
                  priority
                  src="/globe.png"
                  alt="Globe Logo"
                  className=" h-[14px] w-[14px] mr-1"
                  width={800}
                  height={800}
                />
                www.easemysailing.com
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex p-1 space-x-1 items-center">
            <h2 className="font-semibold">Follow Us :</h2>
            <Link href="https://www.facebook.com/EaseMySailing" className="text-green-600" target="_blank">
              <FaFacebook  size={18}/>
            </Link>
            <Link href="https://www.instagram.com/easemysailing" className="text-green-600" target="_blank">
              <FaInstagram  size={18}/>
            </Link>
            <Link href="https://x.com/EaseMySailing?s=08" className="text-green-600" target="_blank">
              <FaXTwitter  size={18}/>
            </Link>
            <Link href="https://youtube.com/@easemysailing?si=EnjVlLHxdlHVtfsf" className="text-green-600" target="_blank">
              <FaYoutube  size={18}/>
            </Link>
            <Link href="https://www.linkedin.com/company/easemysailing" className="text-green-600" target="_blank">
              <FaLinkedin  size={18}/>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full  border-spacing-1 border-[#77E2B9] mt-3 border "></div>
      <div className="mt-4 flex justify-center items-center ">
        <span>
          @{new Date().getFullYear()} | All Rights Reserved with EaseMySailing
        </span>
      </div>
    </footer>
  );
};

export default Footer;
