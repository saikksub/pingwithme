import { useAuth } from '../stores/auth'
export default defineNuxtRouteMiddleware((to, from) => {
  const { isUserAuthenticated } = useAuth();
  if (!isUserAuthenticated) {
    if (to.path !== '/') {
      return navigateTo({ path: '/' });
    }
  }
})
