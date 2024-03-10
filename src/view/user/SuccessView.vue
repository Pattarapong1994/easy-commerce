<script setup>
import { ref, onMounted } from 'vue'
import UserLayout from '@/layout/UserLayout.vue'
import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
})

</script>


<template>
    <UserLayout>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
            <div class="text-2xl font-bold">Your oders is Successful !</div>
            <div> Hi, {{ orderData.name }}</div>
            <div> คุณลูกค้ารอรับสินค้าได้เลย</div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-2">
                <div>
                    <div class="font-bold">Order Date</div>
                    <div>{{ orderData.createdDate }}</div>
                </div>
                <div>
                    <div class="font-bold">Order Number</div>
                    <div>{{ orderData.orderNumber }}</div>
                </div>

                <div>
                    <div class="font-bold">Payment Method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>

            </div>
            <div class="divider"></div>

            <div>
                <div v-for=" product in orderData.products " class="grid grid-cols-4 gap-2 mb-4 items-center">
                    <div>
                        <img class="w-full" :src="product.imageUrl">
                    </div>
                    <div>
                        <div> <b>{{ product.name }}</b></div>
                    </div>
                    <div>
                        <div> จำนวน: {{ product.quantity }}</div>
                    </div>
                    <div>
                        <div> ราคารวม: {{ product.price * product.quantity }} B</div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>

            <div class="flex justify-between">
                <div><b>ราคาสินค้าทั้งหมด</b></div>
                <div> {{ orderData.totalPrice }} B</div>
            </div>
            <div class="flex justify-between mt-4">
                <div><b>ค่าส่ง</b></div>
                <div> 0 B</div>
            </div>
            <div class=" divider"></div>
            <div class="flex justify-between">
                <div><b>ราคาทั้งสิ้น</b></div>
                <div><b>{{ orderData.totalPrice }} B</b> </div>
            </div>
            <div class="divider"></div>
            <div>ขอบคุณลูกค้าที่มาอุดหนุนสินค้า</div>

        </div>
    </UserLayout>
</template>
