<script setup>
import AdminLayout from '@/layout/AdminLayout.vue'

const formData = [
    {
        name:'Name',
        field:'name',
        type:'text'
    },
    {
        name:'Role',
        field:'role',
        type:'text'
    },
    {
        name:'Status',
        field:'status',
        type:'select',
        dropdownlist:['active','inactive']
    }
]

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
                    <input v-if="form.type === 'text'" type="text" class="input input-bordered w-full"/>
                    <select v-if="form.type === 'select'">
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