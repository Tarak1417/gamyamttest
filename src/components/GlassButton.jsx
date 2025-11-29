import React from "react";

const GlassButton = ({ children, onClick, className = "", colors }) => {
  // default gradient if colors not provided
  const gradientColors =
    colors || "#00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF";

  return (
    <>
      <style>{`
        @keyframes shine {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-button {
          background: conic-gradient(from 0deg, ${gradientColors});
          background-size: 300% 300%;
          animation: shine 4s ease-out infinite;
        }
      `}</style>

      <div className="animated-button rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
        <button
          onClick={onClick}
          className={`px-6 py-2.5 rounded-full font-medium text-white bg-gray-900/30 backdrop-blur-md border border-white/20 ${className}`}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default GlassButton;
