import FlashDeals from "../Features/FlashDeals";
import PopularItmes from "../Features/PopularItmes";
import Details from "../Features/Details";
import Search from "../Features/Search";
import Footer from "../UI/Footer";
import HowItWorks from "../Features/HowItWorks";
import Restaurants from "../Features/Restaurants";
import Starving from "../Features/Starving";

function Home() {
  return (
    <div>
      <Starving />
      <HowItWorks />
      <PopularItmes />
      <Restaurants />
      <Search />
      <Details />
      <FlashDeals />
      <Footer />
    </div>
  );
}

export default Home;
