import React from "react";
import Affiliations from "../Affiliations/Affiliations";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useNewsAndEvents from "../../../Hooks/useNewsAndEvents";
import LoadingSpinner from "../../../Hooks/Loading/LoadingSpinner";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ManagementAndNews = () => {
  const { newsAndEvents, isLoading } = useNewsAndEvents();
  // console.log(newsAndEvents);
  const sortedNewsEvents = newsAndEvents?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (isLoading && newsAndEvents) {
    <LoadingSpinner />;
  }

  const data = [
    {
      label: "Managing Director (MD)",
      value: "md",
      name: "Managing Director",
      image: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1769",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id eum quos, odit, aut fugit ad recusandae possimus voluptas aperiam consectetur. Ipsam magnam qui totam a debitis quasi recusandae repudiandae.`,
    },
    {
      label: "Chief Executive Officer (CEO)",
      value: "ceo",
      name: "Chief Executive Officer",
      image: "https://beyondceocoaching.com/wp-content/uploads/elementor/thumbs/african-man-in-blue-elegant-costume-89AHPTZ-pjcsg7ortaugl52xjnhb9ximql1l21bne39c1reu3k.jpg",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center p-5 mt-10">
      <div>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-2xl font-bold uppercase mb-7">
              News and event
            </h1>
            <div className="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent overflow-y-auto h-[42vh] border rounded-lg space-y-4 pr-3">
              {sortedNewsEvents?.map((singleNews) => (
                <Link
                  to={`/newsDetails/${singleNews._id}`}
                  key={singleNews._id}
                >
                  <div className="">
                    <div className="flex items-center justify-between gap-5 border-b hover:text-[#00ADF2] ">
                      <h1 className="text-xl font-bold p-3">
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
            <h1 className="text-2xl font-bold uppercase mb-7">Management</h1>
            <Tabs value="md">
              <TabsHeader>
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc, image, name }) => (
                  <TabPanel key={value} value={value}>
                    <div className="md:grid grid-cols-5 md:gap-10 gap-5">
                      <div className="col-span-2">
                        <img
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="col-span-3 mt-3">
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="my-3">{desc}</p>
                        {/* <Link className="text-[#00ADF2] flex gap-3 items-center">
                          <p>View details</p>
                          <FaArrowRight />
                        </Link> */}
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
        <div className="md:block hidden">
          <Affiliations />
        </div>
      </div>
    </div>
  );
};

export default ManagementAndNews;
