"use client"
import { X } from "lucide-react";
import { useState } from "react";

import { GoEye } from "react-icons/go";
import { MdOutlineLock } from "react-icons/md";

interface ResetPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [cPassword, setCpassword] = useState("");
  const [showCpassword, setShowCpassword] = useState(false);

  const [error, setError] = useState("");

  const validatePasswords = () => {
    if (password !== cPassword) {
      setError("Passwords do not match");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePasswords()) {
      onSubmit();
      console.log("Form submitted successfully");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000CC] bg-opacity-70 z-50">
      <div className="bg-white p-6 shadow-lg w-[21rem] relative rounded-md">
        <button className="absolute top-2 right-2 bg-green-700 text-white  rounded-full">
          <X size={15} onClick={onClose} />
        </button>

        <h2 className="font-bold text-lg mb-1 text-center">Reset Password</h2>
        <p className="text-sm mb-7 text-center">
          Forgot Your Password? We are here to help
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              className="block text-black text-sm  mb-1"
              htmlFor="password"
            >
              Enter New Password
            </label>
            <div className="relative pl-8">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="New Password"
                required
              />

              <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-green-600 text-white rounded-l-md">
                <MdOutlineLock />
              </span>
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <GoEye />
              </span>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-black text-sm mb-1" htmlFor="Password">
              Confirm New Password
            </label>
            <div className="relative pl-8">
              <input
                id="password"
                type={showCpassword ? "text" : "password"}
                value={cPassword}
                onChange={(e) => setCpassword(e.target.value)}
                className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                placeholder="Confirm New Password"
                required
              />

              <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-green-600 text-white rounded-l-md">
                <MdOutlineLock />
              </span>
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowCpassword(!showCpassword)}
              >
                <GoEye />
              </span>
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            className="bg-green-600 text-white w-full rounded-lg px-4 py-2"
            //   onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
