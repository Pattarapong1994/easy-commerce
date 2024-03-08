<script setup>
import UserLayout from '@/layout/UserLayout.vue'
import Product from '@/components/Product.vue'
import {useRouter} from 'vue-router'

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()


const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({name: 'cart'})
}
</script>


<template>
    <UserLayout>
        <div class="hero h-96 bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello, Welcome to Meow shop</h1>
                    <p class="py-6">One day, cats will rule the world. But not today.</p>
                </div>
            </div>
        </div>
         
        <Product 
        :products="productStore.list"
        :addToCart="addToCart">            
        </Product>
    </UserLayout>
</template>
