import {createContext , useState,useEffect} from'react';
import { createUserDocumentFromAuth,onAuthStateChangedListener } from '../firebase.utils';
export const UserContext = createContext({
    currentUser : null,
    setcurrentUser : ()=>null
});

export const UserProvider = ({children})=>{
    const [currentUser,setcurrentUser]=useState(null);
    const value = {currentUser,setcurrentUser};

    useEffect (()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user) createUserDocumentFromAuth(user);
            setcurrentUser(user);
        })
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}