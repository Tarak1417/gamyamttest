import React, { useState, useContext } from "react";
import EditProductModal from "./EditProductModal";
import { ProductContext } from "../context/ProductsContext";
import GlassButton from "./GlassButton";


const ProductCard = ({ product, onEdit }) => {
  const { deleteProduct } = useContext(ProductContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className=" p-4 rounded shadow-2xl m-2 bg-white flex flex-col justify-between
                      transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
        <div>
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <h3 className="font-semibold text-indigo-600">₹{product.price}</h3>
          <p className="text-sm">Stock: {product.stock}</p>
          <p className="text-sm">Category: {product.category}</p>
          <p className={`text-sm font-medium ${product.isActive ? 'text-green-600' : 'text-red-600'}`}>
            {product.isActive ? 'Active' : 'Inactive'}
          </p>
        </div>

        <div className="flex gap-2 mt-3">
          <GlassButton onClick={() => setIsEditing(true)}>
            Edit
          </GlassButton>
          <GlassButton onClick={() => deleteProduct(product.id)}>
            Delete
          </GlassButton>
        </div>
      </div>

      {isEditing && (
        <EditProductModal
          product={product}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
