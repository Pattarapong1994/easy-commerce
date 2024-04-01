<script setup>
import { ref, reactive, onMounted } from 'vue'
import AdminLayout from '@/layout/AdminLayout.vue'
import { useRoute, useRouter } from 'vue-router'

import { useAdminUserStore } from '@/stores/admin/user'


const formData = [
    {
        name: 'Name',
        field: 'fullname',
        type: 'text'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdownlist: ['admin', 'moderator', 'user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdownlist: ['active', 'inactive']
    }
]

const adminUserStore = useAdminUserStore()
const route = useRoute()
const router = useRouter()

const userIndex = ref(-1)
const userData = reactive({
    fullname: '',
    role: '',
    status: ''
})

onMounted(() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userIndex.value)

        userData.fullname = selectedUser.fullname
        userData.role = selectedUser.role
        userData.status = selectedUser.status

    }
})

const updateUser = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    router.push({ name: 'admin-user-list' })
}


</script>


<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-2xl font-bold">Update user</div>
            <div class="divider"></div>
            <div class="grid gap-4 ">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label ">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-if="form.type === 'text'" type="text" class="input input-bordered w-full"
                        v-model="userData[form.field]" />
                    <select v-if="form.type === 'select'" class=" select select-bordered w-full"
                        v-model="userData[form.field]">
                        <option v-for="item in form.dropdownlist">{{ item }}</option>
                    </select>
                </label>
            </div>
            <div class="flex justify-end mt-4">
                <div>
                    <RouterLink :to="{ name: 'admin-user-list' }" class="btn btn-ghost">BACK</RouterLink>
                    <button class="btn btn-neutral ml-2" @click="updateUser()">UPDATE</button>
                </div>
            </div>
        </div>



    </AdminLayout>
</template>