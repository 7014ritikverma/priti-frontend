import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QuoteProvider } from "./context/QuoteContext";
import ScrollToTop from "./components/ScrollToTop";

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import Products from "./pages/Products";
import Inquiries from "./admin/Inquiries";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./admin/Login";
import ProtectedAdmin from "./admin/ProtectedAdmin";
import Register from "./admin/Register";
import EditProduct from "./admin/EditProduct";
import ProductsAdmin from "./admin/Products";
import Quote from "./pages/Quote";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import AdminSettings from "./admin/AdminSettings";

function Layout() {

  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/category/:category/:sub" element={<CategoryPage />} />

        {/* Admin Login */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />

        {/* Protected Admin */}
        <Route element={<ProtectedAdmin />}>

          <Route path="/admin/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="/admin/products" element={<AdminLayout />}>
            <Route index element={<ProductsAdmin />} />
          </Route>

          <Route path="/admin/add-product" element={<AdminLayout />}>
            <Route index element={<AddProduct />} />
          </Route>

          <Route path="/admin/edit-product/:id" element={<AdminLayout />}>
            <Route index element={<EditProduct />} />
          </Route>

          <Route path="/admin/inquiries" element={<AdminLayout />}>
            <Route index element={<Inquiries />} />
          </Route>

          <Route path="/admin/settings" element={<AdminLayout />}>
            <Route index element={<AdminSettings />} />
          </Route>

        </Route>

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
       <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </QuoteProvider>
  );
}

export default App;