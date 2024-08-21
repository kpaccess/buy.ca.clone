import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSearchQuery(""); // Reset the search query when switching tabs
  };

  const getTabStyle = (tab) => {
    return tab === activeTab ? "bg-white" : "bg-gray-300";
  };

  return (
    <div className="p-4">
      {/* Tab buttons */}
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 flex items-center ${getTabStyle(
            "Buy"
          )} border rounded-md`}
          onClick={() => handleTabClick("Buy")}
        >
          <FaSearch className="mr-2" /> Buy
        </button>
        <button
          className={`px-4 py-2 flex items-center ${getTabStyle(
            "Rent"
          )} border rounded-md`}
          onClick={() => handleTabClick("Rent")}
        >
          <FaSearch className="mr-2" /> Rent
        </button>
        <button
          className={`px-4 py-2 flex items-center ${getTabStyle(
            "Travel Time"
          )} border rounded-md`}
          onClick={() => handleTabClick("Travel Time")}
        >
          <FaSearch className="mr-2" /> Travel Time
        </button>
      </div>

      {/* Search input */}
      <div className="mt-4">
        {activeTab && (
          <input
            type="text"
            placeholder={`Search in ${activeTab}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default Tabs;
