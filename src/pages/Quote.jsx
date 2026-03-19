// import { useContext, useState } from "react";
// import { useQuote } from "../context/QuoteContext";

// import axios from "axios";

// export default function Quote() {

//     const { items, removeFromQuote, clearQuote } = useQuote();
// const API = import.meta.env.VITE_API_URL;

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = {
//             name,
//             email,
//             phone,
//             message,

//             // ⭐ ALL PRODUCTS
//             products: items.map(p => ({
//                 productId: p._id,
//                 name: p.name,
//                 price: p.price,
//                 image: p.images?.[0] || p.image
//             }))
//         };

//         await axios.post(
//             `${API}/api/inquiries`,
//             formData
//         );

//         alert("Inquiry sent");
//     };


//     return (
//         <div className="max-w-5xl mx-auto p-10">

//             <h1 className="text-3xl font-bold mb-8">
//                 Quote List
//             </h1>

//             {/* PRODUCTS LIST */}

//             {items.length === 0 ? (
//                 <p>No products added</p>
//             ) : (


//                 items.map(item => (

//                     <div
//                         key={item._id}
//                         className="flex items-center justify-between border p-4 rounded mb-4"
//                     >

//                         {/* IMAGE */}

//                         <img
//                             src={
//                                 item.images?.length
//                                     ? `${API}${item.images[0]}`
//                                     : item.image
//                                         ? `${API}${item.image}`
//                                         : "/no-image.png"
//                             }
//                             alt={item.name}
//                             className="w-24 h-24 object-cover rounded"
//                         />

//                         {/* NAME */}
//                         <div className="flex items-center justify-around w-full">
//                             <h3 className="text-lg font-semibold">
//                                 {item.name}
//                             </h3>

//                             {/* PRICE */}

//                             <p className="text-[#b88a72] font-bold">
//                                 ₹ {item.price}
//                             </p>
//                         </div>
//                         < button
//                             onClick={() => removeFromQuote(item._id)}
//                             className="bg-red-500 text-white px-4 py-2 rounded"
//                         >
//                             Remove
//                         </button>

//                     </div>

//                 ))



//             )
//             }

//             {/* ⭐ PART 2 — SUBMIT FORM */}

//             {
//                 items.length > 0 && (

//                     <form
//                         onSubmit={handleSubmit}
//                         className="mt-8 space-y-4"
//                     >

//                         <h2 className="text-2xl font-bold">
//                             Request Quotation
//                         </h2>

//                         <input
//                             placeholder="Your Name"
//                             value={name}
//                             required
//                             onChange={e => setName(e.target.value)}
//                             className="w-full p-3 border rounded"
//                         />

//                         <input
//                             placeholder="Contact Number"
//                             value={phone}
//                             required
//                             onChange={e => setPhone(e.target.value)}
//                             className="w-full p-3 border rounded"
//                         />

//                         <input
//                             type="email"
//                             value={email}
//                             placeholder="Email"
//                             required
//                             onChange={e => setEmail(e.target.value)}
//                             className="w-full p-3 border rounded"
//                         />

//                         <textarea
//                             placeholder="Your Message"
//                             value={message}
//                             rows="4"
//                             onChange={e => setMessage(e.target.value)}
//                             className="w-full p-3 border rounded"
//                         />

//                         <button className="bg-blue-600 text-white px-6 py-3 rounded">
//                             Submit Quote Request
//                         </button>

//                     </form>

//                 )
//             }

//         </div >
//     );
// }

import { useState } from "react";
import { useQuote } from "../context/QuoteContext";
import axios from "axios";

export default function Quote() {

    const { items, removeFromQuote } = useQuote();
    const API = import.meta.env.VITE_API_URL;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            message,

            products: items.map(p => ({
                productId: p._id,
                name: p.name,
                price: p.price,
                image: p.images?.[0] || p.image
            }))
        };

        await axios.post(`${API}/api/inquiries`, formData);

        alert("Inquiry sent");

    };

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                Quote List
            </h1>

            {/* PRODUCTS */}

            {items.length === 0 ? (

                <p>No products added</p>

            ) : (

                items.map(item => (

                    <div
                        key={item._id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between border p-4 rounded mb-4 gap-4"
                    >

                        {/* IMAGE */}

                        <img
                            src={
                                item.images?.length
                                    ? `${API}${item.images[0]}`
                                    : item.image
                                        ? `${API}${item.image}`
                                        : "/no-image.png"
                            }
                            alt={item.name}
                            className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded"
                        />

                        {/* INFO */}

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">

                            <h3 className="text-lg font-semibold">
                                {item.name}
                            </h3>

                            <p className="text-[#b88a72] font-bold">
                                ₹ {item.price}
                            </p>

                        </div>

                        {/* REMOVE BUTTON */}

                        <button
                            onClick={() => removeFromQuote(item._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                        >
                            Remove
                        </button>

                    </div>

                ))

            )}

            {/* FORM */}

            {items.length > 0 && (

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-4"
                >

                    <h2 className="text-xl sm:text-2xl font-bold">
                        Request Quotation
                    </h2>

                    <input
                        placeholder="Your Name"
                        value={name}
                        required
                        onChange={e => setName(e.target.value)}
                        className="w-full p-3 border rounded"
                    />

                    <input
                        placeholder="Contact Number"
                        value={phone}
                        required
                        onChange={e => setPhone(e.target.value)}
                        className="w-full p-3 border rounded"
                    />

                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        required
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-3 border rounded"
                    />

                    <textarea
                        placeholder="Your Message"
                        value={message}
                        rows="4"
                        onChange={e => setMessage(e.target.value)}
                        className="w-full p-3 border rounded"
                    />

                    <button className="bg-[#b88a72] text-white px-6 py-3 rounded w-full sm:w-auto">
                        Submit Quote Request
                    </button>

                </form>

            )}

        </div>
    );
}