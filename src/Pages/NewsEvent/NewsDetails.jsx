import React from "react";
import useNewsAndEvents from "../../Hooks/useNewsAndEvents";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";
import useShuffleNews from "../../Hooks/useShuffleNews";

const NewsDetails = () => {
  const [newsAndEvents, isLoading] = useNewsAndEvents();
  const [shuffleNews] = useShuffleNews();

  const { id } = useParams();
  const NewsEvents = newsAndEvents.find((news) => news._id === id);
  console.log(NewsEvents);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-32 container mx-auto">
        <div className="mt-24 mb-10">
          <h1 className="text-primary text-center text-5xl uppercase">
            {NewsEvents.Category}
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
            <div className="col-span-3">
            <div key={NewsEvents.id} className="">
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
              <h1 className="text-2xl font-bold mb-3">{NewsEvents.title}</h1>
              <div>
                <span>
                  {NewsEvents.details}
                </span>
              </div>
            </div>

            </div>
            <div className="col-span-1 bg-blue-gray-50 p-5">
                {
                    shuffleNews.slice(0, 5).map((related) => <div key={related.id} className="border bg-white p-2 mb-3">
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
                    <h1 className="text-2xl font-bold mb-3">{related.title}</h1>
                   
                  </div>)
                }

            </div>
        </div>
    </div>
  );
};

export default NewsDetails;
