"use client";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <span className="text-white text-xl font-bold">My Next.js App</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
