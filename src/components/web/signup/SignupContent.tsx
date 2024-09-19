import Link from "next/link";
import Searchbar from "../searchbar/Searchbar";
import GalleryBackground from "./Signup";
import Image from "next/image";

export default function SignupContent() {
  
  return (
    <div className="relative h-screen w-full ">
      {/* The gallery background */}
      {/* <GalleryBackground /> */}
      <video
        src="/seeview.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 mt-16 left-0 w-full h-full object-cover"
      />

      {/* Your content, which will be layered above the background */}
      <div className="relative bg-black bg-opacity-50 mt-16 w-full h-screen z-5 flex items-center justify-center text-center text-white">
        <div className="p-3 flex flex-col items-center justify-center rounded-md w-[70%]">
          <h1 className="text-[80px]  font-bold  mb-4">
            Your Smooth<span className="text-[#00A264]"> Sailing </span>Starts
            From <span className="text-[#00A264] ">Here</span>
          </h1>
          <div className="inline-block w-[70%]">
            {" "}
            <Searchbar />
          </div>

          <div className="mt-10">
            <div className="flex lg:flex-row lg:w-[384px] gap-8 justify-center  items-center mt-4 lg:mt-1 space-y-0 lg:space-y-0 lg:space-x-1">
              {/* Google Play Button */}
              <Link
                href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white w-full lg:w-auto"
              >
                <Image
                  priority
                  src="/play.png"
                  alt="Google Play"
                  width={500}
                  height={500}
                  className="w-auto lg:w-[178px] h-[53px]"
                />
              </Link>

              {/* App Store Button */}
              <Link
                href="https://apps.apple.com/us/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white  w-full lg:w-auto"
              >
                <Image
                  priority
                  src="/apple.png"
                  alt="App Store"
                  width={500}
                  height={500}
                  className="w-[178px] h-[53px]"
                />
              </Link>
            </div>
          </div>

          {/* LogIn and CreateButton */}
          <div className="flex text-center justify-center items-center gap-12 mt-14">
            <Link
              href="#"
              className="bg-[#00A264] px-1 flex justify-center items-center text-white lg:px-2 lg:h-[50px] rounded-full font-semibold text-base w-[160px]"
            >
              Login
            </Link>

            <Link
              href="#"
              className="bg-white px-1 flex justify-center items-center text-[#00A264] lg:px-1 lg:h-[50px] rounded-full font-semibold text-base w-[157px]"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
