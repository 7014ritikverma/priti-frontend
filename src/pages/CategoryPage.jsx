import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuote } from "../context/QuoteContext";
const API = import.meta.env.VITE_API_URL;

export default function CategoryPage() {

    const { category, sub } = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { addToQuote } = useQuote();

    useEffect(() => {

        axios
            .get(
                `${API}/api/products/category/${category}/${sub}`
            )
            .then(res => setProducts(res.data));

    }, [category, sub]);

    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-8">
                {sub}
            </h1>

            <div className="grid md:grid-cols-4 gap-8">

                {products.map(p => (

                    <div
                        key={p._id}
                        className="border p-4 bg-white rounded shadow"
                    >

                        {/* IMAGE */}

                        <img
                            onClick={() => navigate(`/product/${p._id}`)}
                            src={`${API}${p.images?.[0]}`}
                            alt={p.name}
                            className="h-48 w-full object-cover rounded-t mb-3"
                        />

                        {/* NAME */}

                        <h3 className="font-semibold mb-1">
                            {p.name}
                        </h3>

                        {/* PRICE */}

                        <p className="text-[#b88a72] font-bold mb-3">
                            
                                ₹ {Number(p.price).toLocaleString("en-IN")}
                           
                        </p>

                        {/* ⭐ BUTTONS */}

                        <div className="flex gap-2">

                            {/* QUICK VIEW */}

                            <button
                                onClick={() => navigate(`/product/${p._id}`)}
                                className="border px-3 py-1 rounded hover:bg-gray-100"
                            >
                                Quick View
                            </button>

                            {/* ADD TO QUOTE */}

                            <button
                                onClick={() => {
                                    alert("Added to Quote");
                                    addToQuote(p);
                                }}
                                className="bg-[#b88a72] text-white px-3 py-1 rounded"
                            >
                                Add to Quote
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}