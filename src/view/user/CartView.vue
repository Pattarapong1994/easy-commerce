<script setup>
import UserLayout from '@/layout/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import { useCartStore } from '@/stores/user/cart'
import { RouterLink } from 'vue-router'


const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}
</script>


<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
        <div class="flex ">
            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cartStore.items.length === 0">
                    Cart is empty
                </div>
                <div v-else v-for=" (item, index) in cartStore.items" class="flex bg-base-100 m-6 py-4 rounded-lg">
                    <div class="flex-1">
                        <img class="w-full p-8" :src="item.imageUrl">
                    </div>
                    <div class="flex-1 ">
                        <div class="flex relative flex-col justify-between h-full">
                            <div class="grid grid-cols-2">
                                <div>
                                    <div><b> {{ item.name }}</b></div>
                                    <div> {{ item.about }}</div>
                                    <div>{{ item.price }} B</div>
                                </div>
                                <select v-model="item.quantity" @change="changeQuantity($event, index)"
                                    class="select select-bordered w-1/2 rounded-full">
                                    <option v-for=" quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
                                </select>
                                
                            </div>
                            <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0 mx-4">
                                <Close></Close>
                            </div>
                            
                            <div><b>Instock</b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto w-32 bg-base-300 p-4">
                <div class="text-xl font-bold">Order summary</div>
                <div class="my-4 divide-y divide-zinc-500 ">
                    <div class="flex justify-between py-2">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ค่าจัดส่ง</div>
                        <div>0</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-center">
                        <RouterLink :to="{ name: 'checkout' }" class="btn btn-neutral w-3/4 mt-4 rounded-full">ชำระเงิน
                        </RouterLink>

                    </div>
                </div>
            </div>
        </div>
    </UserLayout>
</template>
@/stores/user/cart