import Headingfaq from "@/components/faq/heading/Headingfaq" 
import Categories from "@/components/faq/heading/Categories";
const page = () => {
  return (
    <div className="flex flex-col">
      <Headingfaq />
      <Categories/>
    </div>
  );
};

export default page;
