import { GoCheckCircleFill } from "react-icons/go";

export default function Advertisement() {
  return (
    <div className="mx-8 mt-5 w-[85%]  ml-20">
      <div>
        <h1 className="text-2xl font-semibold">
          Advertisement and Marketing Plans
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[110px] mt-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md   rounded-lg">
          <div className="bg-[#D1EFE4] h-[122px] text-center rounded-t-lg p-4">
            <h2 className="text-2xl font-bold">Basic Plan</h2>
            <p className="text-green-600 text-3xl font-extrabold">
              $0.00
              <span className="text-lg text-black  font-normal">/Year</span>
            </p>
          </div>
          <ul className="space-y-2 mx-16 mt-5">
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </li>
          </ul>
          <div className="my-5 text-sm w-36 mx-auto">
            <button className="bg-[#00A264] text-white py-3  rounded-md w-full">
              Get Started
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg">
          <div className="bg-[#D1EFE4] h-[122px] text-center rounded-t-lg p-4">
            <h2 className="text-2xl font-bold">Advanced Plan</h2>
            <p className="text-green-600 text-3xl font-extrabold">
              $0.00
              <span className="text-lg text-black  font-normal">/Year</span>
            </p>
          </div>
          <ul className="space-y-2 mx-10 mt-5">
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </li>
            <li className="flex items-center">
              <GoCheckCircleFill className="text-[#00A264]" />
              <span className="ml-2">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </li>
          </ul>
          <div className="my-5 text-sm w-36 mx-auto">
            <button className="bg-[#00A264] text-white py-3  rounded-md w-full">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
