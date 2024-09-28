import { Link } from "react-router-dom";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";
import useCareer from "../../Hooks/useCareer";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";

const Career = () => {
  const { careerContent, isLoading } = useCareer();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const jobs = careerContent.filter((item) => item.category === "Job");
  const internship = careerContent.filter((item) => item.category === "Internship");

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-[url('https://neevfund.com/wp-content/uploads/2023/03/career-banner.jpg')] bg-cover bg-center">
        <div className="p-5 pt-32 bg-gradient-to-r from-black/60 to-black/30 text-white">
          <h2 className="text-4xl container mx-auto md:text-6xl font-bold uppercase text-center mt-14 md:mt-32">
            Career Opportunities
          </h2>
        </div>
      </div>

      {/* Career Section */}
      <div className="container mx-auto py-24 px-5">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-primary font-bold mb-4">
            Explore Exciting Career Opportunities
          </h1>
          <p className="text-lg text-gray-600">
            We’re always looking for talented people to join our team. Whether you're looking for a full-time position or an internship, you’ll find all open roles listed below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Job Opportunity Section */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <FaBriefcase className="text-3xl text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-700">Job Opportunities</h1>
            </div>
            {jobs.length > 0 ? (
              jobs.map((career, index) => (
                <div key={career._id} className="py-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                  <Link
                    to={`/careerDetails/${career._id}`}
                    className="text-lg text-gray-800 hover:text-blue-500 uppercase"
                  >
                    {index + 1}. {career.title}
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No job available right now.</p>
            )}
          </div>

          {/* Internship Opportunity Section */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <FaUserGraduate className="text-3xl text-green-500" />
              <h1 className="text-2xl font-bold text-gray-700">Internship Opportunities</h1>
            </div>
            {internship.length > 0 ? (
              internship.map((career, index) => (
                <div key={career._id} className="py-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                  <Link
                    to={`/careerDetails/${career._id}`}
                    className="text-lg text-gray-800 hover:text-green-500 uppercase"
                  >
                    {index + 1}. {career.title}
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No internship available right now.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;


// import { Link } from "react-router-dom";
// import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";
// import useCareer from "../../Hooks/useCareer";

// const Career = () => {
//   const {careerContent, isLoading} = useCareer()

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   const jobs = careerContent.filter((item) => item.category === "Job");
//   const internship = careerContent.filter(
//     (item) => item.category === "Internship"
//   );
//   return (
//     <div>
//       <div className="bg-[url('https://neevfund.com/wp-content/uploads/2023/03/career-banner.jpg')] bg-cover">
//         <div className="p-5 pt-32 bg-white/40 text-primary">
//           <h2 className="text-2xl container mx-auto md:text-6xl font-semibold uppercase mt-14 md:mt-32">
//             CAREER
//           </h2>
//         </div>
//       </div>

//       <div className="container mx-auto py-24 p-5">
//         <div>
//           <h1 className="text-3xl text-primary text-center mb-10 font-semibold">Career Opportunity and Vacancy Announcement</h1>
//         </div>
//         <div className="grid md:grid-cols-2 gap-10">
//           <div>
//             <h1 className="text-xl font-bold">Job Opportunity</h1>
//             {jobs.length > 0 ? (
//               jobs.map((careers, index) => (
//                 <div key={careers._id} className="pt-5 border-b ">
//                   <Link to={`/careerDetails/${careers?._id}`} className="hover:text-blue-400 uppercase">{index + 1}. {careers.title}</Link>
//                 </div>
//               ))
//             ) : (
//               <p>No Job Available right now.</p>
//             )}
//           </div>
//           <div>
//             <h1 className="text-xl font-bold">Internship Opportunity</h1>
//             {internship.length > 0 ? (
//               internship.map((careers, index) => (
//                 <div key={careers._id} className="pt-5 border-b ">
//                   <Link to={`/careerDetails/${careers?._id}`} className="hover:text-blue-400 uppercase">{index + 1}. {careers.title}</Link>
//                 </div>
//               ))
//             ) : (
//               <p>No internship available right now.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;
