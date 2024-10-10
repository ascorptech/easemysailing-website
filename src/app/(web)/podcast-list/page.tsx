import Image from "next/image";
import Heading5 from "@/components/web/podcast/heading5/Heading5";

import List5 from "@/components/web/podcast/list5/List5";
const page = () => {
  return (
    <div className="flex flex-col w-full mb-4">
      <Heading5/>
      
      <List5/>
    </div>
  );
};

export default page;
