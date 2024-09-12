"use client";
import React, { useRef, useEffect } from "react";

<<<<<<< HEAD
const SlidesTrend = () => {
  const card = useRef<HTMLDivElement>(null);

=======
interface Card {
    id: number;
    logo: string;
    company: string;
    rating: number;
    reviews: string;
    rank :string;
  }


const SlidesTrend = () => {
  const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/logo1.png",
      company: "Maersk Line",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 2,
      logo: "/images/logo2.png",
      company: "MSC",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 3,
      logo: "/images/logo3.png",
      company: "CMA CGM Group",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 4,
      logo: "/images/logo4.png",
      company: "MEC",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 5,
      logo: "/images/logo5.png",
      company: "AP Moller-Maersk",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 1,
      logo: "/images/logo1.png",
      company: "Maersk Line",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 2,
      logo: "/images/logo2.png",
      company: "MSC",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 3,
      logo: "/images/logo3.png",
      company: "CMA CGM Group",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 4,
      logo: "/images/logo4.png",
      company: "MEC",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
    {
      id: 5,
      logo: "/images/logo5.png",
      company: "AP Moller-Maersk",
      rating: 4.8,
      reviews: "5K+",
      rank:"All Ranks"
    },
  ];


>>>>>>> cd6c802d9a6c9b483f46ba23823d425965596764
  const scrollLeft = () => {
    if (card.current) {
      card.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (card.current) {
      card.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      scrollLeft();
    } else if (event.key === "ArrowRight") {
      scrollRight();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div className=" lg:ml-[4rem] relative flex items-center justify-center w-[90%]  ">
      {/* Left Arrow */}
=======
    <div className=" lg:ml-[4rem] relative flex items-center justify-center w-[90%] border-2 border-red-600  ">
      {/* {/ Left Arrow /} */}
>>>>>>> cd6c802d9a6c9b483f46ba23823d425965596764
      <button
        onClick={scrollLeft}
        className="absolute left-1 lg:left-10 z-10 p-2 bg-white border rounded-full shadow-md ml-1 lg:ml-2 mr-2"
      >
        &lt;
      </button>

<<<<<<< HEAD
      {/* Carousel Wrapper */}
      <div
        ref={card}
        className=" flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory lg:mx-[7rem] mx-[2rem] ml-[3rem] "
      >
        {/* Card 1 */}
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo1.png" alt="Maersk Line" />
            <p className="text-sm font-bold mt-2 lg:mt-2">App Moller-Maersk</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>All Rank</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo2.png" alt="Evergreen" />
            <p className="text-sm font-bold mt-5 lg:mt-5">Maersk Line</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>Multiple rank</p>
          </div>
        </div>
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo3.png" alt="MSC" />
            <p className="text-sm font-bold ">App Moller-Maersk</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>All Rank</p>
          </div>
        </div>
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo4.png" alt="CMA CGM" />
            <p className="text-sm font-bold ">Maersk Line</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>Multiple rank</p>
          </div>
        </div>
        {/* Continue adding cards as needed */}
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo5.png" alt="MSC" />
            <p className="text-sm font-bold lg:mt-2">App Moller-Maersk</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>All Rank</p>
          </div>
        </div>
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo1.png" alt="CMA CGM" />
            <p className="text-sm font-bold lg:mt-2">Maersk Line</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>Multiple rank</p>
          </div>
        </div>
        {/* Continue adding cards as needed */}
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo2.png" alt="MSC" />
            <p className="text-sm font-bold lg:mt-5">App Moller-Maersk</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>All Rank</p>
          </div>
        </div>
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo3.png" alt="CMA CGM" />
            <p className="text-sm font-bold ">Maersk Line</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>Multiple rank</p>
          </div>
        </div>
        {/* Continue adding cards as needed */}
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo4.png" alt="MSC" />
            <p className="text-sm font-bold lg:mt-2">App Moller-Maersk</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>All Rank</p>
          </div>
        </div>
        <div className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <img src="/images/logo5.png" alt="CMA CGM" />
            <p className="text-sm font-bold lg:mt-5">Maersk Line</p>
            <p className="text-sm">⭐ 4.8 | 5k+ reviews</p>
            <p>Multiple rank</p>
          </div>
        </div>
        {/* Continue adding cards as needed */}
      </div>

      {/* Right Arrow */}
=======
      {/* {/ Carousel Wrapper /} */}
      <div
        ref={card}
        className=" flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory lg:mx-[5rem] mx-[2rem] ml-[3rem] "
      >
        {/* {/ Card 1 /} */}
        {cards.map((card) =>(
        <div key={card.id} className="snap-center p-2">
          <div className=" flex flex-col justify-center items-center w-44 h-40 p-4  lg:w-44  lg:h-40 bg-white border rounded-lg shadow-md">
            <div className="w-16 h-16 border"><img src={card.logo} alt="Maersk Line"  className="w-full h-full object-cover"/></div>
            
            <p className="text-sm font-bold mt-2 lg:mt-2">{card.company}</p>
            <p className="text-sm text-gray-500">
                <span className="text-yellow-500">★ <span className="text-black font-bold">{card.rating}</span></span> |{" "}
                {card.reviews} reviews
              </p>
              <p className="font-semibold text-[13px]">{card.rank}</p>
          </div>
        </div>
         ) )}
    
      </div>

      {/* {/ Right Arrow /} */}
>>>>>>> cd6c802d9a6c9b483f46ba23823d425965596764
      <button
        onClick={scrollRight}
        className="absolute right-1 lg:right-10 z-10 p-2 bg-white border rounded-full shadow-md -mr-7 lg:-mr-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default SlidesTrend;
