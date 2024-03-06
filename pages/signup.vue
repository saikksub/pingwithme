<template>
  <div class="space-y-4">
    <h1 class="font-bold text-2xl">Sign Up</h1>
    <button @click="test"></button>
    <UForm class="space-y-4">
      <div
        class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
      >
        <div>
          <UInput type="text" placeholder="First Name" v-model="firstName" />
          <div class="text-red-500">{{ errors.firstName }}</div>
        </div>
        <div>
          <UInput type="text" placeholder="Last Name" v-model="lastName" />
          <div class="text-red-500">{{ errors.lastName }}</div>
        </div>
      </div>
      <div class="space-y-6">
        <UInput type="text" placeholder="Email" v-model="email" />
        <div class="text-red-500">{{ errors.email }}</div>
      </div>
      <div>
        <div>
          <UInput type="password" v-model="password" placeholder="Password" />
          <div class="text-red-500">{{ errors.password }}</div>
        </div>
      </div>
    </UForm>
    <div class="font-bold px-[10px] py-[8px]">
      <UButton @click="submitForm" label="Create Account" />
    </div>
    <div>
      <router-link to="/signin">
        <UButton
          label=" Already have an account? Sign In"
          variant="block"
          color="white"
          class="font-bold bg-green-950 px-[10px] py-[8px] text-green-400"
      /></router-link>
    </div>
    <div
      v-if="showMessage"
      class="message-box bg-blue-100 border border-blue-400 text-blue-900 px-4 py-2 rounded-md flex justify-center"
    >
      Your account has been created successfully!...
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required("first Name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup.string().email().required("enter a valid email"),
    password: yup.string().min(6).required("enter a valid password"),
  }),
});
const router = useRouter();

const [firstName] = defineField("firstName");
const [lastName] = defineField("lastName");
const [email] = defineField("email");
const [password] = defineField("password");

const showMessage = ref(false);

const submitForm = handleSubmit(async (values) => {
  console.log("Form submitted:", values);
  showMessage.value = true;

  const auth = getAuth();
  console.log(auth);
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  showMessage.value = false;

  router.push("/home");
  return {
    submitForm,
    showMessage,
  };
});
</script>
