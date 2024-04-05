import { defineStore } from "pinia";
import { createUser } from "./actions/user/createUser";

const defaultStates = () => {
  return {
    profile: {}
  }
}

export const useUser = defineStore('user', {
  state: () => {
    return {
      ...defaultStates()
    }
  },
  actions: {
    createUser
  }
})
