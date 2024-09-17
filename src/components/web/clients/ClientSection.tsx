import React from "react";
import ClientsCard from "./ClientsCard";

const ClientSection: React.FC = () => {
  const clientcard = [
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    // Add more clientcard as needed
  ];

  return (
    <div className="flex bg-[#F1F1F1] mx-2 lg:mx-0 flex-col border-2 border-red-600 w-[95%] lg:w-full mt-5 ">
      <div className="text-[21px] leading-[28px] font-bold sm:md:text-2xl   lg:ml-[0rem] mt-5">
        <h2 className=" text-[15px] leading-[20px]  sm:text-[28px]  lg:text-[36px] sm:leading-[54px] font-bold  text-center ">
          Seafarer Stories: Why They{" "}
          <span className="text-[#00A264]">Trust</span> Us Adore Us
        </h2>
      </div>
      <div className=" flex ml-4 mr-3 overflow-auto no-scrollbar space-x-12 mt-8 lg:ml-[8.4rem] lg:mr-[9%] ">
        {clientcard?.map((ccard, index) => (
          <ClientsCard
            key={index}
            text={ccard.text}
            name={ccard.name}
            role={ccard.role}
            rating={ccard.rating}
            imageSrc={ccard.imageSrc}
            image1={ccard.image1}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
