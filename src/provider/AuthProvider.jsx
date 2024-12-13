import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    console.log(user)

    // create user with email and password
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    // login user with email and password
    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    // login user with google 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(googleProvider);
    };

    // logout user
    const logoutUser = () => {
        signOut(auth)
    };

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };

    },[]);

    

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        logoutUser,
    }

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

AuthProvider.propTypes = {
    children: PropTypes.any,
};

export default AuthProvider;