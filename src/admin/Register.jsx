import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://priti-backend.onrender.com/api/admin/register",
        data
      );

      alert("Admin Registered Successfully");

      navigate("/admin");

    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 shadow rounded w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Register
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={e =>
            setData({ ...data, email: e.target.value })
          }
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={e =>
            setData({ ...data, password: e.target.value })
          }
          className="w-full p-3 border rounded mb-6"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded">
          Register
        </button>

      </form>
    </div>
  );
}