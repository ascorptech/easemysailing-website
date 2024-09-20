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
      title: "Lorem Ip sum is simply dummy text of the printing.",
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
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
    {
      id: "4",
      logoSrc: "/images/article4.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
  ];
  
  // );
  return (
    <div className="overflow-x-scroll no-scrollbar mt-7 mb-5 lg:items-center  scroll-smooth snap-mandatory space-x-0 lg:space-x-8  flex flex-col sm:flex-row w-full lg:w-[83%] md:w-[94%] px-1 sm:px-0 lg:px-0 lg:mx-[110px] mx-auto">
      {article.map((card) => (
        <div
          className="w-full sm:w-[16.4rem] lg:w-[19.3rem] 2xl:w-[19.5rem] rounded shadow-lg mb-5"
          key={card?.id}
        >
          <div className="relative  lg:h-[12rem]">
            <Image
              className="w-full h-full"
              width={500}
              height={50}
              src={card.logoSrc}
              alt="Sunset in the mountains"
            />
            <div className="absolute mt-[-1.5rem] sm:mt-[-2.5rem] bg-green-700 text-white font-semibold px-2 py-1 lg:px-3 lg:py-2">
              <h3 className="text-base">{card.date}</h3>
            </div>
          </div>
          <div className="px-2 sm:px-2 bg-white py-2">
            <p className="text-black text-justify text-[9px] mr-1">
              {card?.title} {card?.title}{" "}
              <Link href="#" className="text-[#00A264] ">
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
