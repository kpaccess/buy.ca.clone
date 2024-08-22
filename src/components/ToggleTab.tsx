import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTabs } from "../customHooks/useTabs";

const ToggleTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // custom hook
  const { activeTab, handleTabClick, getTabStyle } = useTabs({
    initialTab: "Buy",
    activeStyle: "bg-white",
    inActiveStyle: "bg-gray-300",
  });

  return (
    <div className="p-4 bg-white z-10">
      {/* Tab buttons */}
      <div className="flex">
        <button
          className={`px-4 py-2  ${getTabStyle(
            "Buy"
          )} border-l border-t border-b rounded-l-md`}
          onClick={() => handleTabClick("Buy")}
        >
          Buy
        </button>
        <button
          className={`px-4 py-2 ${getTabStyle("Rent")}  `}
          onClick={() => handleTabClick("Rent")}
        >
          Rent
        </button>
        <button
          className={`px-4 py-2 flex items-center ${getTabStyle(
            "Travel Time"
          )} border rounded-r-md`}
          onClick={() => handleTabClick("Travel Time")}
        >
          Travel Time
        </button>
      </div>

      {/* Search input */}
      <div>
        {activeTab && (
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Search in ${activeTab}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 p-2 border rounded-r-md rounded-b-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleTab;
