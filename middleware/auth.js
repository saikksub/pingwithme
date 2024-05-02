import { useAuth } from '~/stores/auth'
export default defineNuxtRouteMiddleware((to, from) => {
  if(useAuth().isUserAuthenticated) {
    return
  }
  return navigateTo({ path: '/'})
})