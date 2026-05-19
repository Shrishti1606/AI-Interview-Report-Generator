import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) // ← start as true

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const data = await getMe()
                if (data) {
                    setUser(data.user) // ← only access .user if data exists
                } else {
                    setUser(null)
                } 
            } catch {
                setUser(null)
            } finally {
                setLoading(false) // ← always runs
            }
        }
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}