<script setup>
import AdminLayout from '@/layout/AdminLayout.vue'
import Table from '@/components/Table.vue'
import { useAdminOrderStore } from '@/stores/admin/order'
import { RouterLink } from 'vue-router'

const adminOrderStore = useAdminOrderStore()

</script>


<template>
    <AdminLayout>
        <div class="flex items-center justify-between m-4">
            <div class="text-2xl font-bold">Order</div>
        </div>
        <Table :headers="['Customer Name', 'Price', 'Status', 'Updated At', '']">
            <tr v-for="order, index in  adminOrderStore.list ">
                <td>{{ order.customerName }}</td>
                <td>{{ order.totalPrice }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.updatedAt }}</td>
                <td>
                    <RouterLink :to="{ name: 'admin-order-detail', params: { id: index } }" class="btn rounded-full"> See
                        detail</RouterLink>
                </td>

            </tr>
        </Table>

    </AdminLayout>
</template>