<script setup>
import { RouterLink } from 'vue-router'
import { useAdminProductStore } from '@/stores/admin/product'

import AdminLayout from '@/layout/AdminLayout.vue'
import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'

const adminProduct = useAdminProductStore()

</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between m-4">
      <div class="text-2xl font-bold">Product</div>
      <div>
        <RouterLink :to="{ name: 'admin-product-create' }" class="btn btn-nueatal rounded-full">ADD NEW +</RouterLink>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Updated At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in adminProduct.list">
            <th>{{ product.name }}</th>
            <td>
              <img :src="product.image" class="w-12">
            </td>
            <td>{{ product.price }}</td>
            <td>{{ product.remainQuantity }} / {{ product.quantity }}</td>
            <td>
              <div class="badge badge-success gap-2"> {{ product.status }}</div>
            </td>
            <td>{{ product.updatedAt }}</td>
            <td>
              <div class="flex gap-2">
                <div class="btn btn-ghost">
                  <Edit></Edit>
                </div>
                <div class="btn btn-ghost">
                  <Trash></Trash>
                </div>
              </div>
            </td>

          </tr>

        </tbody>
      </table>
    </div>
  </AdminLayout>
</template>