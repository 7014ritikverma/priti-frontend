// import { Link, Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function AdminLayout() {

//   const navigate = useNavigate();

//   const logout = () => {

//     localStorage.removeItem("token");

//     navigate("/");

//   };

//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white p-6 space-y-10">

//         <h2 className="text-2xl font-bold mb-8">
//           Admin Panel
//         </h2>

//         <nav className="space-y-4 flex flex-col">

//           <Link to="/admin/dashboard">Dashboard</Link>
//           <Link to="/admin/products">Products</Link>
//           <Link to="/admin/add-product">Add Product</Link>
//           <Link to="/admin/inquiries">Inquiries</Link>
//           <Link to="/admin/settings">Admin Settings</Link>

//         </nav>
//         <button
//           onClick={logout}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Logout
//         </button>

//       </aside>

//       {/* Content */}
//       <main className="flex-1 bg-gray-100 p-8">
//         <Outlet />
//       </main>

//     </div>
//   );
// }

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminLayout() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">

      {/* MOBILE OVERLAY */}

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`fixed lg:static z-50 top-0 left-0 max-lg:h-full w-64 bg-gray-900 text-white p-6 space-y-8 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >

        {/* HEADER */}

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Admin Panel
          </h2>

          {/* CLOSE BUTTON (MOBILE) */}

          <button
            className="lg:hidden text-xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

        </div>

        {/* NAV */}

        <nav className="space-y-4 flex flex-col text-sm">

          <Link to="/admin/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link to="/admin/products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/admin/add-product" onClick={() => setOpen(false)}>Add Product</Link>
          <Link to="/admin/inquiries" onClick={() => setOpen(false)}>Inquiries</Link>
          <Link to="/admin/settings" onClick={() => setOpen(false)}>Admin Settings</Link>

        </nav>

        {/* LOGOUT */}

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded mt-6"
        >
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}

      <div className="flex-1 flex flex-col">

        {/* TOP BAR (MOBILE) */}

        <div className="lg:hidden bg-white shadow px-4 py-3 flex items-center justify-between">

          <button
            onClick={() => setOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>

          <h1 className="font-semibold">Admin</h1>

        </div>

        {/* PAGE CONTENT */}

        <main className="flex-1 bg-gray-100 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}