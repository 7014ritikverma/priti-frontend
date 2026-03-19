import { useEffect, useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {

  const [products, setProducts] = useState(0);
  const [inquiries, setInquiries] = useState(0);

  useEffect(() => {

    // Fetch products
    axios
      .get(`${API}/api/products`)
      .then(res => setProducts(res.data.length));

    // Fetch inquiries
    axios
      .get(`${API}/api/inquiries`)
      .then(res => setInquiries(res.data.length));

  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Products */}
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold">
            Total Products
          </h3>

          <p className="text-3xl mt-2 text-[#b88a72]">
            {products}
          </p>
        </div>

        {/* Inquiries */}
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold">
            Total Inquiries
          </h3>

          <p className="text-3xl mt-2 text-[#b88a72]">
            {inquiries}
          </p>
        </div>

      </div>

    </div>
  );
}