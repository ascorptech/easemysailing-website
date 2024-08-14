import Talk from "../../components/about/talk/Talk";
import Wedo from "../../components/about/wedo/Wedo";
const page = () => {
  return (
    <div className="flex flex-col">
      <Talk/>
     <Wedo/>
    </div>
  );
};

export default page;
