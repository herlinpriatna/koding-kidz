// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto p-5 bg-white border-t-2 text-gray-600">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-8 lg:space-y-0">
        <div className="flex-1 lg:max-w-xs">
          <p className="text-3xl font-extrabold text-blue-500">
            Koding<span className="text-gray-600">Kidz</span>
          </p>
          <p className="mt-2">
            KodingKidz dibuat pada tahun 2024 yang memiliki visi misi untuk
            memberikan tempat untuk anak-anak mengembangkan bakatnya dalam dunia
            coding untuk menciptakan boibit unggul dalam penguasaan koding
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-600"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-600"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-600"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="flex-1 lg:max-w-xs">
          <p className="text-lg font-bold">Materi Unggulan</p>
          <a href="" className="block mt-2">
            Scratch
          </a>
          <a href="" className="block mt-2">
            Python
          </a>
          <a href="" className="block mt-2">
            Roblox For Education
          </a>
          <a href="" className="block mt-2">
            C++
          </a>
        </div>

        <div className="flex-1 lg:max-w-xs">
          <p className="text-lg font-bold">Materi Unggulan</p>
          <a href="" className="block mt-2">
            Scratch
          </a>
          <a href="" className="block mt-2">
            Python
          </a>
          <a href="" className="block mt-2">
            Roblox For Education
          </a>
          <a href="" className="block mt-2">
            C++
          </a>
        </div>

        <div className="flex-1 lg:max-w-xs">
          <p className="font-bold text-lg">Bantuan</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="border border-gray-300 p-2 rounded-l-lg w-full"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-lg">
              Subscribe
            </button>
          </div>
          <p className="mt-4">
            Hubungi kami jika ada kritik dan saran tentang website kami.
          </p>
          <p className="mt-4">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
