<template>
  <UForm class="space-y-4">
    <h1 class="font-bold text-2xl">Sign In</h1>
    <div>
      <UInput type="text" placeholder="Email" v-model="email" />
      <div class="text-red-500">{{ errors.email }}</div>
    </div>
    <div>
      <UInput type="password" placeholder="Password" v-model="password" />
      <div class="text-red-500">{{ errors.password }}</div>
    </div>
    <div>
      <UButton class="text-black font-bold" @click="signinForm"
        >Sign In</UButton
      >
    </div>
    <div>
      <router-link to="/signup">
        <UButton
          label=" Don't you have an account? Sign Up"
          variant="block"
          color="white"
          class="font-bold bg-green-950 px-[10px] py-[8px] text-green-400"
      /></router-link>
    </div>
  </UForm>
</template>
<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required("enter a valid email"),
    password: yup.string().required("enter a valid password"),
  }),
});
const router = useRouter();
const [email] = defineField("email");
const [password] = defineField("password");

const signinForm = handleSubmit(async (values) => {
  try {
    const response = await signInWithEmailAndPassword(
      getAuth(),
      values.email,
      values.password
    );

    console.log(response);
    router.push("/home");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(error);
  }
});
</script>
