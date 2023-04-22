import { createContext, useState } from "react"

export const UserContext = createContext()


export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        address: ""
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const init = () => {
        setUser({
            email: "lucoadam@gmail.com",
            name: "Alish Dahal",
            address: "Gatthaghar"
        })
    }

    return <UserContext.Provider value={{
        user,
        // users,
        setUser,
        init,
        isLoggedIn
    }} >
            {children}
    </UserContext.Provider>
}