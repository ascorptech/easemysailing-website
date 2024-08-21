import Talk from "../../components/p1about/talk/Talk";
import Wedo from "../../components/p1about/wedo/Wedo";
import Crew from "@/components/p1about/crewpool/Crew";
import Mv2 from "@/components/p1about/mvv/Mv2";
import Rating1 from "@/components/p1about/aboutrating/Rating1";
import Team from "@/components/p1about/team/Team";
import Team2 from "@/components/p1about/team/team2";
const page = () => {
  return (
    <div className="flex flex-col">
      <Talk />
      <Wedo />
      <Crew />
      <Mv2 />
      <Rating1 />
      <Team />
      <Team2 />
    </div>
  );
};

export default page;
