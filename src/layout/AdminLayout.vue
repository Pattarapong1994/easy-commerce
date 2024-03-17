<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'


const menus = [{
    name: 'Dashboard',
    routename: 'admin-dashboard'
},
{
    name: 'User',
    routename: 'admin-user-list'
},
{
    name: 'Product',
    routename: 'admin-product-list'
},
{
    name: 'Order',
    routename: 'admin-order-list'
},
{
    name: 'Logout',
    routename: 'admin-login'
},
]

const route = useRoute()
const activeMenu = ref('')

onMounted(() => {
    activeMenu.value = route.name
})
</script>

<template>
    <div class="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content mx-4">
            <slot></slot>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li> <a class="text-3xl font-bold">Backoffice</a> </li>
                <li v-for="menu in menus">
                    <RouterLink :to="{ name: menu.routename }" 
                    :class="menu.routename === activeMenu ? 'active':''"> 
                    {{menu.name }} </RouterLink>
                </li>
            </ul>
        </div>
    </div>


    <footer>Footer</footer>
</template>