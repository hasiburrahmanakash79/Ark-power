import React from 'react';

const Career = () => {
  return (
    <div>
      <div className="bg-[url('https://neevfund.com/wp-content/uploads/2023/03/career-banner.jpg')] bg-cover">
        <div className="p-5 pt-32 bg-white/40 text-primary">
          <h2 className="text-2xl container mx-auto md:text-6xl font-semibold uppercase mt-14 md:mt-32">
            CAREER
          </h2>
        </div>
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