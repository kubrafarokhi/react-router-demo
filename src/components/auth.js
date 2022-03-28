import React, {Children, useState} from 'react';

const AuthContext = React.createContext(null);

export const AuthProvider = () =>{
    const [user, setUser] = useState(null);

    const login = ()=>{
        setUser(user)
    }
    const logout = () =>{
        setUser(null)
    }
    return (
        <AuthContext.Provider values={}>
            {Children}
        </AuthContext.Provider>
    )

}