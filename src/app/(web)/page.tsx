import SearchBar from "@/components/web/searchbar/Searchbar";
import Signup from "@/components/web/signup/Signup";
import Companies from "@/components/web/companies/Companies";
import Status from "@/components/web/status/Status";
import Recruiting from "@/components/web/recruiting/Recruiting";
import Trending from "@/components/web/trending/Trending";
import Career from "@/components/web/career/Career";
import PartnersSection from "@/components/web/partners/PartnersSection";
import ClientSection from "@/components/web/clients/ClientSection";
import Applying from "@/components/web/applying/Applying";
import Interview from "@/components/web/interview/Interview";
import Articles from "@/components/web/articles/Articles";



export default function Home() {
  return (

    <div className="flex flex-col  ">
      
      {/* <SearchBar /> */}

      <Signup />
      {/* <Companies /> */}
      <Status/>
      
      {/* <div className="bg-[#F1F1F1]">
        {" "}
        <Recruiting />
        <Trending />
        <Career />
      </div> */}

      {/* <Applying /> */}
      {/* <PartnersSection /> */}
      <ClientSection />
      {/* <Interview />  */}
      <Articles />
    </div>
  );
}

