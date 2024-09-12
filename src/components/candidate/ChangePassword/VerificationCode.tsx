"use client";
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface VerificationCodeProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (verificationCode: string) => void;
}

const VerificationCode: React.FC<VerificationCodeProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const emptyArr = ["", "", "", "", "", ""];
  const refs = useRef<(HTMLInputElement | null)[]>(emptyArr.map(() => null));

  const [inputs, setInputs] = useState(emptyArr);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const [error, setError] = useState("");

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const val = e.target.value;
    if (!Number(val)) return;

    if (index < inputs.length - 1) {
      refs.current[index + 1]?.focus();
    }

    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setInputs(copyInputs);

      if (index > 0) {
        refs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const data = e.clipboardData.getData("text");
    if (!Number(data) || data.length !== inputs.length) return;

    const pastCode = data.split("");
    setInputs(pastCode);
  };

  const handleResendOTP = () => {
    setMinutes(1);
    setSeconds(59);
  };

  const handlesubmit = () => {
    const isMissing = inputs.includes("");
    if (isMissing) {
      setError("OTP do not vailid");
      return;
    }

    const verificationCode = inputs.join("");

    onSubmit(verificationCode);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000CC] flex bg-opacity-70 justify-center items-center z-50">
      <div className="bg-white p-7 shadow-lg text-center w-[23.3rem] relative rounded-md">
        <button
          className="absolute rounded-full top-2 right-2 bg-green-700 text-white"
          onClick={onClose}
        >
          <X size={15} />
        </button>
        <h1 className="text-xl font-bold">Verification Code</h1>
        <p className="text-sm">
          Enter verification code sent to your registered email id/phone
        </p>

        <div className="flex justify-center mb-6 mt-6">
          {emptyArr.map((_, i) => (
            <input
              ref={(el:any) => (refs.current[i] = el)}
              type="text"
              key={i}
              value={inputs[i]}
              maxLength={1}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={(e) => handleOnKeyDown(e, i)}
              onPaste={handlePaste}
              className="w-11 h-11 m-1 border border-green-600 text-center text-lg focus:outline-green-400"
              required
            />
          ))}
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          className="bg-green-600 text-white w-full rounded-lg px-4 py-2"
          onClick={handlesubmit}
        >
          Submit
        </button>

        <div className="mt-4 text-sm">
          <p>
            Didn't receive the verification code?{" "}
            <button
              className="text-blue-500 cursor-pointer"
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
              }}
              onClick={handleResendOTP}
            >
              RESEND
            </button>
          </p>
          <p>
            Resend verification code in{" "}
            <span className="text-red-500">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
