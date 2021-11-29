import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { authh } from "../utils/InitFirebase";
import { USER_API } from "../helpers/const";
import axios from "axios";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgotPassword: () => Promise,
});

//CREDIT cARD

//! NAVBAR чтобы показать вошел или нет пользователь(если да  то отобр имейла)
//  const {currentUser} = useAuth()

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  let adminEmail = "osorov.bayel@gmail.com";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authh, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // add in navbar
  // const {currentUser} = useAuth()
  // <h5>{JSON.stringify(currentUser.email)</h5>

  async function register(email, password) {
    const response = await createUserWithEmailAndPassword(authh, email, password);
    addUserToJson(response.user.email, response.user.displayName, response.user.photoURL)
  }
  async function login(email, password) {
    const response = await signInWithEmailAndPassword(authh, email, password);
    addUserToJson(response.user.email, response.user.displayName, response.user.photoURL)

  }
  function logout() {
    localStorage.removeItem('users')
    return signOut(authh);
  }

  async function signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    const response = await signInWithPopup(authh, googleProvider);
    addUserToJson(response.user.email, response.user.displayName, response.user.photoURL)

  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(authh, email, {
      url: "http://localhost:3000/login",
    });
  }
  async function addUserToJson(email, displayName, photoURL) {
    try {
      let myUser = { username: email, displayName, photoURL }
      let { data } = await axios(USER_API)
      let result = data.filter(item => {
        return item.username === email
      })
      localStorage.setItem('users', JSON.stringify(myUser))
      if (result.length === 0) {
        await axios.post(USER_API, myUser)
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  const value = {
    currentUser,
    adminEmail,
    addUserToJson,
    register,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
