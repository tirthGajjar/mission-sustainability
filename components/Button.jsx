import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    >
      {children}
    </button>
  );
};

export default Button;
