import { useAuth } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuth()

  // Check if the user is authenticated
  const isAuthenticated = await authStore.isAuth()

  // If the user is not authenticated and trying to access a protected route, redirect to login
  if (!isAuthenticated && to.meta.requiresAuth) {
    return navigateTo('/')
  }

  // If the user is authenticated and trying to access the login page, redirect to the home page
  if (isAuthenticated && to.path === '/login') {
    return navigateTo('/home')
  }
})