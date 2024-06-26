import { Link } from "react-router-dom";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";
import useCareer from "../../Hooks/useCareer";

const Career = () => {
  const {careerContent, isLoading} = useCareer()

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const jobs = careerContent.filter((item) => item.category === "Job");
  const internship = careerContent.filter(
    (item) => item.category === "Internship"
  );
  console.log(jobs, internship);
  return (
    <div>
      <div className="bg-[url('https://neevfund.com/wp-content/uploads/2023/03/career-banner.jpg')] bg-cover">
        <div className="p-5 pt-32 bg-white/40 text-primary">
          <h2 className="text-2xl container mx-auto md:text-6xl font-semibold uppercase mt-14 md:mt-32">
            CAREER
          </h2>
        </div>
      </div>

      <div className="container mx-auto p-5">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-xl font-bold">Job Opportunity</h1>
            {jobs.length > 0 ? (
              jobs.map((careers, index) => (
                <div key={careers._id} className="pt-5 border-b ">
                  <Link className="hover:text-blue-400">{index + 1}. {careers.title}</Link>
                </div>
              ))
            ) : (
              <p>No Job Available right now.</p>
            )}
          </div>
          <div>
            <h1 className="text-xl font-bold">Internship Opportunity</h1>
            {internship.length > 0 ? (
              internship.map((careers) => (
                <div key={careers._id}>
                  <h1>{careers.title}</h1>
                </div>
              ))
            ) : (
              <p>No internship available right now.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

{
  /* <div>
  <div
    dangerouslySetInnerHTML={{ __html: isLoading ? "Loading..." : htmlContent }}
  />
</div>; */
}
