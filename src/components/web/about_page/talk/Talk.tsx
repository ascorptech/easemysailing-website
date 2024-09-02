import Image from "next/image";
const Talk = () => {
  return (
    <div>
      <div className="h-[18rem] my-4 flex items-center justify-center ">
        <div>
          <Image
            src="/aboutleft.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[25rem] h-30 md:w-[23rem] md:h-[20rem] pt-2 mt-2 "
          />
        </div>
        <div className="w-[45rem] justify-center  text-justify ml-[6rem]">
          <h1 className="text-5xl font-semibold">
            {" "}
            Let's talk about{" "}
            <span className="text-green-700 font-semibold">
              EaseMy
              <br />
              Sailing
            </span>
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            iure fugiat labore eius vero ad quo velit voluptate dolores enim
            odio dignissimos placeat tempora doloremque. Sit soluta omnis nobis
            rerum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            impedit, mollitia deserunt aliquid incidunt reprehenderit quasi
            eveniet voluptatibus cumque et voluptatum deleniti adipisci saepe
            quae dignissimos totam aliquam assumenda exercitationem!
          </p>
        </div>
      </div>
      
    </div>
  // );
  // return(
  //   <div className="flex flex-col justify-center items-center">
  //     <div className="container flex sm:md:flex-row flex-col">
  //     <div className="flex sm:md:w-1/2 w-full">
  //     <Image
  //     src="/aboutleft.png" // Replace with your image path
  //     alt="Left Image"
  //     width={500} // Set to match the height
  //     height={500} // Ensure the aspect ratio is consistent
  //     className="w-full"
  //     priority
  //     />
  //     </div>
  //     <div className="flex sm:md:w-1/2 w-full">
  //     <h1>Let’s Talk About <span>EaseMy
  //     Sailing</span> </h1>
  //     </div>
  //     </div>
  //   </div>
  )
};

export default Talk;
