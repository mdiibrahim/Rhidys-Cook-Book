import React, { useEffect, useState} from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import {app} from '../Firebase/Firebase.Config'
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [spinner, setSpinner] = useState(false);

    const createUser = (email, password) => {
        setSpinner(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setSpinner(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setSpinner(true);
        return signOut(auth);
    }
   
    const registerWithGoogle = () => {
        setSpinner(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser || currentUser === null) {
                setUser(currentUser);
            }
            setSpinner(false);
        });
        return () => {
            unsubscribe();
        }
    },[]);
    const authInfo = {
        createUser,
        logIn,
        user,
        setSpinner,
        logOut,
        spinner,
        registerWithGoogle,
        setUser
    }
    
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;