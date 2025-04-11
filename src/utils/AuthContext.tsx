import { createContext, useState, useEffect, useContext } from 'react';

// firebase imports
import firebase from '../firebase/firebase';
import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const auth = getAuth(firebase);
  // console.log('firebase auth: ', auth);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const signInUser = async (userInfo: { email: string; password: string }) => {
    setLoading(true);

    try {
      let response = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);
      let accountDetails = response.user;
      setUser(accountDetails);
      // console.log(user);
      return { success: true };
    } catch (err: any) {
      if (
        err.code === AuthErrorCodes.INVALID_PASSWORD ||
        err.code === AuthErrorCodes.USER_DELETED
      ) {
        console.error('User not found, please sign up');
      } else {
        console.error(err.code, err.message);
      }
      return { success: false, err };
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    setLoading(true);
    // console.log('signOutUser inside');

    try {
      await signOut(auth);
      setUser(null);
      // console.log('user: ', user);
      return { success: true };
    } catch (err: any) {
      console.error(err.code, err.message);
      return { success: false, err };
    } finally {
      setLoading(false);
    }
  };

  const signUpUser = async (userInfo: { email: string; password: string }) => {
    setLoading(true);

    try {
      let response = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
      let accountDetails = response.user;
      setUser(accountDetails);
      console.log(accountDetails);
      return { success: true };
    } catch (err: any) {
      console.error(err.code, err.message);
      return { success: false, err };
    } finally {
      setLoading(false);
    }
  };

  const checkUserStatus = () => {
    setLoading(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  };

  const contextData = {
    user,
    signInUser,
    signOutUser,
    signUpUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
