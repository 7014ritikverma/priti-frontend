import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const categories = {
  "LIVING ROOM": [
    "Cabinets",
    "Sideboards",
    "TV Units",
    "Console Tables",
    "Coffee Tables"
  ],
  BEDROOM: [
    "Beds",
    "Bedside Tables",
    "Wardrobes",
    "Dressers"
  ],
  DINING: [
    "Dining Tables",
    "Dining Chairs"
  ]
};

export default function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: ""
  });

  const formatPrice = (value) => {
    if (!value) return "";

    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [image, setImage] = useState(null);

  // Load product data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setData(res.data);
        setCategory(res.data.category);
        setSubCategory(res.data.subCategory);
        setImages(res.data.images || []);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const cleanPrice = data.price.toString().replace(/,/g, "");

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append(
      "price",
      data.price.toString().replace(/,/g, "")
    );

    // existing images
    formData.append(
      "existingImages",
      JSON.stringify(images)
    );

    // new uploaded images
    newImages.forEach((img) => {
      formData.append("images", img);
    });

    try {

      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert("Product Updated");

      navigate("/admin/products");

    } catch (err) {

      console.log(err);
      alert("Update failed");

    }

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Edit Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          value={data.name}
          onChange={e =>
            setData({ ...data, name: e.target.value })
          }
          className="w-full p-3 border rounded"
        />

        {/* <input
          value={data.category}
          onChange={e =>
            setData({ ...data, category: e.target.value })
          }
          className="w-full p-3 border rounded"
        /> */}

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubCategory("");
          }}
          className="border p-3 w-full"
        >

          <option value="">Select Category</option>

          {Object.keys(categories).map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}

        </select>

        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="border p-3 w-full"
        >

          <option value="">Select SubCategory</option>

          {categories[category]?.map(sub => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}

        </select>

        <input
          value={formatPrice(data.price)}
          required
          onChange={(e) => {

            // comma हटाकर raw number store
            const raw = e.target.value.replace(/,/g, "");

            if (!isNaN(raw)) {
              setData({
                ...data,
                price: raw
              });
            }

          }}
          className="w-full p-3 border rounded"
        />

        <textarea
          value={data.description}
          onChange={e =>
            setData({ ...data, description: e.target.value })
          }
          className="w-full p-3 border rounded"
        />

        <div className="flex gap-4 flex-wrap">

          {images.map((img, index) => (

            <div key={index} className="relative">

              <img
                src={`http://localhost:5000${img}`}
                className="w-24 h-24 object-cover rounded"
              />

              <button
                type="button"
                onClick={() => {
                  const updated = images.filter((_, i) => i !== index);
                  setImages(updated);
                }}
                className="absolute top-0 right-0 bg-red-500 text-white px-2 rounded"
              >
                X
              </button>

            </div>

          ))}

        </div>

        <input
          type="file"
          multiple
          onChange={(e) => setNewImages([...e.target.files])}
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Update Product
        </button>

      </form>

    </div>
  );
}