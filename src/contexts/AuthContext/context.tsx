'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useApiCall } from '@/hooks'
import { useFirebaseAuth } from '@/lib/firebase'
import { AuthContextData, User } from './types'
import { formatUser } from './utils'

export type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const { call, isLoading, setIsLoading } = useApiCall()
  const { firebaseSignIn, firebaseSignOut, onAuthChange } = useFirebaseAuth()
  const [user, setUser] = useState<User | null>(null)

  const signIn = call(firebaseSignIn, { toastText: 'Bem vindo!' })

  const signOut = call(firebaseSignOut, { toastText: 'Desconectado!' })

  const handleAuthChange = (currentUser: User) => {
    setUser(formatUser(currentUser))
    setIsLoading(false)
  }

  useEffect(() => {
    const unsubscribe = onAuthChange(handleAuthChange)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
