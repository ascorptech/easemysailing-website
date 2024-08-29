import { IoClose } from "react-icons/io5";

interface VerificationOptProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const VerificationOpt: React.FC<VerificationOptProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000CC] bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-white p-7 rounded-lg shadow-lg relative w-[23.2rem] ">
        <button
          className="absolute top-2 right-2 text-sm  bg-green-500 text-white  rounded-full hover:bg-green-700"
          onClick={onClose}
        >
          <span className=" ">
            <IoClose />
          </span>
        </button>
        <h2 className="text-xl font-bold text-gray-800 text-center underline">
          Select Verification Option
        </h2>
        <p className="text-gray-600 mb-5 text-sm ">
          Using with verification process you want to follow
        </p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-4 text-center"
            htmlFor="choose any one"
          >
            Choose any one
          </label>

          <div className="border-[1px] border-green-600 p-2">
            <input id="Choose" type="checkbox" className="text-green-600" />
            <label className="text-sm ml-4" htmlFor="Choose">
              Email
            </label>

            <br />

            <input id="Phone" type="checkbox" className="" />

            <label className="text-sm ml-4" htmlFor="Phone">
              Phone number
            </label>
          </div>
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default VerificationOpt;
