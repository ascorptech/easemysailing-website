import SearchBar from "@/components/searchbar/Searchbar";
import Signup from "@/components/signup/Signup";
import Companies from "@/components/companies/Companies";
import Status from "@/components/status/Status";
import Recruiting from "@/components/recruiting/Recruiting";
import Trending from "@/components/trending/Trending";
import Career from "@/components/career/Career";
import PartnersSection from "@/components/partners/PartnersSection";
import ClientSection from "@/components/clients/ClientSection";
import Applying from "@/components/applying/Applying";
import Interview from "@/components/interview/Interview";
import Articles from "@/components/articles/Articles";
export default function Home() {
  return (
    <div>
      <SearchBar />
      <Signup />
      <Companies />
      <Status />
      <Recruiting />
      <Trending />
      <Career />
      <Applying />
      <PartnersSection />
      <ClientSection />
      <Interview />
      <Articles />
    </div>
  );
}
