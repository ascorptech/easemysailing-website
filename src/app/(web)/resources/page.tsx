import Heading7 from "@/components/web/resource_page/heading7/Heading7";
import ResourcesList from "@/components/web/ResourcesList/ResourcesList";

const page = () => {


  return (
    <div className="flex flex-col mb-4">
      <Heading7 />
      <div className="my-5 flex text-center lg:justify-center tracking-wider items-center ">
        <p className="text-left">
        Disclaimer: The views expressed in these articles are the personal opinion of the writer
        </p>
      </div>
      <ResourcesList/>
    </div>
  );
};

export default page;
