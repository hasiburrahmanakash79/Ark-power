import React from "react";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";
import useCareer from "../../Hooks/useCareer";
import { Link, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { careerContent, isLoading } = useCareer();
  const { id } = useParams();
  const careerDetail = careerContent.find((career) => career._id === id);
  console.log(careerDetail);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container mx-auto p-5 md:mt-24 mt-14">
      <div className="grid md:grid-cols-4">
        <div className="col-span-1">
          <p className="text-3xl font-semibold uppercase mb-5">
            {careerDetail.category}
          </p>
          <Link to='/career' className="p-3 border-2 uppercase font-semibold rounded border-black hover:bg-black hover:text-white">Back to Career Page</Link>
        </div>
        <div className="col-span-3">
          <h1 className="text-3xl font-semibold mb-5">{careerDetail.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: isLoading ? "Loading..." : careerDetail.details,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
