// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import MagnifierImage from "../components/MagnifierImage";
// import { useQuote } from "../context/QuoteContext";
// const API = import.meta.env.VITE_API_URL;


// export default function ProductDetail() {

//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [activeImg, setActiveImg] = useState(0);
//   const { addToQuote } = useQuote();

//   useEffect(() => {
//     axios
//       .get(`${API}/api/products/${id}`)
//       .then(res => setProduct(res.data));
//   }, [id]);

//   if (!product) return <p className="p-10">Loading...</p>;

//   // ⭐ Support single + multiple images
//   const images =
//     product.images?.length
//       ? product.images
//       : product.image
//         ? [product.image]
//         : [];

//   return (
//     <div className="max-w-7xl mx-auto p-6 md:p-10">

//       <div className="grid md:grid-cols-2 gap-10">

//         {/* LEFT — IMAGE GALLERY */}

//         <div className="flex gap-4">

//           {/* THUMBNAILS */}

//           <div className="flex flex-col gap-3">

//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={`${API}${img}`}
//                 onClick={() => setActiveImg(i)}
//                 className={`w-20 h-20 object-cover cursor-pointer border rounded
//                   ${activeImg === i ? "border-black" : "border-gray-300"}
//                 `}
//               />
//             ))}

//           </div>
//           <MagnifierImage img={images[activeImg]} />
//           {/* MAIN IMAGE + ZOOM */}

//           {/* <div className="overflow-hidden rounded-lg w-full">

//             <img
//               src={`http://localhost:5000${images[activeImg]}`}
//               alt={product.name}
//               className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-125"
//             />

//           </div> */}

//         </div>

//         {/* RIGHT — PRODUCT INFO */}

//         <div>

//           <h1 className="text-3xl font-bold mb-4">
//             {product.name}
//           </h1>

//           <p className="text-2xl text-[#b88a72] font-semibold mb-6">
//             ₹ {product.price}
//           </p>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             {product.description}
//           </p>

//           {product.category && (
//             <p className="mb-6 text-sm text-gray-500">
//               Category: {product.category}
//             </p>
//           )}

//           {/* ADD TO QUOTE BUTTON */}

//           <button
//             onClick={() => {
//               alert("Added to Quote");
//               addToQuote(product);
//             }}
//             className="bg-[#b88a72] text-white px-6 py-2 rounded"
//           >
//             Add to Quote
//           </button>
//         </div>

//       </div>

//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MagnifierImage from "../components/MagnifierImage";
import { useQuote } from "../context/QuoteContext";

const API = import.meta.env.VITE_API_URL;

export default function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const { addToQuote } = useQuote();

  useEffect(() => {
    axios
      .get(`${API}/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  const images =
    product.images?.length
      ? product.images
      : product.image
        ? [product.image]
        : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-44">

        {/* LEFT SIDE */}

        <div className="flex flex-col lg:flex-row gap-4">

          {/* THUMBNAILS */}

          <div className="flex lg:flex-col gap-3 justify-center items-center overflow-x-auto lg:overflow-visible flex-shrink-0 lg:w-24">

            {images.map((img, i) => (

              <img
                key={i}
                src={`${API}${img}`}
                onClick={() => setActiveImg(i)}
                className={`w-16 h-16 lg:w-20 lg:h-20 md:object-cover cursor-pointer border rounded flex-shrink-0
        ${activeImg === i ? "border-black" : "border-gray-300"}
        `}
              />

            ))}

          </div>

          {/* MAIN IMAGE */}

          <div className="flex-1 flex justify-center">

            <MagnifierImage img={images[activeImg]} />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="">

          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-xl sm:text-2xl text-[#b88a72] font-semibold mb-6">

            ₹ {Number(product.price).toLocaleString("en-IN")}

          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {product.category && (
            <p className="mb-6 text-sm text-gray-500">
              Category: {product.category}
            </p>
          )}

          <button
            onClick={() => {
              alert("Added to Quote");
              addToQuote(product);
            }}
            className="bg-[#b88a72] text-white px-6 py-3 rounded w-full sm:w-auto"
          >
            Add to Quote
          </button>

        </div>

      </div>

    </div>
  );
}