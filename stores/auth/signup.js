import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async function (email, password) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(getAuth(), email, password)
    return userCredentials
  } catch (err) {
    console.error(err)
    return false
  }
}
