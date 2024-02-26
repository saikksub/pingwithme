<template>
    <div class="space-y-4 mx-[200px] my-[300px] space-y-2 rounded-md">
      <h3>Pingwithme</h3>
      <h1 class="font-bold text-2xl">Sign In</h1>
      
      <UInput type="text" placeholder="Email" />
      <UInput type="text" placeholder="Password" />
      
      <div>
        <UButton class="text-black font-bold">Sign In</UButton>
      </div>
      <div>
        <router-link to="/signup">
          <UButton label=" Don't you have an account? Sign Up" variant="block" color="white" 
          class="font-bold bg-green-950 px-[10px] py-[8px] text-green-400"/></router-link>
      </div>
    </div>
  </template>
  <script></script>