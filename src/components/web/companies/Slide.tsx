"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface Card {
  id: number;
  logo: string;
}

const Slide = () => {
  const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/logo1.png",
    },
    {
      id: 2,
      logo: "/images/logo3.png",
    },
    {
      id: 3,
      logo: "/images/logo4.png",
    },
    {
      id: 4,
      logo: "/images/logo5.png",
    },
    {
      id: 5,
      logo: "/images/logo8.png",
    },
    {
      id: 1,
      logo: "/images/logo9.png",
    },
    {
      id: 2,
      logo: "/images/logo3.png",
    },
    {
      id: 3,
      logo: "/images/logo5.png",
    },
    {
      id: 4,
      logo: "/images/logo8.png",
    },
    {
      id: 5,
      logo: "/images/logo9.png",
    },
  ];

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
    <div className=" lg:ml-[0rem]  relative flex items-center justify-center w-[90%] lg:w-[1328px] lg:h-[200px]  ">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 z-10 bg-[#D9D9D9] w-[23.6px] h-[23.6px]  rounded-full shadow-md ml-1  mr-2"
      >
        &lt;
      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className=" lg:mr-12 flex overflow-x-scroll mt-3 no-scrollbar scroll-smooth snap-x snap-mandatory ml-[2.4rem] lg:w-[1266px] lg:h-[100px]"
      >
        {cards.map((card) => (
          <div key={card.id} className="flex lg:mb-2 lg:px-1 lg:w-[250px] lg:h-[84px] sm:w-[16.9%] ">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border-2 shadow-md p-6 w-[129.8px] ">
              <div className="   px-2 ">
                {/* <img
                  src={card.logo}
                  alt="images not find"
                  className="w-full h-full "
                /> */}
                <Image src={card.logo} width={150} height={150} priority alt="images not find" />
              </div>
            </div>
          </div>
        ))}

        {/* Continue adding cards as needed */}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-1 mr-3 z-10 bg-[#D9D9D9] w-[23.6px] h-[23.6px] rounded-full shadow-md  "
      >
        &gt;
      </button>
    </div>
  );
};

export default Slide;
