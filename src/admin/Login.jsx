import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {


    const API = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                `${API}/api/admin/login`, data
            );

            // ⭐ SAVE TOKEN
            localStorage.setItem("token", res.data.token);

            navigate("/admin/dashboard");

        } catch (err) {

            alert("Invalid email or password");

        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleLogin}
                className="bg-white p-8 shadow rounded w-96"
            >

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Admin Login
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

                <button className="w-full bg-blue-600 text-white py-3 rounded">
                    Login
                </button>

            </form>
        </div>
    );
}