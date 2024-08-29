import React from "react";

interface SlideProps{
    image:string;
    name: string;
    rating: string;
    reviews: string;
}

// export default function Slide2(props) {
const Slide2: React.FC<SlideProps> = ({
  image,
  name,
  rating,
  reviews,
}) => {
  return (
    <div className="bg-white border-2 rounded-lg p-2  shadow-md flex-shrink-0 w-44 ">
      <div className="flex justify-center">
        <img
          src={"http://localhost:3000/images/" + image}
          alt={`${name} logo`}
          className="h-10"
        />
      </div>

      <div className="text-sm text-center  mb-2 h-14  ">
        <h3 className="text-base font-semibold mb-2">{name}</h3>
        <span className="text-yellow-500">⭐ {rating}</span>
        <span className="text-gray-500"> | {reviews} </span>
      </div>
      {/* <div className="text-gray-700 mb-2 font-base">{contactPerson}</div> */}
      {/* <p className="text-gray-500 text-sm">{description}</p> */}
    </div>
  );
};



export default Slide2;