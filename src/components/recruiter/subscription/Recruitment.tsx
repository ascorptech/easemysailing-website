import Link from "next/link";
import { GoCheckCircleFill } from "react-icons/go";

export default function AddOn() {
  return (
    <div className="mx-8 w-[85%] mt-5 ml-20">
      <div>
        <h1 className="text-2xl font-semibold">Recruitment</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[110px] mt-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md   rounded-lg">
          <div className="bg-[url('/cardbg.png')] h-[122px] text-center rounded-t-lg p-4">
            <h2 className="text-2xl font-bold">Basic Plan</h2>
            <p className="text-green-600 text-3xl font-extrabold">
              $0.00<span className="text-lg text-black font-normal">/Year</span>
            </p>
          </div>
          <ul className="space-y-2 mx-11">
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Limited job application</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">No verified tag</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">No job alerts</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Employer identity masked</span>
            </li>
          </ul>
          <div className="my-5 text-base pt-3 w-36 mx-auto">
            <Link href="/recruiter/subscription/payment" className="bg-[#00A264] text-white py-3 px-2 rounded-md w-full">
              Currently Active
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg">
          <div className="bg-[url('/cardbg.png')] h-[122px] text-center rounded-t-lg p-4">
            <h2 className="text-2xl font-bold">Advanced Plan</h2>
            <p className="text-green-600 text-3xl font-extrabold">
              $24.99
              <span className="text-lg font-normal text-black ">/Year</span>
            </p>
          </div>
          <ul className="space-y-2 mx-10">
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Unlimited application</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Verified tag</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Job alerts as per preference</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Employer identity disclosed</span>
            </li>
          </ul>
          <div className="my-5 text-base pt-3 w-36 mx-auto">
          <Link href="/recruiter/subscription/payment" className="bg-[#00A264] text-white py-3 px-3 rounded-md w-full">
          Subscribe Now
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg">
          <div className="bg-[url('/cardbg.png')] h-[122px] text-center rounded-t-lg p-4">
            <h2 className="text-2xl font-bold">Super Plan</h2>
            <p className="text-green-600 text-3xl font-extrabold">
              $24.99
              <span className="text-lg font-normal text-black ">/Month</span>
            </p>
          </div>
          <ul className="space-y-2 mx-10">
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Unlimited application</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Verified tag</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Job alerts as per preference</span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">Employer identity disclosed</span>
            </li>
          </ul>
          <div className="my-5 text-base pt-3 w-36 mx-auto">
            <Link href="/recruiter/subscription/payment" className="bg-[#00A264] text-white py-3 px-3 rounded-md w-full">
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
