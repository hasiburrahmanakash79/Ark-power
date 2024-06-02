import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ManagementAndNews = () => {
    const news = [
        {
            "id": 1,
            'title': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde illo error?"
        },
        {
            "id": 2,
            'title': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde illo error?"
        },
        {
            "id": 3,
            'title': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde illo error?"
        },
        {
            "id": 4,
            'title': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde illo error?"
        },
        {
            "id": 5,
            'title': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde illo error?"
        },
        {
            "id": 6,
            'title': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde illo error?"
        },
        {
            "id": 7,
            'title': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde illo error?"
        }
    ]
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 gap-20">
        <div>
          <h1 className="text-2xl font-bold uppercase mb-10">News and event</h1>
          <div className="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent overflow-y-auto h-[40vh]  rounded-lg space-y-4">
            {
                news.map((singleNews) => <Link to={singleNews.id} key={singleNews.id}>
                <div>
                    <div className="flex items-center justify-between gap-5 border-b hover:text-[#00ADF2] ">
                        <h1 className="text-xl font-bold py-3">{singleNews.title}</h1>
                        <FaArrowRight className="text-2xl"/>
                    </div>
                </div>
                </Link>)
            }
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
              <Link className="text-[#00ADF2] text-lg">View details ---</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementAndNews;
