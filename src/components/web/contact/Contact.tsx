"use client";

import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";
import { AddContactData } from "@/app/(web)/contact/Services/contactService";
import PhoneInput from "react-phone-input-2"; // Import the phone input component
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [textarea, setTextArea] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateInputs = () => {
    let formIsValid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      formIsValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      formIsValid = false;
    }

    if (!textarea.trim()) {
      newErrors.message = "Message is required";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

    let data = {
      name: name,
      email: email,
      mobileNumber: `${countryCode} ${phone}`,
      message: textarea,
    };

    AddContactData(data, AddContactDataCB);
  };

  const AddContactDataCB = (res: any) => {
    toast.success("Thank you for contacting us");
    setName("");
    setEmail("");
    setPhone("");
    setTextArea("");
    setErrors({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact mt-14">
      <div className="flex justify-center items-center h-[8rem] bg-green-100 bg-[url('/images/Rectangle1.png')] ">
        <h1 className="text-[46px] leading-[69px] text-[#00A264] font-bold">
          Get in touch
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-24 md:mx-24 mx-8 my-10">
        <div className="bg-gray-200 p-8 rounded-xl">
          <h1 className="text-center mb-2">
            For questions and assistance, reach out to us.
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-[7px]">
              <input
                id="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border lg:h-10 rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder=" Name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-[7px]">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border lg:h-10 rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="Email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number with Country Code */}
            <div className="mb-[7px]">
              <div className="relative flex items-center">
                {/* Country Code Dropdown */}
                {/* <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border h-10  rounded-lg px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                >
                  <option value="+91">IN +91 </option>
                  <option value="+1">US +1 </option>
                  <option value="+93">AF +93 </option>
                  

                  {/* Add more country codes as needed */}
                {/* </select> */}

                {/* Phone Input */}
                {/* <input
                  id="phone"
                  type="text"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border lg:h-10 rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm ml-2"
                  placeholder="Phone Number"
                  required
                /> */}
                <PhoneInput
                  country={"in"} //default country
                  value={phone}
                  // maxLength={10}
                  // onChange={(e) => setPhone(e.target.value.trim())}
                  onChange={(phone) => setPhone(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputClass="!w-full !h-[42px] !leading-[21.79px] !text-[16px] !text-[#333333] !border !rounded-lg focus:!outline-none focus:!shadow-outline font-[opensans] "
                  containerClass="w-full"
                />
                {/* <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-[#00A264] text-white mr-7 rounded-l-md">
                  <FaPhone />
                </span> */}
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="mb-[7px]">
              <textarea
                value={textarea}
                maxLength={500}
                onChange={(e) => setTextArea(e.target.value)}
                className="border rounded-lg w-full h-28 py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="Message"
                required
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#00A264] hover:bg-[#00A264] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div>
          <div className="flex items-center bg-white shadow-lg border p-3 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl">
              <GrLocation />
            </div>
            <div className="lg:ml-4 ml-6">
              <h2 className="font-bold text-lg">Address</h2>
              <p className="text-sm">
                Noida, Gautam Buddha Nagar, Uttar Pradesh, India -201301
              </p>
            </div>
          </div>

          <div className="items-center bg-white shadow-lg border flex py-3 px-1 lg:px-3 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl">
              <FiPhoneCall />
            </div>
            <div className="ml-3 lg:ml-4">
              <h2 className="font-bold text-lg">Call us on</h2>
              <p className="text-sm">(+91) - 7055-70-5555</p>
            </div>
          </div>

          <div className="items-center bg-white shadow-lg border flex lg:p-3 px-2 mt-3 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center text-[#00A264] text-3xl font-extrabold">
              <FiMail />
            </div>
            <div className="ml-3">
              <h2 className="font-bold text-lg">Mail Us</h2>
              <p className="text-sm">business@EaseMySailing.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
