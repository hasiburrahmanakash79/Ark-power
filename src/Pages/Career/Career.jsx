import React, { useState } from "react";

const Career = () => {
  const [htmlContent, setHtmlContent] = useState(
    '<p>This is <strong>HTML</strong> content with <a href="#">links</a> and other <em>elements</em>.</p>'
  );
  const [plainText, setPlainText] = useState("");

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
  );
};

export default Career;
