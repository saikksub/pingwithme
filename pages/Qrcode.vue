<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-200">
    <div>
      <qrcode-vue :value="qrData" :size="256" class="mx-auto"></qrcode-vue>
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

definePageMeta({
  middleware: 'auth'
})
const route = useRoute();
const qrData = computed(() => {
  const data = route.query.data;
  return data ? `${window.location.origin}/users/${data}` : '';
});

onMounted(() => {
  if (route.query.data) {
    console.log(qrData.value, 'data');
  }
});
</script>
