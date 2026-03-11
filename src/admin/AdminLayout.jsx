import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminLayout() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-10">

        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <nav className="space-y-4 flex flex-col">

          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/add-product">Add Product</Link>
          <Link to="/admin/inquiries">Inquiries</Link>
          <Link to="/admin/settings">Admin Settings</Link>

        </nav>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>

    </div>
  );
}