// AuthContext.js

import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set the user when auth state changes
      setLoading(false); // Set loading to false when we get the user info
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children} {/* Only render children when loading is false */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
