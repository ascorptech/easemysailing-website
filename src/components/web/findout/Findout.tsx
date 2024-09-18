import Link from "next/link";

const Findout = () => {
  return (
    <div className="flex items-center    bg-[url('/ocean.png')] ">
      <div className="flex  bg-[#021527] bg-opacity-65 justify-between w-full items-center p-16 gap-8 ">
        {/* Left div */}
        <div className="w-[50%]">
          <div className="relative h-[400px]  ">
            <iframe
              className="absolute rounded-2xl border-8  border-white top-0 left-0 w-full h-full  "
              src="https://www.youtube.com/embed/lm6CLMLSZBc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>{" "}
        </div>

        {/* Right Div */}
        <div className="w-[50%]  h-[400px]">
          <h1 className=" text-white font-semibold text-[50px] ">
            FIND OUT WHAT'S NEW A{" "}
            <span className="text-[#00A264]"> EASEMYSAILING </span>
          </h1>
          <p className="text-white mt-5 text-[16px]">
            Your career journey is serious, but should never be lonely or dull.
            With the new EaseMySailing, work communities are right at your
            fingertips.
          </p>
          <div className="mt-[7rem]">
            <Link
              href="#"
              className="bg-[#00A264] px-1 flex justify-center items-center text-white lg:px-2 lg:h-[50px] rounded-full text-base w-[160px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Findout;
