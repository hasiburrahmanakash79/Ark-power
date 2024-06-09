import React from "react";
import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center text-center items-center mt-96">
      <HashLoader color="#00ADF2" />
    </div>
  );
};

export default LoadingSpinner;
