
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
    <div className="bg-green-100">
      <section className="p-6 ml-[11rem]">
        <h2 className="text-2xl font-bold mb-4">
          Our <span className="text-green-600">Clients</span> Adore Us
        </h2>
        <div className="overflow-x-auto flex space-x-4 no-scrollbar">
          {clientcard.map((ccard, index) => (
            <ClientsCard
              key={index}
              text={ccard.text}
              name={ccard.name}
              role={ccard.role}
              rating={ccard.rating}
              imageSrc={ccard.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientSection;
