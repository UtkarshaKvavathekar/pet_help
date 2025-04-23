import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the petId from the URL
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase"; // Assuming your Firebase setup is correct

const PetDetailsPage = () => {
  const { petId } = useParams(); // Get petId from the URL
  const [pet, setPet] = useState(null); // State to hold the pet data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const petDocRef = doc(db, "petPosts", petId);
        const petDoc = await getDoc(petDocRef);
  
        if (petDoc.exists()) {
          const data = petDoc.data();
          console.log("Pet photo URL:", data.photoUrl); // ✅ Log URL
          setPet(data);
        } else {
          console.log("No such pet found!");
        }
      } catch (error) {
        console.error("Error fetching pet details: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPetDetails();
  }, [petId]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pet-details-container">
      <h1>Pet Details</h1>
      {pet ? (
        <div className="pet-details">
          {pet.photoUrl ? (
            <img src={pet.photoUrl} alt={pet.petName} className="pet-details-image" />
          ) : (
            <p>No image available</p>
          )}
          <h2>{pet.petName}</h2>
          <p><strong>Breed:</strong> {pet.breed || "N/A"}</p>
          <p><strong>Age:</strong> {pet.age || "N/A"}</p>
          <p><strong>Gender:</strong> {pet.gender || "N/A"}</p>
          <p><strong>Size:</strong> {pet.size || "N/A"}</p>
          <p><strong>Color:</strong> {pet.color || "N/A"}</p>
          <p><strong>Vaccinated:</strong> {pet.vaccinated ? "Yes" : "No"}</p>
          <p><strong>Neutered:</strong> {pet.neutered ? "Yes" : "No"}</p>
          <p><strong>Location:</strong> {pet.location || "N/A"}</p>
          <p><strong>Description:</strong> {pet.description || "N/A"}</p>
          <p><strong>Owner's Name:</strong> {pet.ownerName || "N/A"}</p>
          <p><strong>Contact Email:</strong> {pet.email || "N/A"}</p>
          <p><strong>Contact Phone:</strong> {pet.phone || "N/A"}</p>
        </div>
      ) : (
        <p>No pet details found!</p>
      )}
    </div>
  );
};

export default PetDetailsPage;
