import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  id: string;
  date: string;
  title: string;
  logoSrc: string;
}

const ArticlesCard = () => {
  // const card = useRef<HTMLDivElement>(null);

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
    <>
      {/* <div className="overflow-x-auto flex space-x-4 no-scrollbar justify-center lg:ml-[8rem] scroll-smooth snap-x snap-mandatory  lg:w-[1278px] gap-4 w-[97%] border-2 border-red-600  "> */}
      <div className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory  space-x-9     lg:ml-[4rem]  relative items-center justify-center w-[90%] border-2 border-red-600  ">
        {article.map((card) => (
          <div
            key={card.id}
            className="flex  bg-white   flex-shrink-0 lg:w-[292px]  lg:h-[265px] lg:mt-4 shadow-lg border rounded-md lg:ml-3 "
          >
            <div className="relative bg-white    w-auto lg:w-[292px] lg:h-[202px]">
              <div className=" flex mb-2">
                <Image
                  src={card.logoSrc}
                  alt={`${card.title} logo`}
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute mt-[-3rem] bg-green-700 text-white font-semibold lg:px-3 lg:py-2 ">
                <h3>{card.date}</h3>
              </div>

              <div className="text-left w-[252px] h-[44px] flex justify-center items-center lg:ml-4 pt-2">
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
        ))}
        
      </div>
    </>
  );
};

export default ArticlesCard;
