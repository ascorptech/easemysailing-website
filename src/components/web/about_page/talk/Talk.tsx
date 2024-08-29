import Image from "next/image";

const Talk = () => {
  return (
    <div className="px-4 py-8">
      <div className="h-auto my-4 flex flex-col md:flex-row items-center justify-center mx-auto max-w-screen-lg">
        <div className="flex-shrink-0">
          <Image
            src="/aboutleft.png" // Replace with your image path
            alt="Left Image"
            width={5000}
            height={5050}
            className="w-full h-auto max-w-[20rem] md:max-w-[25rem] pt-2 mt-2"
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-10 text-justify  md:text-left max-w-full">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Let's talk about{" "}
            <span className="text-green-700 font-semibold">
              EaseMy
              <br className="hidden md:block" />
              Sailing
            </span>
          </h1>
          <br />
          <p className="text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            iure fugiat labore eius vero ad quo velit voluptate dolores enim
            odio dignissimos placeat tempora doloremque. Sit soluta omnis nobis
            rerum.
          </p>
          <br />
          <p className="text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            impedit, mollitia deserunt aliquid incidunt reprehenderit quasi
            eveniet voluptatibus cumque et voluptatum deleniti adipisci saepe
            quae dignissimos totam aliquam assumenda exercitationem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talk;
