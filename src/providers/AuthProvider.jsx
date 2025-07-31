import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';



export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);


     //create user
    const createUserWithPass = (email, password) => {
       return createUserWithEmailAndPassword(auth, email,password);
    }
   

    //sign in with email and password
    const signInWithEmailPass = (email,password) => {
     return signInWithEmailAndPassword(auth,email,password);

    }
     
    //sign in with google

     const signInWithGoogle = (provider) => {
      return signInWithPopup(auth,provider);
    }

    useEffect(() => {
     const unsusbcribe = onAuthStateChanged(auth,(user) => {
      if(user){
        console.log("Logged in User.");
        setUser(user)
      }
      else{
        console.log("user in sign out.");
        setUser(null);
      }
    })
      return () => unsusbcribe() ;}, [] );

    const handleSignout = () => {
      signOut(auth)
    }

    const authInformation = {
        user,
        handleSignout,
        createUserWithPass,
        signInWithEmailPass,
        signInWithGoogle
        
      
    }
  return (
    <AuthContext.Provider value={authInformation}>
        {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider