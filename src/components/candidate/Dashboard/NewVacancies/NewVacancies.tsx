import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Vacancy {
  id: number;
  companyName: string;
  role: string;
  logoSrc: string;
  roleType: string;
}

const vacancies: Vacancy[] = [
  {
    id: 1,
    companyName: "AP Moller-Maersk",
    role: "Deck Officers",
    logoSrc: "/maersk-logo-url",
    roleType: "Captain",
  },
  {
    id: 2,
    companyName: "CMA CGM Group",
    role: "Captain",
    logoSrc: "/cma-cgm-logo-url",
    roleType: "Captain",
  },
  {
    id: 3,
    companyName: "Norbulk Shipping",
    role: "Engineers",
    logoSrc: "/avatar.webp",
    roleType: "Engineers",
  },
  {
    id: 4,
    companyName: "Pacific Basin",
    role: "Captain",
    logoSrc: "/pacific-basin-logo-url",
    roleType: "Captain",
  },
  {
    id: 5,
    companyName: "Wallem",
    role: "Captain",
    logoSrc: "/wallem-logo-url",
    roleType: "Captain",
  },
  {
    id: 6,
    companyName: "Evergreen",
    role: "Engineers",
    logoSrc: "/evergreen-logo-url",
    roleType: "Engineers",
  },
  
 
 
];

const NewVacancies: React.FC = () => {
  return (
    <div className="py-8  p-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold ">New Vacancies</h2>
        <Link href="#" className="text-green-600 font-medium">
          View All
        </Link>
      </div>
      <div className="flex items-center  space-x-6 mt-4">
        <Link href="#" className="text-black bg-gray-300 p-1 rounded-full">
          <ChevronLeft />
        </Link>
        <div className="flex space-x-4 overflow-x-hidden border-2">
          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="bg-white shadow-md rounded-lg p-3 min-w-[170px] "
            >
              <Image
                src={vacancy.logoSrc}
                alt={vacancy.companyName}
                className="h-10 mx-auto"
                width={800}
                height={800}
              />
              <h3 className="text-lg font-semibold text-center mt-2">
                {vacancy.companyName}
              </h3>
              <p className="text-sm text-center text-green-600">
                {vacancy.roleType}
              </p>
            </div>
          ))}
        </div>
        <Link href="#" className="text-black bg-gray-300  p-1 rounded-full">
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default NewVacancies;
