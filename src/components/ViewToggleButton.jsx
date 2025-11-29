import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import { FiGrid, FiList } from "react-icons/fi"; // grid & list icons
import GlassButton from "./Glassbutton";


const ViewToggleButton = () => {
  const { view, setView } = useContext(ProductContext);

  const toggleView = () => {
    setView(view === "card" ? "list" : "card");
  };

  return (
    <GlassButton
      onClick={toggleView}
      className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition"
    >
      {view === "card" ? <FiList size={18} /> : <FiGrid size={18} />}
      
    </GlassButton>
  );
};

export default ViewToggleButton;
