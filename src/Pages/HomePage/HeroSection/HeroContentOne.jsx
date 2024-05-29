import { Link } from "react-router-dom";

const HeroContentOne = () => {
    return (
        <div className="items-center grid-cols-2 gap-10 md:grid container pt-14 mx-auto">
      <div className="text-center md:text-left bg-white/70 text-black p-5">
        <p>Welcome To </p>
        <h1 className="my-3 md:text-5xl text-4xl font-bold uppercase"> Ark Power Limited</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero fugiat magnam. Natus fugit deserunt dignissimos blanditiis id tempore praesentium veritatis? Ad, rerum. Veniam, iusto illo dolorum recusandae sint dolorem?
        </p>
        <div>
          <Link to='/classes'>
            <button className="btn-primary mt-5">Explore</button>
          </Link>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
    );
};

export default HeroContentOne;