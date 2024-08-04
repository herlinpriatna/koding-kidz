import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const DaftarPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    nomortelp: "",
    password: "",
    confirmpassword: "",
    terms: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const { namaLengkap, email, nomortelp, password, confirmpassword, terms } =
      formData;

    // Nama Lengkap validation
    if (!namaLengkap || namaLengkap.length > 100) {
      errors.namaLengkap = "Nama Lengkap harus diisi dan maksimal 100 karakter";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Email tidak valid";
    }

    // Nomor Telepon validation
    const phoneRegex = /^\+62\d{8,}$/;
    if (!nomortelp || !phoneRegex.test(nomortelp)) {
      errors.nomortelp =
        "Nomor Telepon harus dimulai dengan +62 dan diikuti minimal 8 digit";
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    if (!password || !passwordRegex.test(password)) {
      errors.password =
        "Password harus lebih dari 6 karakter dan mengandung huruf, angka, dan simbol";
    }

    // Confirm Password validation
    if (password !== confirmpassword) {
      errors.confirmpassword = "Konfirmasi password tidak cocok";
    }

    // Terms checkbox validation
    if (!terms) {
      errors.terms = "Anda harus setuju dengan syarat dan ketentuan";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8 mt-16">
        <div className="bg-white p-8 rounded-xl border-2 w-full max-w-md shadow-lg">
          <p className="font-bold text-2xl mb-6 text-gray-800 text-center">
            Yuk, daftar untuk memulai petualangan belajar seru bersama
            KodingKidz
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="namaLengkap" className="block text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="namaLengkap"
                id="namaLengkap"
                placeholder="Nama Lengkap"
                value={formData.namaLengkap}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.namaLengkap && (
                <p className="text-red-500 text-sm">{formErrors.namaLengkap}</p>
              )}
            </div>
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
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="nomortelp" className="block text-gray-700 mb-1">
                Nomor Telepon
              </label>
              <input
                type="text"
                name="nomortelp"
                id="nomortelp"
                placeholder="Nomor Telepon"
                value={formData.nomortelp}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.nomortelp && (
                <p className="text-red-500 text-sm">{formErrors.nomortelp}</p>
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
                <p className="text-red-500 text-sm">{formErrors.password}</p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="confirmpassword"
                className="block text-gray-700 mb-1"
              >
                Konfirmasi Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Konfirmasi Password"
                value={formData.confirmpassword}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  className="text-gray-500 mt-7"
                />
              </button>
              {formErrors.confirmpassword && (
                <p className="text-red-500 text-sm">
                  {formErrors.confirmpassword}
                </p>
              )}
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700">
                Saya telah memahami dan setuju dengan syarat dan ketentuan serta
                kebijakan privasi
              </label>
              {formErrors.terms && (
                <p className="text-red-500 text-sm">{formErrors.terms}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              Daftar
            </button>
          </form>
          <p className="mt-6 text-gray-700 text-center">atau daftar dengan</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <img
                src="path/to/google-icon.png"
                alt="Google"
                className="w-6 h-6"
              />
              <p>Google</p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="path/to/facebook-icon.png"
                alt="Facebook"
                className="w-6 h-6"
              />
              <p>Facebook</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-center">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Masuk disini
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DaftarPage;
