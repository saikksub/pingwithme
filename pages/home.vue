<template>
  <div class="flex min-h-screen">
    <!-- Main Content Area -->
    <div class="w-1/2 p-8 overflow-auto">
      <div class="max-w-lg mx-auto">
        <!-- Profile Picture Placeholder -->
        <input type="file" @change="handleImageUpload" class="w-20 h-20 bg-gray-200 rounded-full mx-auto" />
        <!-- Name Input Fields -->
        <div class="flex justify-center pt-5 mb-5 gap-4">
          <UInput v-model="firstName" placeholder="First Name" class="flex-1"/>
          <UInput v-model="lastName" placeholder="Last Name" class="flex-1"/>
        </div>
        <!-- Description Textarea -->
        <quill v-model="description" class="mb-5" />
        <UTextarea v-model="description" placeholder="Additional notes" class="w-full"/>
        <!-- Dynamic Flex Boxes for Different Sections -->
        <div v-if="showFlexBoxes" class="mt-4">
          <div v-for="(box, index) in flexBoxes" :key="index" class="p-4 rounded my-2">
            <h3>{{ box.title }}</h3>
            <div class="flex flex-wrap gap-4 mb-2" v-for="(field, fIndex) in box.fields" :key="fIndex">
              <UInput v-model="field.value" :placeholder="field.placeholder" class="flex-grow" />
              <<UButton @click="deleteField(index, fIndex)" class="ml-auto">
                delete
              </UButton>
            </div>
          </div>
        </div>
        <!-- Add New Flex Box Section -->
        <div class="relative">
          <UButton @click="toggleOptions" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">+ Add Section</UButton>
          <div v-if="showOptions" class="absolute  border p-2 mt-2 rounded shadow-lg z-10">
            <select @change="addFlexBox" class="p-2 cursor-pointer">
              <option disabled selected>Add new section...</option>
              <option v-for="option in Object.keys(fieldsByOption)" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
        </div>
        <!-- Submit Button -->
        <div class="flex justify-center mt-4">
          <UButton @click="handleSubmit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Generate QR Code</UButton>
        </div>
      </div>
    </div>
    <!-- Preview Pane -->
    <div class="w-1/2 bg-gray-800 p-8 text-white overflow-auto">
      <div class="max-w-lg mx-auto">
        <h2 class="text-lg font-bold text-center">Preview</h2>
        <div class="border-t border-gray-500 pt-4">
          <div class="mb-2">First Name: {{ firstName }}</div>
          <div class="mb-2">Last Name: {{ lastName }}</div>
          <div class="mb-2">Description: {{ description }}</div>
          <!-- Dynamic Preview Content -->
          <div v-for="(box, index) in flexBoxes" :key="index" class="mb-4">
            <h3>{{ box.title }}</h3>
            <div v-for="(field, fIndex) in box.fields" :key="fIndex">
              <div>{{ field.label }}: {{ field.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firstName = ref('')
const lastName = ref('')
const description = ref('')
const showOptions = ref(false)
const showFlexBoxes = ref(true)  
const flexBoxes = ref([])
const router = useRouter()
const profilePicture = ref(null);
const toggleOptions = () => {
  showOptions.value = !showOptions.value
}

const addFlexBox = (event) => {
  const type = event.target.value;
  flexBoxes.value.push({
    title: type,
    fields: fieldsByOption[type]
  });
  showOptions.value = false;
};

const deleteField = (boxIndex, fieldIndex) => {
  flexBoxes.value[boxIndex].fields.splice(fieldIndex, 1);
  if (flexBoxes.value[boxIndex].fields.length === 0) {
    flexBoxes.value.splice(boxIndex, 1); // Remove the whole box if no fields are left
  }
};
const addSocialMediaLink = (index) => {
  flexBoxes.value[index].links.push({ selectedSocialMedia: '', CustomLink: '', Link: '' })
}
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePicture.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const fieldsByOption = {
  "Basic Information": [
    { label: "Full Name", placeholder: "Full Name", value: "" },
    { label: "Date of Birth", placeholder: "DD/MM/YYYY", value: "" },
    { label: "Place of Birth", placeholder: "City, Country", value: "" },
    { label: "Nationality", placeholder: "Nationality", value: "" },
    { label: "Gender", placeholder: "Gender", value: "" }
  ],
  "Contact Information": [
    { label: "Home Address", placeholder: "Street, City, State, Postal Code", value: "" },
    { label: "Phone Number", placeholder: "Phone Number", value: "" },
    { label: "Email Address", placeholder: "Email Address", value: "" }
  ],
  "Emergency Contact": [
    { label: "Emergency Contact Name", placeholder: "Name", value: "" },
    { label: "Relationship", placeholder: "Relationship", value: "" },
    { label: "Emergency Contact Phone Number", placeholder: "Phone Number", value: "" },
    { label: "Emergency Contact Email Address", placeholder: "Email Address", value: "" }
  ],
  "Health Information": [
    { label: "Blood Type", placeholder: "Blood Type", value: "" },
    { label: "Known Allergies", placeholder: "Allergies", value: "" },
    { label: "Medications", placeholder: "Medications", value: "" },
    { label: "Primary Physician", placeholder: "Name and Contact Information", value: "" }
  ],
  "Employment Information": [
    { label: "Occupation", placeholder: "Occupation", value: "" },
    { label: "Employer Name", placeholder: "Employer Name", value: "" },
    { label: "Work Address", placeholder: "Address", value: "" },
    { label: "Work Phone Number", placeholder: "Phone Number", value: "" },
    { label: "Work Email Address", placeholder: "Email Address", value: "" }
  ],
  "Education Information": [
    { label: "Highest Educational Level", placeholder: "Degree/Qualification", value: "" },
    { label: "School/College/University", placeholder: "Institution Name", value: "" }
  ],
  "Financial Information": [
    { label: "Bank Name", placeholder: "Bank Name", value: "" },
    { label: "Account Number(s)", placeholder: "Account Number", value: "" }
  ],
  "Digital Information": [
    { label: "Social Media Accounts", placeholder: "List of Social Media Platforms and Usernames", value: "" }
  ],
  "Personal Preferences": [
    { label: "Hobbies/Interests", placeholder: "List of Hobbies and Interests", value: "" },
    { label: "Favorite Foods", placeholder: "List", value: "" },
    { label: "Travel History", placeholder: "Countries/Cities Visited", value: "" }
  ]
};

async function handleSubmit() {
  console.log('hello')
  let data = {
    firstName: firstName.value,
    lastName: lastName.value,
    description: description.value,
    profilePicture: profilePicture.value,
    additionalInfo: flexBoxes.value.map(box => ({
      title: box.title,
      fields: box.fields.map(f => ({ label: f.label, value: f.value }))
    }))
  };
  const usersCollection = collection(getFirestore(), "users");
  try{  
  const docRef = await addDoc(usersCollection, data);
    console.log("User document added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding user document:", error);
  }
  let dataString = JSON.stringify(data);
  router.push({ path: '/QrCode', query: { data: dataString } });
}
</script>

<style scoped>
  .move-up {
    margin-top: -30px;
  }
</style>
