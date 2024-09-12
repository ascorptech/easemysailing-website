import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  id: string;
  date: string;
  title: string;
  logoSrc: string;
}

const ArticlesCard = () => {
  const article: ArticleProps[] = [
    {
      id: "1",
      logoSrc: "/images/article1.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing .",
    },
    {
      id: "2",
      logoSrc: "/images/r2.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
    {
      id: "3",
      logoSrc: "/images/article3.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing .",
    },
    {
      id: "4",
      logoSrc: "/images/article4.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
  ];
  return (
    <div className="overflow-x-scroll no-scrollbar scroll-smooth snap-mandatory sm:md:space-x-12 2xl:space-x-8  mt-3 flex sm:md:flex-row flex-col sm:md:w-[90%] 2xl:w-[90%]  sm:md:px-[2.26rem] 2xl:px-[1.74rem] mx-auto">
      {/* {article.map((card) => (
          <div
            key={card.id}
            className="flex justify-center  bg-white ml-0  w-64 h-[18rem]  sm:md:w-[268px]  sm:md:h-[265px] lg:mt-4 shadow-lg border rounded-md lg:ml-3 mb-3"
          >
            <div className=" relative bg-white w-[292px] h-[202px] ">
              <div className=" flex ">
                <Image
                  src={card.logoSrc}
                  alt={`${card.title} logo`}
                  width={100}
                  height={100}
                  priority
                  className="w-[100%] h-full object-contain"
                />
              </div>
              <div className="absolute mt-[-1.5rem] sm:md:mt-[-2.5rem] bg-green-700 text-white font-semibold lg:px-3 lg:py-2 ">
                <h3>{card.date}</h3>
              </div>

              <div className="text-left w-[90%] sm:md:w-[252px] sm:md:h-[44px] flex justify-center items-center sm:md:ml-4 pt-2 mx-2">
                <p className="text-black-500 font-semibold text-[16px] leading-[24px]">
                  {" "}
                  {card.title}{" "}
                  <Link href="#" className="text-[#00A264]">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))} */}
      {article.map((card) => (
        <div
          className="sm:md:w-[16.4rem] 2xl:w-[19.5rem] w-full rounded shadow-lg mb-5"
          key={card?.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src={card.logoSrc}
              alt="Sunset in the mountains"
            />
            <div className="absolute mt-[-1.5rem] sm:md:mt-[-2.5rem] bg-green-700 text-white font-semibold lg:px-3 lg:py-2 ">
              <h3 className="text-base">{card.date}</h3>
            </div>
          </div>
          <div className="sm:md:px-5 px-2 py-4">
            <p className="text-gray-700 text-base">
              {card?.title}{" "}
              <Link href="#" className="text-[#00A264]">
                Read More
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCard;
