import { Children, createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth=getAuth(app);

const AuthProvider = ({ children }) => {
    const brandName = 'JNU Readers Club'
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logout=()=>{
        setLoading(true);
        return signOut(auth)
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleAuthProvider);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


    // adding listener to register auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authinfo = {
        brandName,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        logout,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;