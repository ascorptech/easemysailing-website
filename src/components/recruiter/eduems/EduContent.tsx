"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdShare } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import Image from "next/image";
const cardData = [
  {
    id: 1,
    title: "Alternate Fuel – Bunkering",
    rank: "All Ranks Except Catering Staff",
    medium: "Online and Virtual (both)",
    duration: "5 Days",
    fee: "$2500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
  {
    id: 2,
    title: "Senior Officers Leadership Assessment Programme (SOLAP)",
    rank: "Senior Deck Officer",
    medium: "Online and Virtual (both)",
    duration: "3 Days",
    fee: "$1500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
  {
    id: 3,
    title: "Markline",
    rank: "All Ranks Except Catering Staff",
    medium: "Online and Virtual (both)",
    duration: "5 Days",
    fee: "$2500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
  {
    id: 4,
    title: "Senior Officers Leadership Assessment Programme (SOLAP)",
    rank: "Senior Deck Officer",
    medium: "Online and Virtual (both)",
    duration: "3 Days",
    fee: "$1500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
  {
    id: 5,
    title: "Alternate Fuel – Bunkering",
    rank: "All Ranks Except Catering Staff",
    medium: "Online and Virtual (both)",
    duration: "5 Days",
    fee: "$2500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
  {
    id: 6,
    title: "Senior Officers Leadership Assessment Programme (SOLAP)",
    rank: "Senior Deck Officer",
    medium: "Online and Virtual (both)",
    duration: "3 Days",
    fee: "$1500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
  {
    id: 7,
    title: "Alternate Fuel – Bunkering",
    rank: "All Ranks Except Catering Staff",
    medium: "Online and Virtual (both)",
    duration: "5 Days",
    fee: "$2500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
  {
    id: 8,
    title: "Senior Officers Leadership Assessment Programme (SOLAP)",
    rank: "Senior Deck Officer",
    medium: "Online and Virtual (both)",
    duration: "3 Days",
    fee: "$1500",
    description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. `,
  },
];

export default function EduContent() {
  const [selectedCard, setSelectedCard] = useState(cardData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const cardsPerPage = 5;

  // Calculate the current set of cards to display based on currentPage
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(cardData.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className="flex px-10 gap-8 py-5">
        {/* Cards area */}
        <div className="w-[45%] mt-2 px-4 py-1 grid grid-cols-1 gap-4">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className={`p-4 border border-gray-200 shadow-xl rounded-lg cursor-pointer hover:bg-[#D6EEEE] ${
                selectedCard === card ? "bg-[#D6EEEE]" : "bg-white"
              }`}
              onClick={() => handleCardClick(card)}
            >
              <h3 className="text-lg flex items-center justify-between font-bold">
                {card.title}
                <IoMdShare className="text-[#00A264] text-2xl" />
              </h3>
              <p className="text-sm pt-2 text-gray-600">
                <span className="font-semibold  text-black">Rank : </span>
                {card.rank}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-black">Medium : </span>
                {card.medium}
              </p>
              <div className="mt-2 flex justify-between items-center text-sm ">
                <div className="flex gap-x-3">
                  <Link
                    href="#"
                    className="bg-[#00A264] px-2 text-white py-2 rounded-md "
                    onClick={() => handleCardClick(card)}
                  >
                    View Details
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setShowPopup(true)}
                    className="bg-[#00A264] px-2 text-white py-2 rounded-md "
                  >
                    Candidate
                  </Link>
                </div>
                <div className="flex gap-x-2 justify-end">
                  <p className="text-gray-600">
                    <span className="font-semibold text-black">
                      Duration :{" "}
                    </span>
                    {card.duration}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-black">Fee : </span>
                    {card.fee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left popup area */}
        <div className="w-[55%] shadow-xl  border mt-4 rounded-md p-4 ">
          <h2 className="text-xl font-bold">{selectedCard.title}</h2>
          <p className="mt-2 text-justify">{selectedCard.description}</p>
          <p className="mt-2 text-justify">{selectedCard.description}</p>
          <p className="mt-2 text-justify">{selectedCard.description}</p>
          <ul className="list-disc text-lg leading-8 text-[#4E4E4E] list-inside text-justify mt-2">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever
              since.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic.
            </li>
          </ul>
        </div>
      </div>
      {/* Pagination Controls - Centered at the bottom */}
      <div className="flex justify-center items-center mt-5">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#00A264] text-white rounded-lg"
        >
          Previous
        </button>

        <span className="text-lg font-medium mx-4">
          Page {currentPage} of {Math.ceil(cardData.length / cardsPerPage)}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(cardData.length / cardsPerPage)}
          className="px-4 py-2 bg-[#00A264] text-white rounded-lg"
        >
          Next
        </button>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-5 w-1/3 relative">
            {/* Close button */}

            <button
              className="absolute top-1 right-1 p-1"
              onClick={() => setShowPopup(false)}
            >
              <IoIosCloseCircle className="w-6 text-[#00A264] h-6 " />
            </button>

            {/* Popup content */}
            <div className=" border-2 m-2 rounded-md border-[#0cd88d]">
              <h2 className="text-xl py-2 rounded-md font-semibold mb-4 text-white text-center bg-[#00A264]">
                Select Candidate
              </h2>

              <div className="px-2">
                <input
                  type="text"
                  className="w-full border border[#B0FFE2] p-2 bg-[#D6EEEE] rounded-md"
                  placeholder="Select Candidate"
                />
              </div>

              <ul className="px-2 list-none mb-4">
                <li className="flex items-center my-2">
                  <input type="checkbox" className="mr-2" />
                  <span className="flex-1 text-[#00A264]">Talent ID 1</span>
                  {/* <span className="bg-white p-2 rounded-md shadow ml-2">
                    Name - Danny <br /> Rank - Captain
                  </span> */}
                </li>
                <li className="flex items-center text-[#00A264] mb-2">
                  <input type="checkbox" className="mr-2" />
                  Talent ID 2
                </li>
                <li className="flex items-center text-[#00A264] mb-2">
                  <input type="checkbox" className="mr-2" />
                  Talent ID 3
                </li>
                <li className="flex text-[#00A264] items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  Talent ID 4
                </li>
                <li className="flex text-[#00A264] items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  Talent ID 5
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                setShowPopup(false);
                setShowSuccessPopup(true);
              }}
              className="bg-[#00A264] m-2 text-white py-2 px-4 rounded-md w-[97%]"
            >
              Assign Training
            </button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-5 w-[25%] relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowSuccessPopup(false)}
            >
              <IoIosCloseCircle className="w-6 text-[#00A264] h-6 " />
            </button>

            {/* Success Icon and Message */}
            <div className="flex flex-col items-center justify-center ">
              <div className="mb-4  rounded-full flex items-center justify-center">
                <Image
                  priority
                  height={1000}
                  width={1000}
                  src={"/rpopup.png"}
                  alt="image not found"
                  className="w-36 h-36 text-center mb-5"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">Successful!</h2>
              <p className="text-gray-700 font-semibold text-center">
                Training has been allocated!
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex justify-around mt-4">
              <button className="bg-[#00A264] text-white py-2 px-4 rounded-md">
                Go To Transaction
              </button>
              <button className="bg-[#00A264] text-white py-2 px-4 rounded-md"
              onClick={() => {
                // setShowPopup(false);
                setShowSuccessPopup(false);
              }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
