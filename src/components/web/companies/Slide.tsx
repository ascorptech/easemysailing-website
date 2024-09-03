// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { IoMdArrowBack } from "react-icons/io";
// import { IoMdArrowForward } from "react-icons/io";

// export default function Slide() {
//   const [slide, setSlide] = useState(0);
//   const [categories, setCategory] = useState([]);







//   const fetchCategory = async () => {
//     const response = await fetch("http://localhost:3000/api/product");
//     const data = await response.json();
//     setCategory(data);
//   };

//   useEffect(() => {
//     fetchCategory();
//   }, []);

//   const nextSlide = () => {
//     console.log(categories.length);
//     if (categories.length - 8 === slide) return false;
//     setSlide(slide + 2);
//   };

//   const prevSlide = () => {
//     if (slide === 0) return false;
//     setSlide(slide - 2);
//   };

//   return (
//     <>
//       <div className="w-full  px-1  lg:ml-36 mt-3  lg:w-[80%] ">
//         <div className="flex flex-row  justify-between">
//           <div className="flex justify-between items-center">
//             <div
//               className="cursor-pointer
//             flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full lg:mx-2 border-2"
//               onClick={prevSlide}
//             >
//               <IoMdArrowBack />
//             </div>
//           </div>
//           <div className="flex  overflow-hidden   ">
//             {categories.map((cat:any, index:number) => {
//               return (
//                 <div
//                   style={{ transform: `translateX(-${slide * 100}%)` }}
//                   key={index}
//                   className="flex justify-center items-center w-[124px] mx-1 rounded-2xl border-2 shrink-0 duration-500"
//                 >
//                   <img
//                     src={"http://localhost:3000/images/" + cat?.image} // Replace with your image path
//                     alt=""
//                     width={100} // Set to match the height
//                     height={100} // Ensure the aspect ratio is consistent
//                     className=""
//                   />
//                 </div>
//               );
//             })}
//           </div>
//           <hr className="my-6 border-[1px]" />
//           <div className="flex justify-between items-center  ">
//             <div
//               className="cursor-pointer
//             flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full  border-2"
//               onClick={nextSlide}
//             >
//               <IoMdArrowForward />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";
import React, { useRef, useEffect } from "react";


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
    <div className=" lg:ml-[4rem] relative flex items-center justify-center w-[90%]  ">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 lg:left-10 z-10 p-2 bg-white border rounded-full shadow-md ml-1 lg:ml-2 mr-2"
      >
        &lt;
      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className=" flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory lg:mx-[7rem] mx-[2rem] ml-[3rem] "
      >
       
        {cards.map((card) => (
          <div key={card.id} className="flex-none w-full sm:w-1/5 p-4">
            <div className="flex flex-col items-center bg-white  shadow-md p-4">
              <div className="mb-4 w-14 h-14">
                <img
                  src={card.logo}
                  alt="images not find"
                  className="w-full h-full "
                />
              </div>
              
      
            </div>
          </div>
        ))}

        {/* Continue adding cards as needed */}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-1 lg:right-10 z-10 p-2 bg-white border rounded-full shadow-md -mr-7 lg:-mr-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slide;
