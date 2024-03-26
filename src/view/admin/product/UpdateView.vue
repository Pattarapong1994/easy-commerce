<script setup>
import { useAdminProductStore } from '@/stores/admin/product'
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import AdminLayout from '@/layout/AdminLayout.vue'

const route = useRoute()
const router = useRouter()
const adminProductStore = useAdminProductStore()

const productIndex = ref(-1)
const mode = ref('ADD')

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Image',
        field: 'image'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'About',
        field: 'about'
    }
]

const productData = reactive({
    name: '',
    image: '',
    price: 0,
    quantity: 0,
    about: '',
    status: ''
})

const updateProduct = () => {
    if (mode.value == 'EDIT') {
        adminProductStore.updateProduct(productIndex.value, productData)
    } else {
        adminProductStore.addProduct(productData)
    }
    router.push({ name: 'admin-product-list' })
}

onMounted(() => {
    if (route.params.id) {
        productIndex.value = parseInt(route.params.id)
        mode.value = 'EDIT'
        const selectedProduct = adminProductStore.getProduct(productIndex.value)

        productData.name = selectedProduct.name
        productData.image = selectedProduct.image
        productData.price = selectedProduct.price
        productData.quantity = selectedProduct.quantity
        productData.about = selectedProduct.about
        productData.status = selectedProduct.status

    }
})

</script>

<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-2xl font-bold">{{ mode }}</div>
            <div class="divider"></div>
            <div class="grid gap-4 grid-cols-2">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label ">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input type="text" class="input input-bordered w-full" v-model="productData[form.field]" />
                </label>
            </div>
            <div class="divider"></div>
            <div>
                <div class="grid grid-cols-2 gap-4">
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text">Status</span>
                        </div>
                        <select class="select select-bordered" v-model="productData.status">
                            <option disabled selected>Choose status</option>
                            <option value="Open">Open</option>
                            <option value="Close">Close</option>
                        </select>
                    </label>
                </div>
                <div class="flex justify-end mt-4">
                    <div>
                        <RouterLink :to="{ name: 'admin-product-list' }" class="btn btn-ghost">BACK</RouterLink>
                        <button class="btn btn-neutral ml-2" @click="updateProduct()"> {{ mode }}</button>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>