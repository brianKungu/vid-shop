import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
