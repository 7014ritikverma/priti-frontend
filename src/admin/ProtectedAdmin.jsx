import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdmin() {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}