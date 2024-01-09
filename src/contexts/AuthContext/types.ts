export type ResponseUser = {
  uid: string
  email: string
}

export type User = {
  id: string
  email: string
}

export type AuthContextData = {
  user: User | null
  isLoading: boolean
  signIn: (password: string) => Promise<any>
  signOut: () => Promise<any>
}
