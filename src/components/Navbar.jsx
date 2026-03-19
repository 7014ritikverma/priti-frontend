// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import SearchBar from "./SearchBar";
// import axios from "axios";
// const API = import.meta.env.VITE_API_URL;


// const categories = {
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
//     "Dining Chairs"
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

// export default function Navbar() {

//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!search.trim()) return;
//     navigate(`/search?q=${search}`);
//     setSearch("");
//   };

//   return (
//     <div className="shadow">
//       {/* <SearchBar /> */}
//       {/* TOP BAR */}

//       <div className="bg-[#b88a72] jost text-[#E5E3E3] text-sm font-semibold flex justify-between gap-8 py-2 px-14">
//         <span>Worldwide Shipping</span> |
//         <span>100% Made in India</span>|
//         <span>Best Quality Always</span>|
//         <span>20,000+ Satisfied Customers</span>
//       </div>

//       {/* HEADER */}

//       <div className="flex items-center justify-between px-8 py-4">

//         {/* LOGO */}

//         <Link to="/" className="text-4xl font-serif text-[#b88a72]">
//           <img className="sm:h-10 xl:h-14 h-8 " src="/logo.png" alt="logo" />
//         </Link>

//         {/* SEARCH */}

//         <form onSubmit={handleSearch} className="flex w-[75%] relative">

//           <div className="relative w-full">

//             <input
//               value={query}
//               onChange={async (e) => {

//                 const value = e.target.value;
//                 setQuery(value);

//                 if (!value.trim()) {
//                   setResults([]);
//                   return;
//                 }

//                 const res = await axios.get(
//                   `${API}/api/products/search?q=${value}`
//                 );

//                 setResults(res.data);

//               }}
//               placeholder="Search for products"
//               className="border-2 border-[#E5E3E3] outline-0 p-2 w-full rounded-l"
//             />

//             {/* SEARCH RESULTS DROPDOWN */}

//             {(results.length > 0 || query) && (
//               <div className="absolute top-full left-0 w-full bg-white border border-[#E5E3E3] shadow-lg z-50 max-h-80 overflow-y-auto">

//                 {results.length === 0 && (
//                   <div className="p-3 text-gray-500">
//                     Product not found
//                   </div>
//                 )}

//                 {results.map((p, index) => (

//                   <div
//                     key={`${p._id}-${index}`}
//                     onClick={() => {
//                       navigate(`/product/${p._id}`);
//                       setResults([]);
//                       setQuery("");
//                     }}
//                     className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-[#E5E3E3] border-b"
//                   >

//                     <img
//                       src={
//                         p.images?.length
//                           ? `${API}${p.images[0]}`
//                           : p.image
//                             ? `${API}${p.image}`
//                             : "/no-image.png"
//                       }
//                       alt={p.name}
//                       className="w-12 h-12 object-cover rounded"
//                     />

//                     <div>
//                       <p className="font-medium">{p.name}</p>
//                       <p className="text-[#b88a72]">₹ {p.price}</p>
//                     </div>

//                   </div>

//                 ))}

//               </div>
//             )}

//           </div>

//           <button className="bg-[#b88a72] px-3 text-[#FAF6F6] rounded-r">
//             🔍
//           </button>

//         </form>

//         {/* INQUIRE BUTTON */}

//         <Link
//           to="/quote"
//           className="bg-[#b88a72] jost2 text-white text-sm font-semibold px-6 py-2 rounded"
//         >
//           INQUIRE LIST
//         </Link>

//       </div>

//       {/* CATEGORY MENU */}


//       <nav className="flex justify-center gap-8 py-3 border border-[#E5E3E3] bg-white sticky top-0 z-40 shadow-md">

//         {Object.entries(categories).map(
//           ([title, items]) => (

//             <Category
//               key={title}
//               title={title}
//               items={items}
//             />

//           )
//         )}

//       </nav>
//     </div>
//   );
// }


// function Category({ title, items }) {

//   return (
//     <div className="relative group">

//       <span className="cursor-pointer py-2">
//         {title} ▾
//       </span>

//       <div
//         className="
//           absolute left-0 top-full mt-2 w-56
//           bg-white shadow-lg rounded
//           hidden group-hover:block z-50
//         "
//       >

//         {items.map((item, i) => (

//           <Link
//             key={i}
//             to={`/category/${encodeURIComponent(title)}/${encodeURIComponent(item)}`}
//             className="block px-4 py-2 hover:bg-gray-100"
//           >
//             {item}
//           </Link>

//         ))}

//       </div>

//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

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
  ],
  SEATING: [
    "Sofas",
    "Chairs",
    "Stools"
  ],
  "BAR FURNITURE": [
    "Bar Tables",
    "Bar Stool",
  ],
  "MICRO CEMENT": [],
};

export default function Navbar() {

  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <div className="shadow">

      {/* TOP BAR */}

      <div className="bg-[#b88a72] text-[#E5E3E3] text-xs sm:text-sm font-semibold flex flex-wrap justify-center gap-3 sm:gap-6 py-2 px-3 sm:px-10 text-center">
        <span>Worldwide Shipping</span>
        <span>100% Made in India</span>
        <span>Best Quality Always</span>
        <span>20,000+ Satisfied Customers</span>
      </div>

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 lg:px-8 py-4">

        {/* LOGO */}

        <Link to="/" className="text-4xl font-serif text-[#b88a72]">
          <img className="h-8 sm:h-10 xl:h-14" src="/logo.png" alt="logo" />
        </Link>

        {/* SEARCH */}

        <form
          onSubmit={handleSearch}
          className="flex w-full lg:w-[60%] relative"
        >

          <div className="relative w-full">

            <input
              value={query}
              onChange={async (e) => {

                const value = e.target.value;
                setQuery(value);

                if (!value.trim()) {
                  setResults([]);
                  return;
                }

                const res = await axios.get(
                  `${API}/api/products/search?q=${value}`
                );

                setResults(res.data);

              }}
              placeholder="Search for products"
              className="border-2 border-[#E5E3E3] outline-0 p-2 w-full rounded-l text-sm sm:text-base"
            />

            {/* SEARCH RESULTS */}

            {(results.length > 0 || query) && (
              <div className="absolute top-full left-0 w-full bg-white border border-[#E5E3E3] shadow-lg z-50 max-h-80 overflow-y-auto">

                {results.length === 0 && (
                  <div className="p-3 text-gray-500">
                    Product not found
                  </div>
                )}

                {results.map((p, index) => (

                  <div
                    key={`${p._id}-${index}`}
                    onClick={() => {
                      navigate(`/product/${p._id}`);
                      setResults([]);
                      setQuery("");
                    }}
                    className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
                  >

                    <img
                      src={
                        p.images?.length
                          ? `${API}${p.images[0]}`
                          : p.image
                            ? `${API}${p.image}`
                            : "/no-image.png"
                      }
                      alt={p.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                    />

                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {p.name}
                      </p>
                      <p className="text-[#b88a72] text-sm">
                        ₹ {p.price}
                      </p>
                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>

          <button className="bg-[#b88a72] px-3 sm:px-4 text-[#FAF6F6] rounded-r">
            🔍
          </button>

        </form>

        {/* INQUIRE BUTTON */}

        <Link
          to="/quote"
          className="bg-[#b88a72] text-white text-sm font-semibold px-5 py-2 rounded whitespace-nowrap"
        >
          INQUIRE LIST
        </Link>

      </div>

      {/* CATEGORY MENU */}

      <nav className="flex overflow-x-auto lg:overflow-visible whitespace-nowrap 
justify-start lg:justify-center gap-6 lg:gap-8 py-3 
border border-[#E5E3E3] bg-white sticky top-0 z-40 shadow-md px-4">

        {Object.entries(categories).map(([title, items]) => (

          <Category
            key={title}
            title={title}
            items={items}
          />

        ))}

      </nav>

    </div>
  );
}

function Category({ title, items }) {

  return (
    <div className="relative group flex-shrink-0">

      <span className="cursor-pointer py-2 text-sm lg:text-base">
        {title} ▾
      </span>

      {items.length > 0 && (
        <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded hidden group-hover:block z-50">

          {items.map((item, i) => (

            <Link
              key={i}
              to={`/category/${encodeURIComponent(title)}/${encodeURIComponent(item)}`}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {item}
            </Link>

          ))}

        </div>
      )}

    </div>
  );
}