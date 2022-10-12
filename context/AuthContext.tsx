import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../config/firebase';
import { localStorageMethods } from '../classes/localStorageMethods';

const AuthContext = createContext<any>({})
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsuscribe()
    }, [])

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        localStorageMethods.setItem('user', { 'status': '' })
        await signOut(auth)
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{loading ? null : children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)