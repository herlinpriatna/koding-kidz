// src/pages/LandingPage.js

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import LandingPage1 from "../assets/landing-page-1.png";
import LandingPage2 from "../assets/landing-page-2.png";
import Kelas1 from "../assets/kelas-1.png";
import Testimoni1 from "../assets/testimoni-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faStar } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Belajar Koding Menyenangkan",
    description:
      "Belajar koding berbasis video pembelajaran yang fun dan menyenangkan",
    icon: faBook,
  },
  {
    title: "Belajar Koding Menyenangkan",
    description:
      "Belajar koding berbasis video pembelajaran yang fun dan menyenangkan",
    icon: faBook,
  },
  {
    title: "Belajar Koding Menyenangkan",
    description:
      "Belajar koding berbasis video pembelajaran yang fun dan menyenangkan",
    icon: faBook,
  },
];

const testimonials = [
  {
    name: "Adinda Maharani",
    feedback:
      "Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!",
    image: Testimoni1,
  },
  {
    name: "Adinda Maharani",
    feedback:
      "Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!",
    image: Testimoni1,
  },
  {
    name: "Adinda Maharani",
    feedback:
      "Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!",
    image: Testimoni1,
  },
];

const LandingPage = () => {
  return (
    <div className="font-nunito mt-32">
      <PageTitle title="Beranda" />
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 justify-between">
          <div className="w-full lg:w-1/2">
            <p className="text-2xl font-black xl:text-4xl">
              Mulai Petualangan Belajar Seru Bersama KodingKidz
            </p>
            <p className="py-3">
              Belajar coding seru dan interaktif untuk anak-anak dengan
              permainan dan animasi menarik!
            </p>
            <div className="flex gap-6">
              <button className="px-6 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300">
                Mulai
              </button>
              <button className="px-6 py-4 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                Lihat Program
              </button>
            </div>
          </div>
          <img
            src={LandingPage1}
            alt="Foto Say Hello"
            className="w-3/6 lg:w-2/5 object-cover"
          />
        </div>
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-5 rounded-xl flex flex-col items-center hover:shadow-2xl hover:border hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-5 w-fit rounded-full bg-blue-200 mb-4 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-blue-500 text-2xl"
                />
              </div>
              <div className="text-center">
                <p className="font-black text-xl mb-2">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto p-4 mt-24 flex flex-col lg:flex-row items-center gap-5 justify-between">
          <img src={LandingPage2} alt="" className="w-full lg:w-1/2" />
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <p className="text-2xl">
                <span className="font-black text-blue-500">Lebih Sekadar</span>{" "}
                Belajar Coding
              </p>
              <p className="mt-3">
                KodingKidz menyediakan berbagai metode pembelajaran yang
                disesuaikan dengan kemampuan anak, meliputi video pembelajaran
                interaktif dan pembelajaran berbasis proyek menarik
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-white border-2 p-4 rounded-xl hover:shadow-2xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="p-2 text-blue-500"
                  />
                  <div>
                    <p className="font-extrabold">{feature.title}</p>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-3 text-center">
            <p className="text-2xl">
              Program Belajar <span className="text-blue-500">Unggulan</span>
            </p>
            <p>
              KodingKidz menyediakan program belajar yang variatif dan sesuai
              dengan umur dan kemampuan anak, sehingga lebih eksploratif dan
              banyak pilihan belajar
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-5 border-2 rounded-xl hover:shadow-2xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <img src={Kelas1} alt="" className="w-16" />
                  <p className="font-bold text-xl">
                    Belajar Scratch Untuk Pemula
                  </p>
                </div>
                <p>
                  Belajar Stracth untuk usia 9-12 tahun dengan membuat game
                  sederhana
                </p>
                <div className="flex gap-3 mt-3">
                  <button className="py-4 w-1/2 border-2 border-blue-500 rounded-xl text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Detail
                  </button>
                  <button className="py-4 w-1/2 border-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-all duration-300">
                    Langganan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="mb-4 text-center">
            <p className="font-extrabold text-2xl mb-3">
              Apa yang <span className="text-blue-500">Mereka Katakan?</span>
            </p>
            <p>
              Pandangan pengguna tentang pengalaman belajar dengan KodingKidz,
              gabung untuk menjadi bagian dari pengalaman menarik dan seru
              bersama KodingKidz.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border-2 text-center hover:shadow-2xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  className="mx-auto mb-3"
                />
                <p className="font-extrabold text-xl mb-2">
                  {testimonial.name}
                </p>
                <p className="mb-2">{testimonial.feedback}</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <FontAwesomeIcon
                      key={starIndex}
                      icon={faStar}
                      className="text-orange-500 text-2xl"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-200 p-5 rounded-xl text-center">
          <p className="text-xl font-extrabold mb-4">
            Daftar Sekarang dan Mulai Petualangan Belajar yang Seru!
          </p>
          <div className="flex justify-center gap-5">
            <button className="bg-blue-500 text-white py-4 px-8 rounded-xl hover:bg-blue-600 transition-all duration-300">
              Mulai
            </button>
            <button className="border-2 border-blue-500 py-4 px-8 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
              Lihat Program
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
