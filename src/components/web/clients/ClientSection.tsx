import React from "react";
import ClientsCard from "./ClientsCard";

const ClientSection: React.FC = () => {
  const clientcard = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of simply the printing and typesetting industry.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum is simply dummy text of the simply printing and typesetting industry.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the simply printing and type setting industry.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    // Add more clientcard as needed
  ];

  return (
    <div className="bg-[#F1F1F1] flex mx-3 w-[94%]  mt-2 lg:justify-center lg:items-center md:mx-6  sm:mx-5 lg:w-full lg:mx-0 bg-[url('/images/clientbg.png')]   lg:h-[555px]">
      <section className=" flex flex-col lg:h-[449px] lg:w-[1275px] lg:justify-between lg:items-center md:py-14  mx-4 md:mx-10 lg:mx-20">
       <div className="flex justify-center lg:w-full items-center ">
       <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center  ">
          Our <span className="text-[#00A264]">Clients</span> Adore Us
        </h2>
        </div> 
        <div className="overflow-x-auto gap-14 flex  space-x-4 no-scrollbar  lg:justify-between  lg:items-center lg:w-[1275px]  lg:h-[270px]">
          {clientcard.map((ccard, index) => (
            <ClientsCard
              key={index}
              text={ccard.text}
              name={ccard.name}
              role={ccard.role}
              rating={ccard.rating}
              imageSrc={ccard.imageSrc}
              image1={ccard.image1}
              // className="min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientSection;
