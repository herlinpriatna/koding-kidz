import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";

const DetailProgramPage = () => {
  const { age, title } = useParams();

  return (
    <div>
      <PageTitle title="Detail Program"></PageTitle>
      <Navbar />
      <div className="font-nunito mx-auto px-4 py-8 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-4">Program untuk usia {age}</p>
        <p>Deskripsi lengkap program ini...</p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProgramPage;
