<!-- pages/QrCode.vue -->
<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-200">
      <div>
        <qrcode-vue :value="qrData" :size="256" class="mx-auto"></qrcode-vue>
      </div>
    </div>
  </template>
  
  <script>
  import QrcodeVue from 'qrcode.vue';
  
  export default {
    components: {
      QrcodeVue
    },
    data() {
      return {
        qrData: ''
      };
    },
    mounted() {
      if (this.$route.query.data) {
        this.qrData = this.$route.query.data;
      }
    }
  }
  </script>
  