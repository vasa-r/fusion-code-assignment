import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductsSlider from "./components/ProductsSlider";
import FestiveGiving from "./components/FestiveGiving";
import SecondProductList from "./components/SecondProductList";
import Athenaeum from "./components/Athenaeum";
import SeasonalProducts from "./components/SeasonalProducts";
import OnlineOffering from "./components/OnlineOffering";
import CorporateGifts from "./components/CorporateGifts";
import StoreLocator from "./components/StoreLocator";
import Consultations from "./components/Consultations";
import Saying from "./components/Saying";
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSlider />
      <FestiveGiving />
      <SecondProductList />
      <Athenaeum />
      <SecondProductList />
      <SeasonalProducts />
      <OnlineOffering />
      <CorporateGifts />
      <StoreLocator />
      <Consultations />
      <Saying />
      <Certifications />
      <Footer />
    </div>
  );
};

export default App;
