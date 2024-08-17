import Talk from "../../components/about/talk/Talk";
import Wedo from "../../components/about/wedo/Wedo";
import Crew from "@/components/about/crewpool/Crew";
import Mv2 from "@/components/about/mvv/Mv2";
import Rating1 from "@/components/about/aboutrating/Rating1";
import Team from "@/components/about/team/Team";
import Team2 from "@/components/about/team/team2";
const page = () => {
  return (
    <div className="flex flex-col">
      <Talk/>
     <Wedo/>
     <Crew/>
     <Mv2/>
     <Rating1/>
     <Team/>
     <Team2/>
    </div>
  );
};

export default page;
