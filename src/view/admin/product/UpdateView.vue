<script setup>
import AdminLayout from '@/layout/AdminLayout.vue'

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
</script>

<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-2xl">ADD</div>
            <div class="divider"></div>
            <div class="grid gap-4 grid-cols-2">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label ">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </label>
            </div>
            <div class="divider"></div>
            <div>
                <div class="grid grid-cols-2 gap-4">
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text">Status</span>
                        </div>
                        <select class="select select-bordered">
                            <option disabled selected>Choose status</option>
                            <option value="open">Open</option>
                            <option value="close">Close</option>
                        </select>
                    </label>
                </div>
                <div class="flex justify-end mt-4">
                    <div>
                        <button class="btn btn-ghost">BACK</button>
                        <button class="btn btn-neutral">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>