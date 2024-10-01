import Link from "next/link";

const Findout = () => {
  return (
    <div className="flex items-center bg-[url('/ocean.png')] bg-cover bg-center">
      <div className="flex flex-col lg:flex-row bg-[#021527] bg-opacity-0 justify-between w-full items-center p-6 lg:p-16 gap-8">
        {/* Left div */}
        <div className="w-full lg:w-[50%]">
          <div className="relative h-[200px] sm:h-[300px] lg:h-[400px]">
            <iframe
              className="absolute rounded-2xl border-4 sm:border-6 lg:border-8 border-white top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lm6CLMLSZBc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Div */}
        <div className="w-full lg:w-[50%]">
          <h1 className="text-white font-semibold text-3xl sm:text-4xl xl:text-[50px] lg:text-[40px]">
            Find Out What's New At{" "}
            <span className="text-[#00A264] lg:leading-[5rem]">Easemysailing</span>
          </h1>
          <p className="text-white mt-5 lg:mt-8 text-base sm:text-lg lg:text-[18px]">
            Your career journey is serious, but should never be lonely or dull.
            With the new EaseMySailing, work communities are right at your
            fingertips.
          </p>
          <div className="mt-10 lg:mt-[7rem]">
            <Link
              href="/contact"
              className="bg-[#00A264] px-2 py-2 lg:px-4 lg:py-3 flex justify-center items-center text-white lg:h-[50px] rounded-full text-sm lg:text-base w-[120px] sm:w-[160px]"
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
