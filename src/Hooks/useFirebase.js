import { useEffect, useState } from "react";
import initAuth from "./../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// initialze firebase appp
initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();

  // Register User with Email and Password
  const registerWithEmailPassword = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // sgin in user with email and password
  const loginWithEmailPassword = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destication = location?.state?.from || "/";
        history.replace(destication);
        // Signed in
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // Log out user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuthError("");
      })
      .catch((error) => {
        // An error happened.
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    authError,
    registerWithEmailPassword,
    loginWithEmailPassword,
    logOut,
  };
};
export default useFirebase;
