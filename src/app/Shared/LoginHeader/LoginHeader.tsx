import Link from "next/link";
import Image from "next/image";

const LoginHeader = () => {
  // return (
  //   <header className="sticky top-0 z-50 flex items-center justify-between p-3 bg-white shadow-md">
  //     <div className="sm:ml-16  text-xl font-bold">


  //       <div className="w-44 sm:w-52 sm:h-[53px] ">
  //         <Link href="/">
  //           <Image
  //           priority
  //           src="/images/logo_1.png"
  //           alt="EaseMySailing Logo"
  //           className="object-contain h-full w-full "
  //           width={800}
  //           height={800}
  //           />
  //         </Link>
  //       </div>
  //     </div>
  //     <Link
  //       href={"/"}
  //       className="px-4 py-2 sm:mr-16 text-white bg-green-600 rounded-full"
  //     >
  //       Back to website
  //     </Link>
  //   </header>
  // );
  return (
    <div className="z-20 top-0 sticky w-full">
      <nav className="bg-white border-white dark:bg-white dark:border-black-700">
        <div className="lg:w-full w-[98%] text-25px font-[700px] leading-[37.5px] flex flex-wrap items-center justify-between  py-1 px-[1rem] sm:px-[3rem] lg:px-[2rem]">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-44 h-12 sm:w-[230px] sm:h-[55px] ">
              <Link href="/">
                <Image
                  priority

                  src="/images/logo_1.png"
                  alt="EaseMySailing Logo"
                  className="object-contain h-full w-full "
                  width={800}
                  height={800}
                />
              </Link>
            </div>
          </div>
          <div className="flex relative items-center h-2 ">
                <Link
                  href={"/"}
                  className="flex justify-center items-center mr-4 bg-[#00A264] text-white p-2 rounded-full text-sm"
                >
                  
                  Back to website
                </Link>
                {/* <Link
                  href="recruiter"
                  className=" h-8 w-21  text-[#FFFFFF] bg-[#00A264] hover:bg-[#00A264] focus:outline-none focus:ring-1 focus:ring-[#00A264] font-medium rounded-full text-sm px-5 py-5 text-center me-2  dark:bg-[#00A264]   flex justify-center items-center"
                >
                  Post a Job
                </Link> */}
              </div>
        </div>
      </nav>
    </div>
  )
};

export default LoginHeader;
