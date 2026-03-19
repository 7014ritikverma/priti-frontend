import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

export default function SearchBar() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    const handleSearch = async (e) => {

        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setResults([]);
            return;
        }

        const res = await axios.get(
            `${API}/api/products/search?q=${value}`
        );

        setResults(res.data);
    };

    return (
        <div className="relative w-full max-w-xl">

            {/* SEARCH INPUT */}

            <input
                value={query}
                onChange={handleSearch}
                placeholder="Search for products"
                className="w-full border p-3 rounded"
            />

            {/* DROPDOWN */}

            {results.length > 0 && (

                <div className="absolute bg-white shadow w-full z-50 rounded mt-1 max-h-96 overflow-y-auto">

                    {results.map(p => (

                        <div
                            key={p._id}
                            onClick={() => {
                                navigate(`/product/${p._id}`);
                                setResults([]);
                                setQuery("");
                            }}
                            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
                        >

                            <img
                                src={`${API}${p.images?.[0]}`}
                                className="w-12 h-12 object-cover rounded"
                            />

                            <div>

                                <p className="font-medium">{p.name}</p>

                                <p className="text-[#b88a72]">
                                    ₹ {p.price}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}