import { Link } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="border-b border-solid border-gray-150 bg-white sticky top-0 header-nav !z-[1202] w-full ">
      <div className="container mx-auto px-5 max-md:px-3">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="#" className="flex-shrink-0">
              <img src="logo.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
            {/* Navigation Links */}
            <div className="flex space-x-4 ml-6">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Listings
              </Link>
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Map Search
              </Link>
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                AI Visual Search
              </Link>
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Precon
              </Link>
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home Valuation
              </Link>
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                More
              </Link>
            </div>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="bg-gray-200 p-2 rounded-full text-gray-800 hover:bg-gray-300"
            >
              <FaBell className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="bg-gray-200 p-2 rounded-full text-gray-800 hover:bg-gray-300"
            >
              <FaUserCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
