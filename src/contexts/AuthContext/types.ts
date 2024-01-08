export type User = {
  id: string
  name: string
  email: string
  photoUrl: string
}

export type AuthContextData = {
  user: User | null
  isLoading: boolean
  signIn: (password: string) => Promise<any>
  signOut: () => Promise<any>
}
