import React from "react";
import ClientsCard from "./ClientsCard";

const ClientSection: React.FC = () => {
  const clientcard = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/path/to/image1.png",
    },
    {
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/path/to/image2.png",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/path/to/image3.png",
    },
    // Add more clientcard as needed
  ];

  return (
    <div className="bg-green-100 mx-3 w-[94%]  mt-2 lg:justify-center md:mx-6  sm:mx-5 lg:w-full lg:mx-0">
      <section className="p-4  md:p-6 lg:p-10 mx-4 md:mx-10 lg:mx-20">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center md:text-left lg:ml-[7rem]">
          Our <span className="text-green-600">Clients</span> Adore Us
        </h2>
        <div className="overflow-x-auto flex space-x-4 no-scrollbar pb-4 lg:justify-center">
          {clientcard.map((ccard, index) => (
            <ClientsCard
              key={index}
              text={ccard.text}
              name={ccard.name}
              role={ccard.role}
              rating={ccard.rating}
              imageSrc={ccard.imageSrc}
              // className="min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientSection;
