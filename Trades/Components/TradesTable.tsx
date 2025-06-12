import TableRows from "./Table/TableRows";
import TableControls from "./Table/TableControls";
import { useState } from "react";

const TradesTable = () => {
  const [isGrid, setIsGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3, 4, 5, 6];

  return (
    <div className="overflow-x-auto bg-white shadow-sm rounded-md mx-5">
      <TableControls isGrid={isGrid} setIsGrid={setIsGrid} />
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="border-y border-[#E9EAEB] bg-white">
            <tr className="h-11 text-xs text-[#667085] font-semibold">
              <th className="h-11 text-left px-4 flex items-center gap-3.5">
                <input
                  type="checkbox"
                  className=" w-4.5 h-4.5 border border-[#D5D7DA] accent-[#6941C6]  rounded  text-[#6941C6] focus:ring-[#6941C6]"
                />
                <span>Name</span>
              </th>
              <th className="w-28 text-left px-4 ">Status</th>
              <th className="w-52 text-left px-4 ">Email address</th>
              <th className="w-xs text-left px-4 ">Teams</th>
              <th className="w-[90px] text-left px-4 ">Actions</th>
            </tr>
          </thead>
          <TableRows />
        </table>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-1 items-center justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">15</span> of{" "}
                <span className="font-medium">50</span> results
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-200"
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                      currentPage === page
                        ? "z-10 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
                    } transition-colors duration-200`}
                  >
                    {page}
                  </button>
                ))}
              </nav>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-200"
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, pages.length));
                }}
                disabled={currentPage === pages.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradesTable;
