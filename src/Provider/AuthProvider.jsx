import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firbase/firebase.config";

export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const CreateUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('Current User',currentUser);
            setLoading(false)
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const userInfo={
        user,
        
        loading,
        CreateUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={userInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;