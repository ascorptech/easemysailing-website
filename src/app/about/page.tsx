import Talk from "../../components/about_page/talk/Talk";
import Wedo from "../../components/about_page/wedo/Wedo";
import Crew from "@/components/about_page/crewpool/Crew";
import Mv2 from "@/components/about_page/mvv/Mv2";
import Rating1 from "@/components/about_page/aboutrating/Rating1";
import Team from "@/components/about_page/team/Team";
import Team2 from "@/components/about_page/team/team2";
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
