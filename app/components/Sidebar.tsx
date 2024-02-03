import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-200 w-64 min-h-screen fixed top-0 left-0 bottom-0 z-20 overflow-y-auto position fixed">
      <div className="p-4 mt-16">
        {" "}
        {/* Adjusting padding and margin top to accommodate Navbar */}
        <h2 className="text-lg font-semibold">Sidebar</h2>
        <p>This is a simple sidebar.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
