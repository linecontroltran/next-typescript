import React from "react";

const TestPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Adjust paddingLeft to match the width of your sidebar */}
      <div className="ml-64 p-8 text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">This is a Test Page</h1>
          <p>This is some test content for demonstration purposes.</p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
