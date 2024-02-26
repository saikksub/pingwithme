<template>
    <div class="space-y-4 mx-[200px] my-[300px] space-y-2 rounded-md">
      <h3>Pingwithme</h3>
      <h1 class="font-bold text-2xl">Reset your password</h1>
      <UInput
        v-model="email"
        type="text"
        placeholder="Email"
      />
      <div v-if="!showMessage">
      <UButton 
           class="px-4 py-2 rounded-md bg-green-400 font-bold"
          @click="sendResetLink"
          label="Submit"/>
        </div>
        <div>
        <router-link to="/signin">
          <UButton label="Back to sign in" variant="block" color="white"
          class="font-bold bg-green-950 px-[10px] py-[8px] text-green-400"/></router-link>
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