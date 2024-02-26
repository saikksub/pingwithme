<template>
    <div class="space-y-2">
      <h1 class="font-bold text-green-400">Signup Page</h1>
      <UForm  class="space-y-4">
        <div
          class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
        >
          <div>
            First Name:
            <UInput
              type="text"
              placeholder="Enter your first name"
              v-model="firstName"
            />
            <div class="text-red-500">{{ errors.firstName }}</div>
          </div>
          <div>
            Last Name:
            <UInput
              type="text"
              placeholder="Enter your last name"
              v-model="lastName"
            />
            <div class="text-red-500">{{ errors.lastName }}</div>
          </div>
        </div>
        <div class="space-y-6">
          Email Id:
          <UInput
            type="text"
            placeholder="Enter your valid email id"
            v-model="email"
          />
          <div class="text-red-500">{{ errors.email }}</div>
        </div>
        <div
          class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
        >
          <div>
            New Password:
            <UInput type="password" v-model="password" />
            <div class="text-red-500">{{ errors.password }}</div>
          </div>
          <div>
            Retype Password:
            <UInput type="password" v-model="retypePassword" />
            <div class="text-red-500">{{ errors.retypePassword }}</div>
          </div>
        </div>
       
      </UForm>
      <div class="grid justify-center">
          <UButton @click="submitForm" label="Create Account" />
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