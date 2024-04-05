import { defineStore } from 'pinia'
import { signIn } from "./auth/signin";
import { signUp } from "./auth/signup";
import { isAuth } from './auth/isAuth'

export const useAuth = defineStore('auth', {
  state: () => ({
    isUserAuthenticated: false,
    loading: false
  }),

  actions: {
    isAuth,
    signIn,
    signUp,
  }
})

