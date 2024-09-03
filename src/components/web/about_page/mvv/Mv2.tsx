import Image from "next/image";

const Mv2 = () => {
  return (
    <div className="w-[98%] lg:w-[99.4%] mx-1 my-9 ">
      <div className="flex flex-col md:flex-row md:mx-7 my-1 justify-center items-center gap-8 md:gap-16">
        {/* First div */}
        <div className="flex  flex-col w-full md:w-1/3 justify-center text-center items-center p-3 border-2  shadow-lg rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-lg rounded-tr-lg mb-4 md:mb-0">
          <Image
            src="/centre.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-24 h-24 pt-2 mt-2"
            priority
          />
          <h1 className="text-2xl font-semibold mt-2">Mission</h1>
          <p className="mt-2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            porro corrupti non explicabo repellat commodi temporibus error
            expedita, distinctio aliquid ab consequatur necessitatibus iure,
            minus ipsam? Minima provident quidem nihil?
          </p>
        </div>

        {/* Second div */}
        <div className="flex flex-col w-full md:w-1/3 justify-center text-center items-center p-3 border-2 shadow-lg rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-lg rounded-tr-lgmb-4 md:mb-0">
          <Image
            src="/eye.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-24 max-h-24 pt-2 mt-2"
            priority
          />
          <h1 className="text-2xl font-semibold mt-2">Vision</h1>
          <p className="mt-2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            porro corrupti non explicabo repellat commodi temporibus error
            expedita, distinctio aliquid ab consequatur necessitatibus iure,
            minus ipsam? Minima provident quidem nihil?
          </p>
        </div>

        {/* Third div */}
        <div className="flex flex-col w-full md:w-1/3 justify-center text-center items-center p-3  shadow-lg border-2 rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-lg rounded-tr-lg rounded-3xl">
          <Image
            src="/sqr.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-20 h-20 pt-3 mt-6"
            priority
          />
          <h1 className="text-2xl font-semibold mt-2">Values</h1>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            sapiente officiis veritatis obcaecati natus nobis laudantium ullam.
            Ad dicta rem deserunt blanditiis esse, reprehenderit asperiores
            perferendis, eveniet ducimus iusto ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mv2;
