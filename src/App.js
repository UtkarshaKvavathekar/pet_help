import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import AdoptionPage from './pages/AdoptionPage';
import MedicalCarePage from './pages/MedicalcarePage';
import ShelterSupportPage from './pages/ShelterSupportPage';
import Login from "./pages/login"; 
import PostPet from './pages/Postpet';
import ProtectedRoute from "./ProtectedRoute";
import PetDetailsPage from "./pages/petDetails"; // Import the PetDetailsPage


function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path="/medical-care" element={<MedicalCarePage />} />
          <Route path="/shelter-support" element={<ShelterSupportPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post-pet" element={<PostPet />} />
          <Route path="/pet/:petId" element={<PetDetailsPage />} />
          
          {/* Protected route */}
          <Route 
            path="/post-pet" 
            element={
              <ProtectedRoute>
                <PostPet />
              </ProtectedRoute>
            } 
          />


        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
