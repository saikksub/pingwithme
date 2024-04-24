
 import { initializeApp}  from "firebase/app";


export default defineNuxtPlugin(nuxtApp => {
    
const firebaseConfig = {
  apiKey: "AIzaSyBwq1BKKFULcCLPIX_eh-7bthrBbuOQwH0",
  authDomain: "nuxt-c1de4.firebaseapp.com",
  databaseURL: "https://nuxt-c1de4-default-rtdb.firebaseio.com",
  projectId: "nuxt-c1de4",
  storageBucket: "nuxt-c1de4.appspot.com",
  messagingSenderId: "787856450311",
  appId: "1:787856450311:web:fef86da958d21cdda85ba2"
};
const app = initializeApp(firebaseConfig);

  })
 
