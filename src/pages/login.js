import React, { useState } from 'react';
import { auth, provider } from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";  // fallback to home if no previous path

  

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      alert(`Welcome, ${userCred.user.email}`);
      navigate(from, { replace: true }); 
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}`);
      navigate(from, { replace: true });  // redirect after login
    } catch (err) {
      alert('Google login failed: ' + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Login to PawPal</h2>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-3 mb-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white rounded-lg py-2">
            Login with Email
          </button>
        </form>

        <hr className="my-4" />

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
