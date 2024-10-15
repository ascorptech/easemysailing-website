"use client";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    title: "Alternate Fuel – Bunkering",
    rank: "All Ranks Except Catering Staff",
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

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(cardData[0]);

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
  };

  return (
    <div className="flex px-10 gap-8 py-5">
      {/* Cards area */}
      <div className="w-[40%] p-4 grid grid-cols-1 gap-4">
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
      <div className="w-[55%]  border mt-4 rounded-md p-4 h-screen">
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
  );
}
