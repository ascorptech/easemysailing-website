import Image from "next/image";
const Wedo = () => {
  return (
    <div className=" w-[100%]  h-[23rem] my-9 ">
      {/* heading */}
      <div className="flex flex-auto text-4xl  font-semibold justify-center text-center">
        <h1 className="flex py-2">
          What We&nbsp;<span className="text-green-700">Do</span>
        </h1>
      </div>

      <div className="flex flex-row relative mx-7 my-1  justify-center  items-center gap-16 ">
        {/* first div */}
        {/* <div className="flex h-[9rem] border-2 border-black"> */}
        <div className="flex flex-col sm:md:w-1/2 w-full justify-center text-center items-center">
          <Image
            src="/aboutleft.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[5rem] h-5 md:w-[5rem] md:h-[5rem] pt-2 mt-2 text-center "
            priority
          />
          <h1 className="text-base font-semibold">For Seaforers</h1>{" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            porro corrupti non explicabo repellat commodi temporibus error
            expedita, distinctio aliquid ab consequatur necessitatibus iure,
            minus ipsam? Minima provident quidem nihil?
          </p>
        </div>
        {/* second div */}
        <div className="flex flex-col sm:md:w-1/2 w-full justify-center text-center items-center">
          <Image
            src="/aboutleft.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[5rem] h-5 md:w-[5rem] md:h-[5rem] pt-2 mt-2 text-center "
            priority
          />
          <h1 className="text-base font-semibold">For Recruiters</h1>{" "}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            porro corrupti non explicabo repellat commodi temporibus error
            expedita, distinctio aliquid ab consequatur necessitatibus iure,
            minus ipsam? Minima provident quidem nihil?
          </p>{" "}
        </div>
        {/* Third div */}{" "}
        <div className="flex flex-col sm:md:w-1/2 w-full justify-center text-center items-center">
          <Image
            src="/aboutleft.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[5rem] h-5 md:w-[5rem] md:h-[5rem] pt-2 mt-2 text-center "
            priority
          />
          <h1 className="text-base font-semibold">For Manning Agents</h1>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            sapiente officiis veritatis obcaecati natus nobis laudantium ullam.
            Ad dicta rem deserunt blanditiis esse, reprehenderit asperiores
            perferendis, eveniet ducimus iusto ea.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};
export default Wedo;
