import React from "react";
import Affiliations from "../Affiliations/Affiliations";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";

const ManagementAndNews = () => {
  const [isLoading, newsAndEvents] = useNewsAndEvents()
  console.log(newsAndEvents);
  if(isLoading){
    <LoadingSpinner/>
  }
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h1 className="text-2xl font-bold uppercase mb-10">
              News and event
            </h1>
            <div className="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent overflow-y-auto h-[40vh]  rounded-lg space-y-4">
              {newsAndEvents.map((singleNews) => (
                <Link to={singleNews._id} key={singleNews._id}>
                  <div>
                    <div className="flex items-center justify-between gap-5 border-b hover:text-[#00ADF2] ">
                      <h1 className="text-xl font-bold py-3">
                        {singleNews.title}
                      </h1>
                      <FaArrowRight className="text-2xl" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold uppercase mb-10">Management</h1>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <img
                  src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1769"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-bold mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci corrupti vel suscipit explicabo asperiores quod?
                </p>
                <Link className="text-[#00ADF2] flex gap-3 items-center">
                  <p>View details</p>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Affiliations />
        </div>
      </div>
    </div>
  );
};

export default ManagementAndNews;
