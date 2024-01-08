import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL || ''

export const useFirebaseAuth = () => {
  const auth = getAuth()

  const firebaseSignIn = async (password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const firebaseSignOut = () => {
    return signOut(auth)
  }

  const onAuthChange = (callback: (user: any) => void) => {
    return onAuthStateChanged(auth, callback)
  }

  return { firebaseSignIn, firebaseSignOut, onAuthChange }
}
