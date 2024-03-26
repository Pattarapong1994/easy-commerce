<script setup>
import { RouterLink } from 'vue-router'
import { useAdminProductStore } from '@/stores/admin/product'
import { onMounted } from 'vue'

import AdminLayout from '@/layout/AdminLayout.vue'

import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'
import Table from '@/components/Table.vue'

const adminProductStore = useAdminProductStore()

onMounted(() => {
  adminProductStore.loadProducts()
})
const removeProduct = (index) => {
  adminProductStore.removeProduct(index)
}

</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between m-4">
      <div class="text-2xl font-bold">Product</div>
      <div>
        <RouterLink :to="{ name: 'admin-product-create' }" class="btn btn-nueatal rounded-full">ADD NEW +</RouterLink>
      </div>
    </div>
    <Table :headers="['Name', 'Image', 'Price', 'Quantity', 'Status', 'UpdateAt', '']">

      <tr v-for="product, index in adminProductStore.list">
        <th>{{ product.name }}</th>
        <td>
          <img :src="product.image" class="w-12">
        </td>
        <td>{{ product.price }}</td>
        <td>{{ product.remainQuantity  }} / {{ product.quantity }}</td>
        <td>
          <div class="badge gap-2" :class="product.status === 'Open' ? 'badge-success' : 'badge-error'">
            {{ product.status }}</div>
        </td>
        <td>{{ product.updatedAt }}</td>
        <td>
          <div class="flex gap-2">
            <RouterLink :to="{ name: 'admin-product-update', params: { id: index } }" class="btn btn-ghost">
              <Edit></Edit>
            </RouterLink>
            <div @click="removeProduct(index)" class="btn btn-ghost">
              <Trash></Trash>
            </div>
          </div>
        </td>
      </tr>
    </Table>
  </AdminLayout>
</template>