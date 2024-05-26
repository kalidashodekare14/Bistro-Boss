import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider
    const axiosPublic = UseAxiosPublic()

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
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const handleGoogleSignin = () => {
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                console.log(userInfo)
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                // TODO: Log Out
                localStorage.removeItem('access-token');
            }
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [axiosPublic, user])



    const infoValue = { user, loading, registerSystem, loginSystem, signOutSystem, updateInfo, handleGoogleSignin }

    return (
        <AuthContext.Provider value={infoValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;