import { useState } from "react";
import axios from "axios";

export default function AdminSettings() {

  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        "https://priti-backend.onrender.com/api/admin/update-admin",
        {
          email,
          oldPassword,
          newPassword
        }
      );

      alert("Admin Updated");

      setEmail("");
      setOldPassword("");
      setNewPassword("");

    } catch (err) {

      alert("Old password incorrect");

    }

  };

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Admin Settings
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="New Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full"
        />

        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="border p-3 w-full"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-3 w-full"
        />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Update Admin
        </button>

      </form>

    </div>

  );

}