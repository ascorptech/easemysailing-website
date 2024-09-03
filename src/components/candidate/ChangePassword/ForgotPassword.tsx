import React, { useState } from "react";

import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
interface VerificationCodeProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
}

const ForgotPassword: React.FC<VerificationCodeProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!emailOrPhone.trim()) {
      setError("Please enter your registered email or phone number.");
      return;
    }
    onSubmit(emailOrPhone);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000CC] bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-7 rounded-lg shadow-lg relative w-[23.2rem] ">
        <button
          className="absolute top-2 right-2 text-sm  bg-green-500 text-white  rounded-full hover:bg-green-700"
          onClick={onClose}
        >
          <span className=" ">
            <IoClose />
          </span>
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-600 mb-5 text-sm">
          Forgot your password? We are here to help!
        </p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="emailOrPhone"
          >
            Enter Registered Email/Phone
          </label>
          <div className="relative pl-9 border border-green-500 rounded-l-md focus:ring-1 focus:ring-green-600 ">
            <input
              id="emailOrPhone"
              type="text"
              placeholder="Email/Phone"
              value={emailOrPhone}
              className="w-full px-3 py-1 border-gray-300 rounded-xl focus:outline-none "
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
            <div
              id="emailOrPhone"
              className="absolute inset-y-0 left-0 flex items-center p-[5px] bg-green-600 text-white rounded-l-md"
            >
              <span className="rotate-[100deg] relative mt-[5px]">
                <FaPhone />
              </span>
              <span className="ml-[-6px] mt-[6px] mr-[-4px] text-[22px]">
                <MdOutlineEmail />
              </span>
            </div>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
