import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    const registerSystem = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginSystem = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutSystem = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateInfo = (name, photoURL) => {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const infoValue = { user, loading, registerSystem, loginSystem, signOutSystem, updateInfo }

    return (
        <AuthContext.Provider value={infoValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;