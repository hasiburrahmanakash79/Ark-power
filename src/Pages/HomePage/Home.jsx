import Hero from "./HeroSection/Hero";
// import MostValuable from "./ProductsAndServices/MostValuable";
import ProductsAndServices from "./ProductsAndServices/ProductsAndServices";


const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="mx-auto container my-10">
                <ProductsAndServices/>
                {/* <MostValuable/> */}
            </div>
        </div>
    );
};

export default Home;