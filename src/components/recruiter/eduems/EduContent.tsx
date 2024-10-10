
"use client";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    title: "Alternate Fuel – Bunkering",
    rank: "All Ranks Except Catering Staff",
    duration: "5 Days",
    fee: "$2500",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    id: 2,
    title: "Senior Officers Leadership Assessment Programme (SOLAP)",
    rank: "Senior Deck Officer",
    duration: "3 Days",
    fee: "$1500",
    description: `Lorem Ipsum has been the industry's standard dummy text ever since...`,
  },
  {
    id: 3,
    title: "Markline",
    rank: "All Ranks Except Catering Staff",
    duration: "5 Days",
    fee: "$2500",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    id: 4,
    title: "Senior Officers Leadership Assessment Programme (SOLAP)",
    rank: "Senior Deck Officer",
    duration: "3 Days",
    fee: "$1500",
    description: `Lorem Ipsum has been the industry's standard dummy text ever since...`,
  },
  {
    id: 5,
    title: "Alternate Fuel – Bunkering",
    rank: "All Ranks Except Catering Staff",
    duration: "5 Days",
    fee: "$2500",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry...`,
  },
  {
    id: 6,
    title: "Senior Officers Leadership Assessment Programme (SOLAP)",
    rank: "Senior Deck Officer",
    duration: "3 Days",
    fee: "$1500",
    description: `Lorem Ipsum has been the industry's standard dummy text ever since...`,
  },
];

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(cardData[0]);

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
  };

  return (
    <div className="flex">
      {/* Cards area */}
      <div className="w-2/3 p-4 grid grid-cols-1 gap-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => handleCardClick(card)}
          >
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-gray-600">{card.rank}</p>
            <div className="mt-2 flex justify-between text-sm">
              <span>{card.duration}</span>
              <span>{card.fee}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Left popup area */}
      <div className="w-1/3 bg-gray-100 p-4 h-screen">
        <h2 className="text-xl font-bold">{selectedCard.title}</h2>
        <p className="mt-2">{selectedCard.description}</p>
        <ul className="mt-4">
          <li>
            <strong>Rank:</strong> {selectedCard.rank}
          </li>
          <li>
            <strong>Duration:</strong> {selectedCard.duration}
          </li>
          <li>
            <strong>Fee:</strong> {selectedCard.fee}
          </li>
        </ul>
      </div>
    </div>
  );
}
