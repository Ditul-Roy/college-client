
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase_config/Firebase_config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const googleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {

    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        emailSignUp,
        updateName,
        emailSignIn,
        githubSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;