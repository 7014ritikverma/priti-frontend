import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Company Info */}

        <div>
          <h2 className="text-xl font-bold text-[#b88a72] mb-4">
            PRITI International Ltd.
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Manufacturer of furnitures, bags & decor.
            We are your ultimate destination for beautiful
            and comfortable home furniture.
          </p>
        </div>

        {/* Shop Links */}

        <div>
          <h3 className="font-semibold mb-4">SHOP</h3>

          <ul className="space-y-2 text-gray-600 text-sm">

            <li>
              <Link to="/category/Seating/Chairs" className="hover:text-[#b88a72]">
                Chairs
              </Link>
            </li>

            <li>
              <Link to="/category/Living%20Room/Sideboards" className="hover:text-[#b88a72]">
                Chest of Drawers
              </Link>
            </li>

            <li>
              <Link to="/category/Living%20Room/Coffee%20Tables" className="hover:text-[#b88a72]">
                Coffee Table
              </Link>
            </li>

            <li>
              <Link to="#" className="hover:text-[#b88a72]">
                Cotton Rugs
              </Link>
            </li>

            <li>
              <Link to="/category/Bedroom/Bedside%20Tables" className="hover:text-[#b88a72]">
                Bedside Table
              </Link>
            </li>

            <li>
              <Link to="#" className="hover:text-[#b88a72]">
                Desk
              </Link>
            </li>

          </ul>
        </div>

        {/* Company Links */}

        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>

          <ul className="space-y-2 text-gray-600 text-sm">

            <li>
              <Link to="/" className="hover:text-[#b88a72]">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#b88a72]">
                About us
              </Link>
            </li>

            <li>
              <Link to="/collections" className="hover:text-[#b88a72]">
                Collections
              </Link>
            </li>

            <li>
              <Link to="/bulk-order" className="hover:text-[#b88a72]">
                Bulk Order
              </Link>
            </li>

            <li>
              <Link to="/new-stock" className="hover:text-[#b88a72]">
                New Stock
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy" className="hover:text-[#b88a72]">
                Privacy Policy
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-600 text-sm mb-2">
            Address: F/43, M.I.A, Phase-1st,
            Basni, Jodhpur - INDIA
          </p>

          <p className="text-gray-600 text-sm">
            Phone: +91 7727987073
          </p>

          <p className="text-gray-600 text-sm">
            Phone: +91 8000927831
          </p>

          <p className="text-gray-600 text-sm">
            Email: pritiinternational21@yahoo.com
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Hours: 10:00 am to 6:00 pm
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="border-t text-center py-4 text-gray-600 text-sm px-4">
        All Rights Reserved © 2024 Priti International Ltd.
      </div>

    </footer>
  );
}