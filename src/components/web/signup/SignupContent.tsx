import Link from "next/link";
import Searchbar from "../searchbar/Searchbar";
import GalleryBackground from "./Signup";
import Image from "next/image";

export default function SignupContent() {
  return (
    <div className="relative h-screen transition-all duration-300 filter grayscale hover:grayscale-0 w-full mt-16">
      {/* The gallery background */}
      <GalleryBackground />

      {/* Your content, which will be layered above the background */}
      <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center text-center  text-white ">
        <div className="p-3 flex flex-col items-center justify-center rounded-md w-[90%] sm:w-[80%] md:w-[70%]">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-bold mb-4">
            Your Smooth
            <span className="text-[#00A264]"> Sailing </span>
            Starts From
            <span className="text-[#00A264]"> Here</span>
          </h1>
          {/* <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
            <Searchbar />
          </div> */}

          <div className="mt-10">
            <div className="flex flex-col lg:flex-row lg:w-[384px] gap-4 sm:gap-6 lg:gap-8 justify-center items-center mt-4 lg:mt-1">
              {/* Google Play Button */}
              <Link
                // href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
                href=""
                // target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white w-full lg:w-auto"
              >
                <Image
                  priority
                  src="/play.png"
                  alt="Google Play"
                  width={500}
                  height={500}
                  className="w-[150px] sm:w-[178px] h-[50px] lg:h-[53px]"
                />
              </Link>

              {/* App Store Button */}
              <Link
                // href="https://apps.apple.com/us/app/your-app-id"
                href=""
                // target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white w-full lg:w-auto"
              >
                <Image
                  priority
                  src="/apple.png"
                  alt="App Store"
                  width={500}
                  height={500}
                  className="w-[150px] sm:w-[178px] h-[50px] lg:h-[53px]"
                />
              </Link>
            </div>
          </div>

          {/* LogIn and CreateButton */}
          <div className="flex flex-col sm:flex-row text-center justify-center items-center gap-4 sm:gap-6 lg:gap-12 mt-10 lg:mt-14">
            <Link
              href=""
              className="bg-[#00A264] lg:py-3 px-4 py-2 lg:px-2 lg:h-[50px] rounded-full font-semibold text-base w-[160px]"
            >
              Login
            </Link>

            <Link
              href=""
              className="bg-white text-[#00A264] px-4 py-2 lg:py-3 lg:px-2 lg:h-[50px] rounded-full font-semibold text-base w-[160px]"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
