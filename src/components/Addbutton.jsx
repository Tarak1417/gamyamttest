import React from 'react'
import { FaPlus } from "react-icons/fa";

const Addbutton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:scale-110 transition transform duration-300 animate-bounce"
    >
      <FaPlus size={20} />
    </button>
  );
};

export default Addbutton;
