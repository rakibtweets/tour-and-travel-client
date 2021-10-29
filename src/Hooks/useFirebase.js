import { useEffect, useState } from 'react';
import initializeAuthenticaion from '../Firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

initializeAuthenticaion();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google Sign in
  const signWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // handling user state changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
    });
  }, [auth]);

  // signout user
  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setError('');
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    isLoading,
    signWithGoogle,
    userSignOut,
  };
};
export default useFirebase;
