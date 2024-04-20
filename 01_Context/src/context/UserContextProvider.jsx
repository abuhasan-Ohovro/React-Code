// Provider file is a .jsx file because it works as wrapper of all the other .jsx component.All the .jsx component who is in between the provider ,Provider has access of their data and network calls.

import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
     return (
         <UserContext.Provider value={{user,setUser}}>
            {children}
         </UserContext.Provider>


     )
  

}

export default UserContextProvider