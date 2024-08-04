// src/components/PageTitle.jsx
import React, { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | KodingKidz`;
  }, [title]);

  return null; // Komponen ini hanya untuk mengatur title, tidak render apa-apa
};

export default PageTitle;
