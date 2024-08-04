import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [generalError, setGeneralError] = useState("");

  const validateForm = () => {
    const errors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email tidak valid";
    }
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password harus lebih dari 6 karakter";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Mock API call or logic to check email and password
      // Replace with actual logic
      const { email, password } = formData;
      const userExists = true; // Example condition, replace with actual check
      const passwordCorrect = password === "password123"; // Example condition

      if (!userExists) {
        setGeneralError("Email belum terdaftar");
      } else if (!passwordCorrect) {
        setGeneralError("Email atau password salah");
      } else {
        setGeneralError(""); // Clear errors if login is successful
        // Redirect to dashboard or another page
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
        <div className="bg-white p-8 rounded-xl border-2 w-full max-w-md shadow-lg">
          <p className="font-bold text-2xl mb-6 text-gray-800 text-center">
            Masuk ke akun Anda
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {generalError && (
              <div className="text-red-500 text-center mb-4">
                {generalError}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-gray-500 mt-7"
                />
              </button>
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Masuk
            </button>
          </form>
          <p className="mt-6 text-gray-700 text-center">
            Belum punya akun?{" "}
            <Link to="/daftar" className="text-blue-600 hover:underline">
              Daftar disini
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
