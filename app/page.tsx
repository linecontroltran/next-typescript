import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      {/* Adjust paddingLeft to match the width of your sidebar */}
      <div className="ml-64 p-8 text-center">
        <div className="home">
          <h1 className="mb-4">Welcome to Your Dashboard</h1>
          <div className="button-links">
            <div style={{ marginBottom: "10px" }}>
              <button>Messages</button>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <button>Friends List</button>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <button>Instant Messages</button>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <button>Virtual Wallet</button>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <button>News and Events</button>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <button>Preferences</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
