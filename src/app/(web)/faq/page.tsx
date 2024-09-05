import Headingfaq from "@/components/web/faq/heading/Headingfaq" 
import Categories from "@/components/web/faq/heading/Categories";
const page = () => {
  return (
    <div className="flex flex-col">
      <Headingfaq />
      <Categories/>
    </div>
  );
};

export default page;

