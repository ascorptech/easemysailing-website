import Image from "next/image";

const Talk = () => {
  return (
    <div className=" my-4 mx-1 mt-14 flex flex-col items-center justify-center p-4 md:flex-row md:items-start md:space-x-8 lg:space-x-12">
      <div className="flex justify-center">
        <Image
          src="/aboutleft.png" // Replace with your image path
          alt="Left Image"
          width={5000}
          height={5050}
          className="w-full max-w-[25rem] md:max-w-[23rem] pt-2 mt-2"
        />
      </div>
      <div className="w-full max-w-[45rem] lg:text-justify text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Let's talk about{" "}
          <span className="text-green-700 font-semibold">
            EaseMy
            <br />
            Sailing
          </span>
        </h1>
        <br />
        <p className="text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iure
          fugiat labore eius vero ad quo velit voluptate dolores enim odio
          dignissimos placeat tempora doloremque. Sit soluta omnis nobis rerum.
        </p>
        <br />
        <p className="text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          impedit, mollitia deserunt aliquid incidunt reprehenderit quasi
          eveniet voluptatibus cumque et voluptatum deleniti adipisci saepe quae
          dignissimos totam aliquam assumenda exercitationem!
        </p>
      </div>
    </div>
  );
};

export default Talk;
