import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"; // Import Firebase config

const AdoptionPage = () => {
  const [pets, setPets] = useState([]);

  // Fetch pets from Firestore
  useEffect(() => {
    const fetchPets = async () => {
      const petsCollection = collection(db, "petPosts"); // Reference to petPosts collection
      const petSnapshot = await getDocs(petsCollection); // Fetch the documents
      const petList = petSnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()  // Get all data from the pet document
      }));
      setPets(petList); // Set state with the fetched pet data
    };

    fetchPets(); // Call the function to fetch pets data
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className="adoption-page">
      <h1>Adopt a Pet</h1>
      <div className="pets-list">
        {pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <Link to={`/pet/${pet.id}`}>
              {/* Display the pet image and name */}
              <img src={pet.photoURL} alt={pet.petName} />
              <h3>{pet.petName}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionPage;
