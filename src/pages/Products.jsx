import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Products() {

  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map(product => (

          <Link
            to={`/product/${product._id}`}
            key={product._id}
            className="bg-white shadow rounded overflow-hidden hover:shadow-lg"
          >

            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="text-[#b88a72] mt-2">
                ₹ {product.price}
              </p>
            </div>

          </Link>


        ))}

      </div>
    </div>
    
  );
}