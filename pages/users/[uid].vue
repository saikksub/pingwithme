<template>
  <div v-if="userData" class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">User Data</h1>
    <div class="mb-2">First Name: {{ userData.firstName }}</div>
    <div class="mb-2">Last Name: {{ userData.lastName }}</div>
    <div class="mb-2">Description: {{ userData.description }}</div>
    <!-- Display additional fields as needed -->
  </div>
</template>

<script setup>
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

definePageMeta({
  middleware: 'auth'
})
const route = useRoute()
const userData = ref(null)

onMounted(async () => {
  const usersCollection = getFirestore();
  const docRef = doc(usersCollection, 'users', route.params.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    userData.value = docSnap.data();
  } else {
    console.error('No user found with ID:', route.params.uid);
  }
})
</script>
