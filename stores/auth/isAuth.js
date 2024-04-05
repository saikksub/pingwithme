import { getAuth } from "firebase/auth";

export const isAuth = function () {
  return new Promise((res) => {
    const cb = getAuth().onAuthStateChanged((user) => {
      cb();
      if (user) {
        this.isUserAuthenticated = true
        res(true);
      } else {
        this.isUserAuthenticated = false
        res(false);
      }
    });
  });
}
