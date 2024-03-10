<script setup>
import UserLayout from '@/layout/UserLayout.vue'

import { ref, onMounted } from 'vue'

const profileImageUrl = ref('https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg')
const name = ref('')
const email = ref('')

const handdleFileUpload = (event) => {
    const file = event.target.files[0]

    if(file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const updateProfile = () => {
    const profileData = {
        imageUrl: profileImageUrl.value,
        name: name.value,
        email: email.value
    }
    localStorage.setItem('profile-data', JSON.stringify(profileData))
    alert('Success update profile. ')
}

onMounted(() => {
    let profileData = localStorage.getItem('profile-data')
    if(profileData) {
        profileData = JSON.parse(profileData)
        profileImageUrl.value = profileData.imageUrl
        name.value = profileData.name
        email.value = profileData.email
    }
})

</script>


<template>
    <UserLayout>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
            <div class="font-bold text-2xl">Your Profile</div>
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img
                                :src="profileImageUrl">
                        </div>
                    </div>
    
                    <input type="file" @change="handdleFileUpload">
                </div>

                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input v-model="email" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input v-model="name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button @click="updateProfile()" class="btn btn-neutral rounded-full w-full mt-4">Update Profile</button>
            </div>
        </div>
    </UserLayout>
</template>
