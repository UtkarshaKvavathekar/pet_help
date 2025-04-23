

import React, { useEffect, useState } from 'react';
import "./PostPetPage.css";
import { db } from "../config/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";







const PostPetPage = () => {
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [vaccinated, setVaccinated] = useState(false);
  const [neutered, setNeutered] = useState(false);
  const [personality, setPersonality] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");
  const [location, setLocation] = useState("");
  const [petPhoto, setPetPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");



  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      // Redirect to login page if the user is not authenticated
      navigate("/login");
    }
  }, [navigate]);
  
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPetPhoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let photoURL = "";
  
      // Upload petPhoto to Firebase Storage if one is selected
      if (petPhoto) {
        const storage = getStorage();
        const storageRef = ref(storage, `petPhotos/${Date.now()}_${petPhoto.name}`);
        await uploadBytes(storageRef, petPhoto);
        photoURL = await getDownloadURL(storageRef);
      }
  
      // Save form data + photoURL to Firestore
      await addDoc(collection(db, "petPosts"), {
        petName,
        age,
        breed,
        gender,
        size,
        color,
        vaccinated,
        neutered,
        personality,
        specialNeeds,
        location,
        description,
        ownerName,
        email,
        phone,
        photoURL,  // <-- storing the URL
        createdAt: new Date()
      });
  
      alert("Pet posted successfully!");
      // Optional: reset form here
    } catch (error) {
      console.error("Error posting pet: ", error);
      alert("Something went wrong.");
    }
  };
  
  
  return (
    <div className="post-pet-container">
      <h1 className="post-pet-title">Post a Pet for Adoption</h1>
      <form className="post-pet-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="petName">Pet's Name:</label>
          <input
            type="text"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="vaccinated">Vaccinated:</label>
          <input
            type="checkbox"
            id="vaccinated"
            checked={vaccinated}
            onChange={(e) => setVaccinated(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="neutered">Neutered:</label>
          <input
            type="checkbox"
            id="neutered"
            checked={neutered}
            onChange={(e) => setNeutered(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="personality">Personality:</label>
          <textarea
            id="personality"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialNeeds">Special Needs:</label>
          <textarea
            id="specialNeeds"
            value={specialNeeds}
            onChange={(e) => setSpecialNeeds(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="petPhoto">Pet Photo:</label>
          <input
            type="file"
            id="petPhoto"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          {petPhoto && (
            <img
              src={URL.createObjectURL(petPhoto)}
              alt="Preview"
              style={{ width: "150px", marginTop: "10px", borderRadius: "10px" }}
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Pet Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ownerName">Your Name:</label>
          <input
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" required /> I agree to the adoption terms and
            conditions.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Post Pet
        </button>
      </form>
    </div>
  );
};

export default PostPetPage;

