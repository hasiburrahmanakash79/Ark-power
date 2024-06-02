import Affiliations from "./Affiliations/Affiliations";
import Hero from "./HeroSection/Hero";
import ManagementAndNews from "./ManagementAndNews/ManagementAndNews";
// import MostValuable from "./ProductsAndServices/MostValuable";
import ProductsAndServices from "./ProductsAndServices/ProductsAndServices";


const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="mx-auto container my-10">
                <ProductsAndServices/>
                {/* <MostValuable/> */}
                <ManagementAndNews/>
                <Affiliations/>
            </div>
        </div>
    );
};

export default Home;