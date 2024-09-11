import Image from "next/image";
import PodcastList from "./PodcastList";

const List5 = () => {
  return (
    <div className="container mx-auto w-full lg:w-[70rem]  px-4">
      
      <div className="my-5 flex text-center lg:justify-center tracking-wider items-center ">
        <p>
          Hey there! Here you will find the schedulers for the upcoming webinars
          as well as the recorded <br />
          access to all the post webinars we've ever conducted.
        </p>
      </div>
      <PodcastList />
    </div>
  );
};

export default List5;
