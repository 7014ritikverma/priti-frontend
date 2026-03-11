import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductsAdmin() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Fetch products
    const loadProducts = () => {
        axios
            .get("http://localhost:5000/api/products")
            .then(res => setProducts(res.data));
    };

    useEffect(() => {
        loadProducts();
    }, []);

    // Delete product
    const handleDelete = async (id) => {

        if (!window.confirm("Delete this product?")) return;

        await axios.delete(
            `http://localhost:5000/api/products/${id}`
        );

        alert("Product Deleted");

        loadProducts();
    };

    return (
        <div>

            <h1 className="text-3xl font-bold mb-8">
                Manage Products
            </h1>

            <table className="w-full bg-white shadow rounded">

                <thead className="bg-gray-200 ">
                    <tr >
                        <th className="p-3 space-y-6">Image</th>
                        <th className="">Name</th>
                        <th className="">Price</th>
                        <th className="">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {products.map(p => (

                        <tr key={p._id} className="border-t">

                            <td className="p-3 flex justify-center">
                                <img
                                    src={
                                        p.images?.length
                                            ? `http://localhost:5000${p.images[0]}`
                                            : p.image
                                                ? `http://localhost:5000${p.image}`
                                                : ""
                                    }
                                    className="h-16 w-20 object-cover object-center"
                                />
                            </td>

                            <td className="text-center">{p.name}</td>
                            <td className="text-center">₹ {p.price}</td>

                            <td className="space-x-2 text-center">

                                <button
                                    onClick={() => handleDelete(p._id)}
                                    className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded"
                                >
                                    Delete
                                </button>

                                <button
                                    onClick={() =>
                                        navigate(`/admin/edit-product/${p._id}`)
                                    }
                                    className="bg-yellow-500 cursor-pointer text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}