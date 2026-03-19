// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const API = import.meta.env.VITE_API_URL;

// export default function ProductsAdmin() {

//     const [products, setProducts] = useState([]);
//     const navigate = useNavigate();

//     // Fetch products
//     const loadProducts = () => {
//         axios
//             .get(`${API}/api/products`)
//             .then(res => setProducts(res.data));
//     };

//     useEffect(() => {
//         loadProducts();
//     }, []);

//     // Delete product
//     const handleDelete = async (id) => {

//         if (!window.confirm("Delete this product?")) return;

//         await axios.delete(
//             `${API}/api/products/${id}`
//         );

//         alert("Product Deleted");

//         loadProducts();
//     };

//     return (
//         <div>

//             <h1 className="text-3xl font-bold mb-8">
//                 Manage Products
//             </h1>

//             <table className="w-full bg-white shadow rounded">

//                 <thead className="bg-gray-200 ">
//                     <tr >
//                         <th className="p-3 space-y-6">Image</th>
//                         <th className="">Name</th>
//                         <th className="">Price</th>
//                         <th className="">Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>

//                     {products.map(p => (

//                         <tr key={p._id} className="border-t">

//                             <td className="p-3 flex justify-center">
//                                 <img
//                                     src={
//                                         p.images?.length
//                                             ? `${API}${p.images[0]}`
//                                             : p.image
//                                                 ? `${API}${p.image}`
//                                                 : ""
//                                     }
//                                     className="h-16 w-20 object-cover object-center"
//                                 />
//                             </td>

//                             <td className="text-center">{p.name}</td>
//                             <td className="text-center">₹ {p.price}</td>

//                             <td className="space-x-2 text-center">

//                                 <button
//                                     onClick={() => handleDelete(p._id)}
//                                     className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded"
//                                 >
//                                     Delete
//                                 </button>

//                                 <button
//                                     onClick={() =>
//                                         navigate(`/admin/edit-product/${p._id}`)
//                                     }
//                                     className="bg-yellow-500 cursor-pointer text-white px-3 py-1 rounded"
//                                 >
//                                     Edit
//                                 </button>

//                             </td>

//                         </tr>

//                     ))}

//                 </tbody>

//             </table>

//         </div>
//     );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function ProductsAdmin() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const loadProducts = () => {
        axios.get(`${API}/api/products`)
            .then(res => setProducts(res.data));
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this product?")) return;

        await axios.delete(`${API}/api/products/${id}`);
        alert("Product Deleted");

        loadProducts();
    };

    return (
        <div>

            <h1 className="text-2xl sm:text-3xl font-bold mb-6">
                Manage Products
            </h1>

            {/* GRID */}

            {products.length === 0 ? (

                <div className="text-center py-20">

                    <p className="text-2xl mb-2">📦</p>

                    <p className="text-gray-600 text-lg">
                        No Products Added Yet
                    </p>

                    <button
                        onClick={() => navigate("/admin/add-product")}
                        className="mt-4 bg-[#b88a72] text-white cursor-pointer px-5 py-2 rounded"
                    >
                        Add Product
                    </button>

                </div>

            ) : (

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {products.map(p => (

                        <div
                            key={p._id}
                            className="bg-white shadow rounded-lg overflow-hidden"
                        >

                            {/* IMAGE */}

                            <img
                                src={
                                    p.images?.length
                                        ? `${API}${p.images[0]}`
                                        : p.image
                                            ? `${API}${p.image}`
                                            : ""
                                }
                                className="w-full aspect-square object-cover rounded-t-lg hover:scale-105 transition duration-300"
                            />

                            {/* CONTENT */}

                            <div className="p-4">

                                <h3 className="font-semibold text-lg line-clamp-1">
                                    {p.name}
                                </h3>

                                <p className="text-[#b88a72] font-bold mt-1">
                                    ₹ {Number(p.price).toLocaleString("en-IN")}
                                </p>

                                {/* ACTIONS */}

                                <div className="flex gap-2 mt-4">

                                    <button
                                        onClick={() => handleDelete(p._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded w-full"
                                    >
                                        Delete
                                    </button>

                                    <button
                                        onClick={() =>
                                            navigate(`/admin/edit-product/${p._id}`)
                                        }
                                        className="bg-yellow-500 text-white px-3 py-1 rounded w-full"
                                    >
                                        Edit
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}