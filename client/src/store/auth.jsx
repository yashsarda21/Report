/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const AuthorizationToken = `Bearer ${token}`;
    const[isLoading, setIsLoading] = useState(true);

    const storeTokenInLocalStorage = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token" , serverToken);
    }

    let isLoggedIn = !!token;
    

    const LogOutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    }

    const userAuthentication = async() =>{
        try {
            setIsLoading(true);
            const response = await fetch("https://reportapi.vercel.app/api/auth/user" ,{
                method: "GET",
                headers :{
                    Authorization : AuthorizationToken,
                },
            })

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
                console.log("USer data" , data.userData);
                setIsLoading(false);
            }else{
                setIsLoading(false)
            }
        } catch (error) {
            console.log("error while getting data", error);
        }
    }

    useEffect(() =>{
        userAuthentication()
    },[]);

    return <AuthContext.Provider value={{ storeTokenInLocalStorage ,LogOutUser,isLoggedIn,user,AuthorizationToken,isLoading}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    return useContext(AuthContext);
}