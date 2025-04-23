// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-green-600 text-white px-4 py-3 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold">🐾 Pet Help</Link>
//         <div className="space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/adoption" className="hover:underline">Adoption</Link>
//           <Link to="/medical-care" className="hover:underline">Medical Care</Link>
//           <Link to="/shelter-support" className="hover:underline">Shelter Support</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// src/Components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">PawPal</h1>

        <div className="relative">
          <button
            className="hover:underline focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu ▼
          </button>

          {isOpen && (
            <div className="absolute mt-2 right-0 bg-white text-black rounded shadow-lg py-2 w-48 z-10">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/adoption" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Adoption</Link>
              <Link to="/lost-pet" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Lost & Found</Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
