<!-- <template>
    <quill-editor
      :content="props.content"
      content-type="html"
      toolbar="full"
      @update:content="updateContent"
    />
  </template>
  
  <script setup>
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  }
});

  const emit = defineEmits(['update:content']);
  
  const updateContent = (value) => {
    emit('update:content', value);
  };
  </script> -->