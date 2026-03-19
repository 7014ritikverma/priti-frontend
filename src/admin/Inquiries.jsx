// 

import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function Inquiries() {

  const [data, setData] = useState([]);

  const loadInquiries = () => {
    axios.get(`${API}/api/inquiries`)
      .then(res => setData(res.data));
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this inquiry?")) return;

    await axios.delete(`${API}/api/inquiries/${id}`);

    alert("Inquiry Deleted");

    loadInquiries();
  };

  return (
    <div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Customer Inquiries
      </h1>

      {/* DESKTOP TABLE */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="w-full bg-white shadow rounded border border-gray-200">

          <thead className="bg-gray-100">
            <tr className="text-left">

              <th className="p-4 border ">Product</th>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Phone</th>
              <th className="p-4 border">Email</th>
              <th className="p-4 border">Message</th>
              <th className="p-4 border">Date</th>
              <th className="p-4 border">Action</th>

            </tr>
          </thead>

          <tbody>

            {data.length === 0 ? (

              <tr>
                <td colSpan="7" className="text-center p-10 text-gray-500 text-lg">
                  No Inquiries Yet
                </td>
              </tr>

            ) : (

              data.map(i => (

                <tr key={i._id} className="border-t hover:bg-gray-50">

                  {/* PRODUCT */}
                  <td className="p-4 border align-top min-w-[220px]">

                    {i.products?.length > 0 ? (

                      i.products.map((p, index) => (

                        <div
                          key={index}
                          className="flex items-center gap-3 mb-2 whitespace-nowrap"
                        >

                          <img
                            src={
                              p.images?.length
                                ? `${API}${p.images[0]}`
                                : p.image
                                  ? `${API}${p.image}`
                                  : ""
                            }
                            className="w-14 h-14 object-cover rounded flex-shrink-0"
                          />

                          <div className="min-w-0">
                            <p className="font-medium truncate max-w-[120px]">
                              {p.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              ₹ {p.price}
                            </p>
                          </div>

                        </div>

                      ))

                    ) : "No Products"}

                  </td>

                  <td className="p-4 border">{i.name}</td>
                  <td className="p-4 border">{i.phone}</td>
                  <td className="p-4 border break-all">{i.email}</td>
                  <td className="p-4 border">{i.message}</td>

                  <td className="p-4 border">
                    {new Date(i.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4 border">
                    <button
                      onClick={() => handleDelete(i._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* MOBILE VIEW */}

      <div className="lg:hidden space-y-4">

        {data.length === 0 ? (

          <div className="text-center py-10 text-gray-500 text-lg">
            No Inquiries Yet 
          </div>

        ) : (

          data.map(i => (

            <div
              key={i._id}
              className="bg-white shadow rounded p-4"
            >

              {/* PRODUCTS */}

              <div className="mb-3">

                {i.products?.length > 0 ? (

                  i.products.map((p, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 mb-2"
                    >

                      <img
                        src={
                          p.images?.length
                            ? `${API}${p.images[0]}`
                            : p.image
                              ? `${API}${p.image}`
                              : ""
                        }
                        className="w-12 h-12 object-cover rounded"
                      />

                      <div>
                        <p className="text-sm font-medium">
                          {p.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          ₹ {p.price}
                        </p>
                      </div>

                    </div>

                  ))

                ) : "No Products"}

              </div>

              {/* DETAILS */}

              <p className="text-sm">
                <span className="font-semibold">Name:</span> {i.name}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Phone:</span> {i.phone}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Email:</span> {i.email}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Message:</span> {i.message}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(i.createdAt).toLocaleDateString()}
              </p>

              <button
                onClick={() => handleDelete(i._id)}
                className="mt-3 bg-red-500 text-white px-4 py-1 rounded w-full"
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>
    </div>
  );
}