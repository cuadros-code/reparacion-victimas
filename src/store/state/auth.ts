import { atom } from 'recoil'

interface IUser {
  id    : string
  email : string
  name  : string
}

interface IAuthState {
  isAuthenticated : boolean
  user            : IUser | null
}

const authAtom = atom<IAuthState>({
  key: 'auth',
  default: {
    isAuthenticated: false,
    user: null
  }
})

export { authAtom }