<template>
    <div v-for="list in lists">{{ list }}</div>
</template>

<script setup>
import 'firebase/firestore'


const entrySnapshot = await firestore()
      .collection('users')
      .get()
const lists = entrySnapshot
console.log(lists);
</script>