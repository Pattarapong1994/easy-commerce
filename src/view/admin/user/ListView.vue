<script setup>
import AdminLayout from '@/layout/AdminLayout.vue'
import { RouterLink } from 'vue-router'

import { useAdminUserStore } from '@/stores/admin/user'

import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'
import Table from '@/components/Table.vue'

const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let selectedUser = adminUserStore.list[index]
    selectedUser.status = selectedUser.status === 'active' ? 'inactive' : 'active'
    adminUserStore.updateUser(selectedUser)
}

</script>


<template>
    <AdminLayout>

        <div class="flex items-center justify-between m-4">
            <div class="text-2xl font-bold">User</div>
        </div>
        <Table :headers="['Name', 'Role', 'Status', 'Updated At', '']">
            <tr v-for="user, index in adminUserStore.list">
                <td>{{ user.fullname }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.updatedAt }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink 
                        :to="{ name: 'admin-user-update', params: { id: index } }" class="btn rounded-full" @click="updatedUser(index)">Edit</RouterLink>


                        <button class="btn rounded-full" @click="changeStatus(index)">
                            {{ user.status === 'active' ? 'Disable' : 'Enable' }}
                        </button>
                    </div>

                </td>
            </tr>

        </Table>

    </AdminLayout>
</template>