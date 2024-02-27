<template>
    <div class="space-y-4 mx-[200px] my-[300px] space-y-2 rounded-md">
      <h3>Pingwithme</h3>
      <h1 class="font-bold text-2xl">Sign Up</h1>
      <UForm  class="space-y-4">
        <div
          class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <div>
            
            <UInput
              type="text"
              placeholder="First Name"
              v-model="firstName"
            />
            <div class="text-red-500">{{ errors.firstName }}</div>
          </div>
          <div>
            <UInput
              type="text"
              placeholder="Last Name"
              v-model="lastName"
            />
            <div class="text-red-500">{{ errors.lastName }}</div>
          </div>
        </div>
        <div class="space-y-6">
          <UInput
            type="text"
            placeholder="Email"
            v-model="email"
          />
          <div class="text-red-500">{{ errors.email }}</div>
        </div>
        <div>
          <div>
            <UInput type="password" v-model="password" placeholder="Password"/>
            <div class="text-red-500">{{ errors.password }}</div>
          </div>
        </div>
       
      </UForm>
      <div>
          <UButton class="font-bold px-[10px] py-[8px]" @click="submitForm" label="Create Account" />
        </div>
        <div>
        <router-link to="/signin">
          <UButton label=" Already have an account? Sign In" variant="block" color="white"
          class="font-bold bg-green-950 px-[10px] py-[8px] text-green-400"/></router-link>
      </div>
      <div v-if="showMessage" class="message-box bg-pink-100 border border-pink-400 text-pink-700 px-4 py-2 rounded-md  flex justify-center">
        Your account has been created successfully.Redirecting to signin page...
   </div>
  </div>
  </template>
  <script setup>
  import { ref, computed } from "vue";
  import { useField, useForm } from "vee-validate";
  import * as yup from "yup";
  import { useRouter } from "vue-router";
  const { errors, handleSubmit, defineField } = useForm({
    validationSchema: yup.object({
      firstName: yup.string().required("first Name is required"),
      lastName: yup.string().required("last name is required"),
      email: yup.string().email().required("enter a valid email"),
      password: yup.string().min(6).required("enter a valid password"),
      retypePassword: yup
        .string()
        .matches()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required("Passwords do not match"),
    }),
  });
  const router = useRouter();
  
  const [firstName] = defineField("firstName");
  const [lastName] = defineField("lastName");
  const [email] = defineField("email");
  const [password] = defineField("password");
  const [retypePassword] = defineField("retypePassword");
  
  const showMessage = ref(false);
  
  const submitForm = handleSubmit(async (values) => {
    console.log("Form submitted:", values);
    showMessage.value = true;
  
    await new Promise((resolve) => setTimeout(resolve, 3000));
  
    showMessage.value = false;
  
    // Redirect to '/signin'
    router.push("/signin");
    return {
      submitForm,
      showMessage,
    };
  });
  </script>