<template>
  <div class="flex ">
    <div class="absolute left-0 top-0 bottom-0 right-[100px] bg-white p-4">
      <div class="flex">
        <div class="w-[80px] mx-[70px]">
          <img class="img_bms" src="/dp.jpg" />
        </div>
        <div class="flex pt-[20px] px-[0px] mb-[20px] px-10">
          <UInput v-model="firstName" placeholder="First Name" class="w-[290px]"/>
          <UInput v-model="lastName" placeholder="Last Name" class="w-[290px]"/>
        </div>
      </div>
      <UTextarea class="mr-[980px] pt-[20px] pl-[70px] ml-auto mb-[10px] pb-[10px]" v-model="description" placeholder="Description"></UTextarea>
      <div class="relative flex-col mx-[50px]">
        <div v-if="showFlexBoxes" class="left-[250px] p-4 move-up">
          <div class="gap-4 text-black">
            <div v-for="(box, index) in flexBoxes" :key="index" :class="box.class">
              <div class="flex">
                <UInput v-model="box.MobileNo" placeholder="Mobile No" v-if="box.content === 'ContactInfo'"></UInput>
                <UInput v-model="box.AlternateNo" placeholder="Alternate No" v-if="box.content === 'ContactInfo'"></UInput>
                <template v-if="box.content === 'SocialMediaLinks'">
                  <template v-for="(link, linkIndex) in box.links" :key="linkIndex">
                    <select v-model="link.selectedSocialMedia" class="border p-1 m-1 rounded text-sm">
                      <option value="" disabled selected>Select Social Media</option> 
                      <!-- <a href="#" class="dropdown-item">
                       <img src="/home/xpmini04/nuxt-t/fb.jpg" alt="Icon 1" class="icon">
                        <span>Option 1</span>
                          </a> -->
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Github">Github</option>
                      <option value="Other">Other Platform</option>
                    </select>
                    <template v-if="link.selectedSocialMedia === 'Other'">
                      <UInput v-model="link.CustomLink" placeholder="Other Platform Link"></UInput>
                    </template>
                    <template v-else>
                      <div v-if="link.selectedSocialMedia === 'Facebook'">
                        <Icon name="uil:facebook" color="blue"/>
                      </div>
                      <div v-if="link.selectedSocialMedia === 'Twitter'">
                        <Icon name="uil:twitter" color="blue"/>
                      </div>
                      <div v-if="link.selectedSocialMedia === 'LinkedIn'">
                        <Icon name="uil:linkedin" color="blue"/>
                      </div>
                      <div v-if="link.selectedSocialMedia === 'Github'">
                        <Icon name="uil:github" color="black"/>
                      </div>
                      <UInput classs="m-1 p-1" v-model="link.Link" :placeholder="link.selectedSocialMedia + ' Link'"></UInput>
                    </template>
                  </template>
                  <UButton @click="addSocialMediaLink(index)" class="bg-blue-500 text-white p-2 rounded text-sm">Add</UButton>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div>
          <UButton @click="toggleOptions" class="px-10 mx-[350px] relative z-10">+</UButton>
        <div v-if="showOptions" class="mt-[5px] text-black ml-[350px] bg-white w-[150px] absolute z-10">
        <p @click="addFlexBox('ContactInfo')" class="bg-gray-200 p-1 m-1">ContactInfo</p>
        <p @click="addFlexBox('SocialMediaLinks')" class="shadow bg-gray-200 p-1 m-1">SocialMediaLinks</p>
      </div>
        </div>
      </div>
    </div>
    <div class="absolute right-0 top-0 bottom-0 left-[1100px] text-black p-4 max-w-md">
      <div class="bg-gray-100 rounded-md p-4">
      <h2 class="font-bold">Preview</h2>
        <div class="border-t border-gray-300 pt-2">
          <div class="mb-2">First Name: {{ firstName }}</div>
          <div class="mb-2">Last Name: {{ lastName }}</div>
          <div class="mb-2">Description : {{ description }}</div>
          <template v-for="(box, index) in flexBoxes" :key="index">
            <template v-if="box.content === 'ContactInfo'">
              <div class="mb-2">Mobile No: {{ box.MobileNo }}</div>
              <div class="mb-2">Alternate No: {{ box.AlternateNo }}</div>
            </template>
            <template v-else-if="box.content === 'SocialMediaLinks'">
              <div v-for="(link, linkIndex) in box.links" :key="linkIndex" class="flex mb-2">
                {{ link.selectedSocialMedia }} Link: {{ link.CustomLink ? link.CustomLink : link.Link }}
                <div v-if="link.selectedSocialMedia === 'Facebook'">
                        <Icon name="uil:facebook" color="blue"/>
                </div>
                <div v-if="link.selectedSocialMedia === 'Twitter'">
                        <Icon name="uil:twitter" color="blue"/>
                </div>
                <div v-if="link.selectedSocialMedia === 'LinkedIn'">
                        <Icon name="uil:linkedin" color="blue"/>
                </div>
                <div v-if="link.selectedSocialMedia === 'Github'">
                        <Icon name="uil:github" color="black"/>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const firstName = ref('')
const lastName = ref('')
const description = ref('')
const showOptions = ref(false)
const showFlexBoxes = ref(false)
const flexBoxes = ref([])

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
}

const addFlexBox = (option) => {
  let inputFields = {};
  if (option === 'ContactInfo') {
    inputFields = { MobileNo: '', AlternateNo: '' };
  } else if (option === 'SocialMediaLinks') {
    inputFields = { links: [{ selectedSocialMedia: '', CustomLink: '', Link: '' }] };
  }
  flexBoxes.value.push({ content: option, class: 'p-1 m-1', ...inputFields });
  showFlexBoxes.value = true;
  showOptions.value = false;
};

const addSocialMediaLink = (index) => {
  flexBoxes.value[index].links.push({ selectedSocialMedia: '', CustomLink: '', Link: '' });
};
</script>

<style scoped>
  .move-up {
    margin-top: -30px; 
  }

/* Set icon size */
.icon {
  width: 28px;
  height: 24px;
  margin-right: 5px;
}

</style>