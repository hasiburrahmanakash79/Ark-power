import { Link } from "react-router-dom";

const HeroContentOne = () => {
    return (
        <div className="items-center grid-cols-2 gap-10 md:grid container pt-14 mx-auto">
      <div className="text-center md:text-left md:bg-white/70 md:text-black p-5">
        <p>Welcome to </p>
        <h1 className="my-3 md:text-5xl text-3xl md:font-bold font-semibold uppercase"> Ark Power Limited</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero fugiat magnam. Natus fugit deserunt dignissimos blanditiis id tempore praesentium veritatis? Ad, rerum. Veniam, iusto illo dolorum recusandae sint dolorem?
        </p>
        <div>
          <Link to='/'>
            <button className="btn-primary mt-5 md:mb-0 mb-10">Explore</button>
          </Link>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
    );
};

export default HeroContentOne;