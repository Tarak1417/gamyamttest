import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductsContext";
import { FaTimes } from "react-icons/fa";

const ProductForm = ({ editItem, onClose }) => {
  const { add, edit } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    isActive: true,
  });

  useEffect(() => {
    if (editItem) setFormData(editItem);
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      edit(formData);
    } else {
      add(formData);
    }
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg relative">
        
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">
          {editItem ? "Edit Product" : "Add Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          
            
            className="w-full border px-3 py-2 rounded"
          />
          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.isActive}
            onChange={(e) =>
              setFormData({ ...formData, isActive: e.target.value === "true" })
            }
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select> 
          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border text-gray-700 rounded hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {editItem ? "Update" : "Add"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
