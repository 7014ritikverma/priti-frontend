import { Link } from "react-router-dom";
import { FaTruck, FaFlag, FaStar, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="shadow-md">

      {/* 🔶 TOP BAR */}
      <div className="bg-[#b88a72] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex justify-between px-6">

          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <FaTruck /> Worldwide Shipping
            </span>
            <span className="flex items-center gap-2">
              <FaFlag /> 100% Made in India
            </span>
            <span className="flex items-center gap-2">
              <FaStar /> Best Quality Always
            </span>
          </div>

          <div>20,000+ Satisfied Customers</div>

        </div>
      </div>

      {/* 🔶 MAIN HEADER */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto flex items-center px-6 gap-6">

          {/* Logo */}
          <Link to="/" className="text-4xl font-serif text-[#b88a72]">
            PRITI
          </Link>

          {/* Search */}
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Search for products"
              className="flex-1 border p-3 rounded-l"
            />
            <button className="bg-[#b88a72] text-white px-5 rounded-r">
              <FaSearch />
            </button>
          </div>

          {/* Inquiry List Button */}
          {/* <button className="bg-[#b88a72] text-white px-6 py-3 rounded">
            INQUIRE LIST
          </button> */}
          <Link
            to="/quote"
            className="bg-[#b88a72] text-white px-5 py-2 rounded"
          >
            INQUIRE LIST
          </Link>

        </div>
      </div>

      {/* 🔶 CATEGORY MENU */}
      <div className="bg-gray-100 py-3 text-sm">
        <div className="max-w-7xl mx-auto flex gap-6 px-6 font-medium">

          <span>LIVING ROOM</span>
          <span>BEDROOM</span>
          <span>DINING ROOM</span>
          <span>SEATING</span>
          <span>BAR FURNITURE</span>
          <span>MICRO CEMENT</span>
          <span>E-CATALOGUE</span>
          <span>OUTDOOR</span>
          <span>ABOUT US</span>
          <span>BLOG</span>

        </div>
      </div>

    </div>
  );
}