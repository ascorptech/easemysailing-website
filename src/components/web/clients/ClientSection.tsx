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
      image1:"/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1:"/images/quotes.png",
    },
    // Add more clientcard as needed
  ];

  // return (
  //   <div className="bg-[#F1F1F1] flex mx-3 w-full  mt-2 lg:justify-center lg:items-center md:mx-6  sm:mx-5 lg:w-full lg:mx-0 bg-[url('/images/clientbg.png')]   sm:md:h-[500px] ">
  //     <div className=" flex flex-col sm:md:h-[449px] sm:md:w-[1275px] lg:justify-between lg:items-center md:py-14 lg:py-0  mx-4 md:mx-10 lg:mx-20  lg:m-0 ">
  //     <div className="flex justify-center lg:w-full items-center ">
  //      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  text-center ">
  //      Seafarer Stories: Why They <span className="text-[#00A264]">Trust</span> Us Adore Us
  //       </h2>
      
  //       </div> 
       
  //       <div className="overflow-hidden sm:md:overflow-x-auto gap-14 flex   space-x-4 no-scrollbar  lg:justify-between  lg:items-center sm:md:w-full  sm:md:h-[400px] ">
       
  //         {clientcard?.map((ccard, index) => (
  //           <ClientsCard
  //             key={index}
  //             text={ccard.text}
  //             name={ccard.name}
  //             role={ccard.role}
  //             rating={ccard.rating}
  //             imageSrc={ccard.imageSrc}
  //             image1={ccard.image1}
  //             // className="min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]"
  //           />
  //         ))}
         
  //       </div>
  //       {/* <p>dot space</p> */}
  //     </div>
  //   </div>
  // );
  return(
<div className="flex bg-[#F1F1F1] flex-col">
  <div className="flex justify-center items-center">
  <h2 className="text-xl md:text-2xl sm:md:text-3xl font-bold  text-center ">
       Seafarer Stories: Why They <span className="text-[#00A264]">Trust</span> Us Adore Us
       </h2>
  </div>
  <div className="flex overflow-auto no-scrollbar space-x-10">
  {clientcard?.map((ccard, index) => (
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
</div>
  )
};

export default ClientSection;
