import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useQuote } from "../context/QuoteContext";
import ProductGallery from "../components/ProductGallery";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

export default function FeaturedProducts() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { addToQuote } = useQuote();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    axios
      .get(`${API}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        Our Latest Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map(p => (

          <div
            key={p._id}
            className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transition"
          >

            {/* Image */}
            <img
              onClick={() => navigate(`/product/${p._id}`)}
              src={
                p.images?.length
                  ? `${API}${p.images[0]}`
                  : p.image
                    ? `${API}${p.image}`
                    : "/no-image.png"
              }
              alt={p.name}
              className="w-full h-56 object-cover rounded-t"
            />

            {/* Content */}
            <div className="p-4">

              <h3 className="text-sm mb-2">
                {p.name}
              </h3>

              <p className="text-[#b88a72] text-base font-semibold mb-3">
                ₹ {Number(p.price).toLocaleString("en-IN")}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-2 mt-4">

                {/* <button
                  onClick={() => navigate(`/product/${p._id}`)}
                  className="border px-4 py-2 rounded"
                >
                  Quick View
                </button> */}


                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToQuote(p);   // ⚠️ p, not product
                    alert("Added to Quote");
                  }}
                  className="bg-[#b88a72] jost2 text-sm font-semibold uppercase text-white px-4 py-3 rounded"
                >
                  Add to Quote
                </button>

              </div>

            </div>

          </div>

        ))}


      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded shadow-lg relative">

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            {/* ⭐ IMAGE GALLERY */}

            <ProductGallery product={selectedProduct} />

            <h2 className="mt-4 text-xl font-bold">
              {selectedProduct.name}
            </h2>

            <p className="text-[#b88a72] font-semibold">
              ₹ {Number(selectedProduct.price).toLocaleString("en-IN")}
            </p>

          </div>

        </div>
      )}
    </section>
  );
}