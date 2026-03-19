const API = import.meta.env.VITE_API_URL;

export default function ProductGallery({ product }) {

  const images =
    product?.images?.length
      ? product.images
      : product?.image
      ? [product.image]
      : [];

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <img
      src={`${API}${images[0]}`}
      alt={product.name}
      className="w-[400px] h-[400px] object-cover rounded"
    />
  );
}