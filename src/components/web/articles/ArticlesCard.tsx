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
    <>
      <div className="w-full overflow-x-scroll no-scrollbar scroll-smooth snap-mandatory  space-x-9  lg:ml-[4rem] relative flex items-center justify-center md:lg:w-[90%]    pl-8 ">
        {article.map((card) => (
          <div
            key={card.id}
            className="flex justify-center  bg-white ml-0   md:lg:w-[292px]  md:lg:h-[265px] lg:mt-4 shadow-lg border rounded-md lg:ml-3 mb-3"
          >
            <div className="w-full relative bg-white lg:w-[292px] lg:h-[202px] ">
              <div className=" flex ">
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
