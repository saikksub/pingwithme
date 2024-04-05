import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export const signIn = async function (email, password) {
  try {
    const signInRes = await signInWithEmailAndPassword(getAuth(), email, password);
    return true;
  } catch (err) {
    console.error(err);
    return err;
  }
};
