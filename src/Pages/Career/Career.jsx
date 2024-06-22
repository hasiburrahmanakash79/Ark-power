import axios from "axios";
import React, { useEffect, useState } from "react";

const Career = () => {

  const [htmlContent, setHtmlContent] = useState('<p><strong>Responsibilities</strong>: The incumbent will be responsible for the following:</p><ul type="disc"><li>Assist in the financial and commercial evaluation of projects and opportunities, including project financing, valuations, investments, M&amp;A transactions, etc.</li><li>Responsible for building, maintaining, and running robust financial models for the purposes of valuation, assessing financial and commercial viability, due diligence, and financing.</li><li>Conduct and deliver high quality analysis and data including through running scenarios and sensitivity analysis from FM.</li><li>Assist in the preparation of proposals and bids, working closely with internal cross-functional teams, external financiers, and regulators.</li><li>Provide assistant in executing and closings of transactions, including transaction structuring, negotiations of final documentation, etc.</li>');
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  // useEffect(() => {
  //   setIsLoading(true); // Set loading to true before starting the data fetch
  //   axios.get("http://localhost:3000/career")
  //     .then((response) => {
  //       setHtmlContent(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data with Axios", error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false); 
  //     });
  // }, []);

  console.log(htmlContent);
  // const [htmlContent, setHtmlContent] = useState("");
  const [plainText, setPlainText] = useState("");

  // useEffect(() => {
  //   const fetchCareers = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/career");
  //       setHtmlContent(response.data);
  //     } catch (error) {
  //       console.error("Error fetching careers:", error);
  //       alert("Failed to fetch careers");
  //     }
  //   };

  //   fetchCareers();
  // }, []);

  const stripHtml = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const handleExtractText = () => {
    const text = stripHtml(htmlContent);
    setPlainText(text);
  };

  return (
    <div>
      <div className="bg-[url('https://neevfund.com/wp-content/uploads/2023/03/career-banner.jpg')] bg-cover">
        <div className="p-5 pt-32 bg-white/40 text-primary">
          <h2 className="text-2xl container mx-auto md:text-6xl font-semibold uppercase mt-14 md:mt-32">
            CAREER
          </h2>
        </div>
      </div>

      <div className="container mx-auto bg-red-400 p-5 pt-32">
        <div>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <button onClick={handleExtractText}>Extract Text</button>
        </div>
        {plainText && (
          <div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              {plainText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;

// const [htmlContent, setHtmlContent] = useState(
//   '<p>asdbdhljasd&nbsp;</p>\n<p>askdnbkjnkjasd</p>\n<p>asjnbdjknkas</p>\n<p>asdnkjnjknas</p>\n<p>sadnkkjas</p>\n<p>&nbsp;</p>'
// );
// const [plainText, setPlainText] = useState("");

// const stripHtml = (html) => {
//   const tempDiv = document.createElement("div");
//   tempDiv.innerHTML = html;
//   return tempDiv.textContent || tempDiv.innerText || "";
// };

// const handleExtractText = () => {
//   const text = stripHtml(htmlContent);
//   setPlainText(text);
// };

// return (
//   <div className="container mx-auto bg-red-400 p-5 pt-32">
//     <div>
//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           marginBottom: "10px",
//         }}
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//       />
//       <button onClick={handleExtractText}>Extract Text</button>
//     </div>
//     {plainText && (
//       <div>
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             marginTop: "10px",
//           }}
//         >
//           {plainText}
//         </div>
//       </div>
//     )}
//   </div>
// );
