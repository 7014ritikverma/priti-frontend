import { useEffect, useState } from "react";
import axios from "axios";

export default function Inquiries() {

  const [data, setData] = useState([]);

  const loadInquiries = () => {
    axios
      .get("http://localhost:5000/api/inquiries")
      .then(res => setData(res.data));
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this inquiry?")) return;

    await axios.delete(
      `http://localhost:5000/api/inquiries/${id}`
    );

    alert("Inquiry Deleted");

    loadInquiries();
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Customer Inquiries
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-200 w-full">
          <tr>
            <th className="p-3">Product</th>
            <th className="">Name</th>
            <th>Phone</th>
            <th className="">Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {data.map(i => (

            <tr key={i._id} className="border-t">

              {/* <td className="p-3 text-center">
               
                <img
                  src={
                    i.products?.[0]?.images?.length
                      ? `http://localhost:5000${i.products[0].images[0]}`
                      : i.products?.[0]?.image
                        ? `http://localhost:5000${i.products[0].image}`
                        : ""
                  }
                  className="w-16 h-16 object-cover"
                />
              </td> */}
              <td className="p-3">

                {i.products?.length > 0 ? (

                  i.products.map((p, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 mb-2"
                    >

                      <img
                        src={
                          p.images?.length
                            ? `http://localhost:5000${p.images[0]}`
                            : p.image
                              ? `http://localhost:5000${p.image}`
                              : ""
                        }
                        alt={p.name}
                        className="w-14 h-14 object-cover rounded"
                      />

                      <div className="text-left">
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-gray-600">
                          ₹ {p.price}
                        </p>
                      </div>

                    </div>

                  ))

                ) : (

                  "No Products"

                )}

              </td>

              <td className="p-3 text-center">{i.name}</td>
              <td className="p-3 text-center">{i.phone}</td>
              <td className="p-3 text-center">{i.email}</td>
              <td className="p-3 text-center">{i.message}</td>

              <td className="p-3 text-center">
                {new Date(i.createdAt)
                  .toLocaleDateString()}
              </td>

              <td className="p-3 text-center">
                <button
                  onClick={() => handleDelete(i._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}