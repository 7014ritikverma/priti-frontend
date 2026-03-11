export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-[#b88a72] mb-4">
            PRITI International Ltd.
          </h2>

          <p className="text-gray-600">
            Manufacturer of furnitures, bags & decor.
            We are your ultimate destination for beautiful
            and comfortable home furniture.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold mb-4">SHOP</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Chairs</li>
            <li>Chest of Drawers</li>
            <li>Coffee Table</li>
            <li>Cotton Rugs</li>
            <li>Bedside Table</li>
            <li>Desk</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Collections</li>
            <li>Bulk Order</li>
            <li>New Stock</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-600 mb-2">
            Address: F/43, M.I.A, Phase-1st, Basni,
            Jodhpur - INDIA
          </p>

          <p className="text-gray-600">
            Phone: +91 7727987073
          </p>

          <p className="text-gray-600">
            Phone: +91 8000927831
          </p>

          <p className="text-gray-600">
            Email: pritiinternational21@yahoo.com
          </p>

          <p className="text-gray-600 mt-2">
            Hours: 10:00 am to 6:00 pm
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t text-center py-4 text-gray-600">
        All Rights Reserved © 2024 Priti International Ltd.
      </div>

    </footer>
  );
}