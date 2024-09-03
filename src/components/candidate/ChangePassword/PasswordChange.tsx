import { X } from "lucide-react";
// import { BsArrowClockwise } from "react-icons/bs";
import { PiArrowClockwiseLight } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";




interface PasswordChangeProps{
        isOpen: boolean;
        onClose: () => void;
      // onSubmit: () => void;
      
}

const PasswordChange:React.FC<PasswordChangeProps> = ({isOpen, onClose}) => {
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

        {/* <div className="flex justify-center items-center w-[100px] h-[100px]  rounded-full border border-green-500 text-green-600 rotate-[90deg]"> */}
        {/* <div className="  w-52 text-8xl  text-center text-green-600">
        <span className="relative mt-12"><PiArrowClockwiseLight className=" text-8xl rotate-[270deg] "/> <IoIosLock className=" mb-6 text-4xl"  /></span>
              </div> */}
              <div className="w-52 text-8xl text-center text-green-600">
  <span className=" inline-block mt-4">
    <PiArrowClockwiseLight className=" relative text-8xl rotate-[240deg] inset-0 z-10  text-center ml-[7rem] mt-[8px]" />
    <IoIosLock className="text-5xl absolute inset-0 m-auto z-20 mt-[4.8rem]" />
  </span>
</div>

             

        
        {/* </div> */}
        
        <h2 className="font-bold text-lg mb-2">Password Changed!</h2>
        <p className="text-sm mb-8">
          Your password has been changed successfully.
        </p>

        <button
          className="bg-green-500 w-full text-white  rounded-lg px-4 py-2"
          // onClick={onSubmit}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PasswordChange;
