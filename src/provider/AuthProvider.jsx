import { Children, createContext } from "react";



export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const brandName = 'EBLA Library'
    const authinfo = {
        brandName
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;