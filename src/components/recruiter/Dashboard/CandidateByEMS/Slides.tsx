"use client";
import React, { useRef, useEffect } from "react";

interface Vacancy {
  id: number;
  companyName: string;
  ship: string;
  roleType: string;
  match: string;
}

const Slides: React.FC = () => {
  const card = useRef<HTMLDivElement>(null);

  const vacancies: Vacancy[] = [
    {
      id: 1,
      companyName: "Rockey Smith",
      ship: "ship 1",
      roleType: "Captain",
      match: "90%",
    },
    {
      id: 2,
      companyName: "Jhon",
      ship: "ship 2",
      roleType: "Second Engineer",
      match: "90%",
    },
    {
      id: 3,
      companyName: "Wilson",
      ship: "ship 3",
      roleType: "Chief Engineer",
      match: "90%",
    },
    {
      id: 4,
      companyName: "Smith",
      ship: "ship 4",
      roleType: "Second Engineer",
      match: "90%",
    },
    {
      id: 5,
      companyName: "Rockey",
      ship: "ship 5",
      roleType: "Captain",
      match: "90%",
    },
    {
      id: 6,
      companyName: "Rockey Smith",
      ship: "ship 6",
      roleType: "Captain",
      match: "90%",
    },
    {
      id: 7,
      companyName: "Jhon",
      ship: "ship 7",
      roleType: "Second Engineer",
      match: "90%",
    },
    {
      id: 8,
      companyName: "Wilson",
      ship: "ship 8",
      roleType: "Chief Engineer",
      match: "90%",
    },
    {
      id: 9,
      companyName: "Smith",
      ship: "ship 9",
      roleType: "Second Engineer",
      match: "90%",
    },
    {
      id: 10,
      companyName: "Rockey",
      ship: "ship 10",
      roleType: "Captain",
      match: "90%",
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
    <div className=" relative flex items-center justify-center ">
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
        className=" flex overflow-x-scroll no-scrollbar gap-2 scroll-smooth snap-x snap-mandatory mx-[5rem]"
      >
        {vacancies.map((vacancy) => (
          <div
            key={vacancy.id}
            ref={card}
            className="bg-white  rounded-lg p-3   flex  shadow-xl border-2 "
          >
            <div className="w-[90px] h-[90px] p-2 bg-white  ">
              <img
                src="./Images/avtar.png"
                alt="Maersk Line"
                className="h-full w-full "
              />
            </div>
            <div className="flex flex-col justify-center ">
              <h3 className="text-lg font-semibold truncate">
                {vacancy.companyName}
              </h3>
              <p className="text-sm text-green-600 truncate">
                {vacancy.roleType}
              </p>
              <p className="text-sm truncate">{vacancy.ship}</p>
              <p className="text-sm truncate">
                <span className="font-bold pr-1">match</span> {vacancy.match}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* {/ Right Arrow /} */}
      <button
        onClick={scrollRight}
        className="absolute right-11 z-10 p-2 bg-gray-200  border rounded-full shadow-md -mr-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slides;
