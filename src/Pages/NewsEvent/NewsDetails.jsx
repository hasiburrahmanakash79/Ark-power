import React from "react";
import useNewsAndEvents from "../../Hooks/useNewsAndEvents";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";
import useShuffleNews from "../../Hooks/useShuffleNews";

const NewsDetails = () => {
  const { newsAndEvents, isLoading } = useNewsAndEvents();
  const [shuffleNews] = useShuffleNews();

  const { id } = useParams();
  const NewsEvents = newsAndEvents.find((news) => news._id === id);
  console.log(NewsEvents);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="md:mt-24 mt-14 container mx-auto p-5">
      <div className="mb-10">
        <h1 className="text-primary text-center md:text-5xl text-3xl uppercase">
          {NewsEvents.Category}
        </h1>
      </div>
      <div className="grid md:grid-cols-4 gap-14">
        <div className="md:col-span-3">
          <div key={NewsEvents.id} className="">
            <h1 className="md:text-5xl text-2xl font-semibold mb-3">
              {NewsEvents.title}
            </h1>

            <div>
              <div className="relative overflow-hidden">
                <img
                  src={NewsEvents.imageUrl}
                  alt={NewsEvents.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="font-bold uppercase">{NewsEvents.Category}</p>
                <p>{NewsEvents.date}</p>
              </div>
              {NewsEvents.details}
            </div>
          </div>
        </div>
        <div className="md:col-span-1 bg-blue-gray-50 p-5">
          <h1 className="text-2xl pb-4 font-semibold">Related News</h1>
          {shuffleNews.slice(0, 5).map((related) => (
            <div key={related.id} className="border bg-white p-2 mb-3">
              <div className="relative h-44 overflow-hidden ">
                <img
                  src={related.imageUrl}
                  alt={related.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="font-bold uppercase">{related.Category}</p>
                <p>{related.date}</p>
              </div>
              <Link
                  to={`/newsDetails/${related._id}`}
                  className="hover:underline text-2xl font-bold mb-3"
                >
                  {related.title.slice(0, 15)}...{" "}
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
