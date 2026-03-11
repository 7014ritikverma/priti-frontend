import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative">

      {/* Background Image */}
      <img
        src="hero.png"
        alt="Furniture"
        className="w-full h-[520px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-5xl font-bold mb-4">
            Premium Furniture Collection
          </h1>

          <p className="text-lg mb-6 max-w-xl">
            Elegant designs crafted with high-quality materials
            for modern homes & businesses.
          </p>

          <Link
            to="/products"
            className="bg-[#b88a72] px-8 py-3 rounded font-semibold"
          >
            Explore Products
          </Link>

        </div>

      </div>

    </section>
  );
}