"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

interface FreshTalent {
  id: number;
  name: string;
  roleType: string;
}

const Slide: React.FC = () => {
  const card = useRef<HTMLDivElement>(null);

  const vacancies: FreshTalent[] = [
    {
      id: 1,
      name: "Rockey Smith",
      roleType: "Captain",
    },
    {
      id: 2,
      name: "Jhon Smith",
      roleType: "Second Engineer",
    },
    {
      id: 3,
      name: "Rocky Smith",
      roleType: "Chief Engineer",
    },
    {
      id: 4,
      name: "Robbin",
      roleType: "Second Engineer",
    },
    {
      id: 5,
      name: "john Smith",
      roleType: "First Assistant Engineer",
    },
    {
      id: 6,
      name: "Rockey Smith",
      roleType: "Chief Engineer",
    },
    {
      id: 7,
      name: "Jhon",
      roleType: "Second Engineer",
    },
    {
      id: 8,
      name: "Wilson",
      roleType: "Chief Engineer",
    },
    {
      id: 9,
      name: "Smith",
      roleType: "Second Engineer",
    },
    {
      id: 10,
      name: "Rockey",
      roleType: "Captain",
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
    <div className=" relative flex items-center justify-center  ">
      {/* {/ Left Arrow /}
      {/ <div className=""> /} */}{" "}
      <button
        onClick={scrollLeft}
        className="absolute left-8 z-10  bg-gray-200 p-2 border rounded-full shadow-md "
      >
        &lt;
      </button>
      {/* {/ </div> /} */}
      {/* {/ Carousel Wrapper /} */}
      <div
        ref={card}
        className=" flex  overflow-x-scroll no-scrollbar gap-4   scroll-smooth snap-x snap-mandatory mx-[5rem] "
      >
        {vacancies.map((vacancy) => (
          <div
            key={vacancy.id}
            ref={card}
            className="bg-white  border rounded-lg  p-4  flex flex-col items-center text-center  shadow-xl ]  "
          >
            <div className="w-[95px] h-[95px] p-1 bg-white  ">
              <Image
              width={40}
              height={40}
              priority
                src="./Images/avtar.png"
                alt="Maersk Line"
                className="h-full w-full "
              />
            </div>
            <div className="flex flex-col items-center ">
              <h3 className="text-lg font-semibold truncate">{vacancy.name}</h3>
              <p className="text-xs text-[#00A264] w-[8.4rem]">
                {vacancy.roleType}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* {/ Right Arrow /} */}
      <button
        onClick={scrollRight}
        className="absolute right-10 z-10 p-2  bg-gray-200  border rounded-full shadow-md -mr-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slide;
