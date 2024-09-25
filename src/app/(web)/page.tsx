import SearchBar from "@/components/web/searchbar/Searchbar";
import Signup from "@/components/web/signup/Signup";
import Companies from "@/components/web/companies/Companies";
import Status from "@/components/web/status/Status";
import Recruiting from "@/components/web/recruiting/Recruiting";
import Trending from "@/components/web/trending/Trending";
import PartnersSection from "@/components/web/partners/PartnersSection";
import ClientSection from "@/components/web/clients/ClientSection";
import Applying from "@/components/web/applying/Applying";
import Interview from "@/components/web/interview/Interview";
import Articles from "@/components/web/articles/Articles";
import SignupContent from "@/components/web/signup/SignupContent";
import Findout from "@/components/web/findout/Findout";
import NumberContent from "@/components/web/number/NumberContent";
import Aimergee from "@/components/web/article&interview/Aimerge";
import Sailors from "@/components/web/sailor/Sailors";
import Navigation from "@/components/web/navigationslide/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col extra-thin-scrollbar">
      {/* <SearchBar /> */}

      {/* <Signup /> */}
      <SignupContent />
      <Companies />
      <NumberContent />
      <Findout />
      {/* <Navigation /> */}
      <Sailors />
      <PartnersSection />
      {/* <ClientSection /> */}
      <Aimergee />
      {/* <Status/> */}

      {/* <div className="bg-[#F1F1F1]">
        {" "}
        <Trending />
        <Career />
      </div> */}

      {/* <Applying /> */}

      {/* <Interview />  */}
      {/* <Articles /> */}
    </div>
  );
}
