import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useAxiosPublic } from "./../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      if (currentUser) {
        axiosPublic
          .post("/jwt", { email: currentUser.email }, { withCredentials: true })
          .then((res) => console.log(res.data))
          .catch((er) => console.log(er));
      } else {
        axiosPublic
          .post(
            "/logout",
            { email: currentUser?.email },
            { withCredentials: true }
          )
          .then((res) => console.log(res))
          .catch((er) => console.log(er));
      }
      setloading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);
  const Gprovider = new GoogleAuthProvider();

  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, Gprovider);
  };
  const createUser = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const logIn = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };
  const contextValues = {
    createUser,
    logIn,
    user,
    loading,
    logOut,
    updateUser,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
