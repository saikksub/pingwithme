import { getAuth } from "firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Attempting to access:", to.path);

  const auth = getAuth(); // Get the Firebase Auth instance
  const isAuthenticated = auth.currentUser?.uid; // Check if the user is authenticated

  // If trying to access the login page and already authenticated, redirect to home
  if (to.path === '/login' && isAuthenticated) {
    console.log("Already authenticated, redirecting to home...");
    return navigateTo('/home');
  }

  // If not authenticated and not trying to access the login page, redirect to login
  if (!isAuthenticated && to.path !== '/login') {
    console.log("Not authenticated, redirecting to login...");
    return navigateTo({ path: '/index', query: { to: to.path } });
  }

  // Allow navigation if authenticated or accessing the login page
  console.log("Access granted to:", to.path);
});
