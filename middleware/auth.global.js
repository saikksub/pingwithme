import { useUserStore } from '../store/user'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from, store ) => {
  const { isUserLoggedIn } = storeToRefs(useUserStore(store))

  // If user is not logged in, redirect to /signin
  if (!isUserLoggedIn.value || to.path === '/signin'|| to.path === '/signup'|| to.path === '/forgot-password', to.path === '/home' ) {
    console.log('Redirecting to /signin')
    return navigateTo('/')
  }

  // If user is logged in and trying to access /signin, redirect to /
  if (isUserLoggedIn.value || to.path !== '/') {
    console.log('Redirecting to /')
    return navigateTo('/')
  }
})


