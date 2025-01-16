import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductsSlider from "./components/ProductsSlider";
import FestiveGiving from "./components/FestiveGiving";
import SecondProductList from "./components/SecondProductList";

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSlider />
      <FestiveGiving />
      <SecondProductList />
      <Footer />
    </div>
  );
};

export default App;
