import { useState } from "react";
import { Link } from "react-router-dom";
import useNewsAndEvents from "../../Hooks/useNewsAndEvents";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";

const NewsEvent = () => {
  const { newsAndEvents, isLoading } = useNewsAndEvents();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Set how many items you want per page

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing the category
  };

  // Sort news events by date in descending order
  const sortedNewsEvents = newsAndEvents.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter news events based on the selected category
  const filteredNewsEvents =
    selectedCategory === "All"
      ? sortedNewsEvents
      : sortedNewsEvents.filter((news) => news.Category === selectedCategory);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNewsEvents.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredNewsEvents.length / itemsPerPage);

  return (
    <div className="min-h-screen container mx-auto bg-slate-50 flex items-center justify-center p-6">
      <div>
        <div className="md:mt-24 mt-14">
          <h1 className="text-primary text-center md:text-5xl text-3xl uppercase">
            News & Events
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center my-5">
          {["All", "News", "Events"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News & Events Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 my-10">
          {currentItems.map((news) => (
            <div key={news._id} className="border p-2">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="font-bold uppercase">{news.Category}</p>
                <p>{news.date}</p>
              </div>
              <Link
                to={`/newsDetails/${news._id}`}
                className="hover:underline text-2xl text-gray-700 font-bold"
              >
                {news.title}
              </Link>
              <div className="mt-2">
                {news.details.slice(0, 100)}.....{" "}
                <Link
                  to={`/newsDetails/${news._id}`}
                  className="text-blue-700 hover:underline"
                >
                  Read Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {/* Previous Button */}
          <button
            className={`px-4 py-2 ${
              currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
            } rounded`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`px-4 py-2 ${
                  currentPage === pageNumber
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                } rounded`}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}

          {/* Next Button */}
          <button
            className={`px-4 py-2 ${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-blue-500 text-white"
            } rounded`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
