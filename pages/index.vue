<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Ping with Me</h1>
      <div class="flex justify-center gap-4">
        <nuxt-link to="/signin" class="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Sign In</nuxt-link>
        <button class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your script here
}
</script>

<style scoped>
/* You can add page-specific styles here */
</style>
