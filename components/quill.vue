<template>
<ClientOnly>
    <QuillEditor toolbar="full" v-model:content="value" content-type="html"></QuillEditor>
  </ClientOnly>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill"


const value = ref('')
</script>