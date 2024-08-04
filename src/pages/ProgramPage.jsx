import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import LandingPage1 from "../assets/landing-page-1.png";
import Kelas1 from "../assets/kelas-1.png";

const ProgramPage = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const ages = [
    "9 Tahun",
    "10 Tahun",
    "11 Tahun",
    "12 Tahun",
    "13 Tahun",
    "14 Tahun",
    "15 Tahun",
  ];

  const handleAgeClick = (age) => {
    setSelectedAge(age);
    setShowModal(false);
  };

  const programs = [
    {
      age: "9 Tahun",
      title: "Belajar Scratch Untuk Pemula",
      description: "Belajar Scratch untuk pemula untuk usia 9-12 tahun",
    },
    {
      age: "10 Tahun",
      title: "Belajar Scratch Untuk Pemula",
      description: "Belajar Scratch untuk pemula untuk usia 9-12 tahun",
    },
    // Tambahkan program lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <PageTitle title="Program"></PageTitle>
      <Navbar />
      <div className="font-nunito mx-auto px-4 py-8 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 justify-between">
          <div className="w-full lg:w-1/2">
            <p className="text-2xl font-black xl:text-4xl">
              Lebih dari Sekedar Belajar Coding, Karena Coding Menyenangkan!
            </p>
            <p className="py-3">
              Akses semua video pembelajaran menarik dan interaktif bersama
              KodingKidz dan jadi programmer sejak dini.
            </p>
            <div className="flex gap-6">
              <button className="px-6 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300">
                Langganan Sekarang
              </button>
            </div>
          </div>
          <img
            src={LandingPage1}
            alt="Foto Say Hello"
            className="w-full lg:w-2/5 object-cover"
          />
        </div>

        {/* Pilih Umur */}
        <div className="mt-10">
          <p className="text-xl font-bold mb-4">Pilih Umur</p>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {ages.map((age, index) => (
              <div
                key={index}
                className={`w-full rounded-md py-2 px-4 text-center border-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 inline-block ${
                  selectedAge === age ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleAgeClick(age)}
              >
                <p>{age}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Tersedia */}
        {selectedAge ? (
          <div className="mt-10">
            <p className="text-xl font-bold mb-4">
              Program Tersedia untuk {selectedAge}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs
                .filter((program) => program.age === selectedAge)
                .map((program, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border-2 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={Kelas1}
                        alt="Program Image"
                        className="w-16 h-16 mr-4 object-cover rounded-lg"
                      />
                      <p className="font-bold">{program.title}</p>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex justify-between">
                      <Link
                        to={`/program/${program.age}/${encodeURIComponent(
                          program.title
                        )}`}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
                      >
                        Detail
                      </Link>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                        Langganan
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <p className="text-xl font-bold mb-4 text-center">
              Silakan pilih umur untuk melihat program belajar
            </p>
          </div>
        )}
      </div>

      {/* Modal Pop-up */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Pilih Umur</h2>
            <p className="mb-4 text-center">
              Silakan pilih umur untuk melihat program belajar yang tersedia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {ages.map((age, index) => (
                <div
                  key={index}
                  className="w-24 rounded-md py-2 text-center border-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300"
                  onClick={() => handleAgeClick(age)}
                >
                  <p>{age}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProgramPage;
