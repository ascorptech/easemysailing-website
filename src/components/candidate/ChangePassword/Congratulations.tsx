import React from "react";
import { X } from "lucide-react";

interface CongratulationsProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}
const Congratulations: React.FC<CongratulationsProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-opacity-70 flex bg-[#000000CC] justify-center items-center z-50">
      <div className="bg-white p-7 shadow-lg text-center w-[23.3rem] relative rounded-md">
        <button
          className="absolute top-2 right-2 rounded-full text-white bg-green-500"
          onClick={onClose}
        >
          <X size={15} />
        </button>

        <div className="flex justify-center items-center w-[60px] h-[60px]  rounded-full border-2 border-green-500 text-green-600 ml-32">
          <img
            className="w-[40px] h-[40px] "
            src="./Images/Congratulations.png"
            alt=""
          ></img>
        </div>
        <h2 className="font-bold text-2xl mb-2">Congratulations</h2>
        <p className="text-sm mb-8">
          Your account has been created successfully.
        </p>

        <button
          className="bg-green-500 w-full text-white  rounded-lg px-4 py-2"
          onClick={onSubmit}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Congratulations;
