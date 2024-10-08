import Talk from "@/components/web/about_page/talk/Talk";
import Wedo from "@/components/web/about_page/wedo/Wedo";
import Crew from "@/components/web/about_page/crewpool/Crew";
import Mv2 from "@/components/web/about_page/mvv/Mv2";
import Rating1 from "@/components/web/about_page/aboutrating/Rating1";
import Team from "@/components/web/about_page/team/Team";
import Team2 from "@/components/web/about_page/team/team2";
import HeadingAbout from "@/components/web/about_page/heading/HeadingAbout";
const page = () => {
  return (
    <div className="flex flex-col">
      <HeadingAbout/>
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
