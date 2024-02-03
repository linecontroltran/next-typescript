import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4 fixed top-0 left-0 right-0 z-30 position fixed">
      <div className="container mx-auto">
        <span className="text-white text-xl font-bold">My Next.js App</span>
      </div>
    </nav>
  );
};

export default Navbar;
