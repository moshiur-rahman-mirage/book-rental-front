import { Children, createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth=getAuth(app);

const AuthProvider = ({ children }) => {
    const brandName = 'EBLA Library'
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


    // adding listener to register auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
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
        loading
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;