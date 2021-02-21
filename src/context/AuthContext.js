import React , {createContext, useEffect, useState} from 'react';
import axios from "axios";


const AuthContext = createContext()

function AuthContextProvider(props) {
    const [loggedIn , setLoggedIn] = useState(undefined);

    const getLoggedInStatus = async(e) =>{
       
        const loggedStatus = await axios.get("/api/auth/loggedIn");
        setLoggedIn(loggedStatus.data)
      }

      useEffect(()=> {
        getLoggedInStatus();
      },[])
    return (
        <AuthContext.Provider value={{loggedIn,getLoggedInStatus}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export  {AuthContextProvider}
