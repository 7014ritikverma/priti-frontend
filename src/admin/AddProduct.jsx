// import { useState } from "react";
// import axios from "axios";
// const API = import.meta.env.VITE_API_URL;

// const categoryData = {
//   "LIVING ROOM": [
//     "Cabinets",
//     "Sideboards",
//     "TV Units",
//     "Console Tables",
//     "Coffee Tables"
//   ],

//   BEDROOM: [
//     "Beds",
//     "Bedside Tables",
//     "Wardrobes",
//     "Dressers"
//   ],

//   DINING: [
//     "Dining Tables",
//     "Dining Chairs",
//     "Bar Cabinets"
//   ],
//   SEATING: [
//     "Sofas",
//     "Chairs",
//     "Stools"
//   ],
//   "BAR FURNITURE": [
//     "Bar Tables",
//     "Bar Stool",
//   ],
//   "MICRO CEMENT": [

//   ],
// };

// export default function AddProduct() {

//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     category: "",
//     subCategory: "",
//     price: ""
//   });

//   const [images, setImages] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("category", data.category);
//     formData.append("subCategory", data.subCategory);
//     formData.append("price", data.price);

//     // for (let i = 0; i < images.length; i++) {
//     //   formData.append("images", images[i]);
//     // }

//     images.forEach(img => {
//       formData.append("images", img);
//     });

//     await axios.post(
//       `${API}/api/products/add`,
//       formData
//     );

//     alert("Product Added");

//     // ⭐ FORM CLEAR

//     setData({
//       name: "",
//       description: "",
//       category: "",
//       subCategory: "",
//       price: ""
//     });

//     setImages(null);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Add Product</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input
//           value={data.name}
//           placeholder="Name"
//           required
//           onChange={e => setData({ ...data, name: e.target.value })}
//           className="w-full p-3 border rounded "
//         />

//         {/* <input
//           value={data.category}
//           placeholder="Category"
//           onChange={e => setData({ ...data, category: e.target.value })}
//           className="w-full p-3 border rounded"
//         /> */}
//         <select
//           value={data.category}
//           required
//           onChange={e =>
//             setData({
//               ...data,
//               category: e.target.value,
//               subCategory: "" // reset sub
//             })
//           }
//           className="w-full p-3 border rounded mb-4"
//         >

//           <option value="">Select Category</option>

//           {Object.keys(categoryData).map(cat => (
//             <option key={cat}>{cat}</option>
//           ))}

//         </select>

//         <select
//           value={data.subCategory}
//           required
//           onChange={e =>
//             setData({ ...data, subCategory: e.target.value })
//           }
//           className="w-full p-3 border rounded mb-4"
//         >

//           <option value="">Select Sub Category</option>

//           {data.category &&
//             categoryData[data.category].map(sub => (
//               <option key={sub}>{sub}</option>
//             ))}

//         </select>

//         <input

//           value={data.price}
//           required
//           placeholder="Price"
//           onChange={e => setData({ ...data, price: e.target.value })}
//           className="w-full p-3 border rounded"
//         />

//         <textarea
//           value={data.description}
//           required
//           placeholder="Description"
//           onChange={e => setData({ ...data, description: e.target.value })}
//           className="w-full p-3 border rounded"
//         />

//         <div className="flex gap-10">

//           <input
//             type="file"
//             required
//             multiple
//             onChange={(e) =>
//               setImages(Array.from(e.target.files))
//             }
//             className="border rounded px-4"
//           />

//           <button className="bg-blue-600 text-white px-6 py-3 rounded">
//             Add Product
//           </button>

//         </div>

//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const categoryData = {
  "LIVING ROOM": [
    "Cabinets", "Sideboards", "TV Units", "Console Tables", "Coffee Tables"
  ],
  BEDROOM: [
    "Beds", "Bedside Tables", "Wardrobes", "Dressers"
  ],
  DINING: [
    "Dining Tables", "Dining Chairs", "Bar Cabinets"
  ],
  SEATING: [
    "Sofas", "Chairs", "Stools"
  ],
  "BAR FURNITURE": [
    "Bar Tables", "Bar Stool",
  ],
  "MICRO CEMENT": [],
};

export default function AddProduct() {

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: ""
  });

  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // ⭐ REMOVE COMMAS BEFORE SEND
    const cleanPrice = data.price.replace(/,/g, "");

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("subCategory", data.subCategory);
    formData.append("price", cleanPrice);

    images.forEach(img => {
      formData.append("images", img);
    });

    await axios.post(`${API}/api/products/add`, formData);

    alert("Product Added");

    setData({
      name: "",
      description: "",
      category: "",
      subCategory: "",
      price: ""
    });

    setImages([]);
  };

  return (
    <div className="max-w-3xl mx-auto px-0 sm:px-6 py-6">

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-0 sm:p-6 shadow rounded">

        {/* NAME */}
        <input
          value={data.name}
          placeholder="Product Name"
          required
          onChange={e => setData({ ...data, name: e.target.value })}
          className="w-full p-3 border rounded"
        />

        {/* CATEGORY */}
        <select
          value={data.category}
          required
          onChange={e =>
            setData({
              ...data,
              category: e.target.value,
              subCategory: ""
            })
          }
          className="w-full p-3 border rounded"
        >
          <option value="">Select Category</option>

          {Object.keys(categoryData).map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* SUBCATEGORY */}
        <select
          value={data.subCategory}
          required
          onChange={e =>
            setData({ ...data, subCategory: e.target.value })
          }
          className="w-full p-3 border rounded"
        >
          <option value="">Select Sub Category</option>

          {data.category &&
            categoryData[data.category].map(sub => (
              <option key={sub}>{sub}</option>
            ))}
        </select>

        {/* ⭐ PRICE (AUTO FORMAT) */}
        <input
          value={data.price}
          required
          placeholder="Price"
          onChange={(e) => {

            let raw = e.target.value.replace(/\D/g, ""); // remove all non-numbers

            if (!raw) {
              setData({ ...data, price: "" });
              return;
            }

            let formatted = Number(raw).toLocaleString("en-IN");

            setData({ ...data, price: formatted });

          }}
          className="w-full p-3 border rounded"
        />

        {/* DESCRIPTION */}
        <textarea
          value={data.description}
          required
          placeholder="Description"
          onChange={e => setData({ ...data, description: e.target.value })}
          className="w-full p-3 border rounded"
        />

        {/* FILE + BUTTON */}

        <div className="flex flex-col sm:flex-row gap-4">

          <input
            type="file"
            required
            multiple
            onChange={(e) =>
              setImages(Array.from(e.target.files))
            }
            className="border rounded px-3 py-2 w-full"
          />

          <button className="bg-[#b88a72] text-white px-6 py-3 rounded w-full sm:w-auto">
            Add Product
          </button>

        </div>

      </form>

    </div>
  );
}