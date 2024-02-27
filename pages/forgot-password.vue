<template>
    <div class="space-y-3">
      <h2 class="text-2xl font-bold">Password Recovery Page</h2>
      <UInput
        v-model="email"
        type="text"
        placeholder="Enter your email to recover the password"
      />
      <div v-if="!showMessage" class="grid justify-center ">
      <UButton color="bg-blue-300"
           class="px-4 py-2 rounded-md bg-blue-300"
          @click="sendResetLink"
          label="Send Reset Password Link"/>
  </div>
  
      <div
        v-if="showMessage"
        class="message-box bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md"
      >
        <div class="flex justify-center font-bold ">
          A password reset link has been sent to {{ email }}. Please check your
          email.
        </div>
        <div class="flex justify-center mt-2">
          <router-link to="/signin">
            <UButton
              @click="hideMessage"
              label="OK"
              class="px-4 py-2 rounded-md"/>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const email = ref("");
  const showMessage = ref(false);
  
  const sendResetLink = () => {
    setTimeout(() => {
      showMessage.value = true;
    });
  };
  
  const hideMessage = () => {
    showMessage.value = false;
    return { email, showMessage, sendResetLink, hideMessage };
  };
  </script>