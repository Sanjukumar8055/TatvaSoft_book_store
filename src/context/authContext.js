import Cookies from "js-cookie";
import React, { Children, createContext, useState } from "react";


const intialUserValue = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    roleId: "",
    role: "",
    password: "",
};

const initialstate = {
    setUser: () => { },
    user: intialUserValue,
    signOut: () => { },
    appInitialize: false,
};
export const AuthContext = createContext(initialstate);



const AuthWrapper = ({ children }) => {


    // useState Declarations
    const [userData, setUserData] = useState();


    // Functions Declaration

    const setUser = (data) => {
        Cookies.set("UserInfo", data);
        console.log("data11", data);
        setUserData(data);
    }


    const signOut = (data) => {
        Cookies.set("UserInfo", {});
    };


    // values Declaration
    let value = {
        setUser,
        userData, 
        signOut
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
};


export default AuthWrapper;
