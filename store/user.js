import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isUserLoggedIn: false
  }),
  actions: {
    async login() {
      try {
        await getAuth().signInWithPopup(new getAuth.GoogleAuthProvider())
        this.user = ref(getAuth().currentUser)
        this.isUserLoggedIn = true
      } catch (error) {
        console.error(error)
      }
    },
    async logout() {
      try {
        await getAuth().signOut()
        this.user = null
        this.isUserLoggedIn = false
      } catch (error) {
        console.error(error)
      }
    }
  }
})
