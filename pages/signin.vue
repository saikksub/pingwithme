<template>
<div class="space-y-3">
<h3 class="text-xl font-bold">SignIn Page</h3>


<UInput type="text" placeholder="Enter a valid email address" />

<UInput type="text" placeholder="Enter your password"/>

<div class="grid justify-end">
  <router-link to="/forgot-password">
    <UButton
      color="white"
      variant="ghost"
      label="Forgot Password"
      class="font-bold rounded"
    />
  </router-link>
</div>

<div class="grid justify-center">
  <UButton class="text-black font-bold w-full">Sign In</UButton>
</div>
<div class="text-center">
  <router-link to="/signup">
    <UButton label=" Don't you have an account? Sign Up" variant="ghost" color="white" 
    class="font-bold "/></router-link>
</div>
</div>
</template>
<script setup>
definePageMeta({
  layout:'auth'
})

</script>
