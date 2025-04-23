// function HomePage() {
//     return (
//       <div className="text-center mt-10">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Pet Help 🐶🐱</h1>
//         <p className="text-lg text-gray-700 max-w-xl mx-auto">
//           We are dedicated to helping pets in need. Whether you're looking to adopt,
//           provide medical help, support shelters, or find lost pets — you've come to the right place!
//         </p>
//       </div>
//     );
//   }
  
//   export default HomePage;

// src/Pages/Home.js
// src/Pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS


const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay-content">
        <h1>Welcome to PawPal 🐾</h1>
        <p>
          We're here to support your furry friends — from adoption and medical
          care to lost & found assistance.
        </p>
        <div className="button-group">
          <Link to="/adoption" className="home-btn">Adoption</Link>
          <Link to="/lost-pet" className="home-btn">Lost & Found</Link>
          <Link to="/about" className="home-btn">About Us</Link>
          
          <Link to="/post-pet" className="home-btn">Post a Pet</Link> 


        </div>
      </div>
    </div>
  );
};

export default Home;

