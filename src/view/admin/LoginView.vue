<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
        <div class="flex h-screen items-center">
                <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8">
                        <div class="flex flex-col  items-center">
                                <h1 class="text-3xl font-bold">LOGIN</h1>
                                <label class="form-control w-full">
                                        <div class="label">
                                                <span class="label-text">Email</span>
                                        </div>
                                        <input type="text" placeholder="Your Email"
                                                class="input input-bordered w-full rounded-full" />
                                </label>
                                <label class="form-control w-full">
                                        <div class="label">
                                                <span class="label-text">Password</span>
                                        </div>
                                        <input type="password" placeholder="Your Password"
                                                class="input input-bordered w-full rounded-full" />
                                </label>
                                <RouterLink :to="{ name: 'admin-dashboard' }"
                                        class="btn btn-neutral my-8 w-full rounded-full font-bold">
                                        LOGIN
                                </RouterLink>
                        </div>
                </div>
        </div>
</template>