import { ResponseUser } from './types'

export const formatUser = (user: ResponseUser) => {
  return user ? { id: user.uid, email: user.email } : null
}
