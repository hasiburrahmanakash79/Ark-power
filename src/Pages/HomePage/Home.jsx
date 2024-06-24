import Hero from "./HeroSection/Hero";
import ManagementAndNews from "./ManagementAndNews/ManagementAndNews";
// import MostValuable from "./ProductsAndServices/MostValuable";
import ProductsAndServices from "./ProductsAndServices/ProductsAndServices";
import Welcome from "./Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mx-auto container my-10">
        <Welcome />
        <ProductsAndServices />
        <ManagementAndNews />
      </div>
    </div>
  );
};

export default Home;
